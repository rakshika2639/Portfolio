# 🌟 Portfolio Website

A modern, responsive, and interactive portfolio website featuring a global visitor counter, dark-themed UI, and mobile-optimized hamburger navigation.

## ✨ Features

- **Global Visitor Counter**: Real-time tracking of worldwide visitors using CountAPI integration on the homepage
- **Firebase Integration**: Database support for storing and retrieving visitor statistics
- **Fully Responsive Design**: 
  - Desktop view with sidebar navigation
  - Tablet view with collapsed sidebar
  - Mobile view with hamburger menu toggle
  - Optimized for all screen sizes (320px - 1400px+)
- **Mobile-Friendly Hamburger Menu**: Hidden navigation that appears on click for mobile/tablet devices
- **Dark-Themed UI**: Modern dark mode design with neon green accents (#00ffa7) and GitHub blue (#58a6ff)
- **Smooth Animations**: Transitions and hover effects for better user experience
- **Safe Area Support**: Viewport-fit=cover for notch and safe area compatibility on mobile devices

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Media Queries, CSS Variables, Animations
- **JavaScript (ES5+)**: DOM manipulation, event handling, hamburger toggle
- **Firebase Realtime Database v9 (Compat SDK)**: Visitor count storage
- **CountAPI**: Free REST API for global visitor tracking
- **Font Awesome Icons**: Social media and UI icons

## 📁 Project Structure

```
Portfolio Website/
├── index.html              # Home page with terminal UI and visitor counter
├── about.html              # Profile page with bio and skills
├── projects.html           # Showcase of projects
├── services.html           # Services offered
├── experiences.html        # Work experience timeline
├── education.html          # Education details
├── certifications.html      # Certifications and credentials
├── why-me.html             # Unique value proposition
├── contact.html            # Contact form and information
├── comments.html           # Comments/feedback section
├── stats.json              # Statistics data
├── package.json            # Project metadata
├── assets/
│   ├── css/
│   │   └── responsive.css  # Mobile responsiveness styles (media queries)
│   ├── js/
│   │   └── nav-toggle.js   # Hamburger menu toggle controller
│   └── images/
│       └── cyber girl.avif # Profile image
└── README.md               # This file
```

## 📱 Responsive Breakpoints

| Screen Size | Behavior |
|---|---|
| **>992px** (Desktop) | Full sidebar navigation (280px width), normal layout |
| **768px - 992px** (Tablet) | Collapsed sidebar (90px), icon-only navigation |
| **<768px** (Mobile) | Hamburger menu, top navigation bar, stacked layout |
| **<420px** (Small Mobile) | Optimized spacing and typography for very small screens |

## 🚀 Key Features Breakdown

### Global Visitor Counter
- Tracks unique visitors worldwide
- Displayed on the index.html homepage
- Integrated with CountAPI for real-time counting
- Firebase database for persistent storage

### Hamburger Menu System
- Mobile-only toggle button
- Smooth slide-down animation
- Closes on navigation link click
- Auto-closes when clicking outside
- Stores state during session

### Logo/Digital Footprint Hide-Show
- Logo section hidden on mobile by default
- Clicking hamburger menu reveals logo and digital footprints
- Smooth fade transitions
- Includes visitor counter and portfolio branding

### Mobile Optimization
- Single-column layouts on small screens
- Optimized typography with clamp() for fluid scaling
- Safe area padding for notch devices
- Touch-friendly button sizes (44px minimum)
- Fast loading with minimal JavaScript

## 📄 Pages Overview

| Page | Purpose |
|---|---|
| `index.html` | Landing page with intro terminal UI and visitor counter |
| `about.html` | About me section with profile, skills, and contact icons |
| `projects.html` | Portfolio of completed projects |
| `services.html` | Services offered and expertise areas |
| `experiences.html` | Work history and experience timeline |
| `education.html` | Educational background and qualifications |
| `certifications.html` | Professional certifications and badges |
| `why-me.html` | Unique selling points and differentiation |
| `contact.html` | Contact form and communication channels |
| `comments.html` | Visitor feedback and testimonials |

## 🎨 Design System

### Color Palette
- **Primary Accent**: `#00ffa7` (Neon Green) - Hover states, active elements
- **Secondary Accent**: `#58a6ff` (GitHub Blue) - Links, secondary interactions
- **Dark Background**: `#0d1117` - Main background
- **Surface**: `#161b22` - Cards and containers
- **Text**: `#c9d1d9` - Primary text

### Typography
- **Font Family**: System-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial
- **H1**: Responsive 1.6rem - 2.6rem (clamp)
- **H2**: Responsive 1.25rem - 2rem (clamp)
- **Body**: Responsive 0.9rem - 1.05rem (clamp)

## 🔧 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/rakshika2639/Portfolio.git
cd Portfolio
```

2. Open in browser:
   - Double-click `index.html`, or
   - Use a local server (recommended):
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. Mobile testing:
   - Use Chrome DevTools (`F12` > Toggle Device Toolbar `Ctrl+Shift+M`)
   - Or scan QR code from GitHub pages link on your phone

## 🔌 Firebase Setup (Optional)

If you want to modify visitor counter:

1. Create Firebase project at [firebase.google.com](https://firebase.google.com)
2. Get your config and replace in `index.html`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 📊 Visitor Tracking

The portfolio uses two visitor counting methods:

1. **CountAPI** (Public): Free REST API for global counting
   - Endpoint: `https://api.countapi.xyz/hit/{namespace}/{key}`
   - No authentication required

2. **Firebase** (Optional): For more detailed analytics
   - Realtime database support
   - Persistent storage
   - Historical data tracking

## 🎯 Hamburger Menu Implementation

Located in `assets/js/nav-toggle.js`:
- Toggles `.nav-open` class on navigation menu
- Toggles `.logo-open` class on logo section
- Closes on link clicks and outside clicks
- Works with event delegation for dynamic links

## 📱 Testing on Mobile

### Using Chrome DevTools:
1. Open DevTools (`F12`)
2. Toggle Device Toolbar (`Ctrl+Shift+M` or `Cmd+Shift+M`)
3. Test different device presets:
   - iPhone 12/13
   - Samsung Galaxy
   - iPad
   - Custom dimensions

### Key things to verify:
- ✅ Hamburger button appears on mobile
- ✅ Navigation menu slides down smoothly
- ✅ Logo section shows/hides with hamburger click
- ✅ Single-column layout on small screens
- ✅ Visitor counter displays correctly
- ✅ No horizontal scrolling or layout shift

## 🚀 Deployment

The portfolio is deployed on GitHub Pages:
- **URL**: https://rakshika2639.github.io/Portfolio/
- **Repository**: https://github.com/rakshika2639/Portfolio

To update:
```bash
git add -A
git commit -m "Description of changes"
git push origin main
```

Changes will be live within seconds after push.

## 🔄 Recent Updates

- ✅ Fixed desktop layout regression in responsive.css
- ✅ Hamburger menu fully functional on mobile
- ✅ Logo hide/show with hamburger toggle
- ✅ Global visitor counter integration
- ✅ Firebase v9 compat SDK integration
- ✅ Mobile-first responsive design
- ✅ Safe area support for notch devices

## 📝 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio as inspiration for your own!

## 📧 Contact

- **Email**: [Add your email]
- **GitHub**: https://github.com/rakshika2639
- **Portfolio**: https://rakshika2639.github.io/Portfolio/

## � Resources & References

- **Project Inspiration**: https://roadmap.sh/projects/portfolio-website
- **Live Demo**: https://rakshika2639.github.io/Portfolio/
- **Repository**: https://github.com/rakshika2639/Portfolio

## �📄 License

This project is open source and available under the MIT License.

---

**Last Updated**: February 3, 2026 | **Version**: 2.0 (Mobile & Visitor Counter)
