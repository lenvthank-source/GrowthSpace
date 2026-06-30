# GrowthSpare Next.js Blog & CMS Integration

This project is built using Next.js (App Router) configured for fully static export (`output: 'export'`) and is deployed to **Cloudflare Pages**. It integrates **Sanity CMS** for dynamic content editing.

---

## 1. Local Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`.

---

## 2. Cloudflare Pages Deployment Configuration

Because this project uses static HTML exports, it must be deployed as a **static asset site** (Pages) on Cloudflare, rather than a dynamic Next.js worker application.

### Environment Variables
Configure the following Environment Variables in your Cloudflare Pages dashboard under **Settings > Variables**:

| Variable Name | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity Project ID | `yourProjectId` |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name | `production` |
| `NEXT_PUBLIC_SITE_URL` | Production website base URL | `https://growthspace.co` |

### Cloudflare Pages Settings (Git Integration)
If linking repository directly:
- **Framework Preset**: `None` (do not choose Next.js)
- **Build Command**: `npm run build`
- **Build Output Directory**: `out` (instead of `.next`)

### Deployment via CLI (Wrangler)
To push static builds manually:
```bash
npm run build
npx wrangler pages deploy out --project-name=growthspace
```

---

## 3. Sanity CMS Webhook Integration (Automatic Rebuilds)

To trigger automatic website updates when publishing posts inside Sanity Studio:

1. Go to your **Cloudflare Pages dashboard > Settings > Builds & deployments**.
2. Under **Deploy webhooks**, click **Add webhook**.
3. Name it (e.g. `Sanity Publish`) and select the branch you want to deploy (e.g. `main`).
4. Copy the generated Webhook URL.
5. In your **Sanity Management Console (sanity.io/manage)**, navigate to **Webhooks** and paste this URL.
6. Configure the webhook to fire on `post` publish actions. Now, whenever you publish a post in Sanity, Cloudflare Pages will rebuild and deploy the live updates automatically.
