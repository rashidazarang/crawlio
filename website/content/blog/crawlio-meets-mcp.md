---
title: "Crawlio Meets MCP: How AI Controls Your Downloads"
date: "2026-02-10"
category: "Technical"
excerpt: "Crawlio now speaks MCP — the open protocol that lets Claude, ChatGPT, and any AI tool start downloads, monitor progress, and read results through conversation."
---

## What if your AI could download websites?

You're in Claude Code, deep in a refactoring session. You need to reference how Stripe handles their docs sidebar. Normally, you'd open a browser, navigate to the site, copy-paste the relevant HTML, and bring it back to your AI.

With Crawlio and MCP, you just say: "Download the Stripe docs site." Claude starts the crawl, monitors progress, and tells you when the files are ready. Then it reads them directly and answers your questions from the actual source.

No browser tab. No copy-pasting. One conversation.

## What is MCP?

Model Context Protocol is an open standard that lets AI tools use applications directly. Instead of copying data between apps and chat windows, the AI calls tools in the app — just like calling a function.

Claude Code, ChatGPT Desktop, Claude Desktop, Cursor, and a growing list of clients all support MCP. Any of them can control Crawlio.

## 10 tools, full control

Crawlio exposes 10 MCP tools — four for controlling downloads and six for reading results:

**Control:**
- `start_crawl` — Start downloading a URL
- `stop_crawl` — Stop the current download
- `pause_crawl` — Pause (in-flight downloads finish first)
- `resume_crawl` — Resume a paused download

**Read:**
- `get_crawl_status` — Engine state and progress counters
- `get_crawl_logs` — Structured, filterable log stream
- `get_errors` — Only error entries
- `get_downloads` — All items with status, size, and content type
- `get_failed_urls` — Just the failures with error details
- `get_site_tree` — ASCII directory tree of downloaded files

Your AI sees these as native capabilities, like reading a file or running a shell command.

## The real power: chaining

The tools alone are useful. The real power is chaining them with everything else your AI can do.

**Download and analyze:**
Tell your AI to download a competitor's marketing site. Ask it to extract their pricing structure, messaging patterns, or tech stack — from the actual files, not guesses.

**Download and build:**
See a design you like? Tell Claude to download it, then ask it to rebuild the layout in React. It reads the real CSS values — the actual spacing, the true typography.

**Download and preserve:**
Tell your AI to download documentation before it changes. It monitors the crawl, reports any failures, and confirms when everything's saved to disk.

## How it works under the hood

Three layers make this reliable:

1. **File-based monitoring** — Crawlio writes state to disk every 500ms. Your AI reads `state.json` for real-time progress without any API calls.

2. **HTTP Control API** — A local HTTP server on a random port handles start, stop, pause, and resume commands. Localhost only. No auth needed.

3. **MCP Bridge** — The MCP server wraps both layers into 10 tools. Read tools query the files. Control tools call the HTTP API. The AI doesn't know or care which layer it's using.

The transport is stdio — the MCP server runs as a subprocess. Standard protocol. Works with any MCP-compatible client.

## Zero configuration

If Crawlio is running, your AI finds it automatically. The MCP server discovers the running app through a local port file. No API keys, no setup, no config files.

## Try it

Open Claude Code or ChatGPT Desktop. Make sure Crawlio is running. Say "Download example.com" and watch the magic happen.
