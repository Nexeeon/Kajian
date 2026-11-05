import type { Kajian } from "../types/kajian";

// ===============================
// IMPORT VISUAL ASSETS
// ===============================
import sumselResahPoster from "../assets/sumsel resah.jpg";
import karhutlaPoster from "../assets/KAJIAN KARHUTLA DI INDONESIA TAHUN 2026.jpg";
import andrieYunusPoster from "../assets/KAJIAN ANDRIE YUNUS (Mimbar Bebas Sumsel Resah 1).jpg";
import kajianSumselResah from "../assets/Kajian_Sumsel_Resah.jpeg";
import kajianPelecehan from "../assets/Kajian_Pelecehan_Seksual_Verbal_di_Kampus.jpeg";
import feed17August from "../assets/Feed_IG_Orderan_17_August.png";

// ===============================
// MASTER KAJIAN DATA REPOSITORY
// ===============================
export const kajianList: Kajian[] = [
  // -------------------------------------------------------------
  // 1. KAJIAN PERTAMA: SUMSEL RESAH (SERUAN AKSI)
  // -------------------------------------------------------------
  {
    id: "sumsel-resah-seruan-aksi",
    category: "KAJIAN SOSIAL & GERAKAN",
    title: "Seruan Aksi Sumsel Resah",
    subtitle: "Konsolidasi Gerakan Mahasiswa dan Rakyat Menuntut Keadilan Sosial di Sumatera Selatan",
    description:
      "Seruan aksi konsolidasi mahasiswa dan aliansi masyarakat sipil menyikapi eskalasi keresahan sosial, ketimpangan ekonomi, serta tuntutan transparansi kebijakan publik di Sumatera Selatan.",
    image: sumselResahPoster,
    imageAlt: "Poster utama Sumsel Resah lengkap dengan QR Code menuju kajian selengkapnya",
    action: "BACA KAJIAN",
    href: "https://drive.google.com/file/d/144cj2wzBn_mZ_q2wiZWWSSpP7LFQtsHu/view",
    isNew: true,
    metadata: {
      date: "Mei 2026",
      organizer: "Aliansi BEM & Mahasiswa se-Sumatera Selatan",
      location: "Sumatera Selatan",
    },
    keyPoints: [
      "Eskalasi keresahan publik terhadap tata kelola sumber daya alam dan lingkungan hidup di Sumsel.",
      "Tuntutan transparansi perumusan kebijakan anggaran yang memprioritaskan fasilitas publik dan pendidikan.",
      "Seruan konsolidasi terbuka bagi seluruh elemen mahasiswa dan masyarakat sipil untuk mengawal aspirasi rakyat.",
      "Poster dilengkapi QR Code langsung untuk mengakses naskah kajian lengkap dan draft pernyataan sikap.",
    ],
    fullNarration: [
      "Gerakan 'Sumsel Resah' lahir dari akumulasi keresahan kolektif masyarakat Sumatera Selatan atas berbagai persoalan fundamental yang tak kunjung menemukan solusi berkeadilan dari pemangku kebijakan. Dari sektor lingkungan, agraria, hingga akses pendidikan yang inklusif, suara rakyat kerap kali terpinggirkan oleh kepentingan oligarki dan birokrasi yang elitis.",
      "Melalui kajian ini, BEM Polsri bersama elemen mahasiswa se-Sumatera Selatan menegaskan komitmen moral untuk menjadi corong kebenaran. Kami menyusun analisis mendalam terhadap berbagai anomali kebijakan daerah serta menyuarakan seruan aksi nyata.",
      "QR Code yang tertera pada poster fisik merupakan gerbang terbuka bagi siapa pun—mahasiswa, akademisi, buruh, tani, dan warga umum—untuk membaca, mengkaji, serta menyebarluaskan dokumen kajian ini sebagai amunisi nalar kritis bersama.",
    ],
  },

  // -------------------------------------------------------------
  // 2. KAJIAN KEDUA: KAJIAN KARHUTLA DI INDONESIA TAHUN 2026
  // -------------------------------------------------------------
  {
    id: "karhutla-indonesia-2026",
    category: "KAJIAN LINGKUNGAN HIDUP",
    title: 'Kajian Karhutla di Indonesia Tahun 2026 - "Ketika Udara Menjadi Ancaman: Rakyat Berhak Bernapas dengan Aman"',
    subtitle: "Analisis Krisis Ekologis, Dampak Kabut Asap, dan Penegakan Hak Konstitusional atas Lingkungan Hidup yang Sehat",
    description:
      "Dokumen kajian komprehensif atas krisis kebakaran hutan dan lahan (karhutla) 2026, analisis dampak polusi udara terhadap kesehatan publik, serta penegasan hak konstitusional warga atas udara bersih di Sumatera Selatan.",
    image: karhutlaPoster,
    imageAlt: "Poster bernuansa kuning/asap dengan ilustrasi penanggulangan kebakaran hutan dan kabut asap Karhutla 2026",
    action: "BACA KAJIAN",
    href: "https://drive.google.com/file/d/144cj2wzBn_mZ_q2wiZWWSSpP7LFQtsHu/view",
    isNew: true,
    metadata: {
      date: "Tahun 2026",
      organizer: "Kementerian Lingkungan Hidup & Sosial BEM POLSRI",
      location: "Wilayah Rentan Karhutla & Gambut Sumatera Selatan",
    },
    keyPoints: [
      "Lonjakan titik panas (hotspot) di kawasan hidrologis gambut dan penurunan drastis kualitas udara (ISPU).",
      "Peningkatan kasus Infeksi Saluran Pernapasan Akut (ISPA) yang mengancam kelompok rentan anak-anak dan lansia.",
      "Analisis Pasal 28H ayat (1) UUD 1945: Penegasan bahwa menghirup udara bersih adalah hak asasi yang tak dapat dikompromikan.",
      "Tuntutan audit lingkungan dan sanksi tegas bagi korporasi yang terbukti lalai mengamankan konsesi lahannya.",
    ],
    fullNarration: [
      "Tahun 2026 kembali mencatatkan pilu bagi masyarakat Sumatera Selatan. Kabut asap akibat Kebakaran Hutan dan Lahan (Karhutla) menyelimuti langit, meredupkan matahari, dan mengubah udara yang dihirup jutaan warga menjadi racun mematikan. Tragedi ekologis ini bukan sekadar faktor iklim, melainkan akibat nyata dari kelalaian struktural dan minimnya ketegasan mitigasi.",
      "Kajian ini mengupas tuntas korelasi antara izin konsesi skala besar di lahan gambut dengan intensitas kebakaran. Kami menyajikan data satelit pemantauan titik api, analisis kualitas udara harian, dan proyeksi kerugian sosial-ekonomi yang ditanggung masyarakat akar rumput.",
      "BEM Polsri menegaskan bahwa 'Rakyat Berhak Bernapas dengan Aman'. Udara bersih bukanlah komoditas mewah, melainkan hak asasi yang dijamin konstitusi. Pemerintah daerah dan aparat penegak hukum tidak boleh lagi berlindung di balik alasan cuaca ketika korporasi perusak lingkungan dibiarkan tanpa sanksi pencabutan izin.",
    ],
  },

  // -------------------------------------------------------------
  // 3. KAJIAN KETIGA: KAJIAN ANDRIE YUNUS (MIMBAR BEBAS SUMSEL RESAH)
  // -------------------------------------------------------------
  {
    id: "andrie-yunus-mimbar-bebas",
    category: "KAJIAN ADVOKASI & HAK SUARA",
    title: "Mimbar Bebas Sumsel Resah - Kajian Andrie Yunus",
    subtitle: "Materi Mimbar Bebas: Menjaga Nalar Kritis dan Menolak Pembungkaman Suara Mahasiswa",
    description:
      "Materi mimbar bebas, pandangan kritis terhadap kebijakan pemerintah daerah, serta dokumentasi dan pedoman aksi Mimbar Bebas Sumsel Resah di Persimpangan DPRD Prov. Sumsel.",
    image: andrieYunusPoster,
    imageAlt: "Poster Seruan Mimbar Bebas Sumsel Resah - Kamis 16 April 2026 Pukul 16.00 WIB Persimpangan DPRD Prov. Sumsel Dresscode Hitam",
    action: "BACA MATERI",
    href: "https://drive.google.com/file/d/144cj2wzBn_mZ_q2wiZWWSSpP7LFQtsHu/view",
    isNew: true,
    metadata: {
      date: "Kamis, 16 April 2026",
      time: "Pukul 16.00 WIB s/d Selesai",
      location: "Persimpangan DPRD Prov. Sumsel",
      dresscode: "Hitam (Simbol Duka Cita Demokrasi & Solidaritas)",
      organizer: "Aliansi Sumsel Resah & BEM POLSRI",
    },
    keyPoints: [
      "Penyelenggaraan Mimbar Bebas sebagai instrumen konstitusional kebebasan berekspresi di muka umum.",
      "Jadwal Pelaksanaan: Kamis, 16 April 2026 pukul 16.00 WIB di titik sentral Persimpangan DPRD Sumsel.",
      "Instruksi Dresscode Hitam sebagai simbol perlawanan damai dan matinya nurani pemangku kebijakan daerah.",
      "Pemaparan materi nalar kritis advokasi kebijakan publik yang tidak berpihak kepada kepentingan rakyat Sumsel.",
    ],
    fullNarration: [
      "Mimbar Bebas Sumsel Resah merupakan ruang dialektika terbuka yang digagas untuk merespons maraknya pembungkaman kritik dan ketidakpedulian birokrasi terhadap jeritan rakyat. Mengambil lokasi strategis di Persimpangan DPRD Provinsi Sumatera Selatan, mimbar ini menjadi panggung rakyat bagi setiap individu yang menolak diam.",
      "Kajian Andrie Yunus dalam mimbar ini membedah berbagai paradoks pembangunan daerah: megah di atas kertas rancangan, namun rapuh dalam menjamin keadilan sosial bagi rakyat bawah. Mahasiswa hadir bukan untuk menciptakan kegaduhan, melainkan menjalankan fungsi moral sebagai penyeimbang kekuasaan.",
      "Melalui panduan dan dokumentasi aksi ini, seluruh mahasiswa dan masyarakat diimbau untuk hadir dalam kesatuan saf dengan mengenakan pakaian serba hitam, menjaga kondusivitas, serta meneguhkan tekad bahwa perjuangan menuntut keadilan tidak akan pernah padam.",
    ],
  },

  // -------------------------------------------------------------
  // 4. ARSIP: PELECEHAN SEKSUAL VERBAL DI KAMPUS
  // -------------------------------------------------------------
  {
    id: "pelecehan-seksual-verbal-di-kampus",
    category: "KAJIAN KAMPUS",
    title: "KAMPUS DARURAT PERLINDUNGAN - PELECEHAN SEKSUAL VERBAL DI KAMPUS",
    subtitle: "Menciptakan Ruang Pendidikan yang Aman, Inklusif, dan Berintegritas",
    description:
      "Mengulas persoalan pelecehan seksual verbal di lingkungan kampus serta pentingnya menciptakan ruang pendidikan yang aman dan berintegritas bagi seluruh civitas akademika.",
    image: kajianPelecehan,
    imageAlt: "Cover kajian pelecehan seksual verbal di kampus",
    action: "BACA KAJIAN",
    href: "https://drive.google.com/file/d/1FmvbmADl2wqFN1ZZkPbiFmpqrnLF3g8V/view?usp=drive_link",
    isNew: false,
    metadata: {
      date: "Februari 2026",
      organizer: "Kementerian Pemberdayaan Perempuan & Hak Asasi BEM POLSRI",
      location: "Politeknik Negeri Sriwijaya",
    },
    keyPoints: [
      "Definisi dan manifestasi pelecehan seksual verbal (catcalling, komentar bernada seksual, intimidasi verbal).",
      "Pentingnya implementasi Permendikbudristek PPKS di lingkungan politeknik dan universitas.",
      "Mekanisme pelaporan yang aman, rahasia, dan berpihak kepada korban tanpa takut ancaman akademik.",
    ],
    fullNarration: [
      "Kekerasan seksual verbal sering kali dianggap remeh atau dinormalisasi sebagai candaan belaka. Padahal, dampak psikologis yang ditimbulkan menciptakan rasa takut, ketidaknyamanan, dan menghambat potensi akademik mahasiswa.",
      "BEM POLSRI berkomitmen mewujudkan kampus sebagai zona aman bebas kekerasan seksual melalui edukasi masif, pendampingan korban, dan penguatan satgas pencegahan di kampus.",
    ],
  },

  // -------------------------------------------------------------
  // 5. ARSIP: 17 AGUSTUS 1945 BUKAN SEKEDAR TANGGAL
  // -------------------------------------------------------------
  {
    id: "17-agustus-bukan-sekedar-tanggal",
    category: "KAJIAN KEBANGSAAN",
    title: "17 AGUSTUS - Kilas Balik Perjalanan Indonesia Menuju Kemerdekaan",
    subtitle: "Refleksi Kemerdekaan dan Tugas Sejarah Generasi Muda Hari Ini",
    description:
      "Kilas balik perjalanan Indonesia menuju kemerdekaan dan refleksi mendalam terhadap makna kedaulatan bagi generasi hari ini di tengah tantangan global.",
    image: feed17August,
    imageAlt: "Cover kajian 17 Agustus 1945 bukan sekadar tanggal",
    action: "LIHAT KAJIAN",
    href: "https://www.instagram.com/p/DcH9SZoCTl5/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA==",
    isNew: false,
    metadata: {
      date: "Agustus 2026",
      organizer: "Kementerian Kajian & Aksi Strategis BEM POLSRI",
      location: "Indonesia",
    },
    keyPoints: [
      "Kilas historis proklamasi dan konsistensi perlawanan pemuda 1945.",
      "Dekonstruksi makna kemerdekaan: merdeka dari kemiskinan, kebodohan, dan ketidakadilan hukum.",
      "Peran mahasiswa sebagai agen perubahan (agent of change) dan penjaga moral bangsa.",
    ],
    fullNarration: [
      "Kemerdekaan bukanlah garis akhir perjalanan, melainkan jembatan emas menuju kedaulatan sejati rakyat. Kajian ini mengajak seluruh civitas akademika untuk tidak terjebak dalam seremoni semata, melainkan terus mengisi kemerdekaan dengan karya, pemikiran kritis, dan pembelaan terhadap nilai keadilan sosial.",
    ],
  },

  // -------------------------------------------------------------
  // 6. ARSIP: SUMSEL RESAH (EDISI RILIS AWAL)
  // -------------------------------------------------------------
  {
    id: "sumsel-resah-edisi-awal",
    category: "KAJIAN SOSIAL DAERAH",
    title: "SUMSEL RESAH - Sumsel Darurat Keadilan",
    subtitle: "Menakar Dinamika Sosial Ekonomi dan Kebijakan Daerah Sumatera Selatan",
    description:
      "Menyoroti keresahan masyarakat Sumatera Selatan dan berbagai persoalan mendasar yang membutuhkan perhatian serta respons nyata dari pemangku kebijakan daerah.",
    image: kajianSumselResah,
    imageAlt: "Cover kajian Sumsel Resah edisi awal",
    action: "BACA KAJIAN",
    href: "https://drive.google.com/file/d/144cj2wzBn_mZ_q2wiZWWSSpP7LFQtsHu/view",
    isNew: false,
    metadata: {
      date: "Awal 2026",
      organizer: "Kementerian Kastrat BEM POLSRI",
      location: "Sumatera Selatan",
    },
    keyPoints: [
      "Potret ketimpangan pembangunan antara kota metropolitan dan pedesaan di Sumsel.",
      "Isu ketahanan pangan lokal versus alih fungsi lahan perkebunan monokultur.",
      "Rekomendasi taktis mahasiswa kepada pemerintah provinsi dan legislatif daerah.",
    ],
    fullNarration: [
      "Rilis awal kajian Sumsel Resah membedah data-data makroekonomi daerah yang berbanding terbalik dengan kondisi riil masyarakat di lapangan. Menjadi landasan pijak lahirnya gelombang konsolidasi gerakan mahasiswa yang lebih luas di Sumatera Selatan.",
    ],
  },
];

// ===============================
// HELPER FUNCTIONS
// ===============================
export function getKajianById(id: string): Kajian | undefined {
  return kajianList.find((k) => k.id === id);
}

export function getNewKajianList(): Kajian[] {
  return kajianList.filter((k) => k.isNew);
}
