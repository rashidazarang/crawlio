---
title: "MCP Overview"
date: "2026-02-14"
category: "MCP Integration"
excerpt: "How Crawlio exposes 10 tools through the Model Context Protocol for AI-powered website downloading."
order: 2
---

## What is MCP?

Model Context Protocol (MCP) is an open standard that lets AI tools use applications directly. Instead of copying data between apps and chat windows, the AI calls tools in the app — like calling a function.

Crawlio implements an MCP server that exposes 10 tools. Any MCP-compatible AI client — Claude Code, ChatGPT Desktop, Claude Desktop, Cursor, and others — can use these tools to start downloads, monitor progress, and read results.

## Supported clients

Crawlio works with any MCP-compatible client:

- **Claude Code** — Full support via stdio transport
- **ChatGPT Desktop** — Full support via stdio transport
- **Claude Desktop** — Full support via stdio transport
- **Cursor** — Full support via stdio transport
- **Any MCP client** — Standard protocol, standard transport

Same 10 tools. Same experience. Your choice of AI.

## How it works

Crawlio's MCP integration has three layers:

### Layer 1: File-based monitoring

Crawlio writes its state to disk every 500ms while crawling:

- **`state.json`** — Full snapshot: engine state, progress counters, every download item
- **`crawl.jsonl`** — Structured log stream: one JSON object per line, filterable by category and level

Your AI reads these files directly. No API call needed — fast, reliable, works even if the control server isn't running.

### Layer 2: HTTP Control API

Crawlio runs a local HTTP server on a random port (localhost only). Five endpoints handle crawl control:

- `GET /status` — Current state and progress
- `POST /start` — Begin a new crawl
- `POST /stop` — Stop the crawl
- `POST /pause` — Pause the crawl
- `POST /resume` — Resume from pause

All JSON. All localhost. No authentication required.

### Layer 3: MCP Bridge

The MCP server wraps both layers into 10 tools. Read tools query the state files. Control tools call the HTTP API. The AI calls `start_crawl` or `get_crawl_status` without knowing which layer handles it.

The transport is **stdio** — the MCP server runs as a subprocess communicating over stdin/stdout.

## Zero configuration

If Crawlio is running, your AI finds it automatically. The MCP server discovers the running app through a local port file at `~/Library/Logs/Crawlio/control.port`. No API keys, no setup, no config files.

## Example workflow

```
You:      "Download the Tailwind docs site"
Your AI:   Calls start_crawl with url "https://tailwindcss.com/docs"
           Polls get_crawl_status until complete
           "Done — 487 pages downloaded"

You:      "How do they handle responsive design?"
Your AI:   Reads the downloaded HTML files
           Analyzes the responsive documentation
           Answers from actual source code
```

## Next steps

- See all 10 tools in the [MCP Tools Reference](/docs/mcp-tools)
- Learn about the [HTTP API](/docs/http-api) for direct programmatic access
- Check [File Locations](/docs/file-locations) for state file paths
