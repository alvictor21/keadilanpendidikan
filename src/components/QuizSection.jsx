import React from 'react';
import { 
  HelpCircle, 
  Sparkles, 
  ExternalLink, 
  Trophy, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';

export default function QuizSection() {
  const quizUrl =
    'https://wayground.com/join/';

  const highlights = [
    {
      icon: Trophy,
      title: 'Uji Pemahaman Materi',
      desc: 'Cari tahu sejauh mana pemahamanmu mengenai keadilan sosial & hak pendidikan.',
    },
    {
      icon: Clock,
      title: 'Cepat & Menantang',
      desc: 'Kuis interaktif seru berbasis pilihan ganda yang pas untuk siswa-siswi SMA.',
    },
    {
      icon: Award,
      title: 'Buktikan Kepedulianmu',
      desc: 'Raih skor tertinggi dan jadilah Pelajar Garda Keadilan Sosial!',
    },
  ];

  return (
    <section id="kuis-akhir" className="py-20 lg:py-28 bg-[#FFFDF9] border-t-2 border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Quiz Hero Card */}
        <div className="relative rounded-3xl bg-white border-2 border-amber-300 p-8 sm:p-12 lg:p-16 shadow-[8px_8px_0px_#F59E0B] overflow-hidden">
          
          {/* Subtle Background Blobs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-red-100/50 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-amber-100/70 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Ribbon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-red-600" />
              <span>Sesi Akhir • Evaluasi Interaktif</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              Uji Pemahamanmu Lewat <span className="text-red-600 underline decoration-amber-400 decoration-wavy decoration-2">Kuis Akhir</span>!
            </h2>

            {/* Description */}
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Setelah menyimak materi sosialisasi pentingnya keadilan sosial dalam ranah pendidikan, sekarang saatnya membuktikan seberapa dalam wawasan dan kepedulianmu terhadap sesama anak bangsa.
            </p>

            {/* 3 Quick Benefit Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF8F5] border border-amber-200/90 shadow-2xs space-y-1.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Big Action Button to Quiz URL */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={quizUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-black text-white bg-red-600 hover:bg-red-700 rounded-2xl shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-1 active:translate-y-0 group cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>Mulai Kuis Sekarang</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Helper note & direct link for presentation projector */}
            <div className="pt-2">
              <p className="text-xs text-neutral-500">
                Tombol akan membuka platform kuis Wayground di tab baru secara otomatis.
              </p>
              <div className="mt-3 inline-block max-w-full text-[11px] text-neutral-600 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 break-all font-mono">
                Tautan: {quizUrl}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
