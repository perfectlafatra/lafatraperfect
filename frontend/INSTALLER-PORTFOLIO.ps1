# Installation non destructive des correctifs du Portfolio Frontend.
# À exécuter depuis le dossier dans lequel ce ZIP a été extrait.
param(
    [string]$FrontendRoot = 'C:\Portfolio\lafatraperfect\frontend'
)

$ErrorActionPreference = 'Stop'
$sourceRoot = $PSScriptRoot
$sourceSrc = Join-Path $sourceRoot 'src'
$destinationSrc = Join-Path $FrontendRoot 'src'

if (-not (Test-Path -LiteralPath $sourceSrc -PathType Container)) {
    throw "Fichiers de l'archive manquants : $sourceSrc"
}
if (-not (Test-Path -LiteralPath $destinationSrc -PathType Container)) {
    throw "Ce n'est pas un dossier Frontend valide : $destinationSrc"
}
if (-not (Test-Path -LiteralPath (Join-Path $FrontendRoot 'package.json') -PathType Leaf)) {
    throw "package.json absent : impossible de confirmer la racine Frontend."
}
if ([IO.Path]::GetFullPath($sourceRoot).TrimEnd('\') -eq [IO.Path]::GetFullPath($FrontendRoot).TrimEnd('\')) {
    throw 'Extraire le ZIP dans un dossier temporaire DIFFERENT du Frontend avant de lancer cet installateur.'
}

$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backupRoot = Join-Path $sourceRoot "_sauvegardes_portfolio_v3\$stamp"
$installed = 0
$unchanged = 0
$backedUp = 0

foreach ($relativeRoot in @('src', 'tools')) {
    $srcFolder = Join-Path $sourceRoot $relativeRoot
    if (-not (Test-Path -LiteralPath $srcFolder -PathType Container)) { continue }
    $sourceFiles = @(Get-ChildItem -LiteralPath $srcFolder -Recurse -File)
    foreach ($file in $sourceFiles) {
        $relative = $file.FullName.Substring($sourceRoot.Length).TrimStart('\', '/')
        $target = Join-Path $FrontendRoot $relative
        $targetDir = Split-Path $target -Parent
        if (-not (Test-Path -LiteralPath $targetDir)) {
            New-Item -ItemType Directory -Force -Path $targetDir | Out-Null
        }
        if (Test-Path -LiteralPath $target -PathType Leaf) {
            $oldHash = (Get-FileHash -LiteralPath $target -Algorithm SHA256).Hash
            $newHash = (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash
            if ($oldHash -eq $newHash) {
                $unchanged += 1
                continue
            }
            $backupPath = Join-Path $backupRoot $relative
            $backupDir = Split-Path $backupPath -Parent
            if (-not (Test-Path -LiteralPath $backupDir)) {
                New-Item -ItemType Directory -Force -Path $backupDir | Out-Null
            }
            Copy-Item -LiteralPath $target -Destination $backupPath -Force
            $backedUp += 1
        }
        Copy-Item -LiteralPath $file.FullName -Destination $target -Force
        Write-Host "Installe : $relative"
        $installed += 1
    }
}

Write-Host "Installation terminée : $installed fichiers installés, $unchanged identiques, $backedUp sauvegardés."
if ($backedUp -gt 0) { Write-Host "Sauvegardes : $backupRoot" }
Write-Host 'Suivant : cd FrontendRoot ; supprimer dist ; npm run build.'
Write-Host "Attention : la sequence dense de vues intermediaires n'est pas fournie dans ce ZIP."
