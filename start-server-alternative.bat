@echo off
echo Starting local web server on port 8080...
echo.
echo Server will be available at: http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo.
cd /d "%~dp0"
python -m http.server 8080
pause

