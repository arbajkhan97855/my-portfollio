import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Toast } from './components/Toast';
import { downloadResumePDF } from './utils/generatePdf';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('ak_portfolio_theme') || 'dark';
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('ak_portfolio_theme', nextTheme);
    showToast(`Switched to ${nextTheme === 'light' ? 'Light' : 'Dark'} Mode`, 'success');
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  /**
   * DIRECT ATS RESUME DOWNLOAD
   * Triggered immediately upon click with NO modal or popup.
   * Generates a pristine PDF with genuine clickable links.
   */
  const handleDownloadCV = () => {
    try {
      downloadResumePDF();
      showToast('Arbaj Khan Resume downloaded successfully!', 'success');
    } catch (err) {
      console.error('Error generating PDF resume:', err);
      showToast('Failed to generate PDF. Please reach out via WhatsApp.', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative selection:bg-indigo-500 selection:text-white font-sans antialiased">
      
      {/* Dynamic Grid Background Accent */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Navigation Bar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onDownloadCV={handleDownloadCV}
      />

      {/* Main Page Content */}
      <main className="relative z-10 flex flex-col">
        <Hero onDownloadCV={handleDownloadCV} />
        <About />
        <Skills />
        <Experience />
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onDownloadCV={handleDownloadCV}
        />
        <Services />
        <Education />
        <WhyWorkWithMe />
        <Contact
          onDownloadCV={handleDownloadCV}
          onShowToast={(msg, type) => showToast(msg, type)}
        />
      </main>

      {/* Footer */}
      <Footer onDownloadCV={handleDownloadCV} />

      {/* Interactive Project Architecture Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Persistent WhatsApp Floating Button */}
      <FloatingWhatsApp />

      {/* Notification Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

    </div>
  );
}

export default App;
