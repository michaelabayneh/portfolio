# Michael Abayneh - Portfolio Website

A modern, professional portfolio website built with Next.js, Three.js, and Tailwind CSS, showcasing the work and skills of Michael Abayneh, a full-stack web developer and graduate of Woldia University.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **3D Elements**: Interactive Three.js animations and 3D graphics
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **Interactive**: Smooth scrolling, hover effects, and engaging user interactions
- **Professional Sections**:
  - Hero section with 3D animated sphere
  - About section with personal background
  - Skills showcase with animated progress bars
  - Featured projects gallery
  - Contact form with social links

## 🛠️ Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd michael-abayneh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section with 3D elements
│   │   ├── About.tsx           # About section
│   │   ├── Skills.tsx          # Skills showcase
│   │   ├── Projects.tsx        # Projects gallery
│   │   ├── Contact.tsx         # Contact form
│   │   ├── Footer.tsx          # Footer component
│   │   └── LoadingSpinner.tsx  # Loading component
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  },
}
```

### Content
Update personal information in the respective components:
- `Hero.tsx` - Name and introduction
- `About.tsx` - Personal background and education
- `Skills.tsx` - Technical skills and proficiency levels
- `Projects.tsx` - Portfolio projects
- `Contact.tsx` - Contact information and social links

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Performance Features

- **Next.js App Router**: Latest Next.js architecture
- **Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Lazy Loading**: Components load as needed
- **SEO Optimized**: Meta tags and structured data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Michael Abayneh

Michael Abayneh is a passionate full-stack web developer and graduate of Woldia University. He specializes in modern web technologies including React, Next.js, Node.js, and has a keen interest in creating innovative, user-centered web applications.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- Email: michael.abayneh@email.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ by Michael Abayneh