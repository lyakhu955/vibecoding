# Comprime un modello GLB con draco compression + ottimizzazione completa.
# Riduce tipicamente 3-5x la dimensione del file. SOVRASCRIVE l'originale.
#
# Pipeline: dedup → instance → palette → flatten → join → weld → simplify →
#           resample → prune → sparse → textureCompress → draco
#
# Uso:
#   powershell -ExecutionPolicy Bypass -File scripts/compress-glb.ps1 -Input "public/models/X.glb"
#
# Se vuoi MANTENERE l'originale:
#   powershell -ExecutionPolicy Bypass -File scripts/compress-glb.ps1 -Input "public/models/X.glb" -Output "public/models/X.draco.glb"

param(
  [Parameter(Mandatory=$true)]
  [string]$InputFile,
  [string]$Output = $null,
  [switch]$DracoOnly = $false   # se true, solo draco (più veloce, meno riduzione)
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path $InputFile)) {
  Write-Error "Input non trovato: $InputFile"
  exit 1
}

if (-not $Output) { $Output = $InputFile }

$beforeMB = [math]::Round((Get-Item $InputFile).Length / 1MB, 2)
Write-Host "Input: ${beforeMB}MB"

if ($DracoOnly) {
  Write-Host "Modalità draco-only..."
  npx @gltf-transform/cli draco $InputFile $Output
} else {
  Write-Host "Pipeline completa optimize..."
  npx @gltf-transform/cli optimize $InputFile $Output --compress draco
}

if ($LASTEXITCODE -ne 0) {
  Write-Error "gltf-transform failed"
  exit 1
}

$afterMB = [math]::Round((Get-Item $Output).Length / 1MB, 2)
$ratio = [math]::Round((1 - $afterMB / $beforeMB) * 100, 1)
Write-Host ""
Write-Host "✓ Output: ${afterMB}MB (-${ratio}%)"
Write-Host ""
Write-Host "IMPORTANTE: il modello ora richiede il draco decoder."
Write-Host "Aggiungi prima del primo useGLTF:"
Write-Host '  useGLTF.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");'
