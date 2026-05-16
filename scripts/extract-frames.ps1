# Estrae frame WebP da un video MP4 usando FFmpeg.
# Output ottimizzato per scroll-scrub su mobile.
#
# Prerequisiti: FFmpeg installato. Se manca:
#   winget install Gyan.FFmpeg
#
# Uso:
#   powershell -ExecutionPolicy Bypass -File scripts/extract-frames.ps1
#   powershell -ExecutionPolicy Bypass -File scripts/extract-frames.ps1 -Input "video/hero.mp4" -Fps 30 -Quality 72

param(
  [string]$InputFile = "video/intro.mp4",
  [string]$OutputDir = "public/frames",
  [int]$Fps = 30,
  [int]$Quality = 72,        # WebP 0-100, 72 = buon balance
  [int]$MaxHeight = 1080     # scale max height for mobile
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
  Write-Error "FFmpeg non installato. Esegui: winget install Gyan.FFmpeg"
  exit 1
}

if (-not (Test-Path $InputFile)) {
  Write-Error "Input file non trovato: $InputFile"
  exit 1
}

if (Test-Path $OutputDir) {
  Get-ChildItem "$OutputDir/*.webp" -ErrorAction SilentlyContinue | Remove-Item -Force
} else {
  New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
}

Write-Host "FFmpeg: estraggo frame a ${Fps}fps, scale max-height ${MaxHeight}px, WebP q${Quality}..."
ffmpeg -i $InputFile `
  -vf "fps=${Fps},scale=-2:${MaxHeight}" `
  -vcodec libwebp -quality $Quality -lossless 0 -compression_level 4 `
  "${OutputDir}/frame_%04d.webp" -y

if ($LASTEXITCODE -ne 0) {
  Write-Error "FFmpeg failed"
  exit 1
}

$frames = Get-ChildItem "$OutputDir/*.webp"
$count = $frames.Count
$totalMB = [math]::Round(($frames | Measure-Object -Property Length -Sum).Sum / 1MB, 1)

Write-Host ""
Write-Host "✓ Estratti $count frame, ${totalMB}MB totali"
Write-Host "  Aggiorna TOTAL_FRAMES nel componente HeroScrollScrub a: $count"
