import React from 'react';
import { Newspaper, ExternalLink, AlertTriangle, Lightbulb, Calendar, Link2 } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function CaseStudiesSection() {
  const cases = [
    {
      id: 1,
      category: 'Kebijakan & Pemerataan',
      source: 'Kompas.com (Nasional)',
      date: '26 November 2024',
      tagline: 'Evaluasi Polemik Sistem Zonasi & Ketimpangan Kualitas Sekolah di Indonesia',
      headline: 'Pemerintah Kaji Ulang Sistem Zonasi untuk Menjawab Ketimpangan Akses Sekolah',
      articleTitle: 'Pemerintah Targetkan Zonasi Sistem Baru Diterapkan pada PPDB 2025/2026',
      articleUrl: 'https://nasional.kompas.com/read/2024/11/26/18131491/pemerintah-targetkan-zonasi-sistem-baru-diterapkan-pada-ppdb-2025-2026',
      imageSrc: '/images/berita1.jpg',
      imageFileName: 'public/images/berita-zonasi.jpg',
      placeholderTitle: 'Thumbnail: Polemik Zonasi PPDB',
      facts: [
        'Kementerian Pendidikan Dasar dan Menengah mengevaluasi menyeluruh sistem zonasi karena banyaknya laporan ketimpangan antarsekolah dan blank spot.',
        'Stigma "sekolah favorit" masih kuat karena fasilitas dan kualitas guru belum merata di setiap kecamatan dan kelurahan.',
        'Pemerintah menargetkan penyempurnaan format zonasi baru agar hak pendidikan anak bangsa benar-benar terpenuhi secara adil dan merata.',
      ],
      justiceAnalysis:
        'Keadilan sosial dalam pendidikan menuntut pemerintah tidak hanya mengatur regulasi seleksi masuk, melainkan wajib mempercepat pemerataan gedung dan fasilitas sekolah negeri ke seluruh penjuru lingkungan pemukiman warga.',
      lessonForStudents:
        'Siswa SMA diajak memahami bahwa akses sekolah yang kita nikmati saat ini merupakan hak konstitusional yang harus diperjuangkan kesetaraannya bagi seluruh teman sebaya di Indonesia.',
      color: 'border-amber-300',
    },
    {
      id: 2,
      category: 'Infrastruktur & Daerah 3T',
      source: 'Kompas.com (Regional)',
      date: '09 Desember 2024',
      tagline: 'Bertaruh Nyawa Menerobos Sungai: Potret Nyata Kesenjangan Sarana di Pelosok Negeri',
      headline: 'Perjuangan Siswa Pedalaman Ende Seberangi Sungai Berarus Deras Demi Sekolah',
      articleTitle: 'Perjuangan Siswa di Pedalaman Ende Seberangi Sungai demi Sekolah',
      articleUrl: 'https://regional.kompas.com/read/2024/12/09/175933778/perjuangan-siswa-di-pedalaman-ende-seberangi-sungai-demi-sekolah',
      imageSrc: '/images/berita2.jpg',
      imageFileName: 'public/images/berita-3t.jpg',
      placeholderTitle: 'Thumbnail: Perjuangan Siswa Daerah 3T',
      facts: [
        'Anak-anak sekolah di Dusun Woimite, Desa Mbotulaka, Kabupaten Ende, NTT, harus menerobos arus sungai setinggi 30 cm hingga 3 meter saat musim hujan tiba karena tiadanya jembatan penyeberangan.',
        'Buku pelajaran dan seragam sekolah sering basah kuyup, bahkan siswa terpaksa meliburkan diri jika debit air sungai meluap terlalu deras dan mengancam nyawa.',
        'Warga dan anak-anak telah bertahun-tahun merindukan hadirnya jembatan gantung yang kokoh agar rute menuju sekolah dapat dilalui dengan aman.',
      ],
      justiceAnalysis:
        'Keadilan sosial Sila ke-5 menuntut kehadiran negara di wilayah terluar dan terisolasi. Hak memperoleh pendidikan yang layak tidak boleh terhalang oleh infrastruktur jalan dan jembatan yang membahayakan nyawa generasi penerus bangsa.',
      lessonForStudents:
        'Menjadi pengingat mendalam bagi kita yang bersekolah di perkotaan untuk senantiasa bersyukur, tekun belajar, serta memiliki kepedulian advokasi terhadap nasib kawan-kawan di daerah 3T.',
      color: 'border-red-300',
    },
    {
      id: 3,
      category: 'Keterjangkauan Finansial',
      source: 'Kompas.com (Edukasi)',
      date: '27 Mei 2024',
      tagline: 'Pendidikan Hak Segala Bangsa: Menolak Komersialisasi Biaya Kuliah yang Mencekik',
      headline: 'Kemendikbud Batalkan Kenaikan Tarif UKT PTN Pasca Aksi Protes Mahasiswa',
      articleTitle: 'Kemendikbud Batalkan Kenaikan UKT Tahun 2024',
      articleUrl: 'https://www.kompas.com/edu/read/2024/05/27/160021371/kemendikbud-batalkan-kenaikan-ukt-tahun-2024',
      imageSrc: '/images/berita3.jpeg',
      imageFileName: 'public/images/berita-ukt.jpg',
      placeholderTitle: 'Thumbnail: Pembatalan Kenaikan UKT',
      facts: [
        'Pemerintah secara resmi membatalkan lonjakan tarif Uang Kuliah Tunggal (UKT) di PTN setelah mendengar masukan keras dari mahasiswa, orang tua, dan masyarakat luas.',
        'Aksi penolakan mahasiswa membuka mata publik bahwa kenaikan UKT yang ugal-ugalan mengancam anak-anak dari keluarga berpenghasilan pas-pasan gagal melanjutkan mimpi kuliah.',
        'Kemendikbudristek merevaluasi ajuan tarif perguruan tinggi serta menegaskan komitmen agar tidak ada mahasiswa baru yang putus kuliah karena keterbatasan biaya.',
      ],
      justiceAnalysis:
        'Pendidikan tinggi adalah eskalator mobilitas sosial terpenting bagi anak buruh, tani, dan pekerja informal untuk memutus rantai kemiskinan. Keadilan sosial menuntut subsidi pendidikan tinggi yang inklusif dan beasiswa tepat sasaran.',
      lessonForStudents:
        'Memberi suntikan semangat bagi siswa SMA yang ingin kuliah bahwa hak pendidikan tinggi harus tetap terjangkau, serta mendorong siswa aktif mencari program beasiswa resmi pemerintah seperti KIP Kuliah.',
      color: 'border-amber-300',
    },
  ];

  return (
    <section id="kasus-nyata" className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Newspaper className="w-4 h-4 text-red-600" />
            <span>Bagian 04 • Fakta Lapangan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
            3 Contoh Kasus Nyata di <span className="text-red-600">Indonesia</span>
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Keadilan sosial dalam pendidikan bukan sekadar materi hafalan di ruang kelas. Tiga artikel berita aktual dan terverifikasi dari media nasional ini membuktikan pentingnya keadilan pendidikan bagi seluruh generasi muda bangsa.
          </p>
        </div>

        {/* 3 News Case Studies Cards */}
        <div className="space-y-12">
          {cases.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl border-2 ${item.color} p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Column Left: News Thumbnail Placeholder & Meta & Article Link */}
                <div className="lg:col-span-5 space-y-4">
                  <ImagePlaceholder
                    src={item.imageSrc}
                    alt={item.headline}
                    aspectRatio="aspect-16/10"
                    placeholderTitle={item.placeholderTitle}
                    fileNameHint={item.imageFileName}
                    badgeText={`Thumbnail Berita #${item.id}`}
                  />

                

                  <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-600 flex items-center justify-between">
                    <span className="font-semibold">Media Sumber:</span>
                    <span className="font-bold text-neutral-800">{item.source}</span>
                  </div>

                  {/* Direct Clickable Article Link Button */}
                  <a
                    href={item.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-all shadow-sm shadow-red-600/20 group cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Link2 className="w-4 h-4 text-amber-300 group-hover:text-white" />
                      <span>Baca Artikel Lengkap di {item.source.split(' ')[0]}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Clean text link for presentations */}
                  <div className="text-[11px] text-neutral-500 break-all bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/60">
                    <span className="font-semibold text-neutral-700 block mb-0.5">Tautan Artikel Terverifikasi:</span>
                    <a
                      href={item.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 hover:underline font-mono text-[10px]"
                    >
                      {item.articleUrl}
                    </a>
                  </div>
                </div>

                {/* Column Right: Case Analysis & Lessons */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  
                  {/* Tagline Ribbon */}
                  <div className="inline-block">
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-lg">
                      Kasus #{item.id}: {item.tagline}
                    </span>
                  </div>

                  {/* Headline with external link */}
                  <a
                    href={item.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 leading-snug group-hover:text-red-600 transition-colors">
                      {item.headline}
                    </h3>
                  </a>

                  {/* Facts List */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      Fakta & Realita Lapangan:
                    </h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      {item.facts.map((fact, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                          <span className="leading-relaxed">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Justice Analysis Box */}
                  <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wide">
                      <AlertTriangle className="w-4 h-4 text-amber-700" />
                      <span>Mengapa Ini Menuntut Keadilan Sosial?</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-medium">
                      {item.justiceAnalysis}
                    </p>
                  </div>

                  {/* Student Takeaway */}
                  <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 uppercase tracking-wide">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <span>Pelajaran untuk Siswa SMA:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.lessonForStudents}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
