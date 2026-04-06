# Swedish Blog

A blog documenting my study abroad semester in Uppsala, Sweden in 2018. Built with [Astro](https://astro.build) and deployed to GitHub Pages.

**Live site:** [johnlk.github.io/Swedish-Blog](https://johnlk.github.io/Swedish-Blog)

## Tech Stack

- **Astro 6** -- static site generator with content collections
- **Bun** -- package manager and script runner
- **Markdown** -- blog posts as `.md` files with frontmatter
- **Vanilla CSS** -- modern CSS Grid, zero frameworks
- **GitHub Actions** -- automated build and deploy on push to `main`

## Project Structure

```
src/
  content/posts/     19 blog posts as Markdown
  components/        Gallery (with lightbox), PostNav
  layouts/           BaseLayout (shared HTML shell)
  pages/             Home, Gallery, dynamic post routes
  styles/            Global stylesheet
public/images/       Trip photos
.github/workflows/   CI/CD pipeline
```

## Running Locally

```sh
bun install
bun run dev
```

## Building

```sh
bun run build    # outputs to dist/
bun run preview  # preview the build locally
```

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow which builds the site and deploys to GitHub Pages.
