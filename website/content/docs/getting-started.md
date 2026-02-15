---
title: "Getting Started"
date: "2026-02-14"
category: "Getting Started"
excerpt: "Install Crawlio, paste a URL, and download your first website."
order: 1
---

## Install Crawlio

Download Crawlio from the [download page](/download) and drag it to your Applications folder. Crawlio requires macOS 14 (Sonoma) or later.

Launch the app. You'll see an empty project window with a URL input field at the top.

## Your first download

1. **Paste a URL** — Type or paste any website URL into the input field (e.g., `https://example.com`)
2. **Hit Start** — Click the download button or press `Cmd+Return`
3. **Watch it work** — The waterfall view shows every file being downloaded in real-time
4. **Browse offline** — When the crawl completes, open the downloaded folder and browse the site locally

Crawlio rewrites all links so the site works offline — stylesheets, images, fonts, and internal links all point to local files.

## Choose a destination

By default, Crawlio saves downloads to `~/Downloads/Crawlio/`. You can change the destination folder in Settings or per-project in the project settings panel.

## What gets downloaded

Crawlio follows links and downloads:

- **HTML pages** — Every page reachable from your starting URL
- **CSS stylesheets** — Including `@import` references
- **Images** — JPG, PNG, GIF, SVG, WebP, and more
- **Fonts** — WOFF, WOFF2, TTF, OTF
- **JavaScript** — Scripts referenced in HTML
- **PDFs** — Linked documents
- **Other assets** — Favicons, manifests, robots.txt

## Crawl settings

Open **Settings** (`Cmd+,`) to configure:

- **Max depth** — How many links deep to follow (default: unlimited)
- **Max pages** — Total page limit (default: 1000)
- **Concurrent downloads** — Parallel connections (default: 4)
- **Crawl delay** — Pause between requests to be polite (default: 0.5s)
- **Respect robots.txt** — Honor site crawl rules (default: on)
- **Scope** — Stay on domain, allow subdomains, or follow external links

## Export formats

When a crawl completes, export your archive:

- **Folder** — Raw files with rewritten links (default)
- **ZIP** — Compressed archive
- **WARC** — ISO 28500 standard, compatible with the Wayback Machine
- **Single File** — Everything in one HTML file

## Next steps

- Learn about [MCP integration](/docs/mcp-overview) to control Crawlio with AI
- See the full [MCP Tools Reference](/docs/mcp-tools) for all 10 tools
- Check the [HTTP API](/docs/http-api) for programmatic control
