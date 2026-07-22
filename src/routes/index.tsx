import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import gsap from "gsap";
import { Loader } from "@/components/Loader";
import {
  Search,
  X,
  Cog,
  Wrench,
  ClipboardList,
  BookOpen,
  ListChecks,
  Play,
  RefreshCw,
  ArrowRight,
  ChevronRight,
  User,
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Menu
} from "lucide-react";
import heroMechanic from "@/assets/hero-mechanic.jpg";
import mechanicSmall from "@/assets/mechanic-small.jpg";
import guideFca from "@/assets/guide-fca.jpg";
import guideDpf from "@/assets/guide-dpf.jpg";
import guideHydraulic from "@/assets/guide-hydraulic.jpg";
import guideCat from "@/assets/guide-cat.jpg";
import videoCummins from "@/assets/video-cummins.jpg";
import videoDpf from "@/assets/video-dpf.jpg";
import videoHydrema from "@/assets/video-hydrema.jpg";
import videoCat from "@/assets/video-cat.jpg";
import logoImg from "@/assets/323refef@2x.png";
import faultIconImg from "@/assets/EngineFaultTransFixed.png";
import catNewLogo from "@/assets/CAT-logo.png";
import cumminsLogo from "@/assets/Cummins-Logo-1976-present.png";
import hitachiNewLogo from "@/assets/118ead8238444012afe6f9d107ede865.png";
import kobelcoNewLogo from "@/assets/2a7b69a6f90d49b881c12245ced89b9e.png";
import komatsuNewLogo from "@/assets/965aeac20d4b4cc3bd18ef1bdef28ef0.png";
import volvoNewLogo from "@/assets/6f460e12ed314d31abc5119002fca5e1.png";

function EngineIcon({ className }: React.SVGProps<SVGSVGElement>) {
  return (
    <div
      className={className}
      style={{
        WebkitMaskImage: `url(${faultIconImg})`,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        backgroundColor: 'currentColor',
        maskImage: `url(${faultIconImg})`,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        transform: 'scale(1.6)'
      }}
    />
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});


function Logo() {
  return (
    <a href="/" className="flex items-center">
      <img src={logoImg} alt="ReMech" className="h-10 sm:h-16 w-auto object-contain" />
    </a>
  );
}

function Footer({ t }: { t: import("@/lib/translations").Translations }) {
  return (
    <footer className="dark bg-card text-foreground py-16 border-t border-border mt-16 transition-none">
      <div className="mx-auto max-w-[1536px] px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-base text-muted-foreground mt-2">
            {t.footer_tagline}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <button className="h-12 w-12 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="h-12 w-12 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="h-12 w-12 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </button>
            <button className="h-12 w-12 flex items-center justify-center rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-xl mb-6">{t.footer_quick_links}</h4>
          <ul className="space-y-4 text-base text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_home}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_fault_codes}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_repair_guides}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_service_specs}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_training_videos}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-xl mb-6">{t.footer_support}</h4>
          <ul className="space-y-4 text-base text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_contact_us}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_faq}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_privacy}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_terms}</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">{t.footer_ask_remech}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-xl mb-6">{t.footer_contact}</h4>
          <ul className="space-y-5 text-base text-muted-foreground">
            <li className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <span>123 Mechanic Way,<br />Engine City, EC 90210</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <span>support@remech.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1536px] px-6 mt-16 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} {t.footer_copyright}
      </div>
    </footer>
  );
}

