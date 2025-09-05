# 🚀 Aionis Partners Website Deployment Guide

## Quick Publishing Options

### Option 1: GitHub Pages (Recommended - Free)
1. **Create GitHub Account** → Go to [github.com](https://github.com) and sign up
2. **Create New Repository** → Name it `aionis-partners-website`
3. **Upload Files** → Push your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/aionis-partners-website.git
   git branch -M main
   git push -u origin main
   ```
4. **Enable GitHub Pages** → Go to repository Settings → Pages → Source: Deploy from branch → Branch: main
5. **Add Custom Domain** → In Pages settings, add `aionispartners.com`
6. **Update GoDaddy DNS** → Point your domain to GitHub Pages

### Option 2: GoDaddy Hosting
1. **Purchase Hosting** → Add web hosting to your GoDaddy account
2. **Access File Manager** → Go to your hosting control panel
3. **Upload Files** → Upload all website files to the `public_html` folder
4. **Test Website** → Visit your domain to ensure it works

### Option 3: Netlify (Modern & Fast)
1. **Sign Up** → Go to [netlify.com](https://netlify.com)
2. **Drag & Drop** → Upload your website folder
3. **Custom Domain** → Add `aionispartners.com` in domain settings
4. **Update DNS** → Point GoDaddy domain to Netlify

## DNS Configuration for GoDaddy

### For GitHub Pages:
- **Type**: CNAME
- **Name**: @
- **Value**: YOUR_USERNAME.github.io
- **TTL**: 3600

### For Netlify:
- **Type**: CNAME
- **Name**: @
- **Value**: your-site-name.netlify.app
- **TTL**: 3600

## File Structure
```
aionis-partners-website/
├── index.html              # Main public site
├── investor-login.html     # Investor login page
├── investor-dashboard.html # Investor dashboard
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript
├── login.js                # Login functionality
├── dashboard.js            # Dashboard functionality
├── Logo3.jpg               # Company logo
├── Background.jpg          # Background image
├── TrackRecord.jpg         # Performance chart
├── Profilfoto.jpg          # Team photo
└── [other assets...]
```

## Testing Checklist
- [ ] Main site loads correctly
- [ ] Investor login works (username: `investor`, password: `aionis2026`)
- [ ] All sections display properly after login
- [ ] Contact form sends emails via Formspree
- [ ] Logo links back to home page
- [ ] Mobile responsiveness works
- [ ] All images load correctly

## Security Notes
- Current authentication is client-side only (for demo purposes)
- Consider implementing server-side authentication for production
- Formspree handles contact form submissions securely

## Support
For deployment issues, check:
1. File permissions (should be 644 for files, 755 for folders)
2. DNS propagation (can take up to 48 hours)
3. HTTPS certificate (automatic with GitHub Pages/Netlify)
4. Browser cache (clear cache if changes don't appear)

## Next Steps
1. Choose your preferred hosting option
2. Follow the setup instructions above
3. Test all functionality
4. Consider adding analytics (Google Analytics)
5. Set up email forwarding for info@aionispartners.com 