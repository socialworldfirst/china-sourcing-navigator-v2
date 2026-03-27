#!/usr/bin/env python3
"""
Post-build script: inline CSS into HTML files and strip JS scripts.
Makes HTML files work standalone from file:// protocol.
"""
import os
import re
import glob

OUT_DIR = "out"

# 1. Read all CSS files and combine
css_content = ""
for css_file in glob.glob(os.path.join(OUT_DIR, "_next/static/**/*.css"), recursive=True):
    with open(css_file, "r") as f:
        css_content += f.read() + "\n"

if not css_content:
    print("WARNING: No CSS files found!")
    exit(1)

print(f"Found {len(css_content)} chars of CSS")

# 2. Process all HTML files
html_files = glob.glob(os.path.join(OUT_DIR, "**/*.html"), recursive=True)
print(f"Processing {len(html_files)} HTML files...")

for html_file in html_files:
    with open(html_file, "r") as f:
        html = f.read()

    # Remove all <script> tags (module scripts won't work from file://)
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script[^>]*/>', '', html)

    # Remove existing <link rel="stylesheet"> tags
    html = re.sub(r'<link[^>]*rel="stylesheet"[^>]*/?\s*>', '', html)
    html = re.sub(r'<link[^>]*stylesheet[^>]*/?\s*>', '', html)

    # Inject CSS inline before </head>
    style_tag = f"<style>{css_content}</style>"
    html = html.replace("</head>", f"{style_tag}\n</head>")

    # Write back
    with open(html_file, "w") as f:
        f.write(html)

    rel_path = os.path.relpath(html_file, OUT_DIR)
    print(f"  Processed: {rel_path}")

print("Done! All HTML files now have inlined CSS and no JS dependencies.")
