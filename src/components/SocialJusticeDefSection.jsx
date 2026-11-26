import React from 'react';
import { Scale, CheckCircle2, ShieldAlert, Award, Compass, Eye, HeartHandshake } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function SocialJusticeDefSection() {
  const principles = [
    {
      title: 'Kesetaraan Hak Dasar',
      desc: 'Setiap individu lahir dengan martabat dan hak asasi yang sama tanpa diskriminasi ras, agama, gender, atau status ekonomi.',
      icon: Scale,
      color: 'bg-amber-100 text-amber-800 border-amber-300',
    },
    {
      title: 'Keadilan Proporsional (Equity)',
      desc: 'Bukan sekadar memberi sama rata, melainkan memberi dukungan lebih kepada mereka yang paling membutuhkan agar bisa berdiri sejajar.',
      icon: Award,
      color: 'bg-red-100 text-red-800 border-red-300',
    },
    {
      title: 'Perlindungan Kaum Rentan',
      desc: 'Masyarakat berkeadilan menjamin mereka yang kurang mampu atau berkebutuhan khusus mendapatkan perlindungan dan akses yang memadai.',
      icon: ShieldAlert,
      color: 'bg-orange-100 text-orange-800 border-orange-300',
    },
    {
      title: 'Gotong Royong & Solidaritas',
      desc: 'Menolak sikap individualistis ekstrem; keberhasilan bersama tercapai ketika seluruh anggota masyarakat saling menopang.',
      icon: HeartHandshake,
      color: 'bg-amber-100 text-amber-900 border-amber-300',
    },
  ];

  return (
    <section id="keadilan-sosial" className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300 text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4 text-amber-700" />
            <span>Bagian 01 • Konsep Dasar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Apa Sebenarnya <span className="text-red-600 underline decoration-amber-400 decoration-wavy decoration-2">Keadilan Sosial</span> Itu?
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
            Keadilan sosial bukan sekadar teori hukum atau slogan di upacara bendera, melainkan fondasi moral agar seluruh anak bangsa dapat hidup bermartabat, sejahtera, dan saling menghargai.
          </p>
        </div>

        {/* Core Definition Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Visual Card / Illustration with Globe Placeholder */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-white border-2 border-amber-200 rounded-3xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Sila Ke-5 Pancasila
                </span>
          
              </div>

              {/* Image Placeholder - Globe / Bumi Pancasila */}
              <div className="overflow-hidden rounded-2xl bg-amber-50/40 p-2 border border-amber-200">
                <ImagePlaceholder
                  src="/images/globe.png"
                  alt="Ilustrasi Dunia dan Nilai Keadilan"
                  aspectRatio="aspect-square"
                  placeholderTitle="Ilustrasi Globe & Pancasila"
                  fileNameHint="public/images/globe.png"
                  badgeText="Visual Keadilan Umum"
                  className="border-none"
                />
              </div>

              <div className="p-3 bg-amber-50 rounded-xl text-center border border-amber-200/70">
                <p className="text-sm font-black text-neutral-900">
                  "Keadilan Sosial bagi Seluruh Rakyat Indonesia"
                </p>
                <p className="text-xs text-neutral-600 mt-1">
                  Cita-cita luhur bangsa: Tiada kemakmuran tanpa keadilan, tiada persatuan tanpa kesetaraan.
                </p>
              </div>
            </div>
          </div>

          {/* Explanation Text & Distributive Justice Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border-2 border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                Keadilan Sosial: Antara Hak, Tanggung Jawab, dan Kemakmuran Bersama
              </h3>
              
              <p className="text-neutral-700 text-base leading-relaxed">
                Secara umum, <strong>keadilan sosial</strong> adalah tata kehidupan bermasyarakat di mana setiap warga negara diperlakukan secara setara, menikmati pembagian kekayaan negara secara adil, serta memiliki akses nyata pada fasilitas kesehatan, hukum, dan pendidikan tanpa terhambat oleh asal-usul kelahirannya.
              </p>

              {/* Interactive Equity vs Equality Comparison Box */}
              <div className="mt-4 p-5 rounded-2xl bg-[#FAF8F5] border border-amber-200 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <Compass className="w-4 h-4 text-red-600" />
                  <span>Penting Dipahami Pelajar: Equality vs. Equity</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-white border border-neutral-200">
                    <span className="font-bold text-neutral-800 block text-sm">Kesetaraan (Equality)</span>
                    <p className="text-neutral-600 mt-1">
                      Memberi setiap orang benda atau bantuan yang sama persis, tanpa melihat apakah mereka sudah mampu atau masih sangat kekurangan.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-100/70 border border-amber-300">
                    <span className="font-bold text-amber-950 block text-sm">Keadilan Nyata (Equity)</span>
                    <p className="text-amber-900 mt-1">
                      Memberi setiap orang apa yang mereka <strong>butuhkan</strong> untuk bisa berdiri sama tinggi dan melangkah meraih masa depan mereka.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Pillars of General Social Justice */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-amber-200/80 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
