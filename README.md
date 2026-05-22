# SWAAGDOM

**Style, Swaggadishly.**

## What We're Building

SWAAGDOM is an AI-powered fashion platform for global fashion discovery and personal styling—built with intelligence and inspired by African design traditions.

### About SWAAGDOM
Swaagdom brings together premium technology and expressive culture to help every person discover style with confidence. We celebrate global diversity, design for inclusion, and keep the experience elegant, modern, and deeply human.

## 🌟 Features That Hit Different

### 🤖 AI That Understands You
No more generic recommendations. Our AI actually listens to what you want.
- **Natural Language**: Just describe what you're looking for in plain English
- **Context Matters**: We know "dinner with parents" needs a different vibe than "weekend brunch"
- **Culturally Aware**: Whether you're into K-fashion, Afrobeats style, or classic streetwear, we get it
- **Up-to-Date**: We track trends from fashion capitals worldwide in real-time

### 🔍 Discover Fashion Globally
Browse curated collections from brands worldwide.
- **International Brands**: Access fashion from different countries and cultures
- **Sustainable Options**: Filter for eco-conscious brands when you want them
- **Trend Discovery**: See what's emerging before it goes mainstream
- **Smart Search**: Find exactly what you need with intuitive filters

### 📈 Stay Ahead Of The Curve
Know what's next before everyone else.
- **Global Trend Intel**: Tokyo, Seoul, Lagos, London—all the fashion capitals
- **Color Psychology**: What your palette says about your vibe
- **Style Analytics**: Track your evolution from basic to iconic
- **AI Predictions**: We don't follow trends, we predict them

### 🏪 Shop Smarter, Not Harder
One platform. All the brands. Zero hassle.
- **Multi-Brand Checkout**: Cart across 50+ brands, pay once
- **Verified Reviews**: Real people, real fits
- **Size Confidence**: AI-powered fit predictions
- **Wishlist Magic**: Save it all, buy it when you're ready

### 👤 Your Style, Personalized
A profile that actually knows you.
- **Style DNA**: AI learns your aesthetic over time
- **Fit History**: Never forget a good look
- **Vibe Board**: Pinterest meets AI meets your closet
- **Notifications**: Never miss a drop or a deal
- **Dark Mode**: Because aesthetics matter everywhere

## 🚀 Experience The Revolution

