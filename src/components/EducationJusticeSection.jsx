import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Banknote, 
  Layers, 
  HeartHandshake, 
  Check, 
  BookOpen,
  School
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function EducationJusticeSection() {
  const pillars = [
    {
      title: 'Akses Merata di Seluruh Wilayah',
      subtitle: 'Geografis & Infrastruktur',
      desc: 'Setiap anak di kota besar, pulau terpencil, hingga perbatasan berhak memiliki sekolah yang kokoh, aman, dan dapat diakses dengan selamat tanpa harus bertaruh nyawa.',
      icon: MapPin,
    },
    {
      title: 'Bebas dari Jeratan Biaya',
      subtitle: 'Keterjangkauan Finansial',
      desc: 'Kondisi ekonomi keluarga tidak boleh menjadi vonis bahwa seorang anak harus putus sekolah. Beasiswa dan subsidi negara harus tepat sasaran bagi yang benar-benar membutuhkan.',
      icon: Banknote,
    },
    {
      title: 'Mutu & Fasilitas yang Setara',
      subtitle: 'Kualitas Guru & Sarana',
      desc: 'Sekolah negeri di pelosok berhak memiliki guru yang sama kompetennya, laboratorium sains, perpustakaan lengkap, dan jaringan internet seperti sekolah unggulan di ibu kota.',
      icon: Layers,
    },
    {
      title: 'Pendidikan Inklusif & Nir-Diskriminasi',
      subtitle: 'Lingkungan Belajar yang Hangat',
      desc: 'Sekolah harus menjadi rumah aman bagi semua: siswa berkebutuhan khusus (disabilitas), beragam latar belakang etnis, agama, serta bebas dari intimidasi dan bullying.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="keadilan-pendidikan" className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-amber-700" />
            <span>Bagian 03 • Ranah Pendidikan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Keadilan Sosial dalam <span className="text-red-600">Dunia Pendidikan</span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Pendidikan bukan komoditas barang mewah yang hanya bisa dinikmati mereka yang berpunya. Pendidikan adalah hak asasi paling mendasar yang dijamin oleh konstitusi Republik Indonesia.
          </p>
        </div>

        {/* Highlight Banner: Pasal 31 UUD 1945 */}
        <div className="mb-14 rounded-3xl bg-neutral-900 text-white p-6 sm:p-8 border-2 border-neutral-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <School className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
                Amanat Konstitusi Tertinggi
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Pasal 31 Ayat (1) & (2) UUD 1945
              </h3>
            </div>
          </div>
          <div className="md:max-w-xl text-neutral-300 text-sm sm:text-base leading-relaxed border-t md:border-t-0 md:border-l border-neutral-700 pt-4 md:pt-0 md:pl-6">
            <em>"Setiap warga negara berhak mendapat pendidikan. Setiap warga negara wajib mengikuti pendidikan dasar dan pemerintah wajib membiayainya."</em>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border-2 border-amber-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    {item.subtitle}
                  </span>
                  <h4 className="text-xl font-bold text-neutral-900 mt-1 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Comparison: Sekolah Ideal vs Realita yang Harus Diperbaiki */}
        <div className="rounded-3xl bg-amber-50/70 border-2 border-amber-200 p-6 sm:p-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-neutral-900">
              Mengapa Kita Harus Peduli? Realita Lapangan Hari Ini
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Banyak kawan sebaya kita di tanah air yang masih menghadapi rintangan berat untuk sekadar belajar membaca dan berhitung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-red-200 space-y-2">
              <span className="text-xs font-black uppercase text-red-600 tracking-wider">
                Ketimpangan yang Masih Terjadi
              </span>
              <ul className="text-xs sm:text-sm text-neutral-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Sekolah rusak, atap bocor, dan minim toilet layak di berbagai pelosok daerah 3T.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Kesenjangan digital: Murid di kota belajar pakai AI & tablet, murid pelosok belum ada listrik.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>Masih maraknya diskriminasi siswa disabilitas yang ditolak di sekolah reguler.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-green-200 space-y-2">
              <span className="text-xs font-black uppercase text-green-700 tracking-wider">
                Cita-Cita Keadilan Pendidikan
              </span>
              <ul className="text-xs sm:text-sm text-neutral-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Distribusi guru berkualitas dan tunjangan layak merata hingga pelosok.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Bantuan PIP dan KIP Kuliah tepat sasaran tanpa pungutan liar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Kultur sekolah yang aman, inklusif, saling menghormati keberagaman latar belakang.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
