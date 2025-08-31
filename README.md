# Bikurim Vegan Website - React TypeScript with CSV Content Management

A modern, bilingual (Hebrew RTL/English) React TypeScript website for Bikurim vegan products with **parent-friendly CSV editing** and **automatic GitHub Pages deployment**.

## 🚀 **LIVE WEBSITE**
**Visit: https://deedeeharris.github.io/bikurimvegan/**

✅ **Fully deployed and functional**  
🔄 **Auto-deploys on every Git push**  
💰 **Completely free hosting**

## 🎉 **Key Features**

### 📝 **CSV-Based Content Management** 
**🎯 Perfect for non-technical parents!**
- **Edit products in Excel**: `public/data/products.csv`
- **Edit website text in Excel**: `public/data/content.csv`  
- **No coding required** - just save CSV, push to GitHub, and changes go live!
- **Real-time updates** - changes appear on the website after deployment

### 🔄 **Automatic GitHub Pages Deployment**
- **Push to main branch** → website updates automatically
- **No manual deployment** needed
- **Free hosting forever** via GitHub Pages
- **Built-in CI/CD** with GitHub Actions

### 📱 **5 Complete Pages with Real Content**
- **Homepage** - Real Bikurim hero content: "Artisan Almond Milk Yogurt & Nut Cheeses"
- **About** - Authentic Dafna's story (2-year development journey)
- **Shop** - 7 real products with working category filters
- **Product Details** - Real descriptions, ingredients, multiple images support
- **Contact** - Real contact info (Dafna: 054-533-1920, Khatiya: 054-525-0219)

### 🌍 **Complete Bilingual Support**
- **Hebrew (RTL)** + **English** with authentic translations
- Language toggle in header
- RTL-aware layouts and components
- All content managed via CSV in both languages

### 📊 **7 Authentic Bikurim Products**
All products with real descriptions, ingredients, and pricing:
- **Almond Cheese - Mild** (₪35)
- **Cashew Spread** (₪28) 
- **Vegan Butter** (₪32)
- **Almond Yogurt - Plain** (₪22)
- **Vegan Parmesan** (₪42)
- **Almond Yogurt - Vanilla** (₪24)

## 🛠 **Tech Stack**
- **React 19** + **TypeScript** (latest)
- **Vite 7** (lightning-fast builds)  
- **Tailwind CSS** (responsive design)
- **shadcn/ui** (accessible components)
- **React Router v7** (smooth navigation)
- **PapaParse** (CSV data management)
- **GitHub Actions** (auto-deployment)
- **GitHub Pages** (free hosting)

## 🚀 **Quick Start - Local Development**

### Prerequisites
- Node.js 18+ installed
- Git installed

### Setup
```bash
# Clone the repository
git clone https://github.com/deedeeharris/bikurimvegan.git
cd bikurimvegan

# Install dependencies
npm install

# Start development server
npm run dev
```

**Local URL**: `http://localhost:5173`

## 📝 **How to Edit Content (For Parents)**

### **Editing Products** 
1. Open `public/data/products.csv` in Excel or Google Sheets
2. Edit any product information:
   - Names, descriptions (English & Hebrew)
   - Images, ingredients, pricing
   - Categories and nutrition facts
3. Save as CSV format
4. Push to GitHub (see deployment steps below)

### **Editing Website Text**
1. Open `public/data/content.csv` in Excel or Google Sheets  
2. Edit any website content:
   - Homepage text, About page content
   - Contact information
   - All bilingual text
3. Save as CSV format
4. Push to GitHub

### **CSV File Structure**
- **Row 1**: Column headers (don't change these)
- **Rows 2+**: Your content data
- **Languages**: `_en` columns for English, `_he` columns for Hebrew
- **Images**: Use `/images/products/filename.jpg` format

## 🔄 **Deployment Process**

### **Auto-Deployment (Recommended)**
1. **Make changes** to CSV files or code
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update products/content"
   git push
   ```
3. **Wait 2-3 minutes** - GitHub Actions automatically builds and deploys
4. **Visit website** - changes are live!

### **Monitor Deployment**
- **Actions tab**: https://github.com/deedeeharris/bikurimvegan/actions
- **Live site**: https://deedeeharris.github.io/bikurimvegan/

## 📱 **Mobile Responsive**
Perfectly responsive on all devices:
- **Mobile phones** (320px+)
- **Tablets** (768px+)  
- **Desktop** (1024px+)
- **Large screens** (1400px+)

## 🎨 **Professional Features**
- ✅ **Enhanced loading animations**
- ✅ **Hover effects and transitions**
- ✅ **Green Bikurim brand theme**
- ✅ **Accessible form controls**
- ✅ **Error handling and loading states**
- ✅ **Scroll-to-top navigation**
- ✅ **Working category filters**
- ✅ **Multiple images per product**

## 🔧 **Development Commands**

### **Local Development**
```bash
npm run dev          # Start development server (localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Check code quality
```

### **Git Workflow**
```bash
# Check status
git status

# Add changes  
git add .

# Commit with message
git commit -m "Your update description"

# Push to deploy
git push
```

## 🗂 **Project Structure**
```
bikurimvegan/
├── public/
│   ├── data/
│   │   ├── products.csv      # Product data (edit in Excel)
│   │   └── content.csv       # Website text (edit in Excel)
│   └── images/
│       └── products/         # Product images
├── src/
│   ├── components/           # React components
│   ├── pages/               # Website pages
│   ├── hooks/               # Custom React hooks
│   └── contexts/            # Language context
├── .github/
│   └── workflows/           # GitHub Actions deployment
├── old/                     # Unused files (archived)
└── [config files]
```

## 🔧 **Troubleshooting**

### **Local Development Issues**
```bash
# Clear cache and restart
rm -rf node_modules/.vite
rm -rf dist
npm run dev
```

### **Deployment Not Working**
1. Check GitHub Actions tab for errors
2. Ensure CSV files are properly formatted
3. Verify all images exist in `/public/images/products/`

### **CSV Editing Issues**
- Always save as CSV format (not Excel .xlsx)
- Don't change column headers in row 1
- Use forward slashes for image paths: `/images/products/file.jpg`
- Ensure Hebrew text displays correctly when saved

## 💡 **Features for Parents**
- 📝 **Edit everything in Excel** - No coding knowledge needed
- 🔄 **Automatic deployment** - Push to GitHub, site updates
- 💰 **Free forever** - GitHub Pages hosting costs nothing
- 📱 **Mobile perfect** - Looks great on all devices
- 🌍 **Bilingual ready** - Hebrew and English support
- ⚡ **Super fast** - Modern React performance

## 🎯 **Next Steps**
1. **Edit CSV files** to customize your content
2. **Push changes** to see them live
3. **Share the website** with customers: https://deedeeharris.github.io/bikurimvegan/

---
**🎉 Your professional vegan website is live and ready to use!**

*Built with ❤️ using React 19, TypeScript, and modern web technologies*