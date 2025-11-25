# Email Storybook Test

This workspace scaffolds a Storybook environment tailored for building and previewing email modules and templates.

**[View Live Demo](https://danrader.github.io/emailstorybooktest/)**

Quick start:

1. Install dependencies:

```bash
npm install
```

2. Start Storybook locally:

```bash
npm run storybook
```

3. Open `http://localhost:6006` and browse the `Email` stories. Each story includes a "Source" view showing the HTML for copy/paste.

## Deployment

This Storybook is automatically deployed to GitHub Pages when you push to `main`. The workflow is defined in `.github/workflows/deploy.yml`.

To enable GitHub Pages:
1. Go to your repository Settings → Pages
2. Under "Build and deployment", set Source to "GitHub Actions"
3. Push to `main` — the workflow will build and deploy Storybook
4. Your site will be live at `https://danrader.github.io/emailstorybooktest/`

## Project Structure

- `.storybook/` — Storybook config
- `src/components/` — email-safe React components (`.jsx`)
- `src/stories/` — component and template stories
- `templates/newsletter.html` — example HTML template for copy/paste
- `.github/workflows/deploy.yml` — GitHub Actions workflow for deployment

## Notes

- This project uses `@storybook/react-vite`. After installing dependencies, Storybook commands in `package.json` should work.
- If you prefer `pnpm` or `yarn`, replace `npm` accordingly.
