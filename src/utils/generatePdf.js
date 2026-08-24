import { jsPDF } from 'jspdf';

export const RESUME_DATA = {
  name: 'ARBAJ KHAN',
  title: 'FULL STACK DEVELOPER',
  phone: '+91 9785589164',
  email: 'pathanarbaj03328@gmail.com',
  location: 'Chomu, Jaipur, Rajasthan - 303702',
  objective:
    'Full Stack Developer focused on building scalable, responsive web applications, now also training the next generation of developers in modern full-stack technologies.',
  experiences: [
    {
      role: 'MERN Stack & App Development Trainer',
      company: 'Samyank Computer Classes',
      period: 'July 2026 - Present',
      location: 'Chomu, RJ',
      bullets: [
        'Teaching a complete full-stack web development course covering the MERN stack (MongoDB, Express.js, React.js, Node.js).',
        'Conducting a full Python programming course alongside modern app development training.',
        'Mentoring students in building and deploying production-ready full stack web applications.',
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'TeamIndia Web Designer',
      period: 'Dec 2025 - June 2026',
      location: 'Jaipur, RJ',
      bullets: [
        'Developed end-to-end web applications using React.js and TypeScript for robust frontend architecture.',
        'Built and optimized scalable backend services and REST APIs using Node.js & Express.',
        'Designed and managed relational and NoSQL databases with MySQL, PostgreSQL, and MongoDB.',
        'Implemented responsive, mobile-first UI designs using HTML5, CSS3, and modern JavaScript.',
      ],
    },
    {
      role: 'React.js Developer',
      company: 'JDB Infotech',
      period: 'Oct 2024 - Sept 2025',
      location: 'Jaipur, RJ',
      bullets: [
        'Developed dynamic web applications using React.js and JavaScript (ES6+).',
        'Integrated REST APIs and managed application state using React Hooks.',
        'Optimized web performance, rendering cycles, and fixed bottlenecks using Chrome DevTools.',
      ],
    },
    {
      role: 'Front End Developer Intern',
      company: 'Azzunique Software',
      period: 'July 2024 - Sept 2024',
      location: 'Jaipur, RJ',
      bullets: [
        'Contributed to live frontend projects and improved UI responsiveness across all screen viewports.',
      ],
    },
  ],
  projects: [
    {
      name: 'Brewora Coffee Shop',
      tech: 'React.js, Tailwind CSS, E-Commerce',
      url: 'https://brewora-coffee-shop.netlify.app/',
      desc: 'Artisanal coffee roastery & cafe e-commerce store with bean discovery, brew guides, and cart checkout.',
    },
    {
      name: 'Lumera Beauty Brand',
      tech: 'React.js, Luxury UI/UX, Cosmetics',
      url: 'https://lumera-beauty-brand.netlify.app/',
      desc: 'Luxury skincare & beauty brand storefront featuring routine builder, shade selector, and reviews.',
    },
    {
      name: 'Greenora Plants',
      tech: 'React.js, Botanical E-Commerce',
      url: 'https://greenora-plants.netlify.app/',
      desc: 'Modern botanical nursery & plant store with care requirement filters and pot customizer.',
    },
    {
      name: 'ExamPro',
      tech: 'React.js, Node.js, Express, MongoDB',
      url: 'https://exampro-web.netlify.app/',
      desc: 'High-performance online examination & test management portal with automated timed evaluations.',
    },
    {
      name: 'Finora Finance',
      tech: 'React.js, TypeScript, Chart.js',
      url: 'https://finora-finance-web.netlify.app/',
      desc: 'Fintech financial portal with real-time loan EMI calculations, investment models, and APR charts.',
    },
    {
      name: "Sultan's Kitchen",
      tech: 'React.js, Restaurant, Orders',
      url: 'https://sultan-kitchen.netlify.app/',
      desc: 'Luxury culinary web application with interactive food menus and real-time table reservations.',
    },
    {
      name: 'Neuro Vision AI',
      tech: 'React.js, AI / Computer Vision',
      url: 'https://neuro-vision-ai.netlify.app/',
      desc: 'Computer vision telemetry dashboard visualizing real-time object detection and neural analytics.',
    },
    {
      name: 'Smash The Sear',
      tech: 'HTML5, CSS3, JavaScript',
      url: 'https://smash-the-sear.netlify.app/',
      desc: 'Modern burger restaurant website designed for high conversions and engaging customer ordering.',
    },
    {
      name: 'DGR Academy',
      tech: 'React.js, EdTech, Web Platform',
      url: 'https://dgracademy.com',
      desc: 'Educational academy management portal with course catalogs and admissions routing.',
    },
    {
      name: 'AK Portfolio',
      tech: 'React.js, Portfolio & Visualizer',
      url: 'https://ak-portfollio.netlify.app/',
      desc: 'Developer portfolio with live architecture visualizer, theme switcher, and direct WhatsApp contact.',
    },
    {
      name: 'Ludo Royal',
      tech: 'JavaScript, Game Physics & Logic',
      url: 'https://ludo-royal.netlify.app/',
      desc: 'Interactive multiplayer board game with authentic rules, randomized 3D dice physics, and turn logic.',
    },
    {
      name: 'Kinetic Atelier',
      tech: 'React.js, Digital Agency, Tech',
      url: 'https://kinetic-atelier-digital-flagships.netlify.app/',
      desc: 'International digital technology company flagship platform showcasing digital engineering solutions.',
    },
    {
      name: 'Restaurant Web App',
      tech: 'HTML5, CSS3, JavaScript',
      url: 'https://mk-restorants.netlify.app/',
      desc: 'Dynamic table booking, food catalog & kitchen order ticket management system with zero conflicts.',
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science (B.Sc) - 68.38%',
      school: 'Vinayak International College',
      year: '2020 - 2023',
      location: 'Chomu, Jaipur',
    },
    {
      degree: 'Senior Secondary Education - 64.00%',
      school: 'Government Sr. Sec. School',
      year: '2020',
      location: 'Chomu, Jaipur',
    },
  ],
  skills: [
    {
      category: 'Languages / Frameworks',
      items: 'React.js, Node.js, Express.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS',
    },
    {
      category: 'Databases',
      items: 'MongoDB, MySQL, PostgreSQL',
    },
    {
      category: 'Tools & Practices',
      items: 'RESTful APIs, GitHub, Postman, Responsive UI, Chrome DevTools, Debugging, State Management',
    },
  ],
  certifications: [
    'Rajasthan State Certificate in Information Technology (RS-CIT)',
  ],
};

/**
 * Generates an ATS-compliant, ultra-clean PDF with genuine clickable links.
 */
export function downloadResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 36;
  const contentWidth = pageWidth - margin * 2;
  let y = margin + 10;

  const checkPageBreak = (neededHeight) => {
    if (y + neededHeight > pageHeight - margin) {
      doc.addPage();
      y = margin + 10;
    }
  };

  // Header: Name & Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(15, 23, 42);
  doc.text(RESUME_DATA.name, pageWidth / 2, y, { align: 'center' });
  y += 18;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(99, 102, 241);
  doc.text(RESUME_DATA.title, pageWidth / 2, y, { align: 'center' });
  y += 15;

  // Contact Info with Clickable Links
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);

  const phoneText = RESUME_DATA.phone;
  const emailText = RESUME_DATA.email;
  const locText = RESUME_DATA.location;
  const contactLine = `${phoneText}  •  ${emailText}  •  ${locText}`;
  
  doc.text(contactLine, pageWidth / 2, y, { align: 'center' });

  const fullW = doc.getTextWidth(contactLine);
  const startX = (pageWidth - fullW) / 2;
  const phoneW = doc.getTextWidth(phoneText);
  const sep1W = doc.getTextWidth('  •  ');
  const emailW = doc.getTextWidth(emailText);

  // Phone Link
  doc.link(startX, y - 8, phoneW, 10, { url: 'tel:+919785589164' });
  // Email Link
  doc.link(startX + phoneW + sep1W, y - 8, emailW, 10, {
    url: 'mailto:pathanarbaj03328@gmail.com',
  });

  y += 16;

  const renderSectionHeader = (title) => {
    checkPageBreak(30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(99, 102, 241);
    doc.text(title, margin, y);
    y += 4;

    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.75);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
  };

  // Career Objective
  renderSectionHeader('CAREER OBJECTIVE');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const objLines = doc.splitTextToSize(RESUME_DATA.objective, contentWidth);
  doc.text(objLines, margin, y);
  y += objLines.length * 11 + 6;

  // Experience
  renderSectionHeader('EXPERIENCE');

  RESUME_DATA.experiences.forEach((exp) => {
    checkPageBreak(50);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(exp.period, pageWidth - margin, y, { align: 'right' });
    y += 12;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(79, 70, 229);
    doc.text(exp.company, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(exp.location, pageWidth - margin, y, { align: 'right' });
    y += 12;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);

    exp.bullets.forEach((b) => {
      checkPageBreak(20);
      doc.text('•', margin + 4, y);
      const bLines = doc.splitTextToSize(b, contentWidth - 14);
      doc.text(bLines, margin + 14, y);
      y += bLines.length * 10 + 2;
    });

    y += 6;
  });

  // Projects (ALL 13 Projects with Clickable Links)
  renderSectionHeader('PROJECTS (ALL VERIFIED & LIVE)');

  RESUME_DATA.projects.forEach((proj, idx) => {
    checkPageBreak(32);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    const numPrefix = `${idx + 1}. `;
    doc.text(`${numPrefix}${proj.name}`, margin, y);

    const nameW = doc.getTextWidth(`${numPrefix}${proj.name}`);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    const techText = ` | ${proj.tech}`;
    doc.text(techText, margin + nameW, y);

    const cleanUrl = proj.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(37, 99, 235);
    doc.text(cleanUrl, pageWidth - margin, y, { align: 'right' });

    const urlW = doc.getTextWidth(cleanUrl);
    doc.link(pageWidth - margin - urlW, y - 7, urlW, 9, { url: proj.url });
    doc.link(margin, y - 7, nameW, 9, { url: proj.url });

    y += 11;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    const pLines = doc.splitTextToSize(`• ${proj.desc}`, contentWidth - 6);
    doc.text(pLines, margin + 6, y);
    y += pLines.length * 9.5 + 4;
  });

  // Education
  renderSectionHeader('EDUCATION');

  RESUME_DATA.education.forEach((edu) => {
    checkPageBreak(25);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.degree, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(edu.year, pageWidth - margin, y, { align: 'right' });
    y += 11;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(79, 70, 229);
    doc.text(edu.school, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text(edu.location, pageWidth - margin, y, { align: 'right' });
    y += 12;
  });

  // Technical Skills
  renderSectionHeader('TECHNICAL SKILLS');

  RESUME_DATA.skills.forEach((sk) => {
    checkPageBreak(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    const catText = `${sk.category}: `;
    doc.text(catText, margin, y);

    const catW = doc.getTextWidth(catText);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const skillLines = doc.splitTextToSize(sk.items, contentWidth - catW);
    doc.text(skillLines, margin + catW, y);
    y += skillLines.length * 10 + 3;
  });

  // Certifications
  renderSectionHeader('CERTIFICATIONS');

  RESUME_DATA.certifications.forEach((cert) => {
    checkPageBreak(16);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    doc.text(`•  ${cert}`, margin, y);
    y += 12;
  });

  doc.save('Arbaj_Khan_Resume.pdf');
}
