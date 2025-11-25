# Email Storybook Test

This workspace scaffolds a Storybook environment tailored for building and previewing email modules and templates.

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

Notes:
- This project uses `@storybook/react-vite`. After installing dependencies, Storybook commands in `package.json` should work.
- If you prefer `pnpm` or `yarn`, replace `npm` accordingly.

Files added:
- `.storybook/` Storybook config
- `src/components/` email-safe components
- `src/stories/` component and template stories
- `templates/newsletter.html` example HTML template for copy/paste
