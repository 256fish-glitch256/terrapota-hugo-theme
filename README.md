# Hugo Basic Theme

A clean, minimal, and responsive Hugo theme perfect for blogs and personal websites.

## Features

- 📱 Fully responsive design
- 🎨 Easy to customize
- ⚡ Fast and lightweight
- 🌙 Dark mode ready
- 📝 Markdown support

## Installation

1. Add this theme to your Hugo site:
   ```bash
   git clone https://github.com/256fish-glitch256/terrapota-hugo-theme.git themes/basic
   ```

2. Update your site's `config.toml`:
   ```toml
   theme = "basic"
   ```

## Configuration

Edit your `config.toml` to customize the theme:

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "My Awesome Site"
theme = "basic"

[params]
  description = "My personal blog"
  author = "Your Name"
```

## Directory Structure

- `layouts/` - HTML templates that define page structure
- `static/` - CSS, images, and other static files
- `archetypes/` - Content templates for new posts

## Customization

You can override any file from the theme by creating the same file in your Hugo site's root:

- Override CSS: Create `static/css/style.css` in your site
- Override templates: Create the same path in your site's `layouts/` folder

## License

MIT License - See LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub.