# Directories That Should Change

Based on the analysis of this Academic Pages Jekyll-based GitHub Pages repository, here are the directories that should be modified when personalizing this site:

## Content Directories (Primary Changes Required)

These directories contain the actual content that should be customized for your personal website:

### 1. **_pages/** 
   - Contains single markdown/HTML pages
   - Files to update:
     - `about.md` - Main landing page with your bio and introduction
     - `cv.md` / `cv-json.md` - Your curriculum vitae
     - `publications.html` - Publications listing page
     - `talks.html` - Talks/presentations listing page
     - `teaching.html` - Teaching experience page
     - `portfolio.html` - Portfolio projects page
     - `markdown.md` - Documentation (can be removed or customized)
     - `404.md` - Custom 404 error page

### 2. **_publications/**
   - Markdown files for individual publications
   - Each file represents one publication with metadata (title, date, venue, citation, etc.)
   - Current sample files should be replaced with your actual publications

### 3. **_talks/**
   - Markdown files for talks and presentations
   - Each file represents one talk with metadata (title, date, venue, location, etc.)
   - Replace sample files with your actual talks

### 4. **_teaching/**
   - Markdown files for teaching experiences
   - Each file represents a course or teaching position
   - Replace with your teaching history

### 5. **_posts/**
   - Blog posts directory
   - Contains markdown files with date-prefixed filenames (YYYY-MM-DD-title.md)
   - Replace sample posts with your blog content or remove if not using blog functionality

### 6. **_portfolio/**
   - Portfolio project files (can be .md or .html)
   - Each file represents a portfolio item
   - Replace with your actual projects or remove if not needed

## Configuration Directories (Must Update)

### 7. **_config.yml** (Root file, not directory)
   - Main site configuration file
   - Must update:
     - Site title, name, description
     - Author information (name, bio, location, employer)
     - Social media links (GitHub, Google Scholar, LinkedIn, etc.)
     - Site URL and repository name
     - Email and other contact information

### 8. **_data/**
   - `navigation.yml` - Top navigation menu configuration
   - `ui-text.yml` - UI text strings and translations
   - `cv.json` - JSON-formatted CV data
   - `authors.yml` - Author information for multi-author sites

## Static Files Directories (Content-Dependent)

### 9. **files/**
   - Static files like PDFs (papers, slides, presentations)
   - Replace sample PDFs with your actual documents
   - Referenced from publications and talks pages

### 10. **images/**
   - Image files used throughout the site
   - Key file: `profile.png` - Your profile picture
   - Other images as needed for posts, publications, etc.

## Styling and Layout Directories (Optional Customization)

### 11. **_sass/**
   - SCSS/CSS styling files
   - Subdirectories:
     - `_sass/layout/` - Layout styling
     - `_sass/theme/` - Theme-specific styles
     - `_sass/vendor/` - Third-party styles
     - `_sass/include/` - Include-specific styles
   - Only change if you want to customize the visual appearance

### 12. **_includes/**
   - HTML template partials
   - Key files:
     - `footer.html` - Footer content
     - `masthead.html` - Top navigation
     - `author-profile.html` - Sidebar profile
   - Only change for structural customization

### 13. **_layouts/**
   - Page layout templates
   - Files like `default.html`, `single.html`, `archive.html`, `talk.html`
   - Only change for major layout modifications

### 14. **assets/**
   - CSS, JavaScript, fonts, and other web assets
   - Subdirectories:
     - `assets/css/` - Compiled CSS
     - `assets/js/` - JavaScript files
     - `assets/fonts/` - Web fonts
   - Only change for advanced customization

## Directories That Generally Don't Need Changes

### 15. **.github/**
   - GitHub-specific configuration (workflows, templates)
   - Usually kept as-is unless you need custom CI/CD

### 16. **markdown_generator/**
   - Jupyter notebooks for generating markdown files from CSV data
   - Useful tool but not part of the site itself
   - Can be used to bulk-create publication/talk pages

### 17. **talkmap/**
   - Python script and notebook for generating a map of talk locations
   - Optional feature

### 18. **scripts/**
   - Utility scripts
   - Usually not modified

## Summary Priority Order

**High Priority (Must Change):**
1. `_config.yml` - Site configuration
2. `_data/navigation.yml` - Menu structure
3. `_pages/about.md` - Main landing page
4. `images/profile.png` - Profile picture
5. Content directories: `_publications/`, `_talks/`, `_teaching/`, `_posts/`, `_portfolio/`

**Medium Priority (Should Change):**
6. `_pages/cv.md` - CV page
7. `files/` - Replace sample PDFs with your documents
8. `_data/cv.json` - If using JSON CV format

**Low Priority (Optional):**
9. `_sass/` - Only if customizing appearance
10. `_includes/` - Only if modifying structure
11. `_layouts/` - Only if changing page layouts
12. `assets/` - Only for advanced customization

**Generally Keep As-Is:**
- `.github/`
- `markdown_generator/` (useful tool)
- `talkmap/` (optional feature)
- `scripts/`
