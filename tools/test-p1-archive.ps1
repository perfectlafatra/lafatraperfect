[CmdletBinding()]
param(
    [string]$RepositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
)

$ErrorActionPreference = 'Stop'
$requiredPaths = @('backend', 'admin', 'qa', 'docker-compose.yml', 'docker-compose.prod.yml', 'render.yaml')
$missingPaths = @($requiredPaths | Where-Object { -not (Test-Path -LiteralPath (Join-Path $RepositoryRoot $_)) })

# The static P0 delivery deliberately removes these sources after preserving them.
# Accept either the pre-archive state or a verified external archive-only state.
if ($missingPaths.Count -gt 0) {
    $parent = Split-Path -Parent $RepositoryRoot
    $repoName = Split-Path -Leaf $RepositoryRoot
    $archives = @(Get-ChildItem -LiteralPath $parent -Force -Directory -ErrorAction SilentlyContinue |
        Where-Object { $_.Name -like "$repoName-p1-archive-*" })
    if ($archives.Count -eq 0) {
        throw "P1 sources are absent and no external archive was found: $($missingPaths -join ', ')"
    }
    foreach ($archive in $archives) {
        if (-not (Test-Path -LiteralPath (Join-Path $archive.FullName 'manifest.sha256'))) {
            throw "Archive manifest missing: $($archive.FullName)"
        }
    }
}

$archiveScript = Join-Path $RepositoryRoot 'tools/archive-p1.ps1'
if (-not (Test-Path -LiteralPath $archiveScript)) {
    throw 'archive-p1.ps1 must exist before an archive can be created.'
}

$publicArchiveCandidates = Get-ChildItem -LiteralPath $RepositoryRoot -Force -Directory |
    Where-Object { $_.Name -match 'archive|backup' }
foreach ($candidate in $publicArchiveCandidates) {
    if (Get-ChildItem -LiteralPath $candidate.FullName -Force -Recurse -File -ErrorAction SilentlyContinue |
        Where-Object { $_.Name -in @('.env', '.env.local') -or $_.Extension -in @('.log', '.dump', '.backup') }) {
        throw "Potentially private file found in archive candidate: $($candidate.FullName)"
    }
}

if ($missingPaths.Count -eq 0) {
    Write-Output 'P1 archive preflight PASS: source paths present and no private archive candidate detected.'
} else {
    Write-Output "P1 archive preflight PASS: static cleanup verified; $($missingPaths.Count) P1 paths preserved in an external archive."
}
