import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown, Users, BookOpen, ShieldCheck, HeartHandshake } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#FAF8F5]"
    >
      {/* Decorative Warm Poster Scallop / Organic Cloud Accents (no heavy gradients, matching cardboard cutout aesthetic) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-12 -right-12 w-72 h-72 rounded-full bg-red-100/60 blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-4 left-6 w-80 h-80 rounded-full bg-amber-100/70 blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Presentation Pitch */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Poster Tag Ribbon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Sosialisasi Sila Ke-5 Pancasila • Siswa-Siswi SMA</span>
            </div>

            {/* Main Headline Styled Like the Handcrafted Poster Banners */}
            <div className="space-y-2">
              <div className="inline-block transform -rotate-1 hover:rotate-0 transition-transform">
                <span className="inline-block bg-[#F87171] border-2 border-red-700 text-white font-black text-2xl sm:text-3xl md:text-5xl px-4 py-1.5 rounded-xl shadow-[3px_3px_0px_#991B1B] uppercase tracking-wide">
                  RAJUT KEBERAGAMAN
                </span>
              </div>
              <div className="inline-block transform rotate-1 hover:rotate-0 transition-transform">
                <span className="inline-block bg-[#FBBF24] border-2 border-amber-600 text-neutral-900 font-black text-2xl sm:text-3xl md:text-5xl px-4 py-1.5 rounded-xl shadow-[3px_3px_0px_#B45309] uppercase tracking-wide">
                  WUJUDKAN KEADILAN
                </span>
              </div>
              <div className="block pt-1">
                <span className="inline-block bg-white border-2 border-neutral-900 text-red-600 font-black text-3xl sm:text-4xl md:text-6xl px-5 py-2 rounded-2xl shadow-[4px_4px_0px_#1F2937] uppercase tracking-wider">
                  PENDIDIKAN
                </span>
              </div>
            </div>

            {/* Poster Core Message */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-medium leading-relaxed max-w-2xl">
              Pendidikan merupakan hak asasi setiap insan tanpa memandang ras, suku, agama, warna kulit, maupun status ekonomi. Setiap anak bangsa berhak memperoleh kesempatan yang sama untuk mengenyam pendidikan yang layak, merata, dan berkualitas di seluruh pelosok Nusantara.
            </p>

            {/* Value Badges (Based on Poster Clouds) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Persatuan & Kesetaraan</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Siswa berlatar belakang majemuk belajar bersama dalam kesetaraan martabat.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-amber-200 shadow-xs flex items-start gap-3">
                <div className="p-2 rounded-lg bg-red-100 text-red-700 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Solidaritas Anak Bangsa</h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Saling bergandeng tangan melawan diskriminasi dan kesenjangan fasilitas belajar.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#keadilan-sosial"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-md shadow-red-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Pelajari Keadilan Sosial</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#kasus-nyata"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-bold text-neutral-800 bg-white hover:bg-amber-50 border-2 border-amber-300 rounded-xl shadow-xs transition-all hover:-translate-y-0.5"
              >
                <span>Lihat Studi Kasus Nyata</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Artwork / Poster Representation */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Frame styled like physical scrapbook / cutout artwork */}
            <div className="relative w-full max-w-md bg-white border-2 border-amber-300 rounded-3xl p-4 sm:p-5 shadow-[6px_6px_0px_#F59E0B] transition-transform">
              
        

              {/* Main Artwork Image - 5 Students Hands Stacked */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-200 bg-amber-50/50">
                <ImagePlaceholder
                  src="/images/students-upright.png"
                  alt="Ilustrasi Siswa SMA Merajut Keberagaman"
                  aspectRatio="aspect-4/3 sm:aspect-square"
                  placeholderTitle="Ilustrasi Siswa Merajut Keberagaman"
                  fileNameHint="public/images/students-upright.png"
                  badgeText="Gambar Utama Hero"
                  className="border-none bg-transparent"
                />

                {/* Floating caption at bottom of artwork */}
                <div className="absolute bottom-2 inset-x-2 bg-white/90 backdrop-blur-xs rounded-xl p-2.5 border border-amber-200 text-center shadow-xs">
                  <p className="text-xs font-bold text-neutral-900">
                    "Tangan yang bertumpuk melambangkan solidaritas bersama"
                  </p>
                  <p className="text-[11px] text-neutral-600">
                    Mewujudkan sekolah ramah, inklusif, dan bebas diskriminasi
                  </p>
                </div>
              </div>

              {/* Extra Mini Callout Box */}
              <div className="mt-4 flex items-center justify-between px-3 py-2 bg-amber-50 rounded-xl border border-amber-200">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-700" />
                  <span className="text-xs font-bold text-amber-950">Target Sosialisasi:</span>
                </div>
                <span className="text-xs font-semibold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded-md">
                  Pelajar Generasi Z / SMA
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
