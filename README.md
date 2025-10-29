# schematic-marketing
website for a-la-carte marketing agency

www.schematicmarketing.com

## Local hooks — build-on-push

This repository includes a tracked Git hook in `.githooks/pre-push` that will automatically build the site into `docs/` before each `git push`. The hook will:

- Run `npm run build` (Vite configured to output to `docs/`).
- If the build fails, the push is aborted — fix the errors and try again.
- If the build produces changes in `docs/`, the hook will stage and commit them automatically with the message `chore(build): update docs (pre-push)` and then continue the push.

To enable the tracked hooks folder locally run (once):

```bash
git config core.hooksPath .githooks
```

Notes:
- The hook commits build artifacts into the repository (`docs/`) to allow GitHub Pages to serve the site from the `docs` folder. If you'd prefer not to commit built files, we can change the hook to abort the push and require a manual build and commit instead.
- If you later decide to use GitHub Actions to build & deploy, we can remove the pre-push hook and add an automated workflow.
