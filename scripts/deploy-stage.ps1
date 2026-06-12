# Export the web build and deploy to the Vercel staging alias.
# Vercel CLI refuses to upload folders named node_modules, so the Expo
# font/asset folder is renamed to assets/vendor and bundle paths patched.
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot\..

npx expo export --platform web

Set-Location dist
if (Test-Path assets\node_modules) {
    Move-Item assets\node_modules assets\vendor
    foreach ($bundle in Get-ChildItem _expo\static\js\web\*.js) {
        (Get-Content $bundle.FullName -Raw).Replace('/assets/node_modules/', '/assets/vendor/') |
            Set-Content $bundle.FullName -NoNewline
    }
}
Set-Content vercel.json '{"rewrites":[{"source":"/(.*)","destination":"/index.html"}]}'

$out = npx --yes vercel deploy . --prod --yes 2>&1
$url = ($out | Select-String -Pattern 'https://dist-[a-z0-9]+-outne\.vercel\.app' | Select-Object -First 1).Matches.Value
npx --yes vercel alias set $url outnortheast-stage.vercel.app
Write-Host "Staging updated: https://outnortheast-stage.vercel.app"
