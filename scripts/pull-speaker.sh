#!/usr/bin/env bash
# Pull a speaker's bio and headshot out of Google Drive into the repo.
#
#   scripts/pull-speaker.sh "Shona Hirons" <bio-doc-url> <headshot-url>
#
# Bio  -> docs/speakers/<slug>.md            (docx/Google Doc converted to markdown)
# Shot -> docs/speakers/headshots/<slug>.jpg (master, long edge 1200)
#      -> static/speakers/<slug>-400.jpg     (card, 1x)
#      -> static/speakers/<slug>-800.jpg     (card, 2x)
#
# Either URL may be omitted with "-" if that speaker hasn't sent it yet.
set -euo pipefail

name=${1:?speaker name (or "-" to take it from the Drive file name)}
bio_url=${2:--}
shot_url=${3:--}

id_of() { echo "$1" | sed -E 's#.*/(document|spreadsheets|file)/d/([^/?#]+).*#\2#'; }
drive_name() { mm drive get "$(id_of "$1")" --json | sed -n 's/.*"name": "\([^"]*\)".*/\1/p'; }

# "-" as the name: take it from whichever Drive file we were given, minus a trailing "Bio"
if [ "$name" = "-" ]; then
  for u in "$bio_url" "$shot_url"; do
    [ "$u" != "-" ] || continue
    name=$(drive_name "$u" | sed -E 's/[[:space:]]+(Bio|Biography|Headshot|headshot|bio)$//')
    break
  done
fi

slug=$(echo "$name" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-//; s/-$//')
root=$(cd "$(dirname "$0")/.." && pwd)
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

if [ "$bio_url" != "-" ]; then
  id=$(id_of "$bio_url")
  kind=$(mm drive get "$id" --json | sed -n 's/.*"mimeType": "\([^"]*\)".*/\1/p')
  if [[ "$kind" == *google-apps.document* ]]; then
    # A native Google Doc: the gateway's txt/html export currently returns 0 bytes,
    # so go via PDF, which does come back populated.
    mm drive read "$id" --as txt --out "$tmp/bio.txt" >/dev/null || true
    if [ -s "$tmp/bio.txt" ]; then
      cp "$tmp/bio.txt" "$root/docs/speakers/$slug.md"
    else
      mm drive read "$id" --as pdf --out "$tmp/bio.pdf" >/dev/null
      mm convert "$tmp/bio.pdf" > "$root/docs/speakers/$slug.md"
    fi
  else
    mm drive download "$id" --out "$tmp/bio.docx" >/dev/null
    mm convert "$tmp/bio.docx" > "$root/docs/speakers/$slug.md"
    # a .docx bio usually carries the headshot inside it
    unzip -o -q "$tmp/bio.docx" -d "$tmp/x" 2>/dev/null || true
    ls "$tmp/x/word/media/" 2>/dev/null | sed "s#^#  embedded image: #" || true
  fi
  echo "bio      -> docs/speakers/$slug.md  ($name)"
fi

if [ "$shot_url" != "-" ]; then
  id=$(id_of "$shot_url")
  mkdir -p "$root/docs/speakers/headshots" "$root/static/speakers"
  mm drive download "$id" --out "$tmp/shot" >/dev/null
  master="$root/docs/speakers/headshots/$slug.jpg"
  sips -s format jpeg -s formatOptions 82 -Z 1200 "$tmp/shot" --out "$master" >/dev/null
  sips -s format jpeg -s formatOptions 80 -Z 400 "$master" --out "$root/static/speakers/$slug-400.jpg" >/dev/null
  sips -s format jpeg -s formatOptions 78 -Z 800 "$master" --out "$root/static/speakers/$slug-800.jpg" >/dev/null
  echo "headshot -> static/speakers/$slug-{400,800}.jpg  (master in docs/speakers/headshots/)"
fi
