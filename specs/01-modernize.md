# Homepage Modernization Specification

## Overview
Transform the portfolio homepage from Foundation 5.5.2 (2015) to a modern, minimalist design using vanilla CSS. The goal is an Apple-inspired clean aesthetic with generous whitespace, subtle colors, and focus on typography—while preserving all functionality.

## Design Direction
- **Style**: Minimalist & clean (Apple-inspired)
- **Approach**: Modern vanilla CSS (Grid/Flexbox, CSS custom properties)
- **Additions**: Resume download button, icons for links, game/art showcases

## Current State
- **index.html**: 62 lines, Foundation framework, simple two-row layout
- **Dependencies**: Foundation CSS (~6,324 lines), jQuery, Modernizr, normalize.css
- **Content**: Name, photo (906KB), bio, 8 social links, commented-out game/art embeds
- **Photo**: `img/nathaniel_and_murphy.jpg` (927KB, 2664x1965px, displayed at 50%)

## Implementation Steps

### 1. Remove Old Dependencies
Delete the following files/directories:
- `css/foundation.css`
- `css/foundation.min.css`
- `css/normalize.css`
- `js/foundation.min.js`
- `js/foundation/` (entire directory)
- `js/vendor/jquery.js`
- `js/vendor/modernizr.js`
- `js/vendor/fastclick.js`
- `js/vendor/jquery.cookie.js`
- `js/vendor/placeholder.js`

**Impact**: Removes ~7,000 lines of CSS and ~100KB+ of JavaScript

### 2. Create New HTML Structure
**File**: `index.html`

Rebuild with semantic HTML5:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Modern meta tags for SEO/social sharing -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Nathaniel Morihara - Software Engineer, hobbyist game developer & artist. Dad of Murphy the golden retriever.">
  <meta name="author" content="Nathaniel Morihara">

  <!-- Open Graph tags for social sharing -->
  <meta property="og:title" content="Nathaniel Morihara - Software Engineer & Game Developer">
  <meta property="og:description" content="Software Engineer, hobbyist game developer & artist.">
  <meta property="og:image" content="https://haywardmorihara.github.io/img/nathaniel_and_murphy.jpg">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:creator" content="@haywardmorihara">

  <title>Nathaniel Morihara - Software Engineer & Game Developer</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- SVG icon definitions -->
  <svg style="display: none;" aria-hidden="true">
    <defs>
      <!-- Icons: download, twitter, github, linkedin, medium, gamepad, image, pen, external -->
    </defs>
  </svg>

  <main class="container">
    <!-- Hero: Photo + Name -->
    <header class="hero">
      <div class="hero-image">
        <img src="img/nathaniel_and_murphy.jpg" alt="Nathaniel Morihara with his golden retriever Murphy">
      </div>
      <div class="hero-content">
        <h1 class="hero-title">Nathaniel Morihara</h1>
        <p class="hero-subtitle">HaywardMorihara • Murphy's Dad</p>
      </div>
    </header>

    <!-- Bio -->
    <section class="bio">
      <p class="bio-text">Software Engineer. Hobbyist game dev & artist. Dad of Murphy (my golden retriever).</p>
    </section>

    <!-- Resume Download Button (NEW) -->
    <section class="resume-section">
      <a href="NathanielMoriharaResume.pdf" class="btn-resume" download>
        <svg class="icon-download"><use href="#icon-download"></use></svg>
        <span>Download Resume</span>
      </a>
    </section>

    <!-- Social Links Grid (WITH ICONS) -->
    <section class="social-links">
      <h2 class="section-title">Connect</h2>
      <nav class="social-grid">
        <!-- 8 social links with icons: Twitter, Itch.io, Substack, Medium, Github, Art, LinkedIn, iramorihara.com -->
      </nav>
    </section>

    <!-- Games Showcase (UNCOMMENTED & STYLED) -->
    <section class="showcase games-showcase">
      <h2 class="section-title">Games</h2>
      <div class="showcase-grid">
        <!-- 8 game iframes from itch.io -->
      </div>
    </section>

    <!-- Art Showcase (UNCOMMENTED & STYLED) -->
    <section class="showcase art-showcase">
      <h2 class="section-title">Art</h2>
      <div class="showcase-grid">
        <!-- 2 art pack iframes from itch.io -->
      </div>
    </section>

    <footer class="footer">
      <p>&copy; 2025 Nathaniel Morihara</p>
    </footer>
  </main>
</body>
</html>
```

**Key changes**:
- Semantic HTML5 (`<main>`, `<header>`, `<section>`, `<nav>`, `<footer>`)
- Modern meta tags for SEO and social sharing
- SVG icon system (inline, no external dependencies)
- Resume download button with icon
- Icons for all social links
- Uncommented and organized game/art showcases
- No framework classes

### 3. Create Modern CSS
**File**: `css/style.css` (new file, ~600 lines)

**Architecture**:
1. **CSS Custom Properties** (Design tokens)
   - Colors: Apple-inspired minimal palette
   - Typography: System font stack
   - Spacing: 8px base scale
   - Dark mode support via `prefers-color-scheme`

2. **Modern CSS Reset**
   - Box-sizing, margins, paddings
   - Optimized font rendering

3. **Layout System**
   - Mobile-first responsive design
   - CSS Grid for hero and showcase grids
   - Flexbox for social links
   - Breakpoints: 640px (tablet), 1024px (desktop)

4. **Component Styles**
   - Hero section with photo + content
   - Bio text (centered, max-width)
   - Resume button (prominent, with hover effects)
   - Social link cards (with icons, hover animations)
   - Showcase grids (for game/art embeds)
   - Footer

**Design Features**:
- Generous whitespace (Apple-style)
- Subtle shadows and borders
- Smooth transitions (150-250ms)
- Card-based layouts with hover effects
- Typography hierarchy with fluid sizing
- Dark mode support (automatic)

### 4. SVG Icon System
**Approach**: Inline SVG symbols (no external dependencies)

**Icons needed**:
- Download (for resume button)
- Twitter, GitHub, LinkedIn, Medium (brand icons)
- Gamepad (for Itch.io)
- Image/Camera (for Art/Google Photos)
- Pen/Edit (for Substack)
- External link (for iramorihara.com)

**Usage pattern**:
```html
<svg class="icon" aria-hidden="true">
  <use href="#icon-twitter"></use>
