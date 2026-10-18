#!/bin/sh
set -eu

script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
repo_dir=$(CDPATH= cd -- "$script_dir/.." && pwd)
page="$repo_dir/index.html"
output="$repo_dir/cv.pdf"

if [ ! -f "$page" ]; then
  printf 'Cannot find the CV page: %s\n' "$page" >&2
  exit 1
fi

if [ -n "${CHROME_BIN:-}" ]; then
  chrome=$CHROME_BIN
elif command -v google-chrome >/dev/null 2>&1; then
  chrome=$(command -v google-chrome)
elif command -v chromium >/dev/null 2>&1; then
  chrome=$(command -v chromium)
elif command -v chromium-browser >/dev/null 2>&1; then
  chrome=$(command -v chromium-browser)
elif [ -x "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" ]; then
  chrome="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
else
  printf 'Chrome or Chromium is required. Set CHROME_BIN to its executable path.\n' >&2
  exit 1
fi

if [ ! -x "$chrome" ]; then
  printf 'Browser executable is not executable: %s\n' "$chrome" >&2
  exit 1
fi

profile=$(mktemp -d "${TMPDIR:-/tmp}/cv-pdf-chrome.XXXXXX")
trap 'rm -rf "$profile"' EXIT HUP INT TERM

"$chrome" \
  --headless=new \
  --disable-gpu \
  --no-first-run \
  --no-default-browser-check \
  --user-data-dir="$profile" \
  --no-pdf-header-footer \
  --print-to-pdf="$output" \
  "file://$page"

printf 'Generated %s\n' "$output"
