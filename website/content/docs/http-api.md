---
title: "HTTP API"
date: "2026-02-14"
category: "Reference"
excerpt: "Direct HTTP endpoints for programmatic crawl control — localhost only, no auth required."
order: 4
---

## Overview

Crawlio runs a local HTTP server on a random port while the app is active. All endpoints are localhost-only and require no authentication. The port is written to a file at launch for automatic discovery.

## Discovering the port

The control server port is written to:

```
~/Library/Logs/Crawlio/control.port
```

This file contains a single integer — the port number. Read it to construct your base URL:

```bash
PORT=$(cat ~/Library/Logs/Crawlio/control.port)
curl http://localhost:$PORT/status
```

## Endpoints

### GET /status

Returns the current engine state and progress counters.

**Response:**
```json
{
  "state": "crawling",
  "url": "https://example.com",
  "progress": {
    "discovered": 150,
    "downloaded": 85,
    "failed": 2,
    "queued": 63,
    "localized": 80
  }
}
```

**States:** `idle`, `crawling`, `paused`, `completed`, `failed`

---

### POST /start

Start a new crawl.

**Request body:**
```json
{
  "url": "https://example.com",
  "destinationPath": "~/Downloads/Crawlio/example.com"
}
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `url` | string | Yes | URL to crawl |
| `destinationPath` | string | No | Where to save files |

**Response:**
```json
{
  "status": "started",
  "url": "https://example.com"
}
```

---

### POST /stop

Stop the current crawl. All in-flight requests are cancelled.

**Request body:** None required.

**Response:**
```json
{
  "status": "stopped"
}
```

---

### POST /pause

Pause the current crawl. In-flight downloads complete, but no new requests start.

**Request body:** None required.

**Response:**
```json
{
  "status": "paused"
}
```

---

### POST /resume

Resume a paused crawl.

**Request body:** None required.

**Response:**
```json
{
  "status": "resumed"
}
```

## Error handling

All endpoints return JSON. On error:

```json
{
  "error": "No active crawl to stop"
}
```

HTTP status codes:
- `200` — Success
- `400` — Bad request (missing URL, invalid parameters)
- `409` — Conflict (e.g., trying to start while already crawling)
- `500` — Internal server error
