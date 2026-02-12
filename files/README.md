# BR Consultants UK Website

Professional consulting website with animated gold and silver background paths.

## 🚀 Quick Start (Windows)

### Step 1: Open Command Prompt or PowerShell
Press `Win + R`, type `cmd`, press Enter

### Step 2: Navigate to the project folder
```cmd
cd "C:\Brett Documents\Claude Output\br-consultants-uk"
```

### Step 3: Install dependencies
```cmd
npm install
```

This will take 2-3 minutes. You'll see a progress bar.

### Step 4: Add your team photos
Copy these files into the `public` folder:
- `Brett.jpg` → `C:\Brett Documents\Claude Output\br-consultants-uk\public\Brett.jpg`
- `ranjit.jpg` → `C:\Brett Documents\Claude Output\br-consultants-uk\public\ranjit.jpg`

### Step 5: Start the development server
```cmd
npm run dev
```

### Step 6: Open in browser
The terminal will show a URL like: `http://localhost:5173`

Press `Ctrl` and click the link, or copy it to your browser.

## ✨ Features

- **Gold & Silver Animated Paths** - Flowing background animations in gold (#D4AF37) and silver (#C0C0C0)
- **Dark Charcoal Theme** - Professional dark background (#1a1a1a) with gold accents
- **Smooth Animations** - Powered by Framer Motion
- **Fully Responsive** - Works on desktop, tablet, and mobile
- **Modern Stack** - React 18, TypeScript, Tailwind CSS, Vite

## 📁 Project Structure

```
br-consultants-uk/
├── src/
│   ├── App.tsx              ← Main application
│   ├── main.tsx             ← Entry point
│   └── index.css            ← Global styles
├── components/
│   └── ui/
│       └── background-paths.tsx  ← Gold/silver animations
├── lib/
│   └── utils.ts             ← Helper functions
├── public/
│   ├── Brett.jpg            ← Add your photo here
│   └── ranjit.jpg           ← Add your photo here
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  charcoal: { DEFAULT: '#1a1a1a' },
  gold: { DEFAULT: '#D4AF37' },
  silver: { DEFAULT: '#C0C0C0' }
}
```

### Update Content
Edit `src/App.tsx` to change:
- Service descriptions
- Team bios
- Contact information
- Section text

### Modify Background Paths
Edit `components/ui/background-paths.tsx` to adjust:
- Animation speed (duration values)
- Path colors (color prop)
- Opacity (strokeOpacity values)

## 🏗️ Build for Production

```cmd
npm run build
```

This creates a `dist` folder with optimized files ready to deploy.

## 🌐 Deploy

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to vercel.com
3. Import your repository
4. Vercel auto-detects Vite and deploys

### Option 2: Netlify
1. Push your code to GitHub
2. Go to netlify.com
3. New site from Git
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: Manual (Any Web Host)
1. Run `npm run build`
2. Upload the entire `dist` folder to your web server
3. Configure your domain

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server (fast!)
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **shadcn/ui** - Component architecture

## 📝 Available Commands

```cmd
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## ⚙️ System Requirements

- **Node.js** 18 or higher
- **npm** 9 or higher
- **Windows 10/11** (tested on Windows 11)

## 🆘 Troubleshooting

### "npm is not recognized"
Node.js is not installed. Download from: https://nodejs.org/

### "Cannot find module"
Run `npm install` again.

### Photos not showing
Make sure `Brett.jpg` and `ranjit.jpg` are in the `public` folder.

### Port 5173 already in use
Change the port in `vite.config.ts` or stop the other process.

## 📧 Contact

- Brett: brett@brconsultantsuk.com
- Ranj: ranj@brconsultantsuk.com
- General: enquiries@brconsultantsuk.com

---

**Built with ❤️ for BR Consultants UK**
