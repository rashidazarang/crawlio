---
title: "MCP Tools Reference"
date: "2026-02-14"
category: "MCP Integration"
excerpt: "Complete reference for all 10 MCP tools — parameters, return types, and examples."
order: 3
---

## Overview

Crawlio exposes 10 MCP tools: 4 control tools and 6 read tools. All tools are available to any MCP-compatible client.

---

## Control Tools

### start_crawl

Start downloading a website.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL to crawl |
| `destination` | string | No | Local path to save files (default: ~/Downloads/Crawlio/) |

**Returns:** Confirmation message with crawl details.

**Example:**
```json
{
  "url": "https://example.com",
  "destination": "~/Downloads/Crawlio/example.com"
}
```

---

### stop_crawl

Stop the current download immediately. All in-flight requests are cancelled.

**Parameters:** None

**Returns:** Confirmation that the crawl has stopped.

---

### pause_crawl

Pause the current download. In-flight requests complete, but no new requests are started. The crawl can be resumed later.

**Parameters:** None

**Returns:** Confirmation that the crawl is paused.

---

### resume_crawl

Resume a paused download. The crawl picks up from where it left off.

**Parameters:** None

**Returns:** Confirmation that the crawl has resumed.

---

## Read Tools

### get_crawl_status

Get the current engine state and progress counters.

**Parameters:** None

**Returns:**

| Field | Type | Description |
|-------|------|-------------|
| `state` | string | Engine state: `idle`, `crawling`, `paused`, `completed`, `failed` |
| `url` | string | The URL being crawled |
| `discovered` | number | Total URLs discovered |
| `downloaded` | number | Successfully downloaded items |
| `failed` | number | Failed downloads |
| `queued` | number | Items waiting to download |
| `localized` | number | Items with rewritten links |

---

### get_crawl_logs

Get structured log entries from the current crawl.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category` | string | No | Filter by category: `engine`, `download`, `parser`, `localizer`, `network` |
| `level` | string | No | Minimum level: `debug`, `info`, `notice`, `warning`, `error`, `fault` |
| `limit` | number | No | Max entries to return (default: 50) |

**Returns:** Array of log entries, each with timestamp, category, level, and message.

---

### get_errors

Get only error-level log entries.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `limit` | number | No | Max entries to return (default: 50) |

**Returns:** Array of error entries with timestamp, category, and message.

---

### get_downloads

Get all download items with their current status.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `status` | string | No | Filter by status: `pending`, `downloading`, `completed`, `failed` |

**Returns:** Array of download items:

| Field | Type | Description |
|-------|------|-------------|
| `url` | string | The downloaded URL |
| `status` | string | Item status |
| `size` | number | File size in bytes |
| `contentType` | string | MIME type |
| `localPath` | string | Path to saved file |
| `error` | string | Error message (if failed) |

---

### get_failed_urls

Get only failed download items.

**Parameters:** None

**Returns:** Array of failed items with URL, status code, and error message.

---

### get_site_tree

Get an ASCII directory tree of all downloaded files.

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `max_depth` | number | No | Maximum tree depth (default: 5) |

**Returns:** ASCII-formatted directory tree string.

**Example output:**
```
example.com/
  index.html
  about/
    index.html
  css/
    style.css
  images/
    logo.png
    hero.jpg
```
