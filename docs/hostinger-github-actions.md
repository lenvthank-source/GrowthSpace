# Deploying to Hostinger via GitHub Actions (FTP)

This document shows how to set up a GitHub Actions workflow that builds your Next.js static site and deploys the exported `dist` folder to Hostinger over FTP.

Prerequisites
- Repository hosted on GitHub.
- Hostinger FTP credentials (host, username, password, optional port).
- `next.config.js` configured for static export (`output: 'export'`).

Steps

1. Add GitHub Secrets
- In your GitHub repo go to Settings → Secrets and variables → Actions → New repository secret.
- Add the following secrets:
  - `FTP_HOST` — Hostinger FTP host (e.g., `ftpupload.net` or your domain)
  - `FTP_USERNAME` — FTP username
  - `FTP_PASSWORD` — FTP password
  - `FTP_PORT` — (optional) default is `21`

2. Add the workflow file
- See `.github/workflows/deploy-hostinger.yml` in the repo (example below). It builds, exports, and uploads `dist` to your FTP `public_html`.

3. Push to `main` (or your chosen branch)
- On push the workflow will run, build the site, and upload files to Hostinger.

Example GitHub Actions workflow

```yaml
name: Build and Deploy to Hostinger (FTP)

on:
  push:
    branches: [ main ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: |
          npm run build
          # If you use next export explicitly
          npx next export

      - name: Upload to Hostinger via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ${{ secrets.FTP_HOST }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          port: ${{ secrets.FTP_PORT }} # optional
          local-dir: dist
          server-dir: /public_html
```

Notes and troubleshooting
- `local-dir` should point to the folder containing the exported static site. In this repo we export to `dist`.
- The action will mirror files. If deployment appears partial, check the action logs for FTP errors and verify `server-dir` location on Hostinger.
- If your site uses absolute paths or expects SPA-like routing, ensure `next export` produced appropriate route folders (it should for page-based routing and the `app` router when `output: 'export'` is set).

Optional: restrict the workflow trigger to a `deploy` branch or use a manual `workflow_dispatch` trigger for controlled deploys.

Security: never store FTP credentials in code — always use GitHub Secrets.

If you want, I can add the workflow file to this repository and test it (you'll need to provide FTP secrets in GitHub).