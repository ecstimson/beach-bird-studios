# Contributing to Beach Bird Studios Website

## Deployment Policy - Git Only

**CRITICAL: All deployments must come from GitHub pushes only.**

### Preview Deployments
- Push to any branch (e.g., `design-system-consolidation`)
- Vercel automatically builds and deploys preview from Git
- Preview URL available in GitHub PR/commit status

### Production Deployments
- Merge to `main` branch
- Vercel automatically deploys from Git to production

### ❌ FORBIDDEN
- **NEVER** run `vercel deploy` from local machine
- **NEVER** run `vercel --prod` 
- **NEVER** use Vercel CLI for deployments
- **NEVER** deploy from local agents or scripts

### ✅ APPROVED
- Git push → Vercel builds automatically
- All deployments traced to Git commits
- Full audit trail maintained
- Consistent build environment

---

*This policy ensures deployment consistency and prevents environment drift.*