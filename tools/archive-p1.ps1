[CmdletBinding(SupportsShouldProcess)]
param(
    [string]$RepositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path,
    [string]$Destination
)

$ErrorActionPreference = 'Stop'
$RepositoryRoot = (Resolve-Path -LiteralPath $RepositoryRoot).Path
$repoName = Split-Path -Leaf $RepositoryRoot
if (-not $Destination) {
    $stamp = Get-Date -Format 'yyyy-MM-dd'
    $Destination = Join-Path (Split-Path -Parent $RepositoryRoot) "$repoName-p1-archive-$stamp"
}
$Destination = [System.IO.Path]::GetFullPath($Destination)

if ([string]::Equals($Destination.TrimEnd('\'), $RepositoryRoot.TrimEnd('\'), [StringComparison]::OrdinalIgnoreCase)) {
    throw 'Archive destination must be outside the repository root.'
}
if ($Destination.StartsWith($RepositoryRoot.TrimEnd('\') + '\', [StringComparison]::OrdinalIgnoreCase)) {
    throw 'Archive destination must be outside the repository root.'
}
if (-not $WhatIfPreference -and (Test-Path -LiteralPath $Destination) -and (Test-Path -LiteralPath (Join-Path $Destination 'manifest.sha256'))) {
    throw 'Archive destination already contains a manifest; choose a new explicit destination to avoid mixing snapshots.'
}

$sources = @(
    'backend',
    'admin',
    'qa',
    'docker-compose.yml',
    'docker-compose.prod.yml',
    'render.yaml',
    'Makefile'
)
$excludedNames = @('.env', '.env.local', '.env.production', '.env.development', 'node_modules', 'target', 'dist', 'coverage')
$excludedExtensions = @('.log', '.dump', '.backup', '.pem', '.key', '.p12')
$excludedDirectoryPattern = '\\(node_modules|target|dist|coverage|\.idea|\.git)(\\|$)'

Write-Output "Repository: $RepositoryRoot"
Write-Output "Destination: $Destination"
Write-Output 'Mode: copy-only; no source deletion or move will be performed.'

foreach ($relativeSource in $sources) {
    $sourcePath = Join-Path $RepositoryRoot $relativeSource
    if (-not (Test-Path -LiteralPath $sourcePath)) {
        throw "Archive source does not exist: $relativeSource"
    }
    Write-Output "  source: $relativeSource"
}

if ($WhatIfPreference -or $PSBoundParameters.ContainsKey('WhatIf')) {
    Write-Output 'WHATIF PASS: no files copied and no files removed.'
    return
}

if (-not (Test-Path -LiteralPath $Destination)) {
    New-Item -ItemType Directory -Path $Destination | Out-Null
}

foreach ($relativeSource in $sources) {
    $sourcePath = Join-Path $RepositoryRoot $relativeSource
    $targetPath = Join-Path $Destination $relativeSource
    $targetParent = Split-Path -Parent $targetPath
    if (-not (Test-Path -LiteralPath $targetParent)) {
        New-Item -ItemType Directory -Path $targetParent -Force | Out-Null
    }
    if ((Get-Item -LiteralPath $sourcePath).PSIsContainer) {
        New-Item -ItemType Directory -Path $targetPath -Force | Out-Null
        Get-ChildItem -LiteralPath $sourcePath -Force -Recurse -File |
            Where-Object { $_.Name -notin $excludedNames -and $_.Extension -notin $excludedExtensions -and $_.FullName -notmatch $excludedDirectoryPattern } |
            ForEach-Object {
                $relativeFile = $_.FullName.Substring($sourcePath.Length).TrimStart('\')
                $targetFile = Join-Path $targetPath $relativeFile
                $targetFileParent = Split-Path -Parent $targetFile
                if (-not (Test-Path -LiteralPath $targetFileParent)) {
                    New-Item -ItemType Directory -Path $targetFileParent -Force | Out-Null
                }
                Copy-Item -LiteralPath $_.FullName -Destination $targetFile -Force
            }
    } else {
        Copy-Item -LiteralPath $sourcePath -Destination $targetPath -Force
    }
}

$files = Get-ChildItem -LiteralPath $Destination -Force -Recurse -File |
    Where-Object { $_.Name -notin $excludedNames -and $_.Extension -notin $excludedExtensions -and $_.FullName -notmatch $excludedDirectoryPattern }
if ($files | Where-Object { $_.Name -in $excludedNames -or $_.Extension -in $excludedExtensions }) {
    throw 'Archive contains an excluded private or generated file.'
}

$manifestPath = Join-Path $Destination 'manifest.sha256'
$manifestLines = foreach ($file in $files | Sort-Object FullName) {
    $hash = (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
    $relative = $file.FullName.Substring($Destination.Length).TrimStart('\').Replace('\', '/')
    "$hash  $relative"
}
Set-Content -LiteralPath $manifestPath -Value $manifestLines -Encoding UTF8

$readme = @"
# Portfolio P1 archive

Created on $(Get-Date -Format 'o') from `$RepositoryRoot`.

This copy is preserved outside the public static portfolio. The archive is copy-only: the source tree was not deleted or modified. `manifest.sha256` contains SHA-256 values for every archived file. Environment files, logs, database dumps, generated dependencies and private key material are intentionally excluded.
"@
Set-Content -LiteralPath (Join-Path $Destination 'README.md') -Value $readme -Encoding UTF8

Write-Output "ARCHIVE PASS: $($files.Count) files copied; manifest: $manifestPath"
