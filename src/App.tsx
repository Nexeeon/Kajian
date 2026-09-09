import { useState } from 'react';
import { ArrowUpRight, ChevronRight, Instagram, Mail, Menu, X } from 'lucide-react';

const asset = (name: string) => `/src/assets/${name}`;

interface Kajian {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  action: string;
  href: string;
}

const kajianList: Kajian[] = [
  {
    category: 'KAJIAN SOSIAL',
    title: 'SUMSEL RESAH',
    description: 'Menyoroti keresahan masyarakat Sumatera Selatan dan berbagai persoalan yang membutuhkan perhatian serta respons nyata.',
    image: asset('Kajian_Sumsel_Resah.jpeg'),
    imageAlt: 'Cover kajian Sumsel Resah',
    action: 'BACA KAJIAN',
    href: 'https://drive.google.com/file/d/144cj2wzBn_mZ_q2wiZWWSSpP7LFQtsHu/view',
  },
  {
    category: 'KAJIAN KAMPUS',
    title: 'PELECEHAN SEKSUAL VERBAL DI KAMPUS',
    description: 'Mengulas persoalan pelecehan seksual verbal di lingkungan kampus serta pentingnya menciptakan ruang pendidikan yang aman dan berintegritas.',
    image: asset('Kajian_Pelecehan_Seksual_Verbal_di_Kampus.jpeg'),
    imageAlt: 'Cover kajian pelecehan seksual verbal di kampus',
    action: 'BACA KAJIAN',
    href: 'https://drive.google.com/file/d/1FmvbmADl2wqFN1ZZkPbiFmpqrnLF3g8V/view?usp=drive_link',
  },
  {
    category: 'KAJIAN KEBANGSAAN',
    title: '17 AGUSTUS 1945 BUKAN SEKEDAR TANGGAL',
    description: 'Kilas balik perjalanan Indonesia menuju kemerdekaan dan refleksi terhadap makna kemerdekaan bagi generasi hari ini.',
    image: asset('Feed_IG_Orderan_17_August.png'),
    imageAlt: 'Cover kajian 17 Agustus 1945 bukan sekadar tanggal',
    action: 'LIHAT KAJIAN',
    href: 'https://www.instagram.com/p/DcH9SZoCTl5/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA==',
  },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`brand ${compact ? 'brand--compact' : ''}`}>
      <img src={asset('logo.webp')} alt="Logo BEM POLSRI" className="brand__logo" />
      <div>
        <p className="brand__cabinet">KABINET KILAU GEMILANG</p>
        <p className="brand__name">BEM POLSRI <span>• 2026</span></p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <Brand />
      <div className="sidebar__rule" />
      <nav className="sidebar__nav" aria-label="Navigasi utama">
        <a className="sidebar__link sidebar__link--active" href="#kajian"><span>01</span> Kajian</a>
        <a className="sidebar__link" href="#contact"><span>02</span> Contact</a>
      </nav>
      <div className="sidebar__footer">
        <span className="sidebar__dot" />
        <p>Ruang gagasan<br />untuk perubahan.</p>
      </div>
    </aside>
  );
}

function MobileNav({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <header className="mobile-nav">
      <Brand compact />
      <button className="menu-button" type="button" aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open} onClick={onToggle}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`mobile-nav__menu ${open ? 'mobile-nav__menu--open' : ''}`} aria-hidden={!open}>
        <a href="#kajian" onClick={onToggle}>Kajian <ChevronRight size={16} /></a>
        <a href="#contact" onClick={onToggle}>Contact <ChevronRight size={16} /></a>
      </nav>
    </header>
  );
}

function ExternalButton({ kajian }: { kajian: Kajian }) {
  return (
    <a className="read-link" href={kajian.href} target="_blank" rel="noopener noreferrer">
      {kajian.action} <ArrowUpRight size={16} strokeWidth={2.3} />
    </a>
  );
}