function Index() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const popular = [t.pop_search_1, t.pop_search_2, t.pop_search_3, t.pop_search_4];

  const nav = [
    t.nav_home, t.nav_fault_codes, t.nav_repair_guides,
    t.nav_service_specs, t.nav_maintenance, t.nav_tips,
  ];

  const categories = [
    { icon: EngineIcon, title: t.cat_fault_codes, desc: t.cat_fault_codes_desc, cta: t.cat_browse_all },
    { icon: Wrench, title: t.cat_repair_guides, desc: t.cat_repair_guides_desc, cta: t.cat_browse_all },
    { icon: ClipboardList, title: t.cat_service_specs, desc: t.cat_service_specs_desc, cta: t.cat_browse_all },
    { icon: ListChecks, title: t.cat_maintenance, desc: t.cat_maintenance_desc, cta: t.cat_browse_all },
  ];

  const stats = [
    { icon: Cog, num: "10,000+", label: t.stat_fault_codes },
    { icon: BookOpen, num: "500+", label: t.stat_repair_guides },
    { icon: ClipboardList, num: "200+", label: t.stat_service_specs },
    { icon: Youtube, num: "150+", label: t.stat_training_videos },
    { icon: RefreshCw, num: t.stat_updated, label: t.stat_updated_label },
  ];

  const faultCodes = [
    { code: "559", title: t.fc_559_title, brand: "Cummins", system: t.sys_fuel_system },
    { code: "1117", title: t.fc_1117_title, brand: "Cummins", system: t.sys_fuel_system },
    { code: "156", title: t.fc_156_title, brand: "Cummins", system: t.sys_fuel_system },
    { code: "288", title: t.fc_288_title, brand: "Cummins", system: t.sys_engine },
    { code: "3251", title: t.fc_3251_title, brand: "Cummins", system: t.sys_engine },
  ];

  const repairGuides = [
    { img: guideFca, title: t.rg_fca_title, sub: t.rg_fca_sub },
    { img: guideDpf, title: t.rg_dpf_title, sub: t.rg_dpf_sub },
    { img: guideHydraulic, title: t.rg_hydraulic_title, sub: t.rg_hydraulic_sub },
    { img: guideCat, title: t.rg_cat_title, sub: t.rg_cat_sub },
  ];

  const videos = [
    { img: videoCummins, title: t.vid_cummins_title, time: "18:45" },
    { img: videoDpf, title: t.vid_dpf_title, time: "12:30" },
    { img: videoHydrema, title: t.vid_hydrema_title, time: "15:20" },
    { img: videoCat, title: t.vid_cat_title, time: "22:10" },
  ];

  const manufacturers = [
    {
      name: t.mfg_cummins,
      logo: (
        <div className="flex h-20 w-20 items-center justify-center">
          <img src={cumminsLogo} alt="Cummins" className="h-16 w-16 object-contain" />
        </div>
      )
    },
    {
      name: t.mfg_caterpillar,
      logo: (
        <div className="flex h-20 w-20 items-center justify-center">
          <img src={catNewLogo} alt="Caterpillar" className="h-16 w-16 object-contain" />
        </div>
      )
    },
    {
      name: t.mfg_volvo,
      logo: (
        <div className="flex h-20 w-20 items-center justify-center">
          <img src={volvoNewLogo} alt="Volvo" className="h-16 w-16 object-contain rounded-md" />
        </div>
      )
    },
    {
      name: t.mfg_hitachi,
      logo: (
        <div className="flex h-16 w-16 items-center justify-center">
          <img src={hitachiNewLogo} alt="Hitachi" className="h-full w-full object-contain scale-[1.4]" />
        </div>
      )
    },
    {
      name: t.mfg_kobelco,
      logo: (
        <div className="flex h-16 w-16 items-center justify-center">
          <img src={kobelcoNewLogo} alt="Kobelco" className="h-full w-full object-contain scale-[1.4]" />
        </div>
      )
    },
    {
      name: t.mfg_komatsu,
      logo: (
        <div className="flex h-16 w-16 items-center justify-center">
          <img src={komatsuNewLogo} alt="Komatsu" className="h-full w-full object-contain scale-[1.4]" />
        </div>
      )
    },
    {
      name: t.mfg_yanmar,
      logo: (
        <div className="flex h-16 w-16 items-center justify-center text-[#d40000]">
          <svg viewBox="0 0 24 24" className="h-12 w-14" fill="none" stroke="currentColor" strokeWidth="4">
            <path d="M2 14L12 20L22 14M2 6L12 12L22 6" />
          </svg>
        </div>
      )
    }
  ];

  useEffect(() => {
    // Simulate initial page load animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && containerRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.fromTo(".gsap-header", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" });
        tl.fromTo(".gsap-hero-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3");
        tl.fromTo(".gsap-hero-text", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }, "-=0.5");
        tl.fromTo(".gsap-hero-img", { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.6");
        tl.fromTo(".gsap-hero-bubble", { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }, "-=0.4");
        tl.fromTo(".gsap-category", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out" }, "-=0.6");
        tl.fromTo(".gsap-stats", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4");
        tl.fromTo(".gsap-manufacturer", { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.2");

      }, containerRef.current);
      return () => ctx.revert();
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div ref={containerRef} className={`min-h-screen bg-background text-foreground relative ${theme}`}>
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center bg-background/95 pt-[15vh] sm:pt-[20vh] backdrop-blur-sm px-4 sm:px-6">
          <div className="w-full max-w-3xl relative">
            <Search className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
            <input
              autoFocus
              type="text"
              placeholder={t.search_placeholder}
              className="w-full bg-card border-2 border-primary/50 focus:border-primary rounded-full py-4 sm:py-6 pl-14 sm:pl-20 pr-16 sm:pr-20 text-lg sm:text-2xl outline-none shadow-2xl transition-all"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      )}
      <div className="dark bg-background text-foreground w-full transition-none z-40 sticky top-0 shadow-sm">
        <header className="mx-auto flex max-w-[1536px] items-center justify-between px-6 py-5 gsap-header">
          <Logo />
          <nav className="hidden items-center gap-4 xl:gap-8 lg:flex">
            {nav.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`relative whitespace-nowrap text-sm xl:text-base font-semibold transition-colors ${i === 0 ? "text-primary" : "text-foreground/85 hover:text-primary"
                  }`}
              >
                {item}
                {i === 0 && <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary" />}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-5">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
            </button>
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Link
              to="/login"
              className="hidden sm:flex h-9 sm:h-11 items-center gap-1.5 sm:gap-2.5 rounded-xl sm:rounded-[14px] border-[1.5px] border-primary bg-transparent px-3 sm:px-6 text-sm sm:text-[15px] font-bold text-primary transition hover:bg-primary/10"
            >
              <User className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} /> <span className="hidden sm:inline">{t.nav_sign_in}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground transition hover:border-primary hover:text-primary"
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
            </button>
          </div>
        </header>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background px-6 py-4 absolute w-full left-0 top-full shadow-xl">
            <nav className="flex flex-col gap-4">
              {nav.map((item) => (
                <a key={item} href="#" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-foreground hover:text-primary">
                  {item}
                </a>
              ))}
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-primary-foreground">
                <User className="h-5 w-5" /> {t.nav_sign_in}
              </Link>
            </nav>
          </div>
        )}
      </div>

      <main className="flex-1 w-full flex flex-col">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1536px] grid-cols-1 gap-8 px-6 pb-16 pt-6 lg:grid-cols-[1fr_1.05fr]">
            <div className="relative z-10">
              <h1 className="font-display text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl gsap-hero-title">
                {t.hero_title_line1}
                <br className="hidden sm:block" /> {t.hero_title_line2}
                <br /> {t.hero_title_line3} <span className="text-primary">{t.hero_title_highlight}</span>
              </h1>
              <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground gsap-hero-text">
                {t.hero_subtitle}
              </p>

              <div className="mt-6 sm:mt-8 flex w-full max-w-xl items-center rounded-xl border border-border bg-card p-1.5 shadow-xl gsap-hero-text">
                <div className="flex flex-1 items-center gap-2 sm:gap-3 px-3 sm:px-4 h-[44px] sm:h-[52px]">
                  <Search className="h-4 w-4 sm:h-[22px] sm:w-[22px] text-muted-foreground shrink-0" strokeWidth={1.5} />
                  <input
                    type="text"
                    placeholder={t.hero_search_placeholder}
                    className="h-full w-full bg-transparent text-sm sm:text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
                <button className="h-[44px] sm:h-[52px] rounded-lg bg-primary px-4 sm:px-8 text-sm sm:text-[15px] font-bold text-black transition-transform hover:scale-105 active:scale-95 whitespace-nowrap">
                  {t.hero_search_btn}
                </button>
              </div>

              <div className="mt-6 gsap-hero-text">
                <p className="mb-3 text-sm font-semibold text-muted-foreground">{t.hero_popular}</p>
                <div className="flex flex-wrap gap-2.5">
                  {popular.map((p) => (
                    <button
                      key={p}
                      className="rounded-full border border-border/60 bg-transparent px-4 py-1.5 text-[13px] font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="h-full max-h-[640px] w-full relative rounded-xl overflow-hidden gsap-hero-img">
                <img
                  src={heroMechanic}
                  alt="ReMech virtual mechanic"
                  width={1280}
                  height={1024}
                  className="h-full w-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 dark:bg-black/40 pointer-events-none" />
              </div>

              <div className="absolute right-[5%] top-[25%] sm:right-[5%] max-w-[280px] rounded-xl border-[1.5px] border-primary bg-[#111111]/95 p-5 shadow-2xl backdrop-blur gsap-hero-bubble hidden md:block">
                <div className="mb-1 text-[15px] font-bold text-primary">{t.hero_bubble_name}</div>
                <p className="text-[14px] leading-relaxed text-white">
                  {t.hero_bubble_text}
                </p>
                {/* Pointing tail (left) */}
                <div className="absolute top-[50%] -translate-y-1/2 -left-[10px] h-5 w-5 rotate-45 border-b-[1.5px] border-l-[1.5px] border-primary bg-[#111111]" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1536px] px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title} className="group relative rounded-xl border border-border bg-card p-8 transition hover:border-primary/60 flex flex-col items-center text-center gsap-category">
                <c.icon className="h-20 w-20 text-primary" strokeWidth={1.8} />
                <h3 className="mt-5 flex items-center justify-center gap-2 font-display text-2xl font-bold tracking-wide">
                  {c.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
                <a href="#" className="mt-auto pt-5 inline-flex items-center gap-1 text-base font-semibold text-primary">
                  {c.cta} <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-8 max-w-[1536px] px-6 gsap-stats">
          <div className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-card px-6 py-6 sm:grid-cols-2 md:grid-cols-3 xl:flex xl:flex-row xl:items-center xl:justify-between xl:px-10">
            {stats.map((s, idx) => (
              <div key={s.label} className="flex flex-1 items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-5">
                  <s.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className={`font-bold text-foreground ${idx === stats.length - 1 ? 'text-base sm:text-lg' : 'text-2xl sm:text-3xl'}`}>
                      {s.num}
                    </div>
                    <div className="whitespace-nowrap text-sm sm:text-base text-muted-foreground">{s.label}</div>
                  </div>
                </div>
                {idx < stats.length - 1 && (
                  <div className="hidden h-16 w-px bg-border/60 xl:block ml-4" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-[1536px] px-4 sm:px-6 gsap-manufacturer">
          <div className="rounded-xl border border-border bg-card p-5 sm:p-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-wide">{t.section_manufacturers}</h2>
              <a href="#" className="inline-flex items-center gap-1 text-sm sm:text-base font-semibold text-primary">
                {t.view_all_manufacturers} <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-7">
              {manufacturers.map((m) => (
                <button
                  key={m.name}
                  className="group flex flex-col items-center justify-between gap-2 rounded-xl border border-border bg-transparent p-4 transition hover:border-primary/60 hover:bg-muted dark:bg-gray-200 dark:hover:bg-gray-300"
                >
                  {m.logo}
                  <div className="text-[13px] font-medium text-black">{m.name}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 grid max-w-[1536px] grid-cols-1 gap-6 px-6 lg:grid-cols-3">
          <div className="flex flex-col rounded-xl border border-border bg-card p-8">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold tracking-wide">{t.latest_fault_codes}</h3>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {t.view_all} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="divide-y divide-border">
              {faultCodes.map((f) => (
                <li key={f.code}>
                  <a href="#" className="flex items-center gap-4 py-4 hover:bg-background/40">
                    <div className="w-16 font-display text-3xl font-black text-primary">{f.code}</div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-base font-semibold text-foreground">{f.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {f.brand} <span className="mx-1">·</span> {f.system}
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <button className="w-full rounded-lg border-2 border-primary/80 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                {t.view_all_fault_codes}
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-border bg-card p-8">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold tracking-wide">{t.popular_repair_guides}</h3>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {t.view_all} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="divide-y divide-border">
              {repairGuides.map((g) => (
                <li key={g.title}>
                  <a href="#" className="flex items-center gap-4 py-4">
                    <img src={g.img} alt={g.title} loading="lazy" width={512} height={512} className="h-16 w-24 flex-none rounded-md object-cover" />
                    <div className="min-w-0">
                      <div className="text-base font-semibold leading-snug text-foreground">{g.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{g.sub}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <button className="w-full rounded-lg border-2 border-primary/80 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                {t.view_all_repair_guides}
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-border bg-card p-8">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold tracking-wide">{t.latest_videos}</h3>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {t.view_all} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="divide-y divide-border">
              {videos.map((v) => (
                <li key={v.title}>
                  <a href="#" className="flex items-center gap-4 py-4">
                    <div className="relative h-16 w-24 flex-none overflow-hidden rounded-md">
                      <img src={v.img} alt="" loading="lazy" width={512} height={512} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play className="h-6 w-6 fill-primary text-primary" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="whitespace-pre-line text-base font-semibold leading-snug text-foreground">{v.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{v.time}</div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <button className="w-full rounded-lg border-2 border-primary/80 py-3 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
                {t.view_all_videos}
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-[1536px] px-6 pb-16">
          <div className="relative overflow-hidden rounded-xl border border-border bg-card">
            <div className="grid grid-cols-1 items-center gap-6 p-6 sm:gap-8 sm:p-8 md:grid-cols-[240px_1fr_auto] md:p-10">
              <img src={mechanicSmall} alt="" loading="lazy" width={640} height={640} className="h-48 sm:h-56 w-full rounded-lg object-cover object-top md:h-40 md:w-60 md:object-center" />
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-black tracking-wide">{t.need_expert_help}</h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {t.cta_cant_find}
                  <br />
                  {t.cta_ask_remech}
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-display text-lg font-bold text-primary-foreground hover:brightness-110">
                  {t.cta_ask_now} <ArrowRight className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-left md:text-right">
                    {t.cta_real_answers}
                  </span>
                </div>
              </div>
            </div>
            <Cog className="pointer-events-none absolute -right-10 top-1/2 h-72 w-72 -translate-y-1/2 text-foreground/5" />
          </div>
        </section>
      </main>
      <Footer t={t} />
    </div>
  );
}
