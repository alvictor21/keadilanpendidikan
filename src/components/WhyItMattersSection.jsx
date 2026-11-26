import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Users2, 
  Lightbulb, 
  Flag, 
  HelpCircle,
  Quote
} from 'lucide-react';

export default function WhyItMattersSection() {
  const reasons = [
    {
      number: '01',
      title: 'Memutus Rantai Kemiskinan Ekstrem',
      description: 'Anak yang lahir dari keluarga prasejahtera berhak memiliki jalan keluar melalui pendidikan bermutu. Keadilan sosial bertindak sebagai jembatan mobilitas sosial vertikal.',
      icon: TrendingUp,
      accent: 'border-amber-400 bg-amber-50/50',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
    {
      number: '02',
      title: 'Mencegah Kecemburuan & Konflik Horizontal',
      description: 'Kesenjangan yang terlampau curam menyulut rasa ketidakadilan dan polarisasi masyarakat. Keadilan sosial menjaga kerukunan dan stabilitas sosial bangsa.',
      icon: ShieldCheck,
      accent: 'border-red-400 bg-red-50/40',
      badgeColor: 'bg-red-100 text-red-800',
    },
    {
      number: '03',
      title: 'Menggali Potensi Terpendam Seluruh Anak Bangsa',
      description: 'Bakat luar biasa bisa lahir di mana saja—di pelosok pulau terluar atau gang sempit perkotaan. Tanpa keadilan, bangsa kita kehilangan jutaan potensi emas.',
      icon: Lightbulb,
      accent: 'border-amber-400 bg-amber-50/50',
      badgeColor: 'bg-amber-100 text-amber-900',
    },
    {
      number: '04',
      title: 'Mempererat Rasa Nasionalisme & Keutuhan NKRI',
      description: 'Rasa cinta tanah air dan persatuan nasional tumbuh subur ketika setiap warganya merasa dihargai, dilindungi, dan tidak diabaikan oleh negaranya sendiri.',
      icon: Flag,
      accent: 'border-neutral-400 bg-neutral-50',
      badgeColor: 'bg-neutral-100 text-neutral-800',
    },
  ];

  return (
    <section id="urgensi" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-red-600" />
            <span>Bagian 02 • Urgensi & Nilai</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Mengapa Keadilan Sosial Itu <span className="text-red-600">Sangat Penting</span>?
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Tanpa keadilan sosial, kemerdekaan dan kemajuan ekonomi hanyalah ilusi yang dinikmati segelintir orang, sementara sebagian besar anak bangsa tertinggal di belakang.
          </p>
        </div>

        {/* 4 Key Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className={`relative rounded-3xl p-7 border-2 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white ${item.accent}`}
              >
                <div className="flex items-start justify-between mb-5">
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout Quote for High School Students */}
        <div className="rounded-3xl bg-white border-2 border-amber-300 p-6 sm:p-10 shadow-[5px_5px_0px_#D97706] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <Quote className="w-8 h-8" />
            </div>
            
            <div className="space-y-3 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Refleksi Untuk Siswa & Siswi SMA
              </span>
              <p className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
                "Keadilan sosial bukan hanya tugas Presiden atau Menteri. Saat kalian di SMA tidak membully teman yang kurang mampu, tidak membentuk lingkaran eksklusif, dan bersedia belajar bersama tanpa memandang suku atau agama—saat itulah kalian sedang menghidupkan Pancasila di dunia nyata."
              </p>
              <div className="text-xs sm:text-sm font-semibold text-neutral-600">
                — Pesan Moral Sosialisasi Keberagaman & Keadilan Pendidikan
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