function FeaturedKajian({ kajian }: { kajian: Kajian }) {
  return (
    <article className="featured reveal">
      <div className="featured__image-wrap">
        <img src={kajian.image} alt={kajian.imageAlt} className="featured__image" />
        <span className="featured__index">01 / 03</span>
      </div>
      <div className="featured__content">
        <p className="eyebrow"><span /> Featured Kajian</p>
        <h2>{kajian.title}</h2>
        <p className="featured__description">{kajian.description}</p>
        <ExternalButton kajian={kajian} />
      </div>
    </article>
  );
}

function KajianCard({ kajian, index }: { kajian: Kajian; index: number }) {
  return (
    <article className="kajian-card reveal" style={{ animationDelay: `${index * 90}ms` }}>
      <div className="kajian-card__image-wrap">
        <img src={kajian.image} alt={kajian.imageAlt} className="kajian-card__image" />
        <span className="kajian-card__number">0{index + 1}</span>
      </div>
      <div className="kajian-card__body">
        <p className="kajian-card__category">{kajian.category}</p>
        <h3>{kajian.title}</h3>
        <p className="kajian-card__description">{kajian.description}</p>
        <ExternalButton kajian={kajian} />
      </div>
    </article>
  );
}

function ContactSection() {
  return (
    <section className="contact-section reveal" id="contact">
      <div className="contact-section__intro">
        <p className="eyebrow"><span /> Terhubung bersama BEM POLSRI</p>
        <h2>HUBUNGI<br /><em>KAMI.</em></h2>
      </div>
      <div className="contact-section__details">
        <div className="qr-placeholder" aria-label="QR Code BEM POLSRI">
          <div className="qr-placeholder__pattern"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <small>QR BEM POLSRI</small>
        </div>
        <div className="contact-section__copy">
          <p className="contact-section__label">Scan QR untuk terhubung<br />dengan BEM POLSRI</p>
          <div className="contact-section__email">
            <span className="contact-icon"><Mail size={17} /></span>
            <div><small>Email</small><a href="mailto:bemkpolsri25@gmail.com">bemkpolsri25@gmail.com</a></div>
          </div>
          <a className="email-button" href="mailto:bemkpolsri25@gmail.com">KIRIM EMAIL <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <Sidebar />
      <MobileNav open={menuOpen} onToggle={() => setMenuOpen((current) => !current)} />
      <main className="main-content">
        <header className="hero" id="kajian">
          <div className="hero__meta"><span>01</span><span>—</span><span>PUBLICATION / 2026</span></div>
          <div className="hero__heading">
            <p className="hero__kicker">BEM POLSRI · KABINET KILAU GEMILANG</p>
            <h1>KAJIAN<span>.</span></h1>
            <p className="hero__subtitle">Ruang Gagasan, Analisis,<br className="desktop-break" /> dan Suara Mahasiswa</p>
          </div>
          <div className="hero__scroll"><span /> Scroll to explore</div>
        </header>

        <section className="publication-section" aria-labelledby="latest-heading">
          <div className="section-heading">
            <div><p className="eyebrow"><span /> Selected publications</p><h2 id="latest-heading">KAJIAN<br /><em>TERKINI.</em></h2></div>
            <p className="section-heading__note">Membaca keadaan,<br />menyuarakan perubahan.</p>
          </div>
          <FeaturedKajian kajian={kajianList[0]} />
          <div className="cards-grid">{kajianList.slice(1).map((kajian, index) => <KajianCard key={kajian.title} kajian={kajian} index={index + 1} />)}</div>
        </section>

        <ContactSection />
        <footer className="footer"><div><strong>BEM POLSRI <span>2026</span></strong><p>Kabinet Kilau Gemilang</p></div><div className="footer__social"><a href="mailto:bemkpolsri25@gmail.com" aria-label="Kirim email"><Mail size={16} /></a><a href="https://www.instagram.com/bempolsri_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram BEM POLSRI"><Instagram size={16} /></a></div><p className="footer__copyright">© 2026 BEM POLSRI. All Rights Reserved.</p></footer>
      </main>
    </div>
  );
}

export default App;
