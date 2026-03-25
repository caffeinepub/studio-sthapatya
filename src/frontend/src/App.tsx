import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle,
  Facebook,
  Globe,
  Heart,
  Home,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  PhoneCall,
  Sofa,
  Sun,
  Trees,
  Twitter,
  Users,
  Wind,
  Wrench,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Financials", href: "#financials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Home,
    title: "Residential",
    color: "bg-terracotta/10",
    iconColor: "text-terracotta",
    items: [
      "Villas & Bungalows",
      "Individual Houses",
      "Apartment Interiors",
      "Renovation Works",
    ],
  },
  {
    icon: Landmark,
    title: "Institutional",
    color: "bg-warmBrown-light/40",
    iconColor: "text-warmBrown-dark",
    items: [
      "Educational Buildings",
      "Corporate Offices",
      "Institutional Campuses",
      "Government Projects",
    ],
  },
  {
    icon: Trees,
    title: "Landscape",
    color: "bg-terracotta/10",
    iconColor: "text-terracotta",
    items: [
      "Outdoor Design",
      "Site Development",
      "Landscape Planning",
      "Garden Design",
    ],
  },
  {
    icon: Sofa,
    title: "Interior",
    color: "bg-warmBrown-light/40",
    iconColor: "text-warmBrown-dark",
    items: [
      "Residential Interiors",
      "Office Interiors",
      "Hospitality Interiors",
      "Commercial Spaces",
    ],
  },
];

const philosophyPrinciples = [
  {
    icon: Wind,
    title: "Climate Responsive",
    desc: "Designs that respect local climate and harness natural forces for comfort.",
  },
  {
    icon: Globe,
    title: "Cultural Context",
    desc: "Architecture rooted in the rich heritage and traditions of the region.",
  },
  {
    icon: Heart,
    title: "Human Comfort",
    desc: "Spaces crafted around the lived experience of inhabitants.",
  },
  {
    icon: Sun,
    title: "Timeless Design",
    desc: "Enduring aesthetics over fleeting trends, for spaces that age gracefully.",
  },
];

const teamHierarchy = [
  {
    role: "Principal Architect",
    count: 2,
    color: "bg-terracotta text-white",
    initials: ["PA", "PA"],
  },
  {
    role: "Senior Architect",
    count: 2,
    color: "bg-warmBrown-dark text-white",
    initials: ["SA", "SA"],
  },
  {
    role: "Interior Designer",
    count: 1,
    color: "bg-terracotta-light text-white",
    initials: ["ID"],
  },
  {
    role: "Junior Architect",
    count: 2,
    color: "bg-warmBrown-mid text-white",
    initials: ["JA", "JA"],
  },
  {
    role: "Intern",
    count: 3,
    color: "bg-warmBrown-light text-warmBrown-dark",
    initials: ["IN", "IN", "IN"],
  },
];

const revenueData = [
  {
    category: "Residential",
    qty: 5,
    cost: "₹1,20,00,000",
    fee: "2%",
    perProject: "₹2,40,000",
    total: "₹12,00,000",
  },
  {
    category: "Institutional",
    qty: 2,
    cost: "₹4,00,00,000",
    fee: "4%",
    perProject: "₹16,00,000",
    total: "₹32,00,000",
  },
  {
    category: "Landscape",
    qty: 4,
    cost: "₹50,00,000",
    fee: "3%",
    perProject: "₹1,50,000",
    total: "₹6,00,000",
  },
  {
    category: "Interior",
    qty: 6,
    cost: "₹30,00,000",
    fee: "3%",
    perProject: "₹90,000",
    total: "₹5,40,000",
  },
];

const salaryData = [
  {
    position: "Senior Architect",
    count: 2,
    monthly: "₹35,000",
    total: "₹70,000",
  },
  {
    position: "Interior Designer",
    count: 1,
    monthly: "₹30,000",
    total: "₹30,000",
  },
  {
    position: "Junior Architect",
    count: 2,
    monthly: "₹25,000",
    total: "₹50,000",
  },
  { position: "Interns", count: 2, monthly: "₹5,000", total: "₹10,000" },
];

const expenseData = [
  { expense: "Office Rent", cost: "₹60,000" },
  { expense: "Electricity & Internet", cost: "₹10,000" },
  { expense: "Software Subscriptions", cost: "₹8,000" },
  { expense: "Office Supplies", cost: "₹7,000" },
  { expense: "Miscellaneous", cost: "₹15,000" },
];

