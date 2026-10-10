$files = @{
  "contact.html" = @'
[CONTACT HTML YAHAN]
'@
  "privacy-policy.html" = @'
[PRIVACY HTML YAHAN]
'@
  "terms.html" = @'
[TERMS HTML YAHAN]
'@
}

foreach ($name in $files.Keys) {
  $files[$name] | Out-File -FilePath $name -Encoding UTF8
  Write-Host "Created: $name"
}