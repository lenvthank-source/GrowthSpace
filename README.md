# GrowthSpare Next.js Blog & CMS Integration

This project is built using Next.js (App Router) version 14.2.35 and is deployed to **Cloudflare Pages** using the native Cloudflare Workers Edge runtime. It integrates **Sanity CMS** for dynamic content editing.

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

### Environment Variables
Configure the following Environment Variables in your Cloudflare Pages dashboard under **Settings > Variables**:

| Variable Name | Description | Example |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity Project ID | `yourProjectId` |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name | `production` |
| `NEXT_PUBLIC_SITE_URL` | Production website base URL | `https://growthspace.co` |
| `SANITY_REVALIDATE_SECRET` | Secret token verifying webhook calls | `yourSecretToken` |

### Cloudflare Pages Settings (Git Integration)
- **Framework Preset**: `Next.js`
- **Build Command**: `npx @cloudflare/next-on-pages` (or `npm run build` with next-on-pages integration)
- **Build Output Directory**: `.vercel/output` (automatically detected by the Cloudflare Pages builder)

---

## 3. Sanity CMS Webhook Integration (On-Demand Cache Revalidation)

Since we are running on the Cloudflare Edge runtime, we support **on-demand revalidation** via our webhook `/api/revalidate`. When you publish a post inside Sanity Studio, it will instantly refresh the website cache without needing a full site build!

1. Go to your **Sanity Management Console (sanity.io/manage)**, navigate to **Webhooks**, and click **Create Webhook**.
2. Set the **URL** to: `https://YOUR_DOMAIN.com/api/revalidate?secret=YOUR_SANITY_REVALIDATE_SECRET`.
3. Configure the webhook to trigger on `post` publishing.
