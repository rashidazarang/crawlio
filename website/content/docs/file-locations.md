---
title: "File Locations"
date: "2026-02-14"
category: "Reference"
excerpt: "Where Crawlio stores state files, logs, and control information on your Mac."
order: 5
---

## Overview

Crawlio writes several files to disk that MCP tools and external scripts can read. All files are in standard macOS locations.

## State and control files

### state.json

**Path:** `~/Library/Logs/Crawlio/state.json`

Full snapshot of the current crawl. Updated every 500ms while crawling.

**Contents:**

```json
{
  "engineState": "crawling",
  "url": "https://example.com",
  "progress": {
    "discovered": 150,
    "downloaded": 85,
    "failed": 2,
    "queued": 63,
    "localized": 80
  },
  "items": [
    {
      "url": "https://example.com/index.html",
      "status": "completed",
      "size": 15234,
      "contentType": "text/html",
      "localPath": "/Users/you/Downloads/Crawlio/example.com/index.html",
      "startTime": "2026-02-14T10:30:00Z",
      "endTime": "2026-02-14T10:30:01Z"
    }
  ]
}
```

**Fields:**

| Field | Description |
|-------|-------------|
| `engineState` | Current state: `idle`, `crawling`, `paused`, `completed`, `failed` |
| `url` | The URL being crawled |
| `progress` | Aggregate counters |
| `items` | Array of every individual download item |

---

### crawl.jsonl

**Path:** `~/Library/Logs/Crawlio/crawl.jsonl`

Structured log stream. One JSON object per line. Written continuously during crawl.

**Format:**

```json
{"timestamp":"2026-02-14T10:30:00.123Z","category":"engine","level":"info","message":"Crawl started for https://example.com"}
{"timestamp":"2026-02-14T10:30:01.456Z","category":"download","level":"info","message":"Downloaded https://example.com/index.html (15.2 KB)"}
{"timestamp":"2026-02-14T10:30:02.789Z","category":"parser","level":"info","message":"Found 12 links in index.html"}
```

**Categories:** `engine`, `download`, `parser`, `localizer`, `network`

**Levels:** `debug`, `info`, `notice`, `warning`, `error`, `fault`

---

### control.port

**Path:** `~/Library/Logs/Crawlio/control.port`

Single integer — the HTTP control server port number. Written on app launch. Deleted on quit.

```
52847
```

Read this file to discover the control API:

```bash
PORT=$(cat ~/Library/Logs/Crawlio/control.port)
curl http://localhost:$PORT/status
```

## Download locations

### Default

Downloaded files are saved to:

```
~/Downloads/Crawlio/{domain}/
```

For example, downloading `https://example.com` creates:

```
~/Downloads/Crawlio/example.com/
  index.html
  about/
    index.html
  css/
    style.css
  images/
    logo.png
```

### Custom destination

You can set a custom destination per-crawl through:
- The project settings panel in the GUI
- The `destination` parameter in `start_crawl` (MCP)
- The `destinationPath` field in `POST /start` (HTTP API)

## Application support

Crawlio stores app preferences at:

```
~/Library/Preferences/com.crawlio.app.plist
```

Project files (saved crawl configurations) are stored at:

```
~/Library/Application Support/Crawlio/Projects/
```
