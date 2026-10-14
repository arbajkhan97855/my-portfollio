import Brewora from "../images/Brewora Coffee.png"
import LUMERA from "../images/LUMERA BEUTY SHOP.png"
import GREENORA from "../images/GREENORA PLANT.png"
import EXAMPRO from "../images/EXAMPRO.png"
import FINORAFINANCE from "../images/FINORA FINANCE.png"
import NEUROAI from "../images/NEURO AI.png"
import SULTANKITCHEN from "../images/SULTAN KITCHEN.png"
import SMASHTHESEAR from "../images/SMASH THE SEAR.png"
import DGRACADEMY from "../images/DGR ACADEMY.png"
import PORTFOLLIO from "../images/PORTFOLLIO.png"
import ROYAYLUDO from "../images/ROYAL LUDO.png"
import KINETIC from "../images/KINETIC.png"
import MKRESTAURANT from "../images/MK RESTAURANT.png"

export const PORTFOLIO_PROJECTS = [
  {
    id: 'brewora-coffee-shop',
    number: '01',
    title: 'Brewora Coffee Shop',
    category: 'E-Commerce / Food & Beverage',
    filterCategories: ['all', 'e-commerce', 'react', 'business'],
    featured: true,
    imageUrl: Brewora,
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive UI', 'Cart Logic'],
    liveUrl: 'https://brewora-coffee-shop.netlify.app/',
    badge: '★ COFFEE SHOP',

  },
  {
    id: 'lumera-beauty-brand',
    number: '02',
    title: 'Lumera Beauty Brand',
    category: 'E-Commerce / Luxury Cosmetics',
    filterCategories: ['all', 'e-commerce', 'react', 'business'],
    featured: true,
    imageUrl: LUMERA,
    tech: ['React.js', 'Tailwind CSS', 'Modern UI/UX', 'Framer Motion', 'JavaScript'],
    liveUrl: 'https://lumera-beauty-brand.netlify.app/',
    badge: '★ BEAUTY SHOP',
  },
  {
    id: 'greenora-plants',
    number: '03',
    title: 'Greenora Plants',
    category: 'E-Commerce / Botanical Store',
    filterCategories: ['all', 'e-commerce', 'react', 'business'],
    featured: true,
    imageUrl: GREENORA,
    tech: ['React.js', 'Tailwind CSS', 'Responsive UI', 'State Management', 'JavaScript'],
    liveUrl: 'https://greenora-plants.netlify.app/',
    badge: '★ BOTANICAL & NURSERY',
  },
  {
    id: 'exampro',
    number: '04',
    title: 'ExamPro — Online Assessment Engine',
    category: 'Full Stack / EdTech',
    filterCategories: ['all', 'full-stack', 'react', 'education'],
    featured: false,
    imageUrl: EXAMPRO,
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    liveUrl: 'https://exampro-web.netlify.app/',
    badge: 'EXAMINATION',

  },
  {
    id: 'finora-finance',
    number: '05',
    title: 'Finora Finance',
    category: 'Finance / Analytics',
    filterCategories: ['all', 'finance', 'business', 'full-stack', 'react'],
    featured: false,
    imageUrl: FINORAFINANCE,
    tech: ['React.js', 'TypeScript', 'Node.js', 'Chart.js', 'CSS3'],
    liveUrl: 'https://finora-finance-web.netlify.app/',
    badge: 'FINTECH',
  },
  {
    id: 'sultans-kitchen',
    number: '06',
    title: "Sultan's Kitchen",
    category: 'Restaurant',
    filterCategories: ['all', 'restaurant', 'business', 'react', 'e-commerce'],
    featured: false,
    imageUrl: SULTANKITCHEN,
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'],
    liveUrl: 'https://sultan-kitchen.netlify.app/',
    badge: 'RESTAURANT',
  },
  {
    id: 'neuro-vision-ai',
    number: '07',
    title: 'Neuro Vision AI',
    category: 'AI / Computer Vision',
    filterCategories: ['all', 'ai', 'full-stack', 'react'],
    featured: false,
    imageUrl: NEUROAI,
    tech: ['React.js', 'Node.js', 'REST APIs', 'CSS Grid', 'WebSockets'],
    liveUrl: 'https://neuro-vision-ai.netlify.app/',
    badge: 'AI',
  },
  {
    id: 'smash-the-sear',
    number: '08',
    title: 'Smash The Sear',
    category: 'Burger Shop / Food Shop',
    filterCategories: ['all', 'restaurant', 'business'],
    featured: false,
    imageUrl: SMASHTHESEAR,
   
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    liveUrl: 'https://smash-the-sear.netlify.app/',
    badge: 'BURGER BRAND',
    
  },
  {
    id: 'dgr-academy',
    number: '09',
    title: 'DGR Academy',
    category: 'Education / EdTech',
    filterCategories: ['all', 'education', 'full-stack'],
    featured: false,
    imageUrl: DGRACADEMY,
    
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Responsive Design'],
    liveUrl: 'https://dgracademy.com',
    badge: 'EDTECH',
    
  },
  {
    id: 'ak-portfolio',
    number: '10',
    title: 'AK Portfolio',

    category: 'Portfolio / Core',
    filterCategories: ['all', 'full-stack', 'react'],
    featured: false,
    imageUrl: PORTFOLLIO,
    
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'React.js', 'IntersectionObserver'],
    liveUrl: 'https://ak-portfollio.netlify.app/',
    badge: 'PORTFOLLIO',
    
  },
  {
    id: 'ludo-royal',
    number: '11',
    title: 'Ludo Royal',
    category: 'Gaming / Interactive Logic',
    filterCategories: ['all', 'game', 'react'],
    featured: false,
    imageUrl: ROYAYLUDO,
    
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic', 'DOM Physics'],
    liveUrl: 'https://ludo-royal.netlify.app/',
    badge: 'GAME ENGINE',
   
  },
  {
    id: 'kinetic-atelier',
    number: '12',
    title: 'Kinetic Atelier',
    category: 'Technology / International Company',
    filterCategories: ['all', 'business', 'full-stack', 'react'],
    featured: false,
    imageUrl: KINETIC,
    tech: ['React.js', 'JavaScript', 'CSS3', 'Responsive UI'],
    liveUrl: 'https://kinetic-atelier-digital-flagships.netlify.app/',
    badge: 'TECH AGENCY',
  },
  {
    id: 'restaurant-web-app',
    number: '13',
    title: 'Restaurant Web App',
    category: 'Restaurant',
    filterCategories: ['all', 'restaurant', 'business'],
    featured: false,
    imageUrl: MKRESTAURANT,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid'],
    liveUrl: 'https://mk-restorants.netlify.app/',
    badge: 'RESTAURANT',
   
  },


];
