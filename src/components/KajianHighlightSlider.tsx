import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileText,
  MapPin,
  Pause,
  Play,
  Share2,
  Sparkles,
} from "lucide-react";

import { kajianList } from "../data/kajianData";

// ==========================================
// INTERFACE SLIDER ITEM
// ==========================================
export interface SlideKajian {
  id: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  date: string;
  location?: string;
  image: string;
  imageAlt: string;
  documentUrl: string;
  isNew?: boolean;
}

// ==========================================
// DATA 6 KAJIAN (KAJIAN LAMA & TERBARU TERINTEGRASI)
// ==========================================
const defaultSlides: SlideKajian[] = kajianList.map((k) => ({
  id: k.id,
  category: k.category,
  badge: k.isNew ? "RILIS TERBARU 2026" : "ARSIP KAJIAN",
  title: k.title,
  subtitle:
    k.subtitle ||
    "Dokumen Analisis dan Sikap Kritis Mahasiswa BEM POLSRI 2026",
  description: k.description,
  keyPoints: k.keyPoints || [
    "Menjaga nalar kritis dan independensi gerakan mahasiswa",
    "Analisis kebijakan publik berlandaskan data dan kepentingan rakyat",
    "Dokumen kajian dapat diakses bebas untuk advokasi dan edukasi",
  ],
  date: k.metadata?.date || "Tahun 2026",
  location: k.metadata?.location || "Sumatera Selatan",
  image: k.image,
  imageAlt: k.imageAlt,
  documentUrl: k.href,
  isNew: k.isNew,
}));

interface KajianHighlightSliderProps {
  slides?: SlideKajian[];
  onSelectKajian?: (id: string) => void;
  autoPlayInterval?: number; // ms, default 7000
}

