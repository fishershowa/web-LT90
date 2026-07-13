# LT90 Platform - Quick Start Guide

## 🚀 Get Started in 2 Minutes

### 1. Download & Install
```bash
# If you haven't already
cd your-projects-folder

# Install dependencies
pnpm install
# or: npm install / yarn install
```

### 2. Run Development Server
```bash
pnpm dev
# Server starts at http://localhost:3000
```

### 3. Explore the Platform

**As a Guest:**
1. Go to http://localhost:3000
2. See the landing page with countdown timer
3. Click "DROPS", "ARCHIVO", "CORE" to browse
4. Click "ENTRAR" to go to login

**As a Member (Socio):**
1. On login page, enter any email and password
2. Click "Entrar" to login (mock auth)
3. Notice navbar now shows "CLUB", "MI CUENTA", "SALIR"
4. Click "CLUB" to see exclusive member portal
5. Click "MI CUENTA" to see your profile
6. Click "SALIR" to logout

**As Admin:**
1. Go to http://localhost:3000/admin
2. See the complete LT90 Control Center
3. Navigate through sidebar options
4. Explore Dashboard, Drops, Core, Miembros, etc.

---

## 📍 Important Routes

| Route | Description | Auth Required |
|-------|-------------|---|
| `/` | Landing page with timer | No |
| `/drop` | Current WORLD collection | No |
| `/core` | Permanent core collection | No |
| `/archive` | Historical drops archive | No |
| `/account` | Login & profile page | No |
| `/club` | Members only portal | Yes |
| `/admin` | Admin control center | Admin only |

---

## 🧑‍💻 For Developers

### Project Structure
```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing
│   ├── drop/page.tsx      # Drops
│   ├── core/page.tsx      # Core
│   ├── archive/page.tsx   # Archive
│   ├── club/page.tsx      # Club portal
│   ├── account/page.tsx   # Login
│   ├── admin/page.tsx     # Admin
│   └── layout.tsx         # Root layout
│
├── components/            # React components
│   ├── navigation.tsx     # Main navbar
│   ├── hero.tsx          # Hero section
│   ├── collection.tsx    # Products
│   ├── admin/            # Admin components
│   └── ...
│
├── lib/
│   └── auth-context.tsx  # Authentication & state
│
└── Documentation
    ├── README.md                # Full documentation
    ├── NAVIGATION_GUIDE.md      # Navigation guide
    ├── PROJECT_STATUS.md        # Project details
    └── QUICK_START.md          # This file
```

### Adding a New Page

1. Create folder in `app/new-page/`
2. Create `page.tsx` inside:
```tsx
export default function NewPage() {
  return (
    <main className="bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1>Your Content Here</h1>
      </div>
    </main>
  )
}
```
3. Add link in `components/navigation.tsx`
4. Build: `pnpm build`

### Authentication Setup

The auth is currently a mock. To connect a real backend:

1. Edit `lib/auth-context.tsx`
2. Replace the `login` function with real API call:
```tsx
const login = async (email: string, password: string) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
  const user = await response.json()
  setUser(user)
  setRole(user.role)
}
```

---

## 🎨 Design System

### Colors
- **Background**: `#050505` (absolute black)
- **Text**: White with opacity (white/60, white/10, etc.)
- **Accents**: Blue, Gold, Red, Green

### Using in Components
```tsx
// Classes follow Tailwind naming
<div className="bg-black text-white">
  <p className="text-white/60">Muted text</p>
  <button className="bg-white text-black hover:bg-white/90">
    Action
  </button>
</div>
```

### Spacing
- Use standard Tailwind: `p-4`, `mx-6`, `gap-8`
- Add `pt-16` to account for fixed navbar

---

## 🔧 Common Tasks

### Install a Package
```bash
pnpm add package-name
# Automatically persists to node_modules
```

### Build for Production
```bash
pnpm build
pnpm start
```

### Format Code
```bash
# If you have prettier configured
pnpm format
```

### Check for Errors
```bash
# TypeScript check
pnpm type-check
```

---

## 📝 Test Credentials

**Login Page Test:**
- Email: `test@lt90.com` (any email works)
- Password: `password123` (any password works)

Both will successfully log you in (mock authentication).

---

## 🌐 Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Then visit Vercel and connect this repo
# Or use Vercel CLI:
vercel

# It will automatically deploy your Next.js app
```

---

## 📚 Learn More

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://typescriptlang.org

---

## ❓ Troubleshooting

**Port 3000 already in use?**
```bash
pnpm dev --port 3001
```

**Need to reset auth state?**
- Refresh the page to reset to guest user

**Styles not applying?**
- Restart dev server with `Ctrl+C` then `pnpm dev`

**Build failing?**
- Delete `.next` folder: `rm -rf .next`
- Run `pnpm build` again

---

## ✨ What's Next?

1. **Read the full docs** → See `README.md`
2. **Explore the navigation** → See `NAVIGATION_GUIDE.md`
3. **Check the project status** → See `PROJECT_STATUS.md`
4. **Start developing** → Modify components and add features

---

## 🎯 Key Features You Have

✅ Fully navigable app  
✅ Authentication system  
✅ Role-based access control  
✅ Admin dashboard  
✅ Club portal  
✅ Premium design  
✅ Responsive layout  
✅ Production ready  

---

**Ready to code? Start with `pnpm dev` and happy building! 🚀**

---

Version: 1.0.0 | LT90 Platform
