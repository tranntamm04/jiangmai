# Deployment Guide - Premium Image Gallery

## Quick Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   - Create a GitHub repository
   - Push this project to your repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Premium Gallery"
   git remote add origin https://github.com/your-username/gallery.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to set up your project

## Pre-Deployment Checklist

Before deploying, ensure:

- ✅ All images are in `/public/images/` directory
- ✅ Gallery data in `/lib/gallery-data.ts` is complete
- ✅ Update sitemap.xml with your domain
- ✅ Update robots.txt with your domain
- ✅ Customize Footer contact information
- ✅ Update metadata in `app/layout.tsx` title and description
- ✅ Test locally: `npm run dev`

## Environment Variables

This project requires no environment variables for basic functionality. However, you can add optional variables for:

- Analytics integration
- Email contact form (requires backend)
- Image optimization settings

Add any `.env.local` variables:
```
# .env.local (not committed to git)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Performance Optimization

Vercel automatically optimizes your site:

1. **Image Optimization**
   - Automatic WebP conversion
   - Responsive image sizing
   - CDN delivery

2. **Code Splitting**
   - Automatic route-based chunking
   - Tree-shaking of unused code

3. **Edge Functions**
   - Middleware execution at edge
   - Faster response times

## Analytics & Monitoring

### Google Analytics (Optional)

Add Google Analytics to `app/layout.tsx`:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Vercel Analytics

Vercel provides built-in Web Vitals analytics:
- View in Vercel Dashboard
- Monitor performance metrics
- Get alerts on issues

## Troubleshooting

### Images Not Showing

1. Check `/public/images/` exists
2. Verify image paths in `/lib/gallery-data.ts`
3. Clear browser cache
4. Restart dev server

### Styling Issues

1. Run `npm run build` locally to test
2. Check Tailwind CSS is properly imported
3. Clear `.next` directory: `rm -rf .next`
4. Reinstall: `npm install`

### Font Issues

1. Verify Crimson Text is loading from Google Fonts
2. Check `app/layout.tsx` has proper font variables
3. Clear browser cache

### Slow Performance

1. Optimize image sizes
2. Use Next.js Image component (already done)
3. Enable caching headers (Vercel does this automatically)
4. Monitor Lighthouse scores

## Updating After Deployment

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Vercel automatically redeploys
5. View deployment at Dashboard

## Adding New Images

To add new images after deployment:

1. Add image files to `/public/images/`
2. Update `/lib/gallery-data.ts` with new entries
3. Commit and push
4. Vercel automatically rebuilds and deploys

## Database Integration (Future Enhancement)

To add dynamic image management:

1. Set up Supabase, Firebase, or MongoDB
2. Create API routes in `/app/api/`
3. Replace hardcoded gallery data
4. Add admin dashboard for image management

## Security Best Practices

1. **Never commit sensitive data**
   - Use environment variables for secrets
   - Add `.env.local` to `.gitignore`

2. **Set security headers** (Vercel default)
   - X-Content-Type-Options
   - X-Frame-Options
   - Strict-Transport-Security

3. **Validate user input**
   - Already done for forms

4. **Regular updates**
   - Keep dependencies updated: `npm update`

## Custom Domain Setup

### With Namecheap, GoDaddy, etc.

1. Go to domain registrar
2. Set DNS records to:
   - CNAME: `cname.vercel-dns.com`
   - Or add nameservers from Vercel

3. Wait for DNS propagation (up to 48 hours)

4. Verify in Vercel Dashboard

## Monitoring Uptime

Vercel provides 99.95% uptime SLA. Monitor:
- Status Page: [vercel.com/status](https://vercel.com/status)
- Dashboard: Real-time deployment status
- Email alerts: Opt-in in Settings

## Scaling Considerations

This gallery handles:
- ✅ 100+ concurrent users easily
- ✅ Thousands of images
- ✅ Global CDN distribution
- ✅ Automatic scaling

For extreme scale:
- Add caching layers
- Implement image preprocessing
- Use Vercel's Advanced Tiers

## Cost Considerations

Vercel Free Plan includes:
- Unlimited deployments
- Unlimited bandwidth
- Up to 100 serverless function invocations/day
- Enough for most gallery sites

## Support & Resources

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org](https://nextjs.org)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
- Community: [GitHub Discussions](https://github.com/vercel/next.js/discussions)

---

Happy deploying! Your gallery will be live in minutes. 🚀
