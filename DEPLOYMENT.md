# Quick Deployment Guide for www.tiaris.ai

## 🚀 Quick Steps

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Tiaris landing page"
git remote add origin https://github.com/YOUR_USERNAME/tiaris.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repository
4. Netlify will auto-detect settings from `netlify.toml`
5. Click **"Deploy site"**

### 3. Add Custom Domain
1. In Netlify: **Site settings** → **Domain management** → **Add custom domain**
2. Enter: `www.tiaris.ai`
3. Netlify will show you **nameservers** (copy them)

### 4. Update Namecheap DNS
1. Log in to [Namecheap](https://www.namecheap.com)
2. Go to **Domain List** → Click **"Manage"** for `tiaris.ai`
3. Go to **"Advanced DNS"** tab
4. Under **"Nameservers"**, select **"Custom DNS"**
5. Paste the Netlify nameservers
6. Click **"Save"**

### 5. Wait for DNS Propagation
- Usually takes 1-2 hours (can take up to 48 hours)
- Check status in Netlify dashboard
- SSL certificate will be issued automatically

### ✅ Result
Your site will be live at:
- **https://www.tiaris.ai**
- **https://tiaris.ai** (Netlify handles this automatically)

## 📝 Important Notes

- **Continuous Deployment**: Every push to GitHub automatically deploys to Netlify
- **SSL**: Automatically handled by Netlify (Let's Encrypt)
- **Both domains work**: Netlify automatically serves both `www.tiaris.ai` and `tiaris.ai`

## 🔧 Configuration Files

- `netlify.toml` - Netlify build configuration
- `public/_redirects` - SPA routing support
- `vite.config.js` - Build output settings

## 🐛 Troubleshooting

**Build fails?**
- Check Netlify build logs
- Test locally: `npm run build`

**Domain not working?**
- Verify nameservers in Namecheap match Netlify
- Wait for DNS propagation (up to 48 hours)
- Check domain status in Netlify dashboard

