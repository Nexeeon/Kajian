import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Download,
  MapPin,
  Share2,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import type { Kajian } from "../types/kajian";

interface KajianDetailViewProps {
  kajian: Kajian;
  onBack: () => void;
}

export function KajianDetailView({ kajian, onBack }: KajianDetailViewProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: kajian.title,
          text: kajian.description,
          url: window.location.href,
        });
      } catch {
        // Fallback or user dismissed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Tautan kajian berhasil disalin ke clipboard!");
    }
  };

  return (
    <article className="reveal py-6 md:py-10 max-w-5xl mx-auto">
      {/* TOMBOL KEMBALI */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#171713]/15">
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-[#171713] hover:text-[#c21d1f] transition-colors"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>KEMBALI KE DAFTAR KAJIAN</span>
        </button>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#171713]/20 hover:border-[#c21d1f] hover:text-[#c21d1f] font-mono text-[10px] uppercase tracking-wider transition-colors"
          title="Bagikan Kajian"
        >
          <Share2 size={13} />
          <span>Bagikan</span>
        </button>
      </div>

      {/* HEADER KAJIAN */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-[11px] font-bold text-[#a1936a] uppercase tracking-widest">
            {kajian.category}
          </span>

          {kajian.isNew && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#c21d1f] text-[#eee9da] font-mono text-[9px] font-bold tracking-wider uppercase">
              <Sparkles size={10} />
              Rilis Terbaru 2026
            </span>
          )}

          {kajian.metadata?.date && (
            <span className="font-mono text-[11px] text-[#777266]">
              • {kajian.metadata.date}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#171713] tracking-tight leading-[1.05] mb-4">
          {kajian.title}
        </h1>

        {kajian.subtitle && (
          <p className="font-serif italic text-lg sm:text-xl text-[#5b584f] max-w-3xl leading-relaxed">
            "{kajian.subtitle}"
          </p>
        )}
      </header>

      {/* GRID KONTEN UTAMA & POSTER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
        {/* POSTER REFERENSI VISUAL (5 Kolom) */}
        <div className="lg:col-span-5">
          <div className="relative bg-[#171713] p-2 shadow-[10px_12px_0_#d9cfac] border border-[#171713]">
            <img
              src={kajian.image}
              alt={kajian.imageAlt}
              className="w-full h-auto object-cover max-h-[620px] mx-auto block"
              loading="eager"
            />
            <div className="pt-2 pb-1 px-1 flex items-center justify-between text-[#b9b6aa] font-mono text-[9px] tracking-wider">
              <span>BEM POLSRI · ARSIP RESMI</span>
              <span>2026</span>
            </div>
          </div>

          {/* AKSI DOWNLOAD & DOKUMEN */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={kajian.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2.5 px-5 py-3.5 bg-[#c21d1f] text-white hover:bg-[#a01618] font-mono text-xs font-bold tracking-wider transition-colors shadow-sm"
            >
              <Download size={15} />
              <span>DOKUMEN LENGKAP (DRIVE)</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* NARASI & INFORMASI DETAIL (7 Kolom) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* DESKRIPSI SINGKAT */}
          <div className="p-5 bg-[#f5f2e7] border-l-4 border-[#c21d1f] shadow-sm">
            <h2 className="font-mono text-xs font-bold text-[#c21d1f] uppercase tracking-wider mb-1">
              Ringkasan Kajian
            </h2>
            <p className="text-[#171713] text-sm md:text-base leading-relaxed">
              {kajian.description}
            </p>
          </div>

          {/* METADATA AKSI / ACARA (Jika Ada) */}
          {kajian.metadata && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-[#f8f6ee] border border-[#171713]/15">
              {kajian.metadata.date && (
                <div className="flex items-start gap-2.5">
                  <Calendar size={16} className="text-[#c21d1f] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-mono text-[9px] text-[#777266] uppercase">Tanggal / Waktu</span>
                    <span className="font-bold text-xs text-[#171713]">
                      {kajian.metadata.date} {kajian.metadata.time ? `• ${kajian.metadata.time}` : ""}
                    </span>
                  </div>
                </div>
              )}

              {kajian.metadata.location && (
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#c21d1f] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-mono text-[9px] text-[#777266] uppercase">Lokasi</span>
                    <span className="font-bold text-xs text-[#171713]">{kajian.metadata.location}</span>
                  </div>
                </div>
              )}

              {kajian.metadata.dresscode && (
                <div className="flex items-start gap-2.5">
                  <ShieldAlert size={16} className="text-[#c21d1f] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-mono text-[9px] text-[#777266] uppercase">Dresscode Aksi</span>
                    <span className="font-bold text-xs text-[#c21d1f]">{kajian.metadata.dresscode}</span>
                  </div>
                </div>
              )}

              {kajian.metadata.organizer && (
                <div className="flex items-start gap-2.5">
                  <Clock size={16} className="text-[#a1936a] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-mono text-[9px] text-[#777266] uppercase">Inisiator</span>
                    <span className="font-bold text-xs text-[#171713]">{kajian.metadata.organizer}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* POIN-POIN KUNCI / TUNTUTAN */}
          {kajian.keyPoints && kajian.keyPoints.length > 0 && (
            <div>
              <h3 className="font-mono text-xs font-bold text-[#171713] tracking-widest uppercase mb-3 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#c21d1f]" />
                Poin Kritis & Tuntutan Kebijakan
              </h3>
              <ul className="space-y-2.5">
                {kajian.keyPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-xs md:text-sm text-[#3b3a34] leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c21d1f] mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* NARASI LENGKAP ARSIP */}
          {kajian.fullNarration && (
            <div className="mt-2 space-y-4 pt-4 border-t border-[#171713]/10">
              <h3 className="font-mono text-xs font-bold text-[#171713] tracking-widest uppercase mb-2 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#c21d1f]" />
                Narasi & Naskah Kajian
              </h3>
              {kajian.fullNarration.map((paragraf, idx) => (
                <p
                  key={idx}
                  className="text-xs md:text-sm text-[#4b4941] leading-relaxed font-sans text-justify"
                >
                  {paragraf}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FOOTNOTE KAJIAN */}
      <div className="pt-6 border-t border-[#171713]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[10px] text-[#777266]">
          Dipublikasikan oleh Kementerian Kajian & Aksi Strategis (KASTRAT) BEM POLSRI 2026.
        </p>

        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#c21d1f] hover:underline"
        >
          <ArrowLeft size={14} />
          Kembali ke Beranda Kajian
        </button>
      </div>
    </article>
  );
}