</svg>
```

**Benefits**:
- Zero HTTP requests
- Easy to style with CSS
- Small file size
- Scalable to any size

### 5. Image Optimization (Optional)
Current photo is 906KB. For better performance, consider creating responsive versions:
- `nathaniel_and_murphy-large.jpg` (~200KB, 1920px wide)
- `nathaniel_and_murphy-medium.jpg` (~100KB, 1024px wide)
- `nathaniel_and_murphy-small.jpg` (~50KB, 640px wide)

Use `<picture>` element with `srcset` for responsive loading. If not optimizing images, keep current image but ensure proper CSS sizing.

### 6. Content Restoration
Uncomment and style the following from current index.html:
- **8 game embeds** (lines 38-45): Make Amaze, The Merchant and His Daughter, Codename: Pandora, Damage the Walls, Christmas Village Creator, Wombat Buddy, Survive the Island, Star Wars Mustafar
- **2 art embeds** (lines 48-49): Sci-Fi Facility, Christmas Village Asset Pack

Style with:
- Responsive grid (1 column mobile, 2 columns tablet+)
- Lazy loading (`loading="lazy"`)
- Consistent spacing and borders
- Hover effects

## Critical Files

### Files to Modify
1. **`index.html`**
   - Complete rewrite with semantic HTML5, responsive images, SVG icons, modern meta tags

### Files to Create
2. **`css/style.css`**
   - Complete CSS architecture with Grid/Flexbox, custom properties, minimalist styling, dark mode

### Files to Delete
3. All Foundation, jQuery, and normalize.css files (listed in step 1)

### Files to Preserve
4. **`img/nathaniel_and_murphy.jpg`**
   - Keep original (can optionally create optimized versions)

5. **`NathanielMoriharaResume.pdf`**
   - Link in new resume download button

## Testing Checklist

### Functionality
- [ ] All 8 social links work (Twitter, Itch.io, Substack, Medium, Github, Art, LinkedIn, iramorihara.com)
- [ ] Resume download button works
- [ ] All 8 game embeds load properly
- [ ] All 2 art embeds load properly

### Responsive Design
- [ ] Mobile (320px-639px): Single column, stacked layout
- [ ] Tablet (640px-1023px): Two-column grids, proper spacing
- [ ] Desktop (1024px+): Optimal layout, generous whitespace

### Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers

### Accessibility
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Images have alt text
- [ ] Links have proper attributes (`target="_blank"`, `rel="noopener noreferrer"`)
- [ ] Color contrast meets WCAG AA standards

### Visual Polish
- [ ] Dark mode switches correctly
- [ ] Hover effects work smoothly
- [ ] Icons display correctly
- [ ] Typography is readable and hierarchical
- [ ] Spacing is consistent and generous

### Performance
- [ ] Page loads quickly (aim for < 2s on 3G)
- [ ] Images load efficiently
- [ ] No layout shift during load
- [ ] Lighthouse score 90+ in all categories

## Expected Improvements

### Performance
- **Before**: ~7MB total (Framework CSS/JS + large image)
- **After**: ~1MB total (minimal CSS + optimized image)
- **Improvement**: ~85% reduction in page weight

### Load Time
- **Before**: 3-5s on 3G
- **After**: 1-2s on 3G
- **Improvement**: 50-60% faster

### Maintainability
- Single CSS file (~600 lines vs 7,000+)
- No framework to update
- Clear, documented code
- Vanilla JS (or none needed)

### User Experience
- Modern, professional appearance
- Consistent with 2025 design standards
- Better mobile experience
- Dark mode support
- Improved accessibility

## Implementation Notes

- **No build step required** - Static GitHub Pages site
- **Mobile-first approach** - Start with mobile layout, enhance for larger screens
- **Progressive enhancement** - Core content works without JavaScript
- **Dark mode** - Automatic based on system preference
- **Semantic HTML** - Proper heading hierarchy, ARIA labels where needed

## Migration Strategy

1. Create backup branch: `git checkout -b backup-old-design && git push`
2. Create new branch: `git checkout master && git checkout -b modernize-homepage`
3. Implement all changes
4. Test locally: `python3 -m http.server 8000`
5. Commit and push: `git push origin modernize-homepage`
6. Merge to master: `git checkout master && git merge modernize-homepage && git push`
7. GitHub Pages will auto-deploy

---

**Total estimated changes**: ~850 new lines (HTML + CSS), ~7,100 deleted lines (old dependencies)
