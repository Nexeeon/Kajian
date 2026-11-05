import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Instagram,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

// ===============================
// IMPORT ASSETS
// ===============================
import bgKajian from "./assets/bgkajian.png";
import logo from "./assets/logo.webp";
import qrBem from "./assets/qrbem.webp";

// ===============================
// IMPORT DATA & TYPES
// ===============================
import { getKajianById, kajianList } from "./data/kajianData";
import type { Kajian } from "./types/kajian";

// ===============================
// IMPORT ARSIP / HALAMAN KAJIAN TERPISAH & HIGHLIGHT SLIDER
// ===============================
import { KajianAndrieYunus } from "./pages/KajianAndrieYunus";
import { KajianKarhutla } from "./pages/KajianKarhutla";
import { KajianSumselResah } from "./pages/KajianSumselResah";
import { KajianDetailView } from "./components/KajianDetailView";
import { KajianHighlightSlider } from "./components/KajianHighlightSlider";

// ===============================
// BRAND COMPONENT
// ===============================
function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? "brand--compact" : ""}`}>
      <img src={logo} alt="Logo BEM POLSRI" className="brand__logo" />

      <div>
        <p className="brand__cabinet">KABINET KILAU GEMILANG</p>
        <p className="brand__name">
          BEM POLSRI <span>• 2026</span>
        </p>
      </div>
    </div>
  );
}

// ===============================
// DESKTOP SIDEBAR (4 MENU UTAMA)
// 1. Home
// 2. Highlight
// 3. Kajian
// 4. Contact
// ===============================
function Sidebar({
  activeNav,
  onNavigate,
}: {
  activeNav: string;
  onNavigate?: (hash: string) => void;
}) {
  const navItems = [
    { num: "01", label: "Home", href: "#home" },
    { num: "02", label: "Highlight", href: "#highlight" },
    { num: "03", label: "Kajian", href: "#kajian" },
    { num: "04", label: "Contact", href: "#contact" },
  ];

  return (
    <aside className="sidebar">
      <Brand />

      <div className="sidebar__rule" />

      <nav className="sidebar__nav" aria-label="Navigasi utama">
        {navItems.map((item) => {
          const isActive = activeNav === item.href;
          return (
            <a
              key={item.href}
              className={`sidebar__link ${isActive ? "sidebar__link--active" : ""}`}
              href={item.href}
              onClick={() => onNavigate && onNavigate(item.href)}
            >
              <span>{item.num}</span>
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="sidebar__footer">
        <span className="sidebar__dot" />
        <p>
          Ruang gagasan
          <br />
          untuk perubahan.
        </p>
      </div>
    </aside>
  );
}

// ===============================
// MOBILE NAVIGATION (4 MENU UTAMA)
// ===============================
function MobileNav({
  open,
  onToggle,
  onNavigate,
}: {
  open: boolean;
  onToggle: () => void;
  onNavigate?: (hash: string) => void;
}) {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Highlight", href: "#highlight" },
    { label: "Kajian", href: "#kajian" },
    { label: "Contact", href: "#contact" },
  ];

  const handleClick = (hash: string) => {
    onToggle();
    if (onNavigate) onNavigate(hash);
    window.location.hash = hash;
  };

  return (
    <header className="mobile-nav">
      <Brand compact />

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Tutup menu" : "Buka menu"}
        aria-expanded={open}
        onClick={onToggle}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        className={`mobile-nav__menu ${open ? "mobile-nav__menu--open" : ""}`}
        aria-hidden={!open}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => handleClick(item.href)}
          >
            {item.label}
            <ChevronRight size={16} />
          </a>
        ))}
      </nav>
    </header>
  );
}

// ===============================
// KAJIAN CARD COMPONENT (ARSIP LENGKAP)
// ===============================
function KajianCard({
  kajian,
  index,
  onSelect,
}: {
  kajian: Kajian;
  index: number;
  onSelect: (id: string) => void;
}) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article
      className="kajian-card reveal group flex flex-col justify-between h-full border-t-2 border-[#171713]/25 pt-4 pb-2 transition-transform duration-300 hover:-translate-y-1.5"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="flex flex-col">
        {/* GAMBAR COVER */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onSelect(kajian.id)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(kajian.id);
            }
          }}
          className="relative overflow-hidden aspect-[16/10] bg-[#171713] shadow-inner cursor-pointer"
          title={`Lihat detail arsip ${kajian.title}`}
        >
          <img
            src={kajian.image}
            alt={kajian.imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* NOMOR INDEKS */}
          <span className="absolute left-3 bottom-3 px-2 py-0.5 bg-[#c21d1f] text-[#eee9da] font-mono text-[9px] font-bold tracking-wider">
            {formattedIndex}
          </span>

          {/* BADGE RILIS TERBARU 2026 */}
          {kajian.isNew && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 px-2 py-0.5 bg-[#171713]/90 text-[#eee9da] border border-[#d9cfac]/30 font-mono text-[8px] font-bold uppercase tracking-wider">
              <Sparkles size={9} className="text-[#bf9b30]" />
              Baru 2026
            </span>
          )}
        </div>

        {/* DETAIL TEKS */}
        <div className="pt-4">
          <p className="font-mono text-[10px] font-bold text-[#a1936a] uppercase tracking-wider mb-2">
            {kajian.category}
          </p>

          <h3
            role="button"
            tabIndex={0}
            onClick={() => onSelect(kajian.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(kajian.id);
              }
            }}
            className="font-bold text-lg md:text-xl text-[#171713] leading-snug tracking-tight mb-2 line-clamp-2 min-h-[3.25rem] cursor-pointer hover:text-[#c21d1f] transition-colors"
          >
            {kajian.title}
          </h3>

          <p className="text-xs text-[#777266] leading-relaxed line-clamp-3">
            {kajian.description}
          </p>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="pt-4 mt-auto flex items-center justify-between gap-3 border-t border-[#171713]/10">
        {/* BUKA ARSIP LENGKAP */}
        <button
          type="button"
          onClick={() => onSelect(kajian.id)}
          className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#171713] hover:text-[#c21d1f] transition-colors"
        >
          <BookOpen size={13} />
          <span>BACA ARSIP</span>
        </button>

        {/* LINK DOKUMEN / DRIVE */}
        <a
          href={kajian.href}
          target="_blank"
          rel="noopener noreferrer"
          className="read-link group"
          title="Buka dokumen kajian lengkap (Google Drive)"
        >
          <span>DOKUMEN</span>
          <ArrowUpRight
            size={13}
            strokeWidth={2.4}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  );
}

// ===============================
// CONTACT SECTION
// ===============================
function ContactSection() {
  return (
    <section
      className="contact-section reveal py-12 md:py-16 border-t border-[#171713]/15"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* INTRO */}
        <div className="contact-section__intro">
          <p className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#8c8677] uppercase mb-2">
            <span className="w-5 h-[1px] bg-[#c21d1f] inline-block" />
            Terhubung bersama BEM POLSRI
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171713] leading-none mt-2">
            HUBUNGI
            <br />
            <em className="font-serif font-normal italic text-[#c21d1f]">
              KAMI.
            </em>
          </h2>
        </div>

        {/* DETAILS */}
        <div className="contact-section__details flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
          {/* QR CODE BEM POLSRI */}
          <div
            className="qr-placeholder flex-shrink-0 w-36 h-36 bg-[#f7f4e8] border-8 border-[#f7f4e8] p-2 flex flex-col justify-between shadow-[7px_7px_0_#d9cfac]"
            aria-label="QR Code BEM POLSRI"
          >
            <img
              src={qrBem}
              alt="QR Code BEM POLSRI"
              className="w-full h-full object-contain"
            />
            <small className="font-mono text-[7px] text-center tracking-wider block mt-1">
              QR BEM POLSRI
            </small>
          </div>

          {/* CONTACT INFO & ACTION */}
          <div className="contact-section__copy flex-1">
            <p className="font-serif text-[#777266] text-base leading-snug">
              Scan QR untuk terhubung
              <br />
              dengan BEM POLSRI
            </p>

            <div className="flex items-center gap-3 mt-4">
              <span className="w-8 h-8 bg-[#c21d1f] text-white flex items-center justify-center flex-shrink-0">
                <Mail size={16} />
              </span>

              <div>
                <small className="block text-[9px] font-mono text-[#9a927f] uppercase">
                  Email
                </small>
                <a
                  href="mailto:bemkpolsri25@gmail.com"
                  className="text-xs sm:text-sm font-bold text-[#171713] border-b border-[#c21d1f] hover:text-[#c21d1f] transition-colors"
                >
                  bemkpolsri25@gmail.com
                </a>
              </div>
            </div>

            <a
              className="inline-flex items-center gap-3 mt-6 px-4 py-3 bg-[#171713] text-[#f7f4e8] font-mono text-[10px] tracking-wider hover:bg-[#c21d1f] transition-colors"
              href="mailto:bemkpolsri25@gmail.com"
            >
              KIRIM EMAIL
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===============================
// MAIN APP COMPONENT
// ===============================
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeKajianId, setActiveKajianId] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<string>("#home");

  // Sync state dengan URL hash (SPA routing: #arsip/:id atau #home, #highlight, #kajian, #contact)
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash || "#home";
      if (hash.startsWith("#arsip/")) {
        const id = hash.replace("#arsip/", "");
        setActiveKajianId(id);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setActiveKajianId(null);
        setActiveNav(hash);
      }
    };

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);
    return () => window.removeEventListener("hashchange", handleHashSync);
  }, []);

  const handleSelectKajian = (id: string) => {
    window.location.hash = `#arsip/${id}`;
  };

  const handleBackToKajian = () => {
    window.location.hash = "#kajian";
  };

  const handleNavigate = (hash: string) => {
    setActiveKajianId(null);
    setActiveNav(hash);
  };

  // Render halaman terpisah berdasarkan ID kajian
  const renderDetailKajian = () => {
    if (!activeKajianId) return null;

    switch (activeKajianId) {
      case "sumsel-resah-seruan-aksi":
        return <KajianSumselResah onBack={handleBackToKajian} />;
      case "karhutla-indonesia-2026":
        return <KajianKarhutla onBack={handleBackToKajian} />;
      case "andrie-yunus-mimbar-bebas":
        return <KajianAndrieYunus onBack={handleBackToKajian} />;
      default: {
        const item = getKajianById(activeKajianId);
        if (item) {
          return <KajianDetailView kajian={item} onBack={handleBackToKajian} />;
        }
        return (
          <div className="py-20 text-center">
            <p className="font-mono text-sm text-[#777266] mb-4">
              Arsip kajian tidak ditemukan.
            </p>
            <button
              type="button"
              onClick={handleBackToKajian}
              className="px-4 py-2 bg-[#171713] text-[#eee9da] font-mono text-xs font-bold"
            >
              Kembali ke Daftar
            </button>
          </div>
        );
      }
    }
  };

  return (
    <div
      className="site-shell min-h-screen w-full bg-no-repeat bg-cover bg-center bg-fixed text-[#171713]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(245, 242, 231, 0.90), rgba(245, 242, 231, 0.82)), url(${bgKajian})`,
      }}
    >
      {/* DESKTOP SIDEBAR (4 MENU UTAMA: HOME, HIGHLIGHT, KAJIAN, CONTACT) */}
      <Sidebar activeNav={activeNav} onNavigate={handleNavigate} />

      {/* MOBILE NAVIGATION */}
      <MobileNav
        open={menuOpen}
        onToggle={() => setMenuOpen((current) => !current)}
        onNavigate={handleNavigate}
      />

      {/* MAIN CONTAINER */}
      <main className="main-content min-h-screen">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-16 md:space-y-24">
          
          {/* TAMPILAN HALAMAN DETAIL KAJIAN (JIKA ADA KAJIAN AKTIF) */}
          {activeKajianId ? (
            renderDetailKajian()
          ) : (
            <>
              {/* =========================================================
                  1. MENU HOME: HERO / JUDUL UTAMA (#home)
              ========================================================== */}
              <header
                className="hero flex flex-col justify-between min-h-[500px] md:min-h-[580px] py-8 md:py-12 border-b border-[#171713]/15"
                id="home"
              >
                <div className="hero__meta flex items-center gap-3 font-mono text-[11px] text-[#8d887b] tracking-widest">
                  <span>01</span>
                  <span>—</span>
                  <span>BERANDA / KAJIAN STRATEGIS 2026</span>
                </div>

                <div className="hero__heading my-auto py-10 md:py-14">
                  <p className="hero__kicker font-mono text-xs text-[#c21d1f] tracking-widest mb-3 font-semibold">
                    BEM POLSRI · KABINET KILAU GEMILANG
                  </p>

                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#171713] tracking-tighter leading-[0.88]">
                    KAJIAN<span className="text-[#c21d1f]">.</span>
                  </h1>

                  <p className="hero__subtitle font-serif text-xl sm:text-2xl md:text-3xl text-[#5b584f] mt-6 leading-snug">
                    Ruang Gagasan, Analisis,
                    <br className="desktop-break" />
                    dan Suara Mahasiswa
                  </p>
                </div>

                <div className="hero__scroll flex items-center gap-3 text-[#8d887b] font-mono text-[10px] uppercase tracking-widest">
                  <span className="w-8 h-[1px] bg-[#c21d1f]" />
                  Scroll to explore
                </div>
              </header>

              {/* =========================================================
                  2. MENU HIGHLIGHT: SOROTAN SLIDER KAJIAN UNGGULAN (#highlight)
                  Mengintegrasikan 6 Kajian (Kajian Baru & Kajian Lama)
                  dengan Skema Warna Krem, Merah Tegas, dan Charcoal
              ========================================================== */}
              <section id="highlight" className="py-2 md:py-6">
                <KajianHighlightSlider onSelectKajian={handleSelectKajian} />
              </section>

              {/* =========================================================
                  3. MENU KAJIAN: DAFTAR ARSIP LENGKAP (#kajian)
                  RESPONSIVE GRID 1-2-3-4 KOLOM DINAMIS
              ========================================================== */}
              <section
                className="publication-section py-4 md:py-8"
                id="kajian"
                aria-labelledby="latest-heading"
              >
                {/* SECTION HEADING */}
                <div className="section-heading flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
                  <div>
                    <p className="eyebrow flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#8c8677] uppercase mb-2">
                      <span className="w-5 h-[1px] bg-[#c21d1f] inline-block" />
                      Daftar Publikasi
                    </p>

                    <h2
                      id="latest-heading"
                      className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171713] leading-none mt-1"
                    >
                      ARSIP
                      <br />
                      <em className="font-serif font-normal italic text-[#c21d1f]">KAJIAN.</em>
                    </h2>
                  </div>

                  <p className="section-heading__note font-serif text-[#777266] text-base md:text-right leading-relaxed">
                    Membaca keadaan,
                    <br />
                    menyuarakan perubahan.
                  </p>
                </div>

                {/* DYNAMIC CARD GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {kajianList.map((kajian, index) => (
                    <KajianCard
                      key={kajian.id}
                      kajian={kajian}
                      index={index}
                      onSelect={handleSelectKajian}
                    />
                  ))}
                </div>
              </section>

              {/* =========================================================
                  4. MENU CONTACT: INFORMASI KONTAK & QR BEM (#contact)
              ========================================================== */}
              <ContactSection />
            </>
          )}

          {/* =========================================================
              FOOTER MINI
          ========================================================== */}
          <footer className="footer py-8 md:py-10 border-t border-[#171713]/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#777266]">
            <div className="text-center sm:text-left">
              <strong className="text-sm font-bold text-[#171713] tracking-tight">
                BEM POLSRI <span className="text-[#c21d1f]">2026</span>
              </strong>
              <p className="font-mono text-[10px] text-[#777266] mt-1">
                Kabinet Kilau Gemilang
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* EMAIL LINK */}
              <a
                href="mailto:bemkpolsri25@gmail.com"
                aria-label="Kirim email"
                className="w-8 h-8 grid place-items-center border border-[#171713]/20 hover:bg-[#c21d1f] hover:border-[#c21d1f] hover:text-white transition-all text-[#171713]"
              >
                <Mail size={15} />
              </a>

              {/* INSTAGRAM LINK */}
              <a
                href="https://www.instagram.com/bempolsri_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram BEM POLSRI"
                className="w-8 h-8 grid place-items-center border border-[#171713]/20 hover:bg-[#c21d1f] hover:border-[#c21d1f] hover:text-white transition-all text-[#171713]"
              >
                <Instagram size={15} />
              </a>
            </div>

            <p className="font-mono text-[10px] text-center sm:text-right text-[#777266]">
              © 2026 BEM POLSRI. All Rights Reserved.
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}
