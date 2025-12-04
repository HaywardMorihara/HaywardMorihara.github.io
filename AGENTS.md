# AGENTS.md

This file provides guidance to coding agents (like Claude Code) when working with code in this repository.

## Repository Overview

This is a personal portfolio website hosted on GitHub Pages (HaywardMorihara.github.io) containing:
- **Portfolio site** (index.html): Main landing page with links and resume
- **Blog/Pensieve** (blog/): Markdown-based blog with categories (programming, philosophy, books, murphy)
- **Game projects**: Multiple game implementations using different frameworks
- **Static assets**: CSS (Foundation framework), images, and vendor libraries

## Project Structure

### Root Level
- `index.html`: Main portfolio landing page using Foundation 5.5.2 CSS framework
- `blog/`: Markdown-based blog using docsify (sidebar.md files for navigation)
- Game projects: `SurviveTheIsland/`, `VPSBubbleSoccer/`, `2022game/`, `PhaserTests/`, `make_amaze/`
- `css/`, `js/`, `img/`: Static assets for the portfolio site

### Game Projects

#### SurviveTheIsland & 2022game
- **Type**: Godot Engine exports (WASM-based)
- **Files**: `*.html`, `*.js`, `*.wasm`, `*.pck`, `*.png`
- **Structure**: These are pre-built Godot projects exported to WebAssembly
- **Note**: Only modify `.html` files if needed; WASM/pck files are compiled outputs

#### VPSBubbleSoccer
- **Type**: Phaser framework game
- **Source**: `game.html`, `player.js`, `ball.js`, `controller.js`
- **Assets**: Located in `assets/` subdirectory
- **Framework**: Phaser (JavaScript game framework)

#### PhaserTests
- **Type**: Phaser framework experiments/tests
- **Location**: `js/` subdirectory contains test files
- **Note**: Early-stage testing ground for Phaser features

#### make_amaze & MakeAmaze.html
- **Type**: Browser-based game
- **Single HTML file**: MakeAmaze.html (contains all logic)

### Blog Structure
- **Format**: Markdown files organized by category
- **Navigation**: Each category folder has `_sidebar.md` for navigation
- **Categories**:
  - `programming/`: Development and engineering topics
  - `philosophy/`: Philosophical reflections
  - `books/`: Book summaries and reflections
  - `murphy/`: Personal reflections featuring Murphy (the golden retriever)
- **Rendering**: Uses docsify for markdown rendering (no build step required)

## Common Development Tasks

### Viewing/Testing Locally
```bash
python3 -m http.server 8000
# Then navigate to http://localhost:8000
```

### Editing the Portfolio Site
- **Index page**: Edit `index.html` directly
- **Styling**: Modify `css/` files (uses Foundation framework)
- **JavaScript**: Update `js/` files (primarily jQuery + Foundation plugins)

### Adding/Editing Blog Posts
1. Create new `.md` file in appropriate category folder (`blog/programming/`, `blog/philosophy/`, etc.)
2. Update the category's `_sidebar.md` to add navigation link
3. No build step needed—docsify renders markdown automatically
4. Update `blog/README.md` or category `README.md` if adding new index entries

### Editing Game Projects
- **Godot exports (SurviveTheIsland, 2022game)**: Only modify HTML wrapper files; WASM/pck are compiled
- **Phaser games (VPSBubbleSoccer)**: Edit `.js` source files directly; no build step
- **Single-file games (MakeAmaze)**: Edit the `.html` file directly

## Technology Stack

- **Framework**: Foundation 5.5.2 CSS (portfolio site)
- **Frontend**: Vanilla JavaScript, jQuery
- **Game Development**:
  - Phaser (JavaScript framework for 2D games)
  - Godot Engine (WASM exports for 3D/complex games)
- **Blog**: Markdown + docsify
- **Hosting**: GitHub Pages (static site)

## Notes for Future Development

- **No build process**: This is a static site; CSS/JS changes are reflected immediately without building
- **WASM games**: Godot-exported games are pre-compiled; source files not in repository
- **Git strategy**: All content should be committed to master (main development branch)
- **Domain**: CNAME file points to a custom domain (check CNAME file for current domain)
