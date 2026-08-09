# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies (after creating venv)
python -m pip install -r requirements.txt

# Start dev server — hot-reloads on changes, Chinese-language search index
mkdocs serve

# Build strictly (same as CI) — fails on broken links, missing pages, etc.
mkdocs build --strict
```

The generated `site/` directory is build output — it's gitignored and should never be edited.

## Architecture

This is a **Material for MkDocs** knowledge base — a personal Python learning site written in Chinese, deployed to GitHub Pages via GitHub Actions on every push to `main`.

### Navigation system (decentralized)

Navigation is *not* defined in `mkdocs.yml`. Each content directory contains its own `.nav.yml` file that the `mkdocs-awesome-nav` plugin reads to build that section's sidebar. The root `docs/.nav.yml` only defines the top-level sections (Python, AI, project archives, engineering, blog, about). When adding new pages to a section, update that directory's `.nav.yml` — not `mkdocs.yml`.

### Blog vs logs (two separate content streams)

The `blog` plugin (`mkdocs.yml` line 61) manages `docs/blog/posts/`:
- Posts live in year-month subdirectories (`posts/2026-8/YYYY-MM-DD-slug.md`)
- Posts need `date`, `categories`, and `tags` in frontmatter
- `<!-- more -->` marks the excerpt boundary in posts
- Drafts use `draft: true` in frontmatter — hidden in production, visible in `mkdocs serve`
- The plugin auto-generates archive pages, category pages, pagination, and reading-time estimates

`docs/logs/` is a plain docs section (not managed by the blog plugin) for rough field notes and in-progress learning. Logs use tags but not categories.

### Custom CJK reading-time hook

`hooks/blog_metadata.py` is a MkDocs hook (`on_page_markdown`) that computes word counts and reading times for Chinese/Latin mixed content. It strips code fences, HTML, and images, then counts CJK characters and Latin words separately with different reading-speed constants (500 chars/min for CJK, 265 words/min for Latin). The hook runs before Material's blog plugin so it can set `page.config.readtime` and inject `word_count` into page metadata. This is registered in `mkdocs.yml` line 82.

### Template overrides

`overrides/` extends Material's default Jinja2 templates. `blog-post.html` extends `main.html` to customize blog post layout. `partials/` overrides specific partials. These follow Material's [theme extension](https://squidfunk.github.io/mkdocs-material/customization/#extending-the-theme) mechanism — the `custom_dir: overrides` in `mkdocs.yml` line 11 enables them.

### Custom CSS architecture

Three stylesheets in `docs/assets/stylesheets/`:
- `extra.css` — general site overrides
- `home-map.css` — the SVG node map on the homepage
- `blog.css` — blog-specific styling
- `tokens.css` — design tokens / CSS custom properties

These are loaded via `extra_css` in `mkdocs.yml`, not imported within CSS files.

### CI/CD

`.github/workflows/deploy-pages.yml` builds with `--strict` and deploys to GitHub Pages. Python 3.13, pip cache enabled. The workflow has `concurrency` set so a second push cancels an in-progress deploy for the same branch.

### Content organization

- `docs/python/` — stable Python knowledge (core language, standard library)
- `docs/ai/` — ML/DL fundamentals, neural networks, PyTorch, AI applications
- `docs/engineering/` — cross-cutting practices (testing, typing, packaging, snippets)
- `docs/projects/` — per-project archives with goals, decisions, postmortems
- `docs/blog/posts/` — polished articles (managed by blog plugin)
- `docs/logs/` — rough field notes and learning progress
- `docs/about/` — site metadata: changelog, roadmap, author, technical notes, content guidelines
