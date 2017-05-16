@echo off

title Vue Demo II Build
color e
prompt $sBuilder$s$e$s

if errorlevel 1 goto one
if errorlevel 0 goto end

:one
echo Try again
goto end

:end