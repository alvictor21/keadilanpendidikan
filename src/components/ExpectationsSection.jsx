import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Smile, 
  ShieldCheck, 
  Flame,
  Award
} from 'lucide-react';

export default function ExpectationsSection() {
  const [pledges, setPledges] = useState({
    p1: false,
    p2: false,
    p3: false,
    p4: false,
  });

  const togglePledge = (key) => {
    setPledges((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(pledges).every(Boolean);

  const expectations = [
    {
      title: 'Tumbuhnya Empati & Kesadaran Kritis',
      desc: 'Siswa-siswi SMA tidak lagi memandang dunia secara individualis, melainkan sadar bahwa setiap kawan di samping kita memiliki perjuangan hidup masing-masing.',
      icon: Smile,
      color: 'bg-amber-100 text-amber-800',
    },
    {
      title: 'Sekolah Menjadi Ruang Bebas Stigma',
      desc: 'Terciptanya ekosistem sekolah yang hangat, ramah disabilitas, dan saling merangkul tanpa perundungan (zero bullying) atas dasar suku, agama, maupun kondisi ekonomi.',
      icon: ShieldCheck,
      color: 'bg-red-100 text-red-800',
    },
    {
      title: 'Menjadi Agen Perubahan (Agent of Change)',
      desc: 'Generasi muda yang berani bersuara dan mengadvokasi hak-hak kawan yang terpinggirkan, baik di lingkungan sekolah, media sosial, maupun masyarakat.',
      icon: Flame,
      color: 'bg-orange-100 text-orange-800',
    },
    {
      title: 'Fondasi Kuat Menuju Indonesia Emas 2045',
      desc: 'Mempersiapkan calon pemimpin masa depan bangsa yang tidak hanya cerdas otaknya, tetapi juga memiliki nurani Pancasila yang berpihak pada keadilan rakyat.',
      icon: Award,
      color: 'bg-amber-100 text-amber-900',
    },
  ];

  const pledgeItems = [
    {
      key: 'p1',
      text: 'Saya berkomitmen tidak membeda-bedakan atau menjauhi teman berdasarkan latar belakang ekonomi, suku, atau agama.',
    },
    {
      key: 'p2',
      text: 'Saya berani menolak dan melaporkan segala bentuk perundungan (bullying) di lingkungan sekolah saya.',
    },
    {
      key: 'p3',
      text: 'Saya bersedia berbagi ilmu, meminjamkan catatan, atau belajar bersama kawan yang sedang kesulitan akademik.',
    },
    {
      key: 'p4',
      text: 'Saya akan menggunakan kesempatan sekolah ini dengan penuh tanggung jawab demi membanggakan keluarga dan bangsa.',
    },
  ];

  return (
    <section id="harapan" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-red-600" />
            <span>Bagian 06 • Visi & Masa Depan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Harapan Kami Setelah <span className="text-red-600">Sosialisasi Ini</span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Presentasi ini bukan sekadar tugas presentasi formalitas, melainkan ajakan tulus dari lubuk hati terdalam agar kita semua bersama-sama menjadi penjaga api keadilan di bumi pertiwi.
          </p>
        </div>

        {/* 4 Outcome Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expectations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Student Pledge Box for Live Presentation */}

      </div>
    </section>
  );
}