Visit the live application: **[SWAAGDOM Platform](https://swaagi-platform.vercel.app)** 

**Try it now and see why they're calling it "the future of fashion." No cap.** 🔥

## 📱 What Early Users Are Saying

*"Finally, an AI that actually gets what I'm looking for. It's like having a stylist who listens."* - Beta user, Tokyo

*"I used to spend hours scrolling. Now I find what I need in minutes."* - Beta user, Lagos

*"This app actually understands different style cultures. That's refreshing."* - Beta user, NYC

---

## 💎 Join The Movement

**#Swaggadishly** is growing. Are you in?

- 🌍 **Global Community**: Style has no borders
- ✨ **Daily Inspiration**: Fresh looks, daily drops
- 🎯 **Real Results**: People are leveling up their fits
- 🚀 **Always Evolving**: New features, better AI, more drip

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks and context
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide Icons** - Beautiful icon library
- **Next Themes** - Dark/light mode support

### Backend (Ready for Integration)
- **FastAPI** - Python web framework
- **PostgreSQL** - Database for user data and preferences
- **Redis** - Caching and session management
- **OpenAI API** - AI-powered recommendations

### Deployment & Infrastructure
- **Vercel** - Frontend hosting and deployment
- **GitHub** - Version control and CI/CD
- **Docker** - Containerization for development

## 🏗 Project Structure

```
swaagi-platform/
├── 05-development/
│   ├── frontend/          # Next.js React application
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages and routes
│   │   ├── styles/        # Global styles and Tailwind config
│   │   ├── public/        # Static assets
│   │   └── utils/         # Utility functions
│   ├── backend/           # FastAPI Python backend
│   ├── ai-services/       # AI processing services
│   ├── database/          # Database schemas and migrations
│   └── docker-compose.yml # Development environment
├── 02-business-documents/ # Business strategy and planning
├── 06-funding/           # Investor materials and pitch deck
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/hexadigitall/swaagi-platform.git
   cd swaagi-platform
   ```

2. **Install dependencies**
   ```bash
   cd 05-development/frontend
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Full Stack Development

1. **Run the complete development environment**
   ```bash
   cd 05-development
   docker-compose -f docker-compose.dev.yml up
   ```

2. **Access services**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`
   - API Documentation: `http://localhost:8000/docs`

## 📄 Available Pages

- **Home** (`/`) - Landing page with platform introduction
- **AI Stylist** (`/style`) - Interactive AI fashion assistant
- **Discover** (`/discover`) - Browse curated collections and outfits
- **Trends** (`/trends`) - Fashion trend analytics and insights
- **Brands** (`/brands`) - Partner brand marketplace
- **Search** (`/search`) - Advanced fashion search
- **Profile** (`/profile`) - User dashboard and preferences
- **Favorites** (`/favorites`) - Saved items and wishlist
- **Cart** (`/cart`) - Shopping cart and checkout
- **Notifications** (`/notifications`) - Alerts and updates

## 🎨 Design Features

- **Fully Responsive** - Mobile-first design with tablet and desktop optimization
- **Accessibility** - WCAG 2.1 compliant with keyboard navigation and screen reader support
- **Performance** - Optimized with Next.js 14, image optimization, and code splitting
- **Dark Mode** - System preference detection with manual toggle
- **Animations** - Smooth micro-interactions using Framer Motion
- **Professional UI** - Modern design system with consistent spacing and typography

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and development process.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📈 Roadmap

- [ ] **Phase 1**: Core AI styling features and user onboarding
- [ ] **Phase 2**: Mobile app development (React Native)
- [ ] **Phase 3**: Advanced ML recommendations and virtual try-on
- [ ] **Phase 4**: Social features and community styling
- [ ] **Phase 5**: Marketplace expansion and brand partnerships

## 🔒 Privacy & Security

We take privacy seriously. All user data is encrypted and stored securely. We never sell personal information and only share data with explicit consent.

- **Data Encryption**: AES-256 encryption for sensitive data
- **Authentication**: Secure OAuth2 implementation
- **GDPR Compliant**: Full user data control and deletion rights
- **SOC2 Type II**: Enterprise security standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♀️ Get In Touch

- **Vibe With Us**: [community.swaagi.com](https://community.swaagi.com)
- **Hit Us Up**: hello@swaagi.com
- **Join The Discord**: [SWAAGDOM Nation](https://discord.gg/swaagi)
- **Report Issues**: [GitHub](https://github.com/hexadigitall/swaagi-platform/issues)

## 👥 The Squad

Built by people who get it. For people who get it.

**The SWAAGDOM Team:**
- 🤖 AI that understands culture
- 🎨 Design that doesn't compromise
- 🌍 Global perspective, local vibes
- 💚 Sustainable fashion champions

---

**Style, Swaggadishly.** ✨

---

*Powered by culture. Built by [Hexadigitall](https://hexadigitall.com). Made for everyone with a point of view.*

**#Swaggadishly** | **#DrippedByAI** | **#FindYourSwag** | **#IconicEveryday**

---

## 📝 Rebranding Note

This project was previously known as "DARA" and "StyleAI" during early development phases. As of November 2025, the platform has been officially rebranded to **SWAAGDOM** to better reflect our core mission: delivering an AI-powered fashion platform that helps everyone find their perfect style. All references throughout the codebase, documentation, configuration, and assets have been updated to use the SWAAGDOM branding consistently.

**SWAAGDOM** is an AI-powered fashion platform that celebrates global diversity while drawing inspiration from African design traditions.

## 🗣 Brand Voice Guide (Concise)

### Voice Attributes
- Premium and expressive
- Culturally grounded and globally fluent
- Confident, modern, and inclusive

### Tone: Do / Don't
- ✅ **Do:** Write with clarity, warmth, and editorial polish.
- ✅ **Do:** Celebrate individuality and cultural diversity respectfully.
- ✅ **Do:** Keep AI language helpful, not mechanical.
- ❌ **Don't:** Use forced slang, gimmicks, or caricatured cultural references.
- ❌ **Don't:** Sound exclusive, dismissive, or trend-chasing.

### Using **Swaggadishly**
- Use **Swaggadishly** as a campaign/editorial tone marker, not as the product name.
- Best placements: taglines, campaign headlines, social captions, and expressive CTAs.
- Preferred construction: **"Style, Swaggadishly."**

### Example Copy Snippets
- "Discover global style, curated with intelligence and worn Swaggadishly."
- "From Lagos to London, style intelligence for every expression."
- "Swaagdom helps you dress with confidence—boldly, elegantly, Swaggadishly."
