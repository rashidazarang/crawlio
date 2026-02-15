# CrawlioMobile — iOS App Technical Specification

## Overview

CrawlioMobile is the iOS/iPad companion to Crawlio macOS, built on the shared **CrawlioCore** library. It provides the same website download engine in a native iOS experience with Liquid Glass design language.

## Platform Requirements

| Requirement | Value |
|---|---|
| Platform | iOS 26.0+ / iPadOS 26.0+ |
| Language | Swift 6 (strict concurrency) |
| UI Framework | SwiftUI with Liquid Glass |
| Architecture | Shared CrawlioCore library + platform-specific views |
| State Management | `@Observable` via `ProjectState` |
| Build System | xcodegen (`project.yml`) → `CrawlioMobile.xcodeproj` |
| Team ID | HR8X6TP7J6 |
| Bundle ID | com.crawlio.mobile |

## Architecture

### Shared Library: CrawlioCore

CrawlioCore is a Swift Package library shared between Crawlio macOS and CrawlioMobile iOS. It contains:

- **Engine**: `CrawlEngine` (actor), `DownloadManager` (actor), `DownloadController` (actor), `URLFrontier`, `ConnectionMonitor`, `FrameworkDetector`, `ResponseEvaluator`
- **Models**: `DownloadProject`, `DownloadItem`, `DownloadSettings`, `CrawlPolicy`, `AppPreferences`, `ProjectState`
- **Parsers**: `HTMLParser`, `CSSParser`, `PDFParser`, `RobotsParser`, `SitemapParser`, `ContentParser` protocol
- **Localizer**: `LinkLocalizer` (actor), `PathMapper`, `RelativePathCalculator`
- **Services**: `FileService`, `ProjectStore`, `AuthManager`, `KeychainService`, `ExportManager`, `DNSResolver`, `DownloadLogger`, `ContentTypeDetector`, `MIMEDetector`, `EncodingDetector`, `TrustEvaluator`, `EntitlementManager`
- **Extraction**: `ExtractionPipeline`, `HTMLNormalizer`, `MarkdownGenerator`, `PageClassifier`, `AssetOrganizer`, `ThirdPartyClassifier`, `EphemeralURLDetector`
- **Extensions**: `URL+Extensions`, `String+HTML`, `FileManager+Extensions`

### Platform-Specific Layer: CrawlioMobile

The iOS app adds platform-specific views, services, and components on top of CrawlioCore.

#### Adaptive Layout

`ContentView` switches layout based on `horizontalSizeClass`:
- **iPhone** (`.compact`): `iPhoneRootView` — 4-tab `TabView`
- **iPad** (`.regular`): `iPadRootView` — 3-column `NavigationSplitView`

## App Structure (25 Swift Files)

### Entry Point
| File | Description |
|---|---|
| `CrawlioMobileApp.swift` | `@main` app entry, sets up `ProjectState` environment |

### iPhone Views (`Views/iPhone/`)
| File | Description |
|---|---|
| `iPhoneRootView.swift` | 4-tab TabView container |
| `ActiveCrawlTab.swift` | Active crawl with URL input, progress, controls |
| `FilesTab.swift` | Downloaded files browser |
| `ProjectsTab.swift` | Saved projects list |
| `SettingsTab.swift` | App settings wrapped in NavigationStack |

### iPad Views (`Views/iPad/`)
| File | Description |
|---|---|
| `iPadRootView.swift` | 3-column NavigationSplitView (sidebar, content, detail) |
| `iPadCrawlDetailView.swift` | Crawl status and controls for iPad |
| `iPadFilesDetailView.swift` | File browser with search and type filtering |
| `iPadInspectorView.swift` | File detail inspector with metadata and share |

### Shared Views (`Views/Shared/`)
| File | Description |
|---|---|
| `ContentView.swift` | Adaptive layout switch (iPhone vs iPad) |
| `URLInputView.swift` | URL text field with auto-https and validation |
| `CrawlProgressView.swift` | Progress bar with stats (pages, bytes, time) |
| `DownloadListView.swift` | Scrollable list of download items |
| `FileRowView.swift` | Single file row with icon, name, status, size |
| `SettingsFormView.swift` | Settings form (max depth, concurrent downloads, etc.) |
| `ExportShareView.swift` | Export/share button with `UIActivityViewController` |

