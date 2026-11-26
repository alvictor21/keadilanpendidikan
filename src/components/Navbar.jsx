import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Sparkles, Scale, GraduationCap, ChevronRight, Trophy } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Keadilan Sosial', href: '#keadilan-sosial' },
    { name: 'Mengapa Penting', href: '#urgensi' },
    { name: 'Dunia Pendidikan', href: '#keadilan-pendidikan' },
    { name: 'Kasus Nyata', href: '#kasus-nyata' },
    { name: 'Penerapan', href: '#penerapan' },
    { name: 'Harapan', href: '#harapan' },
    { name: 'Kuis Akhir', href: '#kuis-akhir' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-amber-200/60 py-3'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs py-4 sm:py-5 border-b border-amber-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <img
                src="/images/logo-book.png"
                alt="Logo Edukasi"
                className="w-7 h-7 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <Scale className="w-5 h-5 text-white absolute" />
            </div>
            <div>
              <span className="block text-xs font-bold uppercase tracking-widest text-amber-700">
                Sosialisasi Pancasila
              </span>
              <span className="block text-base sm:text-lg font-extrabold text-neutral-900 tracking-tight leading-tight">
                Keadilan<span className="text-red-600">Pendidikan</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  link.name === 'Kuis Akhir'
                    ? 'text-red-600 bg-red-50 hover:bg-red-100 font-bold border border-red-200'
                    : 'text-neutral-700 hover:text-red-600 hover:bg-amber-100/60'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Action button to Quiz Section */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#kuis-akhir"
              onClick={(e) => handleScrollTo(e, '#kuis-akhir')}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-sm shadow-red-600/25 transition-all transform active:scale-95"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Ikuti Kuis Akhir</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-700 hover:bg-amber-100 focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-amber-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  link.name === 'Kuis Akhir'
                    ? 'bg-red-50 text-red-700 font-bold border border-red-200'
                    : 'text-neutral-800 hover:bg-amber-100 hover:text-red-600'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-amber-600" />
              </a>
            ))}
            <div className="pt-3 border-t border-amber-200/80 mt-2">
              <a
                href="#kuis-akhir"
                onClick={(e) => handleScrollTo(e, '#kuis-akhir')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-sm"
              >
                <Trophy className="w-4 h-4 text-amber-300" />
                <span>Mulai Kuis Akhir Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