export function KajianHighlightSlider({
  slides = defaultSlides,
  onSelectKajian,
  autoPlayInterval = 7000,
}: KajianHighlightSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeSlide = slides[currentIndex];

  // Navigasi Next & Prev
  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating, slides.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating, slides.length]);

  const handleSelect = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 450);
  };

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Autoplay handler
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [handleNext, isPaused, autoPlayInterval]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: activeSlide.title,
          text: activeSlide.description,
          url: `${window.location.origin}${window.location.pathname}#arsip/${activeSlide.id}`,
        });
      } catch {
        // user dismissed
      }
    } else {
      navigator.clipboard.writeText(
        `${window.location.origin}${window.location.pathname}#arsip/${activeSlide.id}`
      );
      alert("Tautan kajian berhasil disalin ke clipboard!");
    }
  };

  return (
    <div
      className="relative w-full mx-auto select-none font-sans text-[#171713]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Sorotan Kajian Strategis BEM POLSRI"
    >
      {/* ========================================================
          HEADER SECTION HIGHLIGHT (KREM & MERAH TEGAS)
      ========================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8 pb-4 border-b border-[#171713]/15">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c21d1f] text-[#eee9da] text-xs font-mono font-bold tracking-widest mb-3 shadow-[3px_3px_0_#171713]">
            <Sparkles size={13} className="text-[#bf9b30]" />
            <span>SOROTAN KAJIAN UNGGULAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171713] leading-none">
            HIGHLIGHT<span>.</span>
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-[#777266] mt-2">
            Dokumentasi pemikiran kritis, advokasi sosial, dan seruan gerakan mahasiswa.
          </p>
        </div>

        {/* CONTROLS (AUTOPLAY TOGGLE & COUNTER) */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4efe0] hover:bg-[#171713] hover:text-[#f4efe0] border border-[#171713]/25 font-mono text-xs font-bold text-[#171713] transition-colors shadow-sm"
            title={isPaused ? "Lanjutkan Slide Otomatis" : "Jeda Slide Otomatis"}
          >
            {isPaused ? <Play size={12} /> : <Pause size={12} />}
            <span>{isPaused ? "Play" : "Pause"}</span>
          </button>

          <div className="px-3.5 py-1.5 rounded-full bg-[#f4efe0] border border-[#171713]/25 font-mono text-xs text-[#777266]">
            <span className="text-[#171713] font-bold">0{currentIndex + 1}</span>
            <span className="mx-1 text-[#c21d1f]">/</span>
            <span>0{slides.length}</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          MAIN SLIDER STAGE (EDITORIAL CREAM & CHARCOAL CARD)
      ========================================================= */}
      <div className="relative group">
        {/* TOMBOL PREV (KIRI) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Slide sebelumnya"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center bg-[#fdfbf7] hover:bg-[#c21d1f] text-[#171713] hover:text-[#fdfbf7] border-2 border-[#171713] shadow-[4px_4px_0_#171713] hover:shadow-[2px_2px_0_#171713] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <ChevronLeft size={24} />
        </button>

        {/* TOMBOL NEXT (KANAN) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Slide berikutnya"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center bg-[#fdfbf7] hover:bg-[#c21d1f] text-[#171713] hover:text-[#fdfbf7] border-2 border-[#171713] shadow-[4px_4px_0_#171713] hover:shadow-[2px_2px_0_#171713] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <ChevronRight size={24} />
        </button>

        {/* KARTU UTAMA DENGAN NUANSA KREM / PAPER-WHITE & CHARCOAL */}
        <div className="relative rounded-3xl overflow-hidden bg-[#fdfcf8] border-2 border-[#171713] shadow-[10px_12px_0_#d9cfac] transition-all duration-500">
          {/* Garis Aksen Merah Tegas di Sisi Atas */}
          <div className="h-1.5 w-full bg-[#c21d1f]" />

          {/* INNER GRID: KIRI POSTER, KANAN KONTEN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 p-5 sm:p-8 lg:p-10 items-center">
            
            {/* SISI KIRI: POSTER DENGAN FRAME CHARCOAL & SHADOW KREM (5 Kolom) */}
            <div className="lg:col-span-5 relative group/poster">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-h-[460px] mx-auto bg-[#171713] border-2 border-[#171713] shadow-[6px_7px_0_#d9cfac] group-hover/poster:shadow-[8px_10px_0_#c21d1f] transition-all duration-500">
                <img
                  key={activeSlide.id}
                  src={activeSlide.image}
                  alt={activeSlide.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/poster:scale-105"
                  loading="eager"
                />

                {/* Overlay Vignette Lembut */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171713]/70 via-transparent to-transparent pointer-events-none" />

                {/* Badge Status di Atas Poster */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#c21d1f] text-[#eee9da] font-mono text-[9px] font-bold tracking-wider shadow-sm">
                    {activeSlide.badge}
                  </span>
                </div>

                {/* Tag Tanggal di Bawah Poster */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#171713]/85 text-[#f4efe0] font-mono text-[9px] font-semibold border border-[#d9cfac]/30">
                  {activeSlide.date}
                </div>
              </div>
            </div>

            {/* SISI KANAN: DETAIL KAJIAN & ACTION BUTTONS (7 Kolom) */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-[#a1936a] uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#c21d1f] inline-block" />
                    {activeSlide.category}
                  </span>

                  {activeSlide.date && (
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#777266]">
                      <Calendar size={12} className="text-[#c21d1f]" />
                      {activeSlide.date}
                    </span>
                  )}

                  {activeSlide.location && (
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#777266]">
                      <MapPin size={12} className="text-[#c21d1f]" />
                      {activeSlide.location}
                    </span>
                  )}
                </div>

                {/* Judul Utama Slide */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#171713] leading-snug mb-3 hover:text-[#c21d1f] transition-colors">
                  {activeSlide.title}
                </h3>

                {/* Subtitle / Kutipan */}
                <p className="font-serif italic text-sm sm:text-base text-[#5b584f] mb-4 border-l-2 border-[#c21d1f] pl-3.5 leading-relaxed">
                  "{activeSlide.subtitle}"
                </p>

                {/* Deskripsi */}
                <p className="text-[#3e3c35] text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {activeSlide.description}
                </p>

                {/* Poin Kunci / Tuntutan */}
                <div className="mb-6 p-4 rounded-xl bg-[#f5f0df] border border-[#171713]/15">
                  <p className="font-mono text-[11px] font-bold text-[#c21d1f] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                    <FileText size={13} />
                    Poin Strategis & Sikap Kajian
                  </p>
                  <ul className="space-y-1.5">
                    {activeSlide.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#2d2c25]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c21d1f] mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {/* Tombol Baca Arsip Lengkap */}
                <button
                  type="button"
                  onClick={() =>
                    onSelectKajian
                      ? onSelectKajian(activeSlide.id)
                      : (window.location.hash = `#arsip/${activeSlide.id}`)
                  }
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#c21d1f] hover:bg-[#a01618] text-[#f7f4e8] font-mono text-xs font-bold tracking-wider shadow-[3px_3px_0_#171713] hover:shadow-[1px_1px_0_#171713] transition-all hover:scale-105 active:scale-95"
                >
                  <span>BACA ARSIP DETAIL</span>
                  <ArrowUpRight size={15} />
                </button>

                {/* Tombol Dokumen Drive Eksternal */}
                <a
                  href={activeSlide.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#fbf9f1] hover:bg-[#171713] text-[#171713] hover:text-[#f7f4e8] border border-[#171713]/30 hover:border-[#171713] text-xs font-mono font-bold transition-all hover:scale-105 shadow-sm"
                  title="Unduh / Buka di Google Drive"
                >
                  <FileText size={14} className="text-[#c21d1f]" />
                  <span>DOKUMEN DRIVE</span>
                </a>

                {/* Tombol Bagikan */}
                <button
                  type="button"
                  onClick={handleShare}
                  className="p-3 rounded-xl bg-[#fbf9f1] hover:bg-[#f5f0df] border border-[#171713]/25 hover:border-[#c21d1f] text-[#171713] hover:text-[#c21d1f] transition-colors shadow-sm"
                  title="Bagikan Tautan Kajian"
                >
                  <Share2 size={15} />
                </button>
              </div>
            </div>

          </div>

          {/* PROGRESS BAR TIMER */}
          {!isPaused && (
            <div className="h-1 w-full bg-[#171713]/10 overflow-hidden">
              <div
                key={currentIndex}
                className="h-full bg-[#c21d1f] animate-slideProgress"
                style={{
                  animationDuration: `${autoPlayInterval}ms`,
                  animationTimingFunction: "linear",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* ========================================================
          BARISAN 6 THUMBNAIL INTERAKTIF DI BAWAH (LENGKAP)
      ========================================================= */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3 px-1">
          <p className="font-mono text-xs text-[#777266] uppercase tracking-widest flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#c21d1f]" />
            Daftar Arsip Kajian dalam Sorotan ({slides.length} Kajian)
          </p>
          <span className="font-mono text-[10px] text-[#8d887b]">
            Klik thumbnail untuk melompat antar kajian
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => handleSelect(idx)}
                className={`group relative text-left p-2.5 rounded-xl transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? "bg-[#f5f0df] border-2 border-[#c21d1f] shadow-[4px_4px_0_#c21d1f] scale-[1.02] text-[#171713]"
                    : "bg-[#fdfbf7]/90 border border-[#171713]/20 opacity-75 hover:opacity-100 hover:border-[#171713]/60 hover:bg-[#f8f5eb]"
                }`}
              >
                {/* Poster Mini */}
                <div className="w-10 h-12 sm:w-11 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 bg-[#171713] border border-[#171713]">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Teks Mini */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="font-mono text-[9px] text-[#c21d1f] font-bold">
                      0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c21d1f]" />
                    )}
                  </div>
                  <h4 className="text-[11px] font-bold text-[#171713] truncate group-hover:text-[#c21d1f] transition-colors leading-tight">
                    {slide.title}
                  </h4>
                  <p className="text-[9px] text-[#777266] truncate mt-0.5 font-mono">
                    {slide.category}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default KajianHighlightSlider;
