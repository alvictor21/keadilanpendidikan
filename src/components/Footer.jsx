import React from 'react';
import { ArrowUp, Scale, Heart, BookOpen, GraduationCap, ShieldCheck, Trophy } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Apa itu Keadilan Sosial', href: '#keadilan-sosial' },
    { name: 'Mengapa Penting', href: '#urgensi' },
    { name: 'Keadilan Pendidikan', href: '#keadilan-pendidikan' },
    { name: 'Contoh Kasus Nyata', href: '#kasus-nyata' },
    { name: 'Penerapan Praktis', href: '#penerapan' },
    { name: 'Harapan Bersama', href: '#harapan' },
    { name: 'Kuis Akhir Interaktif', href: '#kuis-akhir' },
  ];

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-12 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand & Poster Title Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-black shadow-md">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-widest text-amber-400">
                  Sosialisasi Pancasila
                </span>
                <span className="block text-lg font-black text-white leading-tight">
                  Keadilan<span className="text-red-500">Pendidikan</span>
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              "Rajut Keberagaman, Wujudkan Keadilan Pendidikan." Media edukasi dan sosialisasi nilai Sila Ke-5 Pancasila bagi generasi muda siswa-siswi SMA di seluruh Indonesia.
            </p>

            <div className="p-3 bg-neutral-800/80 rounded-2xl border border-neutral-700/60 inline-block text-xs text-amber-300 font-semibold">
              ⭐ Dilindungi UUD 1945 Pasal 31 & Sila Ke-5 Pancasila
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Navigasi Halaman
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-300">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-amber-400 hover:underline transition-colors block py-0.5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Target & Presenter Note */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Target Presentasi
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Materi disusun khusus untuk dipresentasikan di hadapan pelajar tingkat SMA/SMK/MA sederajat untuk membangun kepekaan sosial dan toleransi antarsiswa.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Kembali ke Atas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} Proyek Sosialisasi Keadilan Pendidikan • Hak Cipta untuk Seluruh Anak Bangsa
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>untuk Persatuan Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