const llpBenefits = [
  "Equal contribution of all partners",
  "Limited personal financial liability",
  "Clear legal professional identity",
  "Simplified operational management",
  "Legal flexibility with reduced burden",
  "Easy taxation structure",
  "Professional credibility for government and institutional projects",
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ===== HEADER ===== */}
      <header
        data-ocid="header.section"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream-header/95 backdrop-blur shadow-card"
            : "bg-cream-header"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/assets/generated/logo-mandala-transparent.dim_120x120.png"
                alt="Studio Sthapatya Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="font-serif font-bold text-warmBrown-dark text-sm tracking-widest uppercase">
                Studio
              </p>
              <p className="font-serif font-bold text-warmBrown-dark text-base tracking-widest uppercase">
                Sthapatya
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-warmBrown-dark hover:text-terracotta transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            data-ocid="nav.mobile_menu.toggle"
            className="md:hidden p-2 text-warmBrown-dark"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-cream-header border-t border-warmBrown-light overflow-hidden"
            >
              <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-base font-medium text-warmBrown-dark hover:text-terracotta transition-colors py-1"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ===== HERO SECTION ===== */}
        <section
          id="home"
          data-ocid="hero.section"
          className="relative min-h-screen flex items-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/assets/generated/hero-courtyard.dim_1600x900.jpg')`,
            }}
          />
          {/* Dark gradient overlay — left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 pt-40">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="text-white/70 text-sm font-sans tracking-[0.25em] uppercase mb-4">
                Architectural & Interior Design
              </p>
              <h1 className="font-serif text-white text-4xl md:text-6xl font-bold leading-tight mb-4">
                Studio
                <br />
                <span className="italic">Sthapatya</span>
              </h1>
              <p className="font-serif text-white/90 text-xl md:text-2xl italic mb-3">
                Where Tradition Meets Contemporary Design
              </p>
              <div className="flex items-center gap-2 text-white/70 text-sm mb-8">
                <MapPin size={14} />
                <span>Raipur, Chhattisgarh</span>
              </div>
              <button
                type="button"
                data-ocid="hero.cta.button"
                onClick={() => scrollToSection("#about")}
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-sans font-semibold px-7 py-3.5 rounded transition-colors duration-200 text-sm tracking-wide"
              >
                Explore Our Work
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* ===== ABOUT SECTION ===== */}
        <section
          id="about"
          data-ocid="about.section"
          className="py-20 bg-background"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-sm overflow-hidden shadow-warm">
                  <img
                    src="/assets/generated/about-craft.dim_800x600.jpg"
                    alt="Traditional Indian architectural craft"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta/10 rounded-sm -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="text-terracotta text-sm font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                  Our Heritage
                </p>
                <h2 className="font-serif text-warmBrown-dark text-3xl md:text-4xl font-bold mb-5 leading-tight">
                  About Studio Sthapatya
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Studio Sthapatya is an architectural and interior design
                  practice established with the vision of creating spaces that
                  merge traditional Indian architectural values with
                  contemporary design thinking. The studio believes architecture
                  should not only fulfill functional needs but also create
                  emotional and cultural connections with people and place.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  The name <em>Sthapatya</em> itself reflects the idea of
                  architectural craft and built heritage — a commitment to
                  context-sensitive, climate-responsive, and locally-rooted
                  design solutions.
                </p>
                <div className="space-y-2">
                  {[
                    "Traditional Indian spatial systems",
                    "Courtyard planning & mandala-based ordering",
                    "Sustainable materials & natural ventilation",
                    "Contemporary construction technology",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle
                        size={15}
                        className="text-terracotta flex-shrink-0"
                      />
                      <span className="text-warmBrown-dark text-sm font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== PHILOSOPHY SECTION ===== */}
        <section
          id="philosophy"
          data-ocid="philosophy.section"
          className="py-20 bg-cream-card"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-terracotta text-sm font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                Our Belief
              </p>
              <h2 className="font-serif text-warmBrown-dark text-3xl md:text-4xl font-bold">
                Our Philosophy
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base">
                Heritage-inspired, sustainable, and human-centered architecture
                that feels timeless rather than trend-based.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {philosophyPrinciples.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-background rounded-sm p-6 border border-warmBrown-light shadow-card text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                    <p.icon size={22} className="text-terracotta" />
                  </div>
                  <h3 className="font-serif font-bold text-warmBrown-dark text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-terracotta/8 border border-warmBrown-light rounded-sm p-8">
              <h3 className="font-serif text-warmBrown-dark text-xl font-bold mb-5">
                Traditional Architectural Principles
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Courtyards",
                    desc: "Central open spaces connecting indoor and outdoor life",
                  },
                  {
                    label: "Shaded Transitional Spaces",
                    desc: "Verandahs and jaali screens mediating climate",
                  },
                  {
                    label: "Natural Ventilation",
                    desc: "Cross-ventilation and passive cooling strategies",
                  },
                  {
                    label: "Proportion Systems",
                    desc: "Traditional vastu and geometric ordering principles",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-background rounded-sm p-4 border border-warmBrown-light"
                  >
                    <p className="font-serif font-semibold text-warmBrown-dark text-base mb-1">
                      {item.label}
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section
          id="services"
          data-ocid="services.section"
          className="py-20 bg-background"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-terracotta text-sm font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                What We Do
              </p>
              <h2 className="font-serif text-warmBrown-dark text-3xl md:text-4xl font-bold">
                Our Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-ocid={`services.${svc.title.toLowerCase()}.card`}
                  className="bg-cream-card border border-warmBrown-light rounded-sm p-6 shadow-card hover:shadow-warm transition-shadow duration-300 group"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${svc.color} flex items-center justify-center mb-5`}
                  >
                    <svc.icon size={22} className={svc.iconColor} />
                  </div>
                  <h3 className="font-serif font-bold text-warmBrown-dark text-xl mb-3">
                    {svc.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {svc.items.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="text-terracotta mt-1 text-xs">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FIRM TYPE (LLP) SECTION ===== */}
        <section
          data-ocid="llp.section"
          className="py-20 bg-warmBrown-dark text-white"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-terracotta-light text-sm font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                  Legal Structure
                </p>
                <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-5">
                  Our Structure — LLP
                </h2>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Studio Sthapatya operates as a{" "}
                  <strong className="text-white">
                    Limited Liability Partnership (LLP)
                  </strong>
                  , a structure that supports both creative freedom and
                  professional accountability. It balances equal partner
                  contribution with legal protections, enabling sustained
                  long-term growth.
                </p>
                <p className="text-white/70 text-base leading-relaxed">
                  This model provides professional credibility for government
                  and institutional projects while maintaining the agility
                  needed for innovative design practice.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {llpBenefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-sm px-4 py-3"
                  >
                    <CheckCircle
                      size={16}
                      className="text-terracotta flex-shrink-0"
                    />
                    <span className="text-white/85 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TEAM SECTION ===== */}
        <section
          id="team"
          data-ocid="team.section"
          className="py-20 bg-cream-card"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-terracotta text-sm font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                Our People
              </p>
              <h2 className="font-serif text-warmBrown-dark text-3xl md:text-4xl font-bold">
                Meet The Team
              </h2>
              <p className="text-muted-foreground mt-4 text-base">
                A structured hierarchy ensuring design quality and project
                delivery excellence.
              </p>
            </div>

            <div className="space-y-8">
              {teamHierarchy.map((tier, ti) => (
                <motion.div
                  key={tier.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ti * 0.1 }}
                  className="flex flex-col items-center"
                >
                  {ti > 0 && (
                    <div className="w-px h-8 bg-warmBrown-light mb-0" />
                  )}
                  <div className="flex flex-wrap justify-center gap-4">
                    {tier.initials.map((init, idx) => (
                      <div
                        key={`${tier.role}-${init}-${idx}`}
                        data-ocid={`team.${tier.role.toLowerCase().replace(/\s+/g, "_")}.item.${idx + 1}`}
                        className="flex flex-col items-center"
                      >
                        <div
                          className={`w-16 h-16 rounded-full ${tier.color} flex items-center justify-center font-bold text-lg shadow-card`}
                        >
                          {init}
                        </div>
                        <p className="text-warmBrown-dark text-xs font-semibold mt-2 text-center max-w-[90px] leading-tight">
                          {tier.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Salary Budget",
                  value: "₹1,60,000/mo",
                  sub: "Total monthly payroll",
                },
                {
                  label: "Office Expense",
                  value: "₹1,00,000/mo",
                  sub: "Operational costs",
                },
                {
                  label: "Team Size",
                  value: "10 Members",
                  sub: "Across all projects",
                },
                {
                  label: "Project Types",
                  value: "4 Categories",
                  sub: "Residential to Institutional",
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-background border border-warmBrown-light rounded-sm p-5 text-center shadow-card"
                >
                  <p className="font-serif font-bold text-warmBrown-dark text-xl">
                    {kpi.value}
                  </p>
                  <p className="text-terracotta text-xs font-semibold mt-1">
                    {kpi.label}
                  </p>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    {kpi.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINANCIALS SECTION ===== */}
        <section
          id="financials"
          data-ocid="financials.section"
          className="py-20 bg-background"
        >
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-terracotta text-sm font-sans font-semibold tracking-[0.2em] uppercase mb-3">
                Numbers
              </p>
              <h2 className="font-serif text-warmBrown-dark text-3xl md:text-4xl font-bold">
                Business Overview
              </h2>
            </div>

            {/* KPI Cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-14">
              {[
                {
                  label: "Annual Revenue",
                  value: "₹55,40,000",
                  color: "border-terracotta",
                  textColor: "text-terracotta",
                },
                {
                  label: "Annual Expenses",
                  value: "₹31,80,000",
                  color: "border-warmBrown-mid",
                  textColor: "text-warmBrown-mid",
                },
                {
                  label: "Annual Profit ✅",
                  value: "₹23,60,000",
                  color: "border-green-600",
                  textColor: "text-green-700",
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  data-ocid={`financials.${kpi.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}.card`}
                  className={`bg-cream-card border-l-4 ${kpi.color} border border-warmBrown-light rounded-sm p-6 shadow-card`}
                >
                  <p className="text-muted-foreground text-sm mb-2 font-medium">
                    {kpi.label}
                  </p>
                  <p
                    className={`font-serif font-bold text-3xl ${kpi.textColor}`}
                  >
                    {kpi.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue Table */}
            <div className="mb-10">
              <h3 className="font-serif text-warmBrown-dark text-xl font-bold mb-4">
                Revenue Analysis
              </h3>
              <div className="overflow-x-auto rounded-sm border border-warmBrown-light shadow-card">
                <table
                  className="w-full text-sm"
                  data-ocid="financials.revenue.table"
                >
                  <thead>
                    <tr className="bg-terracotta text-white">
                      {[
                        "Category",
                        "Qty",
                        "Est. Construction Cost",
                        "Fee %",
                        "Revenue/Project",
                        "Total Revenue",
                      ].map((h) => (
                        <th
                          key={h}
                          className="px-4 py-3 text-left font-semibold font-sans text-xs tracking-wide"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {revenueData.map((row, i) => (
                      <tr
                        key={row.category}
                        className={
                          i % 2 === 0 ? "bg-background" : "bg-cream-card"
                        }
                      >
                        <td className="px-4 py-3 font-semibold text-warmBrown-dark">
                          {row.category}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.qty}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.cost}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.fee}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {row.perProject}
                        </td>
                        <td className="px-4 py-3 font-semibold text-warmBrown-dark">
                          {row.total}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-terracotta/10 border-t-2 border-terracotta">
                      <td
                        className="px-4 py-3 font-bold text-warmBrown-dark"
                        colSpan={5}
                      >
                        Total Annual Revenue
                      </td>
                      <td className="px-4 py-3 font-bold text-terracotta text-base">
                        ₹55,40,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Salary Table */}
              <div>
                <h3 className="font-serif text-warmBrown-dark text-xl font-bold mb-4">
                  Salary Structure
                </h3>
                <div className="overflow-x-auto rounded-sm border border-warmBrown-light shadow-card">
                  <table
                    className="w-full text-sm"
                    data-ocid="financials.salary.table"
                  >
                    <thead>
                      <tr className="bg-warmBrown-dark text-white">
                        {["Position", "Count", "Monthly", "Total"].map((h) => (
                          <th
                            key={h}
                            className="px-4 py-3 text-left font-semibold font-sans text-xs tracking-wide"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {salaryData.map((row, i) => (
                        <tr
                          key={row.position}
                          className={
                            i % 2 === 0 ? "bg-background" : "bg-cream-card"
                          }
                        >
                          <td className="px-4 py-2.5 font-medium text-warmBrown-dark text-xs">
                            {row.position}
                          </td>
                          <td className="px-4 py-2.5 text-muted-foreground text-xs">
                            {row.count}
                          </td>
                          <td className="px-4 py-2.5 text-muted-foreground text-xs">
                            {row.monthly}
                          </td>
                          <td className="px-4 py-2.5 font-semibold text-warmBrown-dark text-xs">
                            {row.total}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-warmBrown-dark/8 border-t-2 border-warmBrown-dark">
                        <td
                          className="px-4 py-2.5 font-bold text-warmBrown-dark text-xs"
                          colSpan={3}
                        >
                          Total Monthly
                        </td>
                        <td className="px-4 py-2.5 font-bold text-warmBrown-dark text-xs">
                          ₹1,60,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Expenses Table */}
              <div>
                <h3 className="font-serif text-warmBrown-dark text-xl font-bold mb-4">
                  Monthly Office Expenses
                </h3>
                <div className="overflow-x-auto rounded-sm border border-warmBrown-light shadow-card">
                  <table
                    className="w-full text-sm"
                    data-ocid="financials.expenses.table"
                  >
                    <thead>
                      <tr className="bg-warmBrown-dark text-white">
                        {["Expense Item", "Estimated Cost"].map((h) => (
                          <th
                            key={h}
                            className="px-4 py-3 text-left font-semibold font-sans text-xs tracking-wide"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {expenseData.map((row, i) => (
                        <tr
                          key={row.expense}
                          className={
                            i % 2 === 0 ? "bg-background" : "bg-cream-card"
                          }
                        >
                          <td className="px-4 py-2.5 font-medium text-warmBrown-dark text-xs">
                            {row.expense}
                          </td>
                          <td className="px-4 py-2.5 text-muted-foreground text-xs">
                            {row.cost}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-warmBrown-dark/8 border-t-2 border-warmBrown-dark">
                        <td className="px-4 py-2.5 font-bold text-warmBrown-dark text-xs">
                          Total Monthly
                        </td>
                        <td className="px-4 py-2.5 font-bold text-warmBrown-dark text-xs">
                          ₹1,00,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER / CONTACT SECTION ===== */}
      <footer
        id="contact"
        data-ocid="footer.section"
        className="bg-warmBrown-dark text-white"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Column 1: Brand + Sitemap */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full overflow-hidden">
                  <img
                    src="/assets/generated/logo-mandala-transparent.dim_120x120.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-white text-sm tracking-widest uppercase">
                    Studio Sthapatya
                  </p>
                  <p className="text-white/50 text-xs">
                    Where Tradition Meets Design
                  </p>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                An architectural and interior design practice where heritage and
                contemporary thinking converge.
              </p>
              <div className="space-y-1">
                <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-3">
                  Sitemap
                </p>
                {navLinks.map((link) => (
                  <button
                    type="button"
                    key={link.href}
                    data-ocid={`footer.${link.label.toLowerCase()}.link`}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-white/70 hover:text-white text-sm transition-colors py-0.5"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 2: Contact */}
            <div>
              <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-5">
                Contact Us
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="text-terracotta-light mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">
                      Studio Sthapatya
                    </p>
                    <p className="text-white/60 text-sm">
                      Raipur, Chhattisgarh
                    </p>
                    <p className="text-white/60 text-sm">India — 492001</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall
                    size={16}
                    className="text-terracotta-light flex-shrink-0"
                  />
                  <p className="text-white/70 text-sm">+91 77700 00000</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail
                    size={16}
                    className="text-terracotta-light flex-shrink-0"
                  />
                  <p className="text-white/70 text-sm">
                    info@studiosthapatya.in
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Building2
                    size={16}
                    className="text-terracotta-light flex-shrink-0"
                  />
                  <p className="text-white/70 text-sm">
                    LLP — Registered Practice
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Follow */}
            <div>
              <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-5">
                Follow Us
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Stay connected for project updates, design inspiration, and
                studio news.
              </p>
              <div className="flex gap-3">
                {[
                  {
                    Icon: Instagram,
                    label: "Instagram",
                    ocid: "footer.instagram.link",
                  },
                  {
                    Icon: Linkedin,
                    label: "LinkedIn",
                    ocid: "footer.linkedin.link",
                  },
                  {
                    Icon: Facebook,
                    label: "Facebook",
                    ocid: "footer.facebook.link",
                  },
                  {
                    Icon: Twitter,
                    label: "Twitter",
                    ocid: "footer.twitter.link",
                  },
                ].map(({ Icon, label, ocid }) => (
                  <a
                    key={label}
                    href="https://example.com"
                    data-ocid={ocid}
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-terracotta-light hover:bg-terracotta/20 transition-all duration-200"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>

              <div className="mt-8 p-4 border border-white/10 rounded-sm bg-white/5">
                <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">
                  Practice Type
                </p>
                <p className="text-white text-sm font-medium">
                  Architecture & Interior Design
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Residential · Institutional · Landscape · Interior
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Studio Sthapatya. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/privacy"
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/40 hover:text-white/70 text-xs transition-colors"
              >
                Terms of Use
              </a>
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                Built with ♥ using caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
