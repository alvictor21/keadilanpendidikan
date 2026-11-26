import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  Building2, 
  Landmark, 
  CheckSquare, 
  Heart, 
  ShieldCheck, 
  Compass, 
  Award,
  Sparkles
} from 'lucide-react';

export default function ImplementationSection() {
  const [activeTab, setActiveTab] = useState(0);

  const levels = [
    {
      title: 'Antarsiswa (Kita di Kelas)',
      subtitle: 'Aksi Nyata Pelajar SMA',
      icon: Users,
      badge: 'Level Individu & Komunitas',
      items: [
        {
          action: 'Stop Circle Eksklusif & Hedonisme',
          desc: 'Tidak menilai teman dari kepemilikan gawai mewah, motor, atau merek sepatu. Merangkul semua teman tanpa sekat sosial.',
        },
        {
          action: 'Gerakan Belajar Bersama (Tutor Sebaya)',
          desc: 'Membantu kawan sekelas yang kesulitan memahami mata pelajaran matematika, fisika, atau bahasa tanpa meremehkan.',
        },
        {
          action: 'Nol Toleransi Terhadap Bullying',
          desc: 'Berani membela dan melaporkan tindakan perundungan fisik, verbal, maupun cyber-bullying di grup kelas.',
        },
        {
          action: 'Solidaritas Kas Kemanusiaan',
          desc: 'Menggalang dana sukarela untuk membantu kawan sekelas yang sedang sakit, tertimpa musibah, atau kesulitan membeli seragam.',
        },
      ],
    },
    {
      title: 'Guru & Tenaga Pendidik',
      subtitle: 'Keadilan dalam Pembelajaran',
      icon: GraduationCap,
      badge: 'Level Pengajaran',
      items: [
        {
          action: 'Menghapus Budaya Pilih Kasih',
          desc: 'Memberikan perhatian dan senyuman yang sama kepada seluruh murid, bukan hanya pada siswa yang kaya atau berprestasi mentereng.',
        },
        {
          action: 'Pendekatan Diferensiasi (Merdeka Belajar)',
          desc: 'Memahami bahwa setiap anak memiliki kecepatan dan gaya belajar yang unik, sehingga materi disesuaikan tanpa mempermalukan siswa lambat.',
        },
        {
          action: 'Bimbingan Afirmatif',
          desc: 'Menyediakan sesi konsultasi gratis bagi siswa dari keluarga prasejahtera yang tidak mampu mengikuti bimbingan belajar komersial di luar sekolah.',
        },
        {
          action: 'Menjadi Teladan Toleransi',
          desc: 'Mengajarkan nilai-nilai Bhinneka Tunggal Ika secara tulus dalam setiap diskusi di ruang kelas.',
        },
      ],
    },
    {
      title: 'Pihak Sekolah',
      subtitle: 'Tata Kelola & Lingkungan Belajar',
      icon: Building2,
      badge: 'Level Institusi',
      items: [
        {
          action: 'Fasilitas Ramah Disabilitas (Inklusi)',
          desc: 'Menyediakan akses ramah kursi roda, toilet adaptif, dan sarana ramah bagi siswa berkebutuhan khusus.',
        },
        {
          action: 'Transparansi Penyaluran Beasiswa PIP',
          desc: 'Menjamin dana bantuan pendidikan bagi siswa miskin disalurkan 100% tanpa potongan atau pungutan liar apa pun.',
        },
        {
          action: 'Fasilitas Belajar Terbuka',
          desc: 'Membuka perpustakaan sekolah, ruang komputer, dan akses Wi-Fi sekolah agar bisa dimanfaatkan siswa yang di rumahnya tidak punya fasilitas laptop.',
        },
        {
          action: 'Satgas Anti-Kekerasan Sekolah (TPPK)',
          desc: 'Mengaktifkan Tim Pencegahan dan Penanganan Kekerasan agar sekolah menjadi zona aman bagi semua anak.',
        },
      ],
    },
    {
      title: 'Pemerintah & Negara',
      subtitle: 'Kebijakan Publik & Anggaran',
      icon: Landmark,
      badge: 'Level Kebijakan Negara',
      items: [
        {
          action: 'Pemerataan Infrastruktur 3T',
          desc: 'Membangun gedung sekolah kokoh, jembatan penyeberangan aman, serta instalasi panel surya dan satelit internet di pedalaman.',
        },
        {
          action: 'Kesejahteraan Guru Honorer & Pedalaman',
          desc: 'Memberikan tunjangan khusus dan pengangkatan guru di wilayah terluar agar guru hebat betah mengabdi.',
        },
        {
          action: 'Pemberantasan Sekolah Rusak',
          desc: 'Alokasi khusus revitalisasi puluhan ribu ruang kelas yang rusak parah di seluruh provinsi tanpa diskriminasi birokrasi.',
        },
        {
          action: 'Integrasi Data Bantuan Sosial Tepat Sasaran',
          desc: 'Menyinkronkan data Dapodik dengan DTKS Kementerian Sosial agar bantuan pendidikan benar-benar diterima keluarga miskin.',
        },
      ],
    },
  ];

  return (
    <section id="penerapan" className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-amber-700" />
            <span>Bagian 05 • Aksi Konkret</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            Penerapan Keadilan Sosial dalam <span className="text-red-600">Pendidikan</span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Mewujudkan keadilan bukan hanya tugas sepihak, melainkan kolaborasi harmonis dari empat pilar ekosistem pendidikan di Indonesia.
          </p>
        </div>

        {/* Tab Navigation for 4 Dimensions */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {levels.map((level, idx) => {
            const Icon = level.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer border-2 ${
                  isActive
                    ? 'bg-red-600 text-white border-red-700 shadow-md scale-102'
                    : 'bg-white text-neutral-700 border-amber-200 hover:border-amber-300 hover:bg-amber-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-amber-700'}`} />
                <span>{level.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div className="bg-white rounded-3xl border-2 border-amber-300 p-6 sm:p-10 shadow-[6px_6px_0px_#F59E0B] transition-all">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-amber-100 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center border border-amber-300">
                {React.createElement(levels[activeTab].icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                  {levels[activeTab].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
                  {levels[activeTab].subtitle}
                </h3>
              </div>
            </div>

            <div className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-amber-100/70 text-amber-900 border border-amber-200">
              4 Langkah Aksi Nyata
            </div>
          </div>

          {/* Action List Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {levels[activeTab].items.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-amber-200/90 hover:border-amber-400 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-amber-500 text-white text-xs font-black flex items-center justify-center shrink-0">
                    {itemIdx + 1}
                  </div>
                  <h4 className="text-base font-bold text-neutral-900">
                    {item.action}
                  </h4>
                </div>
                <p className="text-sm text-neutral-600 pl-8 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Highlight for high schoolers */}
          {activeTab === 0 && (
            <div className="mt-8 p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center gap-3 text-xs sm:text-sm text-red-900 font-medium">
              <Sparkles className="w-5 h-5 text-red-600 shrink-0" />
              <span>
                <strong>Komitmen Kita Hari Ini:</strong> Mulailah dari bangku kelas kita sendiri. Satu senyuman ramah dan satu uluran tangan untuk teman yang minder bisa menyelamatkan masa depan mereka!
              </span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
