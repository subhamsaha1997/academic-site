#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="$ROOT/site"

rm -rf "$OUT"
mkdir -p "$OUT"

# Create temporary expanded research HTML
TEMP_RESEARCH="$(mktemp)"

sed '/<!-- PUBLICATIONS CONTENT -->/{
    r '"$ROOT"'/content/publications.html
    d
}' "$ROOT/content/research.html" > "$TEMP_RESEARCH"

# Copy main HTML template
cp "$ROOT/index.html" "$OUT/index.html"

# Replace About content
replace_content() {
    local marker="$1"
    local file="$2"
    local temp_file
    temp_file="$(mktemp)"

    MARKER="$marker" CONTENT_FILE="$file" perl -0777 -pe '
        BEGIN {
            open my $fh, "<", $ENV{"CONTENT_FILE"} or die $!;
            local $/;
            $content = <$fh>;
            close $fh;
        }
        s/\Q$ENV{"MARKER"}\E/$content/g;
    ' "$OUT/index.html" > "$temp_file"

    mv "$temp_file" "$OUT/index.html"
}

replace_content "<!-- ABOUT CONTENT -->" "$ROOT/content/about.html"
replace_content "<!-- RESEARCH CONTENT -->" "$TEMP_RESEARCH"
replace_content "<!-- QUOTES CONTENT -->" "$ROOT/content/quotes.html"

rm -f "$TEMP_RESEARCH"

# Copy assets
cp "$ROOT/style.css" "$OUT/style.css"
cp "$ROOT/publications.js" "$OUT/publications.js"
cp "$ROOT/theme.js" "$OUT/theme.js"
cp "$ROOT/google38e3ebfc27d4fac7.html" "$OUT/google38e3ebfc27d4fac7.html"
cp "$ROOT/content/photos.html" "$OUT/photos.html"

if [[ -d "$ROOT/images" ]]; then
    cp -R "$ROOT/images" "$OUT/images"
fi
if [[ -d "$ROOT/files" ]]; then
    cp -R "$ROOT/files" "$OUT/files"
fi
if [[ -d "$ROOT/fonts" ]]; then
    cp -R "$ROOT/fonts" "$OUT/fonts"
fi

echo "Done. Your finished website is in site/"