### Components (`Views/Components/`)
| File | Description |
|---|---|
| `LiquidGlass.swift` | `.liquidGlass()` and `.liquidGlassInteractive()` view modifiers |
| `StatBadge.swift` | Stat pill with icon, value, label — uses `.liquidGlass()` |
| `GlassCard.swift` | Liquid Glass card container with `.liquidGlassInteractive()` |
| `GlassToolbar.swift` | Toolbar with Liquid Glass styling |

### Services (`Services/`)
| File | Description |
|---|---|
| `HapticService.swift` | `UIImpactFeedbackGenerator` wrapper for tactile feedback |
| `iOSFileService.swift` | iOS-specific file operations (sandbox-aware paths) |
| `NotificationService.swift` | Local push notification scheduling for crawl completion |
| `BackgroundCrawlService.swift` | `BGProcessingTask` registration for background downloads |

## Features

### Core Functionality
- **URL Input**: Text field with auto-`https://` prefix, URL validation, paste support
- **Crawl Controls**: Start, pause, stop buttons with haptic feedback
- **Live Progress**: Real-time progress bar, page count, byte count, elapsed time via `StatBadge` components
- **File Browser**: Downloaded files list with content-type icons (HTML, CSS, JS, images, PDF), search, and type filtering
- **Settings**: Max crawl depth, concurrent downloads, respect robots.txt, file type filters
- **Export/Share**: iOS share sheet via `UIActivityViewController` for downloaded files

### iPad-Specific
- 3-column layout: sidebar (projects) → content (files/crawl) → detail (inspector)
- File inspector with URL, HTTP status, content-type, size, duration, error details
- Segmented file type filter (All, HTML, CSS, Images, Scripts)

### Platform Integration
- **Haptics**: Impact feedback on crawl start/stop/pause actions
- **Background Crawl**: `BGProcessingTaskRequest` for continuing downloads when app is backgrounded
- **Push Notifications**: Local notifications when a crawl completes in the background
- **Share Sheet**: Native iOS share sheet for exporting downloaded files

### Liquid Glass Design
All UI components use iOS 26's Liquid Glass design language:
- `.liquidGlass(cornerRadius:)` modifier for translucent glass surfaces
- `.liquidGlassInteractive()` modifier for interactive glass cards
- `StatBadge` and `GlassCard` components built on Liquid Glass
- `GlassToolbar` for toolbar styling

## Build

### Prerequisites
- Xcode 26+ with iOS 26 SDK
- xcodegen installed (`brew install xcodegen`)

### Build Commands
```bash
# Generate Xcode project from project.yml
xcodegen generate

# Build for simulator
xcodebuild -project CrawlioMobile.xcodeproj \
  -scheme CrawlioMobile \
  -destination 'platform=iOS Simulator,name=iPhone 16' \
  build

# Run on simulator
xcodebuild -project CrawlioMobile.xcodeproj \
  -scheme CrawlioMobile \
  -destination 'platform=iOS Simulator,name=iPhone 16' \
  build
```

### Project Configuration (`project.yml`)
- Target: `CrawlioMobile` (iOS application)
- Dependencies: `CrawlioCore` (local Swift package)
- Deployment target: iOS 26.0
- Development team: HR8X6TP7J6
- Swift strict concurrency: complete

## Known Limitations

1. **No WebKit Preview**: iOS sandbox restrictions prevent loading local HTML files in WKWebView the way macOS does. File previews are metadata-only on iOS.
2. **No MCP Bridge**: The Ghidra MCP integration used in the macOS app for reverse engineering is not available on iOS.
3. **Background Limits**: iOS background task budget is limited — long crawls may not complete fully in the background.
4. **No Siri Shortcuts**: Not yet implemented (macOS app has them via `AppIntents`).
5. **Single Project**: Currently supports one active project at a time (macOS supports multiple windows).
