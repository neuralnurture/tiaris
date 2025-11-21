# Tiaris Landing Page

A beautiful, animated landing page for Tiaris - revolutionizing the way you book flights.

## 🚀 Running Locally with React

This project uses **Vite** (a fast React development server) to run your `home.jsx` component locally.

### Prerequisites

- **Node.js** (version 16 or higher)
  - Check if you have it: `node --version`
  - If not installed, download from [nodejs.org](https://nodejs.org/)

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```
   This will install React, Vite, and all necessary packages.

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   This will start Vite's development server.

3. **View Your Page**
   - The terminal will show a local URL (usually `http://localhost:5173`)
   - Open that URL in your browser
   - Your `home.jsx` component will be displayed!

### Project Structure

```
tiaris/
├── home.jsx          # Your TiarisLanding component
├── src/
│   ├── App.jsx       # Main app component (imports home.jsx)
│   └── main.jsx      # React entry point
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

### Available Commands

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### How It Works

1. **Vite** is a build tool that provides:
   - Fast development server
   - Hot Module Replacement (HMR) - changes appear instantly
   - Optimized production builds

2. **React** renders your `home.jsx` component:
   - `main.jsx` creates the React root
   - `App.jsx` imports and renders `TiarisLanding` from `home.jsx`
   - The component displays in the browser

### Making Changes

- Edit `home.jsx` and save
- The page will automatically refresh with your changes
- No need to restart the server!

### Troubleshooting

- **Port already in use?** Vite will automatically try the next available port
- **Module not found?** Run `npm install` again
- **Styles not working?** Make sure the `<style>` tag is inside your component's JSX

## 🌐 Deploying to Netlify with Custom Domain

This guide will help you deploy your Tiaris landing page to Netlify and connect your Namecheap domain.

### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Tiaris landing page"
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `tiaris` (or your preferred name)
   - **Don't** initialize with README, .gitignore, or license (we already have these)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/tiaris.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Deploy to Netlify

1. **Sign up/Login to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in (you can use your GitHub account)

2. **Add New Site from Git**:
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **GitHub** and authorize Netlify
   - Select your `tiaris` repository

3. **Configure Build Settings**:
   - Netlify will auto-detect Vite settings from `netlify.toml`
   - **Build command:** `npm run build` (auto-filled)
   - **Publish directory:** `dist` (auto-filled)
   - Click **"Deploy site"**

4. **Wait for Deployment**:
   - Netlify will install dependencies and build your site
   - This takes 1-2 minutes
   - You'll get a URL like: `https://tiaris-xyz123.netlify.app`

### Step 3: Connect Your Namecheap Domain (www.tiaris.ai)

1. **In Netlify Dashboard**:
   - Go to your site → **Site settings** → **Domain management**
   - Click **"Add custom domain"**
   - Enter your domain: `www.tiaris.ai`
   - Click **"Verify"**
   - Netlify will also automatically add `tiaris.ai` (without www) as an alias

2. **Get Netlify DNS Nameservers**:
   - After adding `www.tiaris.ai`, Netlify will show you DNS nameservers
   - They look like: `dns1.p01.nsone.net`, `dns2.p01.nsone.net`, etc.
   - **Copy these nameservers** (you'll need them in Namecheap)
   - Netlify will handle both `www.tiaris.ai` and `tiaris.ai` automatically

3. **Update Namecheap DNS Settings**:
   - Log in to [Namecheap](https://www.namecheap.com)
   - Go to **Domain List** → Click **"Manage"** next to your domain
   - Go to **"Advanced DNS"** tab
   - Find **"Nameservers"** section
   - Select **"Custom DNS"**
   - Enter the Netlify nameservers (usually 2-4 nameservers)
   - Click **"Save"**

4. **Wait for DNS Propagation**:
   - DNS changes can take 24-48 hours to propagate globally
   - Usually works within 1-2 hours
   - You can check status in Netlify's domain settings

### Step 4: SSL Certificate (Automatic)

- Netlify automatically provisions SSL certificates via Let's Encrypt
- Your site will be available at `https://yourdomain.com`
- SSL is enabled automatically once DNS propagates

### Step 5: Continuous Deployment

- Every time you push to GitHub, Netlify will automatically:
  - Detect the changes
  - Rebuild your site
  - Deploy the new version
  - Update your live site

### Troubleshooting Deployment

**Build fails?**
- Check Netlify build logs for errors
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`

**Domain not working?**
- Wait 24-48 hours for DNS propagation
- Check Namecheap nameservers are correct
- Verify `www.tiaris.ai` in Netlify dashboard shows "Active"
- Test both `www.tiaris.ai` and `tiaris.ai` (Netlify handles both)

**SSL certificate issues?**
- Netlify handles SSL automatically
- If issues persist, check domain verification in Netlify

### Project Files for Deployment

- `netlify.toml` - Netlify configuration (build settings, redirects)
- `public/_redirects` - SPA routing support
- `vite.config.js` - Build output directory configured

### Quick Deploy Checklist

- [ ] Code pushed to GitHub
- [ ] Netlify site created and connected to GitHub
- [ ] Build successful in Netlify
- [ ] Custom domain added in Netlify
- [ ] Nameservers updated in Namecheap
- [ ] DNS propagated (check Netlify dashboard)
- [ ] SSL certificate active
- [ ] Site accessible at `https://www.tiaris.ai` and `https://tiaris.ai`!
