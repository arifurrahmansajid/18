export type Language =
  | "en"
  | "es"
  | "pt"
  | "fr"
  | "ar"
  | "hi"
  | "zh"
  | "tl"
  | "af"
  | "id"
  | "vi";

export interface LanguageMeta {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: LanguageMeta[] = [
  { code: "en", name: "English",    nativeName: "English",          flag: "🇬🇧", dir: "ltr" },
  { code: "es", name: "Spanish",    nativeName: "Español",          flag: "🇪🇸", dir: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Português",        flag: "🇧🇷", dir: "ltr" },
  { code: "fr", name: "French",     nativeName: "Français",         flag: "🇫🇷", dir: "ltr" },
  { code: "ar", name: "Arabic",     nativeName: "العربية",          flag: "🇸🇦", dir: "rtl" },
  { code: "hi", name: "Hindi",      nativeName: "हिन्दी",            flag: "🇮🇳", dir: "ltr" },
  { code: "zh", name: "Chinese",    nativeName: "中文",              flag: "🇨🇳", dir: "ltr" },
  { code: "tl", name: "Filipino",   nativeName: "Filipino",         flag: "🇵🇭", dir: "ltr" },
  { code: "af", name: "Afrikaans",  nativeName: "Afrikaans",        flag: "🇿🇦", dir: "ltr" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩", dir: "ltr" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt",       flag: "🇻🇳", dir: "ltr" },
];

export interface Translations {
  // Nav
  nav_home: string;
  nav_fault_codes: string;
  nav_repair_guides: string;
  nav_service_specs: string;
  nav_maintenance: string;
  nav_tips: string;
  nav_sign_in: string;
  // Hero
  hero_title_line1: string;
  hero_title_line2: string;
  hero_title_line3: string;
  hero_title_highlight: string;
  hero_subtitle: string;
  hero_search_placeholder: string;
  hero_search_btn: string;
  hero_popular: string;
  pop_search_1: string;
  pop_search_2: string;
  pop_search_3: string;
  pop_search_4: string;
  hero_bubble_name: string;
  hero_bubble_text: string;
  // Categories
  cat_fault_codes: string;
  cat_fault_codes_desc: string;
  cat_repair_guides: string;
  cat_repair_guides_desc: string;
  cat_service_specs: string;
  cat_service_specs_desc: string;
  cat_maintenance: string;
  cat_maintenance_desc: string;
  cat_browse_all: string;
  // Stats
  stat_fault_codes: string;
  stat_repair_guides: string;
  stat_service_specs: string;
  stat_training_videos: string;
  stat_updated: string;
  stat_updated_label: string;
  // Manufacturers
  section_manufacturers: string;
  view_all_manufacturers: string;
  mfg_cummins: string;
  mfg_caterpillar: string;
  mfg_volvo: string;
  mfg_hitachi: string;
  mfg_kobelco: string;
  mfg_komatsu: string;
  mfg_yanmar: string;
  // Sections
  latest_fault_codes: string;
  popular_repair_guides: string;
  latest_videos: string;
  view_all: string;
  view_all_fault_codes: string;
  view_all_repair_guides: string;
  view_all_videos: string;
  // Fault code systems
  sys_fuel_system: string;
  sys_engine: string;
  // Fault code titles
  fc_559_title: string;
  fc_1117_title: string;
  fc_156_title: string;
  fc_288_title: string;
  fc_3251_title: string;
  // Repair guide titles & subs
  rg_fca_title: string;
  rg_fca_sub: string;
  rg_dpf_title: string;
  rg_dpf_sub: string;
  rg_hydraulic_title: string;
  rg_hydraulic_sub: string;
  rg_cat_title: string;
  rg_cat_sub: string;
  // Video titles
  vid_cummins_title: string;
  vid_dpf_title: string;
  vid_hydrema_title: string;
  vid_cat_title: string;
  // CTA
  need_expert_help: string;
  cta_cant_find: string;
  cta_ask_remech: string;
  cta_ask_now: string;
  cta_real_answers: string;
  // Search overlay
  search_placeholder: string;
  // Footer
  footer_tagline: string;
  footer_quick_links: string;
  footer_support: string;
  footer_contact: string;
  footer_home: string;
  footer_fault_codes: string;
  footer_repair_guides: string;
  footer_service_specs: string;
  footer_training_videos: string;
  footer_contact_us: string;
  footer_faq: string;
  footer_privacy: string;
  footer_terms: string;
  footer_ask_remech: string;
  footer_copyright: string;
  // Login
  login_welcome_back: string;
  login_create_account: string;
  login_subtitle_signin: string;
  login_subtitle_register: string;
  login_full_name: string;
  login_email: string;
  login_password: string;
  login_forgot_password: string;
  login_sign_in: string;
  login_register: string;
  login_no_account: string;
  login_have_account: string;
  login_register_now: string;
  login_sign_in_link: string;
  login_back_home: string;
  login_placeholder_name: string;
  login_placeholder_email: string;
  login_placeholder_password: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    nav_home: "Home", nav_fault_codes: "Fault Codes", nav_repair_guides: "Repair Guides",
    nav_service_specs: "Service Specs", nav_maintenance: "Maintenance", nav_tips: "Tips & Tricks", nav_sign_in: "Sign In",
    hero_title_line1: "YOUR VIRTUAL", hero_title_line2: "MECHANIC.", hero_title_line3: "REAL ANSWERS.", hero_title_highlight: "FAST.",
    hero_subtitle: "Search fault codes, repair guides, service specifications and real-world mechanical answers for heavy equipment and engines.",
    hero_search_placeholder: "Search fault codes...", hero_search_btn: "Search", hero_popular: "Popular searches:",
    pop_search_1: "Cummins 559", pop_search_2: "Kubota DPF Regeneration", pop_search_3: "Cat 120M Torque Specs", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "Hi, I'm ReMech.", hero_bubble_text: "Lets work together on helping you with your mechanical needs.",
    cat_fault_codes: "FAULT CODES", cat_fault_codes_desc: "Find and diagnose engine and machine fault codes by manufacturer and system.",
    cat_repair_guides: "REPAIR GUIDES", cat_repair_guides_desc: "Step-by-step repair procedures with photos, tests and advice.",
    cat_service_specs: "SERVICE SPECS", cat_service_specs_desc: "Specifications, torques, capacities, fluids and service data.",
    cat_maintenance: "MAINTENANCE", cat_maintenance_desc: "Keep your equipment running with comprehensive maintenance schedules and procedures.",
    cat_browse_all: "Browse all",
    stat_fault_codes: "Fault Codes", stat_repair_guides: "Repair Guides", stat_service_specs: "Service Specs",
    stat_training_videos: "Training Videos", stat_updated: "Updated Daily", stat_updated_label: "New Content Added",
    section_manufacturers: "BROWSE BY MANUFACTURER", view_all_manufacturers: "View all manufacturers",
    mfg_cummins: "Cummins", mfg_caterpillar: "Caterpillar", mfg_volvo: "Volvo",
    mfg_hitachi: "Hitachi", mfg_kobelco: "Kobelco", mfg_komatsu: "Komatsu", mfg_yanmar: "Yanmar",
    latest_fault_codes: "LATEST FAULT CODES", popular_repair_guides: "POPULAR REPAIR GUIDES", latest_videos: "LATEST TRAINING VIDEOS",
    view_all: "View all", view_all_fault_codes: "View all fault codes", view_all_repair_guides: "View all repair guides", view_all_videos: "View all videos",
    need_expert_help: "NEED EXPERT HELP?", cta_cant_find: "Can't find what you're looking for?",
    cta_ask_remech: "Ask ReMech your question and get answers from real mechanical experts.",
    cta_ask_now: "Ask ReMech Now", cta_real_answers: "Real answers. Real mechanics. No robots. Just experience.",
    search_placeholder: "Search fault codes, specs...",
    footer_tagline: "Your trusted virtual mechanic. We provide real answers, fault codes, and repair guides for heavy equipment and diesel engines.",
    footer_quick_links: "Quick Links", footer_support: "Support", footer_contact: "Contact",
    footer_home: "Home", footer_fault_codes: "Fault Codes", footer_repair_guides: "Repair Guides",
    footer_service_specs: "Service Specs", footer_training_videos: "Training Videos",
    footer_contact_us: "Contact Us", footer_faq: "FAQ", footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service", footer_ask_remech: "Ask ReMech", footer_copyright: "ReMech. All rights reserved.",
    login_welcome_back: "Welcome Back", login_create_account: "Create Account",
    login_subtitle_signin: "Sign in to access repair guides, diagrams, and expert support.",
    login_subtitle_register: "Join ReMech to start diagnosing and repairing like a pro.",
    login_full_name: "Full Name", login_email: "Email Address", login_password: "Password",
    login_forgot_password: "Forgot password?", login_sign_in: "Sign In", login_register: "Register",
    login_no_account: "Don't have an account? ", login_have_account: "Already have an account? ",
    login_register_now: "Register now", login_sign_in_link: "Sign in", login_back_home: "Back to Home",
    login_placeholder_name: "John Doe", login_placeholder_email: "mechanic@example.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "Fuel System", sys_engine: "Engine",
    fc_559_title: "Injector Metering Rail Pressure Low",
    fc_1117_title: "Fuel Pressure Sensor",
    fc_156_title: "Injector Supply Voltage",
    fc_288_title: "Engine Coolant Temperature High",
    fc_3251_title: "Turbocharger Boost Pressure Low",
    rg_fca_title: "How to Test the Fuel Control Actuator (FCA)", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "DPF Regeneration Explained & Testing", rg_dpf_sub: "All Diesel Engines",
    rg_hydraulic_title: "Hydraulic Pressure Testing Guide", rg_hydraulic_sub: "General",
    rg_cat_title: "Cat 120M Grader Common Issues", rg_cat_sub: "Cat Graders",
    vid_cummins_title: "Cummins 559 –\nFull Diagnostic Walkthrough",
    vid_dpf_title: "DPF Cleaning\nStep-by-Step",
    vid_hydrema_title: "Hydrema 922G\nHydraulic System Overview",
    vid_cat_title: "Cat 120M –\nService & Maintenance",
  },
  es: {
    nav_home: "Inicio", nav_fault_codes: "Códigos de Falla", nav_repair_guides: "Guías de Reparación",
    nav_service_specs: "Especificaciones", nav_maintenance: "Mantenimiento", nav_tips: "Consejos", nav_sign_in: "Iniciar Sesión",
    hero_title_line1: "TU MECÁNICO", hero_title_line2: "VIRTUAL.", hero_title_line3: "RESPUESTAS REALES.", hero_title_highlight: "RÁPIDO.",
    hero_subtitle: "Busca códigos de falla, guías de reparación, especificaciones de servicio y respuestas mecánicas reales para equipos pesados y motores.",
    hero_search_placeholder: "Buscar códigos de falla...", hero_search_btn: "Buscar", hero_popular: "Búsquedas populares:",
    pop_search_1: "Cummins 559", pop_search_2: "Regeneración DPF Kubota", pop_search_3: "Cat 120M Torque", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "Hola, soy ReMech.", hero_bubble_text: "Trabajemos juntos para ayudarte con tus necesidades mecánicas.",
    cat_fault_codes: "CÓDIGOS DE FALLA", cat_fault_codes_desc: "Encuentra y diagnostica códigos de falla de motores y máquinas por fabricante y sistema.",
    cat_repair_guides: "GUÍAS DE REPARACIÓN", cat_repair_guides_desc: "Procedimientos de reparación paso a paso con fotos, pruebas y asesoría.",
    cat_service_specs: "ESPECIFICACIONES", cat_service_specs_desc: "Especificaciones, torques, capacidades, fluidos y datos de servicio.",
    cat_maintenance: "MANTENIMIENTO", cat_maintenance_desc: "Mantén tu equipo funcionando con calendarios y procedimientos de mantenimiento completos.",
    cat_browse_all: "Ver todos",
    stat_fault_codes: "Códigos de Falla", stat_repair_guides: "Guías de Reparación", stat_service_specs: "Especificaciones",
    stat_training_videos: "Videos de Capacitación", stat_updated: "Actualizado Diariamente", stat_updated_label: "Contenido Nuevo Agregado",
    section_manufacturers: "BUSCAR POR FABRICANTE", view_all_manufacturers: "Ver todos los fabricantes",
    mfg_cummins: "Cummins", mfg_caterpillar: "Caterpillar", mfg_volvo: "Volvo",
    mfg_hitachi: "Hitachi", mfg_kobelco: "Kobelco", mfg_komatsu: "Komatsu", mfg_yanmar: "Yanmar",
    latest_fault_codes: "ÚLTIMOS CÓDIGOS DE FALLA", popular_repair_guides: "GUÍAS DE REPARACIÓN POPULARES", latest_videos: "ÚLTIMOS VIDEOS DE CAPACITACIÓN",
    view_all: "Ver todos", view_all_fault_codes: "Ver todos los códigos de falla", view_all_repair_guides: "Ver todas las guías", view_all_videos: "Ver todos los videos",
    need_expert_help: "¿NECESITAS AYUDA EXPERTA?", cta_cant_find: "¿No encuentras lo que buscas?",
    cta_ask_remech: "Haz tu pregunta a ReMech y obtén respuestas de expertos mecánicos reales.",
    cta_ask_now: "Pregunta a ReMech Ahora", cta_real_answers: "Respuestas reales. Mecánicos reales. Sin robots. Solo experiencia.",
    search_placeholder: "Buscar códigos de falla, especificaciones...",
    footer_tagline: "Tu mecánico virtual de confianza. Proveemos respuestas reales, códigos de falla y guías de reparación para equipos pesados y motores diésel.",
    footer_quick_links: "Enlaces Rápidos", footer_support: "Soporte", footer_contact: "Contacto",
    footer_home: "Inicio", footer_fault_codes: "Códigos de Falla", footer_repair_guides: "Guías de Reparación",
    footer_service_specs: "Especificaciones", footer_training_videos: "Videos de Capacitación",
    footer_contact_us: "Contáctenos", footer_faq: "Preguntas Frecuentes", footer_privacy: "Política de Privacidad",
    footer_terms: "Términos de Servicio", footer_ask_remech: "Preguntar a ReMech", footer_copyright: "ReMech. Todos los derechos reservados.",
    login_welcome_back: "Bienvenido de Nuevo", login_create_account: "Crear Cuenta",
    login_subtitle_signin: "Inicia sesión para acceder a guías de reparación, diagramas y soporte experto.",
    login_subtitle_register: "Únete a ReMech para comenzar a diagnosticar y reparar como un profesional.",
    login_full_name: "Nombre Completo", login_email: "Correo Electrónico", login_password: "Contraseña",
    login_forgot_password: "¿Olvidaste tu contraseña?", login_sign_in: "Iniciar Sesión", login_register: "Registrarse",
    login_no_account: "¿No tienes cuenta? ", login_have_account: "¿Ya tienes cuenta? ",
    login_register_now: "Regístrate ahora", login_sign_in_link: "Iniciar sesión", login_back_home: "Volver al Inicio",
    login_placeholder_name: "Juan Pérez", login_placeholder_email: "mecanico@ejemplo.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "Sistema de Combustible", sys_engine: "Motor",
    fc_559_title: "Presión Baja en Riel de Inyectores",
    fc_1117_title: "Sensor de Presión de Combustible",
    fc_156_title: "Voltaje de Suministro de Inyectores",
    fc_288_title: "Temperatura del Refrigerante del Motor Alta",
    fc_3251_title: "Presión de Turbocompresor Baja",
    rg_fca_title: "Cómo Probar el Actuador de Control de Combustible (FCA)", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "Regeneración DPF Explicada y Pruebas", rg_dpf_sub: "Todos los Motores Diésel",
    rg_hydraulic_title: "Guía de Pruebas de Presión Hidráulica", rg_hydraulic_sub: "General",
    rg_cat_title: "Problemas Comunes Cat 120M Grader", rg_cat_sub: "Graders Cat",
    vid_cummins_title: "Cummins 559 –\nDiagnóstico Completo",
    vid_dpf_title: "Limpieza DPF\nPaso a Paso",
    vid_hydrema_title: "Hydrema 922G\nResumen del Sistema Hidráulico",
    vid_cat_title: "Cat 120M –\nServicio y Mantenimiento",
  },
  pt: {
    nav_home: "Início", nav_fault_codes: "Códigos de Falha", nav_repair_guides: "Guias de Reparo",
    nav_service_specs: "Especificações", nav_maintenance: "Manutenção", nav_tips: "Dicas", nav_sign_in: "Entrar",
    hero_title_line1: "SEU MECÂNICO", hero_title_line2: "VIRTUAL.", hero_title_line3: "RESPOSTAS REAIS.", hero_title_highlight: "RÁPIDO.",
    hero_subtitle: "Pesquise códigos de falha, guias de reparo, especificações de serviço e respostas mecânicas reais para equipamentos pesados e motores.",
    hero_search_placeholder: "Buscar códigos de falha...", hero_search_btn: "Buscar", hero_popular: "Pesquisas populares:",
    pop_search_1: "Cummins 559", pop_search_2: "Regeneração DPF Kubota", pop_search_3: "Cat 120M Torque", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "Olá, eu sou o ReMech.", hero_bubble_text: "Vamos trabalhar juntos para ajudá-lo com suas necessidades mecânicas.",
    cat_fault_codes: "CÓDIGOS DE FALHA", cat_fault_codes_desc: "Encontre e diagnostique códigos de falha de motores e máquinas por fabricante e sistema.",
    cat_repair_guides: "GUIAS DE REPARO", cat_repair_guides_desc: "Procedimentos de reparo passo a passo com fotos, testes e orientações.",
    cat_service_specs: "ESPECIFICAÇÕES", cat_service_specs_desc: "Especificações, torques, capacidades, fluidos e dados de serviço.",
    cat_maintenance: "MANUTENÇÃO", cat_maintenance_desc: "Mantenha seu equipamento funcionando com cronogramas e procedimentos de manutenção abrangentes.",
    cat_browse_all: "Ver todos",
    stat_fault_codes: "Códigos de Falha", stat_repair_guides: "Guias de Reparo", stat_service_specs: "Especificações",
    stat_training_videos: "Vídeos de Treinamento", stat_updated: "Atualizado Diariamente", stat_updated_label: "Novo Conteúdo Adicionado",
    section_manufacturers: "PESQUISAR POR FABRICANTE", view_all_manufacturers: "Ver todos os fabricantes",
    mfg_cummins: "Cummins", mfg_caterpillar: "Caterpillar", mfg_volvo: "Volvo",
    mfg_hitachi: "Hitachi", mfg_kobelco: "Kobelco", mfg_komatsu: "Komatsu", mfg_yanmar: "Yanmar",
    latest_fault_codes: "ÚLTIMOS CÓDIGOS DE FALHA", popular_repair_guides: "GUIAS DE REPARO POPULARES", latest_videos: "ÚLTIMOS VÍDEOS DE TREINAMENTO",
    view_all: "Ver todos", view_all_fault_codes: "Ver todos os códigos de falha", view_all_repair_guides: "Ver todos os guias", view_all_videos: "Ver todos os vídeos",
    need_expert_help: "PRECISA DE AJUDA ESPECIALIZADA?", cta_cant_find: "Não encontra o que procura?",
    cta_ask_remech: "Faça sua pergunta ao ReMech e receba respostas de especialistas mecânicos reais.",
    cta_ask_now: "Pergunte ao ReMech Agora", cta_real_answers: "Respostas reais. Mecânicos reais. Sem robôs. Só experiência.",
    search_placeholder: "Buscar códigos de falha, especificações...",
    footer_tagline: "Seu mecânico virtual de confiança. Fornecemos respostas reais, códigos de falha e guias de reparo para equipamentos pesados e motores a diesel.",
    footer_quick_links: "Links Rápidos", footer_support: "Suporte", footer_contact: "Contato",
    footer_home: "Início", footer_fault_codes: "Códigos de Falha", footer_repair_guides: "Guias de Reparo",
    footer_service_specs: "Especificações", footer_training_videos: "Vídeos de Treinamento",
    footer_contact_us: "Fale Conosco", footer_faq: "Perguntas Frequentes", footer_privacy: "Política de Privacidade",
    footer_terms: "Termos de Serviço", footer_ask_remech: "Perguntar ao ReMech", footer_copyright: "ReMech. Todos os direitos reservados.",
    login_welcome_back: "Bem-vindo de Volta", login_create_account: "Criar Conta",
    login_subtitle_signin: "Entre para acessar guias de reparo, diagramas e suporte especializado.",
    login_subtitle_register: "Junte-se ao ReMech para começar a diagnosticar e reparar como um profissional.",
    login_full_name: "Nome Completo", login_email: "Endereço de E-mail", login_password: "Senha",
    login_forgot_password: "Esqueceu a senha?", login_sign_in: "Entrar", login_register: "Registrar",
    login_no_account: "Não tem uma conta? ", login_have_account: "Já tem uma conta? ",
    login_register_now: "Registre-se agora", login_sign_in_link: "Entrar", login_back_home: "Voltar ao Início",
    login_placeholder_name: "João Silva", login_placeholder_email: "mecanico@exemplo.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "Sistema de Combustível", sys_engine: "Motor",
    fc_559_title: "Pressão Baixa no Rail de Injetores",
    fc_1117_title: "Sensor de Pressão de Combustível",
    fc_156_title: "Tensão de Suprimento dos Injetores",
    fc_288_title: "Temperatura do Líquido de Arrefecimento Alta",
    fc_3251_title: "Pressão do Turbocompressor Baixa",
    rg_fca_title: "Como Testar o Atuador de Controle de Combustível (FCA)", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "Regeneração DPF Explicada e Testes", rg_dpf_sub: "Todos os Motores Diesel",
    rg_hydraulic_title: "Guia de Testes de Pressão Hidráulica", rg_hydraulic_sub: "Geral",
    rg_cat_title: "Problemas Comuns do Cat 120M Grader", rg_cat_sub: "Graders Cat",
    vid_cummins_title: "Cummins 559 –\nDiagnóstico Completo",
    vid_dpf_title: "Limpeza DPF\nPasso a Passo",
    vid_hydrema_title: "Hydrema 922G\nVisão Geral do Sistema Hidráulico",
    vid_cat_title: "Cat 120M –\nServiço e Manutenção",
  },
  fr: {
    nav_home: "Accueil", nav_fault_codes: "Codes de Défaut", nav_repair_guides: "Guides de Réparation",
    nav_service_specs: "Spécifications", nav_maintenance: "Maintenance", nav_tips: "Conseils", nav_sign_in: "Connexion",
    hero_title_line1: "VOTRE MÉCANICIEN", hero_title_line2: "VIRTUEL.", hero_title_line3: "VRAIES RÉPONSES.", hero_title_highlight: "VITE.",
    hero_subtitle: "Recherchez des codes de défaut, des guides de réparation, des spécifications de service et des réponses mécaniques réelles pour les équipements lourds.",
    hero_search_placeholder: "Rechercher des codes de défaut...", hero_search_btn: "Rechercher", hero_popular: "Recherches populaires :",
    pop_search_1: "Cummins 559", pop_search_2: "Régénération DPF Kubota", pop_search_3: "Cat 120M Couple", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "Bonjour, je suis ReMech.", hero_bubble_text: "Travaillons ensemble pour vous aider avec vos besoins mécaniques.",
    cat_fault_codes: "CODES DE DÉFAUT", cat_fault_codes_desc: "Trouvez et diagnostiquez les codes de défaut des moteurs et machines par fabricant et système.",
    cat_repair_guides: "GUIDES DE RÉPARATION", cat_repair_guides_desc: "Procédures de réparation étape par étape avec photos, tests et conseils.",
    cat_service_specs: "SPÉCIFICATIONS", cat_service_specs_desc: "Spécifications, couples, capacités, fluides et données de service.",
    cat_maintenance: "MAINTENANCE", cat_maintenance_desc: "Maintenez votre équipement en marche avec des calendriers et procédures de maintenance complets.",
    cat_browse_all: "Voir tout",
    stat_fault_codes: "Codes de Défaut", stat_repair_guides: "Guides de Réparation", stat_service_specs: "Spécifications",
    stat_training_videos: "Vidéos de Formation", stat_updated: "Mis à Jour Quotidiennement", stat_updated_label: "Nouveau Contenu Ajouté",
    section_manufacturers: "PARCOURIR PAR FABRICANT", view_all_manufacturers: "Voir tous les fabricants",
    mfg_cummins: "Cummins", mfg_caterpillar: "Caterpillar", mfg_volvo: "Volvo",
    mfg_hitachi: "Hitachi", mfg_kobelco: "Kobelco", mfg_komatsu: "Komatsu", mfg_yanmar: "Yanmar",
    latest_fault_codes: "DERNIERS CODES DE DÉFAUT", popular_repair_guides: "GUIDES DE RÉPARATION POPULAIRES", latest_videos: "DERNIÈRES VIDÉOS DE FORMATION",
    view_all: "Voir tout", view_all_fault_codes: "Voir tous les codes de défaut", view_all_repair_guides: "Voir tous les guides", view_all_videos: "Voir toutes les vidéos",
    need_expert_help: "BESOIN D'AIDE EXPERTE ?", cta_cant_find: "Vous ne trouvez pas ce que vous cherchez ?",
    cta_ask_remech: "Posez votre question à ReMech et obtenez des réponses de vrais experts mécaniciens.",
    cta_ask_now: "Demandez à ReMech Maintenant", cta_real_answers: "Vraies réponses. Vrais mécaniciens. Pas de robots. Juste de l'expérience.",
    search_placeholder: "Rechercher des codes de défaut, spécifications...",
    footer_tagline: "Votre mécanicien virtuel de confiance. Nous fournissons de vraies réponses, des codes de défaut et des guides de réparation pour les équipements lourds.",
    footer_quick_links: "Liens Rapides", footer_support: "Support", footer_contact: "Contact",
    footer_home: "Accueil", footer_fault_codes: "Codes de Défaut", footer_repair_guides: "Guides de Réparation",
    footer_service_specs: "Spécifications", footer_training_videos: "Vidéos de Formation",
    footer_contact_us: "Contactez-nous", footer_faq: "FAQ", footer_privacy: "Politique de Confidentialité",
    footer_terms: "Conditions d'Utilisation", footer_ask_remech: "Demander à ReMech", footer_copyright: "ReMech. Tous droits réservés.",
    login_welcome_back: "Bon Retour", login_create_account: "Créer un Compte",
    login_subtitle_signin: "Connectez-vous pour accéder aux guides de réparation, schémas et assistance experte.",
    login_subtitle_register: "Rejoignez ReMech pour commencer à diagnostiquer et réparer comme un pro.",
    login_full_name: "Nom Complet", login_email: "Adresse E-mail", login_password: "Mot de Passe",
    login_forgot_password: "Mot de passe oublié ?", login_sign_in: "Se Connecter", login_register: "S'inscrire",
    login_no_account: "Vous n'avez pas de compte ? ", login_have_account: "Vous avez déjà un compte ? ",
    login_register_now: "Inscrivez-vous", login_sign_in_link: "Se connecter", login_back_home: "Retour à l'Accueil",
    login_placeholder_name: "Jean Dupont", login_placeholder_email: "mecanicien@exemple.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "Système de Carburant", sys_engine: "Moteur",
    fc_559_title: "Pression Basse dans le Rail d'Injection",
    fc_1117_title: "Capteur de Pression de Carburant",
    fc_156_title: "Tension d'Alimentation des Injecteurs",
    fc_288_title: "Température du Liquide de Refroidissement Élevée",
    fc_3251_title: "Pression du Turbocompresseur Basse",
    rg_fca_title: "Comment Tester l'Actuateur de Contrôle du Carburant (FCA)", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "Régénération DPF Expliquée et Tests", rg_dpf_sub: "Tous Moteurs Diesel",
    rg_hydraulic_title: "Guide de Test de Pression Hydraulique", rg_hydraulic_sub: "Général",
    rg_cat_title: "Problèmes Courants Cat 120M Grader", rg_cat_sub: "Niveleuses Cat",
    vid_cummins_title: "Cummins 559 –\nDiagnostic Complet",
    vid_dpf_title: "Nettoyage DPF\nÉtape par Étape",
    vid_hydrema_title: "Hydrema 922G\nAperçu du Système Hydraulique",
    vid_cat_title: "Cat 120M –\nService et Maintenance",
  },
  ar: {
    nav_home: "الرئيسية", nav_fault_codes: "رموز الأعطال", nav_repair_guides: "أدلة الإصلاح",
    nav_service_specs: "مواصفات الخدمة", nav_maintenance: "الصيانة", nav_tips: "نصائح وحيل", nav_sign_in: "تسجيل الدخول",
    hero_title_line1: "ميكانيكيك الافتراضي", hero_title_line2: "المحترف.", hero_title_line3: "إجابات حقيقية.", hero_title_highlight: "سريع.",
    hero_subtitle: "ابحث عن رموز الأعطال وأدلة الإصلاح ومواصفات الخدمة والإجابات الميكانيكية الحقيقية للمعدات الثقيلة والمحركات.",
    hero_search_placeholder: "ابحث عن رموز الأعطال...", hero_search_btn: "بحث", hero_popular: "عمليات البحث الشائعة:",
    pop_search_1: "Cummins 559", pop_search_2: "تجديد DPF كوبوتا", pop_search_3: "Cat 120M عزم", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "مرحباً، أنا ReMech.", hero_bubble_text: "دعنا نعمل معاً لمساعدتك في احتياجاتك الميكانيكية.",
    cat_fault_codes: "رموز الأعطال", cat_fault_codes_desc: "ابحث وشخّص رموز أعطال المحركات والآلات حسب الشركة المصنعة والنظام.",
    cat_repair_guides: "أدلة الإصلاح", cat_repair_guides_desc: "إجراءات إصلاح خطوة بخطوة مع صور واختبارات ونصائح.",
    cat_service_specs: "مواصفات الخدمة", cat_service_specs_desc: "المواصفات وقيم العزم والسعات والسوائل وبيانات الخدمة.",
    cat_maintenance: "الصيانة", cat_maintenance_desc: "حافظ على تشغيل معداتك بجداول وإجراءات صيانة شاملة.",
    cat_browse_all: "تصفح الكل",
    stat_fault_codes: "رموز الأعطال", stat_repair_guides: "أدلة الإصلاح", stat_service_specs: "مواصفات الخدمة",
    stat_training_videos: "مقاطع تدريبية", stat_updated: "تحديث يومي", stat_updated_label: "محتوى جديد يُضاف",
    section_manufacturers: "تصفح حسب الشركة المصنعة", view_all_manufacturers: "عرض جميع الشركات",
    mfg_cummins: "كمينز", mfg_caterpillar: "كاتربيلر", mfg_volvo: "فولفو",
    mfg_hitachi: "هيتاشي", mfg_kobelco: "كوبيلكو", mfg_komatsu: "كوماتسو", mfg_yanmar: "يانمار",
    latest_fault_codes: "أحدث رموز الأعطال", popular_repair_guides: "أدلة الإصلاح الشائعة", latest_videos: "أحدث مقاطع التدريب",
    view_all: "عرض الكل", view_all_fault_codes: "عرض جميع رموز الأعطال", view_all_repair_guides: "عرض جميع الأدلة", view_all_videos: "عرض جميع المقاطع",
    need_expert_help: "تحتاج مساعدة خبير؟", cta_cant_find: "لا تجد ما تبحث عنه؟",
    cta_ask_remech: "اسأل ReMech سؤالك واحصل على إجابات من خبراء ميكانيكيين حقيقيين.",
    cta_ask_now: "اسأل ReMech الآن", cta_real_answers: "إجابات حقيقية. ميكانيكيون حقيقيون. لا روبوتات. فقط خبرة.",
    search_placeholder: "ابحث عن رموز الأعطال والمواصفات...",
    footer_tagline: "ميكانيكيك الافتراضي الموثوق. نقدم إجابات حقيقية ورموز أعطال وأدلة إصلاح للمعدات الثقيلة ومحركات الديزل.",
    footer_quick_links: "روابط سريعة", footer_support: "الدعم", footer_contact: "التواصل",
    footer_home: "الرئيسية", footer_fault_codes: "رموز الأعطال", footer_repair_guides: "أدلة الإصلاح",
    footer_service_specs: "مواصفات الخدمة", footer_training_videos: "مقاطع تدريبية",
    footer_contact_us: "تواصل معنا", footer_faq: "الأسئلة الشائعة", footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الخدمة", footer_ask_remech: "اسأل ReMech", footer_copyright: "ReMech. جميع الحقوق محفوظة.",
    login_welcome_back: "مرحباً بعودتك", login_create_account: "إنشاء حساب",
    login_subtitle_signin: "سجّل دخولك للوصول إلى أدلة الإصلاح والمخططات والدعم الخبير.",
    login_subtitle_register: "انضم إلى ReMech لتبدأ التشخيص والإصلاح كالمحترفين.",
    login_full_name: "الاسم الكامل", login_email: "البريد الإلكتروني", login_password: "كلمة المرور",
    login_forgot_password: "نسيت كلمة المرور؟", login_sign_in: "تسجيل الدخول", login_register: "التسجيل",
    login_no_account: "ليس لديك حساب؟ ", login_have_account: "لديك حساب بالفعل؟ ",
    login_register_now: "سجّل الآن", login_sign_in_link: "تسجيل الدخول", login_back_home: "العودة للرئيسية",
    login_placeholder_name: "محمد أحمد", login_placeholder_email: "mekanik@example.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "نظام الوقود", sys_engine: "المحرك",
    fc_559_title: "ضغط منخفض في قضيب رش الوقود",
    fc_1117_title: "مستشعر ضغط الوقود",
    fc_156_title: "جهد تغذية البخاخات",
    fc_288_title: "درجة حرارة سائل التبريد مرتفعة",
    fc_3251_title: "ضغط التوربو منخفض",
    rg_fca_title: "كيفية اختبار محرك التحكم في الوقود (FCA)", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "شرح واختبار إعادة تهيئة DPF", rg_dpf_sub: "جميع محركات الديزل",
    rg_hydraulic_title: "دليل اختبار الضغط الهيدروليكي", rg_hydraulic_sub: "عام",
    rg_cat_title: "مشاكل شائعة في Cat 120M Grader", rg_cat_sub: "Graders Cat",
    vid_cummins_title: "Cummins 559 –\nجولة تشخيص كاملة",
    vid_dpf_title: "تنظيف DPF\nخطوة بخطوة",
    vid_hydrema_title: "Hydrema 922G\nنظرة عامة على النظام الهيدروليكي",
    vid_cat_title: "Cat 120M –\nالخدمة والصيانة",
  },
  hi: {
    nav_home: "होम", nav_fault_codes: "फॉल्ट कोड", nav_repair_guides: "मरम्मत गाइड",
    nav_service_specs: "सेवा विशेषताएं", nav_maintenance: "रखरखाव", nav_tips: "टिप्स और ट्रिक्स", nav_sign_in: "साइन इन",
    hero_title_line1: "आपका वर्चुअल", hero_title_line2: "मैकेनिक.", hero_title_line3: "असली जवाब.", hero_title_highlight: "तेज़.",
    hero_subtitle: "भारी उपकरण और इंजनों के लिए फॉल्ट कोड, मरम्मत गाइड, सेवा विशेषताएं और वास्तविक यांत्रिक उत्तर खोजें।",
    hero_search_placeholder: "फॉल्ट कोड खोजें...", hero_search_btn: "खोजें", hero_popular: "लोकप्रिय खोजें:",
    pop_search_1: "Cummins 559", pop_search_2: "कुबोटा DPF रीजनरेशन", pop_search_3: "Cat 120M टॉर्क", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "नमस्ते, मैं ReMech हूँ।", hero_bubble_text: "आपकी यांत्रिक ज़रूरतों में मदद करने के लिए मिलकर काम करते हैं।",
    cat_fault_codes: "फॉल्ट कोड", cat_fault_codes_desc: "निर्माता और सिस्टम के अनुसार इंजन और मशीन फॉल्ट कोड खोजें और निदान करें।",
    cat_repair_guides: "मरम्मत गाइड", cat_repair_guides_desc: "फोटो, टेस्ट और सलाह के साथ चरण-दर-चरण मरम्मत प्रक्रियाएं।",
    cat_service_specs: "सेवा विशेषताएं", cat_service_specs_desc: "विशेषताएं, टॉर्क, क्षमताएं, तरल पदार्थ और सेवा डेटा।",
    cat_maintenance: "रखरखाव", cat_maintenance_desc: "व्यापक रखरखाव कार्यक्रमों और प्रक्रियाओं के साथ अपने उपकरण को चालू रखें।",
    cat_browse_all: "सभी देखें",
    stat_fault_codes: "फॉल्ट कोड", stat_repair_guides: "मरम्मत गाइड", stat_service_specs: "सेवा विशेषताएं",
    stat_training_videos: "प्रशिक्षण वीडियो", stat_updated: "रोज़ अपडेट", stat_updated_label: "नई सामग्री जोड़ी गई",
    section_manufacturers: "निर्माता द्वारा खोजें", view_all_manufacturers: "सभी निर्माता देखें",
    mfg_cummins: "कमिंस", mfg_caterpillar: "कैटरपिलर", mfg_volvo: "वोल्वो",
    mfg_hitachi: "हिताची", mfg_kobelco: "कोबेल्को", mfg_komatsu: "कोमात्सु", mfg_yanmar: "यान्मार",
    latest_fault_codes: "नवीनतम फॉल्ट कोड", popular_repair_guides: "लोकप्रिय मरम्मत गाइड", latest_videos: "नवीनतम प्रशिक्षण वीडियो",
    view_all: "सभी देखें", view_all_fault_codes: "सभी फॉल्ट कोड देखें", view_all_repair_guides: "सभी गाइड देखें", view_all_videos: "सभी वीडियो देखें",
    need_expert_help: "विशेषज्ञ सहायता चाहिए?", cta_cant_find: "आप जो ढूंढ रहे हैं वो नहीं मिल रहा?",
    cta_ask_remech: "ReMech से अपना सवाल पूछें और असली यांत्रिक विशेषज्ञों से जवाब पाएं।",
    cta_ask_now: "अभी ReMech से पूछें", cta_real_answers: "असली जवाब। असली मैकेनिक। कोई रोबोट नहीं। बस अनुभव।",
    search_placeholder: "फॉल्ट कोड, विशेषताएं खोजें...",
    footer_tagline: "आपका विश्वसनीय वर्चुअल मैकेनिक। हम भारी उपकरण और डीजल इंजनों के लिए असली जवाब, फॉल्ट कोड और मरम्मत गाइड प्रदान करते हैं।",
    footer_quick_links: "त्वरित लिंक", footer_support: "सहायता", footer_contact: "संपर्क",
    footer_home: "होम", footer_fault_codes: "फॉल्ट कोड", footer_repair_guides: "मरम्मत गाइड",
    footer_service_specs: "सेवा विशेषताएं", footer_training_videos: "प्रशिक्षण वीडियो",
    footer_contact_us: "संपर्क करें", footer_faq: "सामान्य प्रश्न", footer_privacy: "गोपनीयता नीति",
    footer_terms: "सेवा की शर्तें", footer_ask_remech: "ReMech से पूछें", footer_copyright: "ReMech. सभी अधिकार सुरक्षित।",
    login_welcome_back: "वापस स्वागत है", login_create_account: "खाता बनाएं",
    login_subtitle_signin: "मरम्मत गाइड, आरेखों और विशेषज्ञ सहायता तक पहुंचने के लिए साइन इन करें।",
    login_subtitle_register: "एक प्रो की तरह निदान और मरम्मत शुरू करने के लिए ReMech से जुड़ें।",
    login_full_name: "पूरा नाम", login_email: "ईमेल पता", login_password: "पासवर्ड",
    login_forgot_password: "पासवर्ड भूल गए?", login_sign_in: "साइन इन", login_register: "रजिस्टर",
    login_no_account: "खाता नहीं है? ", login_have_account: "पहले से खाता है? ",
    login_register_now: "अभी रजिस्टर करें", login_sign_in_link: "साइन इन", login_back_home: "होम पर वापस",
    login_placeholder_name: "राज शर्मा", login_placeholder_email: "mechanic@example.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "ईंधन प्रणाली", sys_engine: "इंजन",
    fc_559_title: "इंजेक्टर मीटरिंग रेल प्रेशर लो",
    fc_1117_title: "फ्यूल प्रेशर सेंसर",
    fc_156_title: "इंजेक्टर सप्लाई वोल्टेज",
    fc_288_title: "इंजन कूलेंट तापमान अधिक",
    fc_3251_title: "टर्बोचार्जर बूस्ट प्रेशर लो",
    rg_fca_title: "फ्यूल कंट्रोल एक्चुएटर (FCA) टेस्ट कैसे करें", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "DPF रीजनरेशन समझाया और टेस्टिंग", rg_dpf_sub: "सभी डीजल इंजन",
    rg_hydraulic_title: "हाइड्रोलिक प्रेशर टेस्टिंग गाइड", rg_hydraulic_sub: "सामान्य",
    rg_cat_title: "Cat 120M Grader की सामान्य समस्याएं", rg_cat_sub: "Cat Graders",
    vid_cummins_title: "Cummins 559 –\nपूर्ण डायग्नोस्टिक वॉकथ्रू",
    vid_dpf_title: "DPF सफाई\nचरण दर चरण",
    vid_hydrema_title: "Hydrema 922G\nहाइड्रोलिक सिस्टम अवलोकन",
    vid_cat_title: "Cat 120M –\nसेवा और रखरखाव",
  },
  zh: {
    nav_home: "首页", nav_fault_codes: "故障代码", nav_repair_guides: "维修指南",
    nav_service_specs: "服务规格", nav_maintenance: "保养维护", nav_tips: "技巧提示", nav_sign_in: "登录",
    hero_title_line1: "您的虚拟", hero_title_line2: "技师.", hero_title_line3: "真实解答.", hero_title_highlight: "快速.",
    hero_subtitle: "搜索重型设备和发动机的故障代码、维修指南、服务规格和真实机械解答。",
    hero_search_placeholder: "搜索故障代码...", hero_search_btn: "搜索", hero_popular: "热门搜索：",
    pop_search_1: "Cummins 559", pop_search_2: "久保田 DPF 再生", pop_search_3: "Cat 120M 扭矩", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "您好，我是 ReMech。", hero_bubble_text: "让我们一起解决您的机械问题。",
    cat_fault_codes: "故障代码", cat_fault_codes_desc: "按制造商和系统查找并诊断发动机和机器故障代码。",
    cat_repair_guides: "维修指南", cat_repair_guides_desc: "包含照片、测试和建议的分步维修程序。",
    cat_service_specs: "服务规格", cat_service_specs_desc: "规格、扭矩、容量、液体和服务数据。",
    cat_maintenance: "保养维护", cat_maintenance_desc: "通过全面的维护计划和程序保持设备正常运行。",
    cat_browse_all: "浏览全部",
    stat_fault_codes: "故障代码", stat_repair_guides: "维修指南", stat_service_specs: "服务规格",
    stat_training_videos: "培训视频", stat_updated: "每日更新", stat_updated_label: "新内容持续添加",
    section_manufacturers: "按制造商浏览", view_all_manufacturers: "查看所有制造商",
    mfg_cummins: "康明斯 (Cummins)", mfg_caterpillar: "卡特彼勒 (CAT)", mfg_volvo: "沃尔沃 (Volvo)",
    mfg_hitachi: "日立 (Hitachi)", mfg_kobelco: "神钢 (Kobelco)", mfg_komatsu: "小松 (Komatsu)", mfg_yanmar: "洋马 (Yanmar)",
    latest_fault_codes: "最新故障代码", popular_repair_guides: "热门维修指南", latest_videos: "最新培训视频",
    view_all: "查看全部", view_all_fault_codes: "查看所有故障代码", view_all_repair_guides: "查看所有指南", view_all_videos: "查看所有视频",
    need_expert_help: "需要专家帮助？", cta_cant_find: "找不到您需要的内容？",
    cta_ask_remech: "向 ReMech 提问，获得真正机械专家的解答。",
    cta_ask_now: "立即询问 ReMech", cta_real_answers: "真实解答。真实技师。无机器人。只有经验。",
    search_placeholder: "搜索故障代码、规格...",
    footer_tagline: "您值得信赖的虚拟技师。我们为重型设备和柴油发动机提供真实解答、故障代码和维修指南。",
    footer_quick_links: "快速链接", footer_support: "支持", footer_contact: "联系我们",
    footer_home: "首页", footer_fault_codes: "故障代码", footer_repair_guides: "维修指南",
    footer_service_specs: "服务规格", footer_training_videos: "培训视频",
    footer_contact_us: "联系我们", footer_faq: "常见问题", footer_privacy: "隐私政策",
    footer_terms: "服务条款", footer_ask_remech: "询问 ReMech", footer_copyright: "ReMech. 版权所有。",
    login_welcome_back: "欢迎回来", login_create_account: "创建账户",
    login_subtitle_signin: "登录以访问维修指南、图表和专家支持。",
    login_subtitle_register: "加入 ReMech，开始像专业人士一样诊断和维修。",
    login_full_name: "全名", login_email: "电子邮件", login_password: "密码",
    login_forgot_password: "忘记密码？", login_sign_in: "登录", login_register: "注册",
    login_no_account: "没有账户？ ", login_have_account: "已有账户？ ",
    login_register_now: "立即注册", login_sign_in_link: "登录", login_back_home: "返回首页",
    login_placeholder_name: "张伟", login_placeholder_email: "mechanic@example.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "燃油系统", sys_engine: "发动机",
    fc_559_title: "喷油器计量轨道压力低",
    fc_1117_title: "燃油压力传感器",
    fc_156_title: "喷油器供电电压",
    fc_288_title: "发动机冷却液温度过高",
    fc_3251_title: "涡轮增压器增压压力低",
    rg_fca_title: "如何测试燃油控制执行器 (FCA)", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "DPF 再生详解与测试", rg_dpf_sub: "所有柴油发动机",
    rg_hydraulic_title: "液压压力测试指南", rg_hydraulic_sub: "通用",
    rg_cat_title: "Cat 120M 平地机常见问题", rg_cat_sub: "Cat 平地机",
    vid_cummins_title: "Cummins 559 –\n完整诊断流程",
    vid_dpf_title: "DPF 清洁\n分步指南",
    vid_hydrema_title: "Hydrema 922G\n液压系统概述",
    vid_cat_title: "Cat 120M –\n服务与维护",
  },
  tl: {
    nav_home: "Home", nav_fault_codes: "Fault Codes", nav_repair_guides: "Gabay sa Pagkukumpuni",
    nav_service_specs: "Mga Detalye ng Serbisyo", nav_maintenance: "Maintenance", nav_tips: "Mga Tip at Trick", nav_sign_in: "Mag-sign In",
    hero_title_line1: "ANG IYONG VIRTUAL", hero_title_line2: "MEKANIKO.", hero_title_line3: "TUNAY NA SAGOT.", hero_title_highlight: "MABILIS.",
    hero_subtitle: "Maghanap ng mga fault code, gabay sa pagkukumpuni, detalye ng serbisyo, at tunay na mekanikal na sagot para sa mabibigat na kagamitan at mga makina.",
    hero_search_placeholder: "Maghanap ng mga fault code...", hero_search_btn: "Hanapin", hero_popular: "Mga sikat na paghahanap:",
    pop_search_1: "Cummins 559", pop_search_2: "Kubota DPF Regeneration", pop_search_3: "Cat 120M Torque", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "Kumusta, ako si ReMech.", hero_bubble_text: "Magtulungan tayo para matulungan ka sa iyong mga pangangailangan sa mekanika.",
    cat_fault_codes: "FAULT CODES", cat_fault_codes_desc: "Hanapin at i-diagnose ang mga fault code ng makina at kagamitan ayon sa tagagawa at sistema.",
    cat_repair_guides: "GABAY SA PAGKUKUMPUNI", cat_repair_guides_desc: "Hakbang-hakbang na pamamaraan ng pagkukumpuni na may mga larawan, pagsusuri, at payo.",
    cat_service_specs: "MGA DETALYE NG SERBISYO", cat_service_specs_desc: "Mga detalye, torque, kapasidad, likido, at datos ng serbisyo.",
    cat_maintenance: "MAINTENANCE", cat_maintenance_desc: "Panatilihing gumagana ang iyong kagamitan sa pamamagitan ng komprehensibong mga iskedyul at pamamaraan ng maintenance.",
    cat_browse_all: "Tingnan lahat",
    stat_fault_codes: "Fault Codes", stat_repair_guides: "Gabay sa Pagkukumpuni", stat_service_specs: "Mga Detalye ng Serbisyo",
    stat_training_videos: "Mga Video ng Pagsasanay", stat_updated: "Ina-update Araw-araw", stat_updated_label: "Bagong Nilalaman Naidagdag",
    section_manufacturers: "I-BROWSE AYON SA MANUFACTURER", view_all_manufacturers: "Tingnan ang lahat ng manufacturer",
    mfg_cummins: "Cummins", mfg_caterpillar: "Caterpillar", mfg_volvo: "Volvo",
    mfg_hitachi: "Hitachi", mfg_kobelco: "Kobelco", mfg_komatsu: "Komatsu", mfg_yanmar: "Yanmar",
    latest_fault_codes: "PINAKABAGONG FAULT CODES", popular_repair_guides: "MGA SIKAT NA GABAY", latest_videos: "PINAKABAGONG VIDEOS",
    view_all: "Tingnan lahat", view_all_fault_codes: "Tingnan lahat ng fault code", view_all_repair_guides: "Tingnan lahat ng gabay", view_all_videos: "Tingnan lahat ng video",
    need_expert_help: "KAILANGAN NG TULONG NG EKSPERTO?", cta_cant_find: "Hindi mahanap ang hinahanap mo?",
    cta_ask_remech: "Itanong ang iyong katanungan sa ReMech at makakuha ng sagot mula sa mga tunay na eksperto sa mekanika.",
    cta_ask_now: "Itanong sa ReMech Ngayon", cta_real_answers: "Tunay na sagot. Tunay na mekaniko. Walang robot. Karanasan lamang.",
    search_placeholder: "Maghanap ng fault code, detalye...",
    footer_tagline: "Ang iyong mapagkakatiwalaang virtual na mekaniko. Nagbibigay kami ng tunay na sagot, fault code, at gabay sa pagkukumpuni para sa mabibigat na kagamitan at diesel na makina.",
    footer_quick_links: "Mabilis na Mga Link", footer_support: "Suporta", footer_contact: "Makipag-ugnayan",
    footer_home: "Home", footer_fault_codes: "Fault Codes", footer_repair_guides: "Gabay sa Pagkukumpuni",
    footer_service_specs: "Mga Detalye ng Serbisyo", footer_training_videos: "Mga Video ng Pagsasanay",
    footer_contact_us: "Makipag-ugnayan sa Amin", footer_faq: "FAQ", footer_privacy: "Patakaran sa Privacy",
    footer_terms: "Mga Tuntunin ng Serbisyo", footer_ask_remech: "Itanong sa ReMech", footer_copyright: "ReMech. Lahat ng karapatan ay nakalaan.",
    login_welcome_back: "Maligayang Pagbabalik", login_create_account: "Lumikha ng Account",
    login_subtitle_signin: "Mag-sign in para ma-access ang mga gabay sa pagkukumpuni, diagram, at tulong ng eksperto.",
    login_subtitle_register: "Sumali sa ReMech upang magsimulang mag-diagnose at magkumpuni tulad ng isang propesyonal.",
    login_full_name: "Buong Pangalan", login_email: "Email Address", login_password: "Password",
    login_forgot_password: "Nakalimutan ang password?", login_sign_in: "Mag-sign In", login_register: "Mag-register",
    login_no_account: "Wala pang account? ", login_have_account: "Mayroon nang account? ",
    login_register_now: "Mag-register na", login_sign_in_link: "Mag-sign in", login_back_home: "Bumalik sa Home",
    login_placeholder_name: "Juan dela Cruz", login_placeholder_email: "mekaniko@halimbawa.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "Fuel System", sys_engine: "Engine",
    fc_559_title: "Mababang Presyon sa Injector Metering Rail",
    fc_1117_title: "Sensor ng Presyon ng Gasolina",
    fc_156_title: "Boltahe ng Supply ng Injector",
    fc_288_title: "Mataas na Temperatura ng Coolant ng Engine",
    fc_3251_title: "Mababang Presyon ng Turbocharger",
    rg_fca_title: "Paano Subukan ang Fuel Control Actuator (FCA)", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "DPF Regeneration Ipaliwanag at Subukan", rg_dpf_sub: "Lahat ng Diesel Engine",
    rg_hydraulic_title: "Gabay sa Pagsubok ng Presyon ng Hydraulic", rg_hydraulic_sub: "Pangkalahatan",
    rg_cat_title: "Mga Karaniwang Problema ng Cat 120M Grader", rg_cat_sub: "Cat Graders",
    vid_cummins_title: "Cummins 559 –\nKumpletong Diagnostic",
    vid_dpf_title: "Paglilinis ng DPF\nHakbang-hakbang",
    vid_hydrema_title: "Hydrema 922G\nPangkalahatang-ideya ng Hydraulic System",
    vid_cat_title: "Cat 120M –\nSerbisyo at Maintenance",
  },
  af: {
    nav_home: "Tuis", nav_fault_codes: "Foutkodes", nav_repair_guides: "Herstelgidse",
    nav_service_specs: "Diensbesonderhede", nav_maintenance: "Onderhoud", nav_tips: "Wenke", nav_sign_in: "Teken In",
    hero_title_line1: "JOU VIRTUELE", hero_title_line2: "MEGANIKUS.", hero_title_line3: "REGTE ANTWOORDE.", hero_title_highlight: "VINNIG.",
    hero_subtitle: "Soek foutkodes, herstelgidse, diensbesonderhede en werklike meganiese antwoorde vir swaar toerusting en enjins.",
    hero_search_placeholder: "Soek foutkodes...", hero_search_btn: "Soek", hero_popular: "Gewilde soektogte:",
    pop_search_1: "Cummins 559", pop_search_2: "Kubota DPF Herlewing", pop_search_3: "Cat 120M Wringkrag", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "Hallo, ek is ReMech.", hero_bubble_text: "Kom ons werk saam om jou te help met jou meganiese behoeftes.",
    cat_fault_codes: "FOUTKODES", cat_fault_codes_desc: "Vind en diagnoseer enjin- en masjienfoutkodes per vervaardiger en stelsel.",
    cat_repair_guides: "HERSTELGIDSE", cat_repair_guides_desc: "Stap-vir-stap herstelprosedures met foto's, toetse en advies.",
    cat_service_specs: "DIENSBESONDERHEDE", cat_service_specs_desc: "Spesifikasies, wringing, kapasiteite, vloeistowwe en diensdata.",
    cat_maintenance: "ONDERHOUD", cat_maintenance_desc: "Hou jou toerusting aan die gang met omvattende onderhoudskedulies en -prosedures.",
    cat_browse_all: "Blaai alles",
    stat_fault_codes: "Foutkodes", stat_repair_guides: "Herstelgidse", stat_service_specs: "Diensbesonderhede",
    stat_training_videos: "Opleidingsvideo's", stat_updated: "Daagliks Opgedateer", stat_updated_label: "Nuwe Inhoud Bygevoeg",
    section_manufacturers: "BLAAI DEUR VERVAARDIGER", view_all_manufacturers: "Sien alle vervaardigers",
    mfg_cummins: "Cummins", mfg_caterpillar: "Caterpillar", mfg_volvo: "Volvo",
    mfg_hitachi: "Hitachi", mfg_kobelco: "Kobelco", mfg_komatsu: "Komatsu", mfg_yanmar: "Yanmar",
    latest_fault_codes: "NUUTSTE FOUTKODES", popular_repair_guides: "GEWILDE HERSTELGIDSE", latest_videos: "NUUTSTE OPLEIDINGSVIDEO'S",
    view_all: "Sien alles", view_all_fault_codes: "Sien alle foutkodes", view_all_repair_guides: "Sien alle gidse", view_all_videos: "Sien alle video's",
    need_expert_help: "BENODIG KUNDIGE HULP?", cta_cant_find: "Kan jy nie vind wat jy soek nie?",
    cta_ask_remech: "Vra ReMech jou vraag en kry antwoorde van regte meganiese kundiges.",
    cta_ask_now: "Vra ReMech Nou", cta_real_answers: "Regte antwoorde. Regte meganici. Geen robotte nie. Net ondervinding.",
    search_placeholder: "Soek foutkodes, spesifikasies...",
    footer_tagline: "Jou betroubare virtuele meganikus. Ons verskaf regte antwoorde, foutkodes en herstelgidse vir swaar toerusting en dieselenjins.",
    footer_quick_links: "Vinnige Skakels", footer_support: "Ondersteuning", footer_contact: "Kontak",
    footer_home: "Tuis", footer_fault_codes: "Foutkodes", footer_repair_guides: "Herstelgidse",
    footer_service_specs: "Diensbesonderhede", footer_training_videos: "Opleidingsvideo's",
    footer_contact_us: "Kontak Ons", footer_faq: "Gereelde Vrae", footer_privacy: "Privaatheidsbeleid",
    footer_terms: "Diensbepalings", footer_ask_remech: "Vra ReMech", footer_copyright: "ReMech. Alle regte voorbehou.",
    login_welcome_back: "Welkom Terug", login_create_account: "Skep Rekening",
    login_subtitle_signin: "Teken in om toegang te kry tot herstelgidse, diagramme en kundige ondersteuning.",
    login_subtitle_register: "Sluit aan by ReMech om soos 'n professionele persoon te begin diagnoseer en herstel.",
    login_full_name: "Volle Naam", login_email: "E-posadres", login_password: "Wagwoord",
    login_forgot_password: "Wagwoord vergeet?", login_sign_in: "Teken In", login_register: "Registreer",
    login_no_account: "Het jy nie 'n rekening nie? ", login_have_account: "Het jy reeds 'n rekening? ",
    login_register_now: "Registreer nou", login_sign_in_link: "Teken in", login_back_home: "Terug na Tuis",
    login_placeholder_name: "Jan van der Berg", login_placeholder_email: "meganikus@voorbeeld.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "Brandstofstelsel", sys_engine: "Enjin",
    fc_559_title: "Injekteer Meteringsrail Druk Laag",
    fc_1117_title: "Brandstofdruksensor",
    fc_156_title: "Injekteer Voedingsvoltasie",
    fc_288_title: "Enjin Koelvloeistof Temperatuur Hoog",
    fc_3251_title: "Turboaanjaer Druk Laag",
    rg_fca_title: "Hoe om die Brandstofbeheeraktueerder (FCA) te Toets", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "DPF Hergenerasie Verduidelik en Toetsing", rg_dpf_sub: "Alle Dieselenjins",
    rg_hydraulic_title: "Hidrouliese Druktoets Gids", rg_hydraulic_sub: "Algemeen",
    rg_cat_title: "Gewone Probleme Cat 120M Grader", rg_cat_sub: "Cat Graders",
    vid_cummins_title: "Cummins 559 –\nVolledige Diagnostiese Deurloop",
    vid_dpf_title: "DPF Reiniging\nStap vir Stap",
    vid_hydrema_title: "Hydrema 922G\nHidroliese Stelsel Oorsig",
    vid_cat_title: "Cat 120M –\nDiens en Onderhoud",
  },
  id: {
    nav_home: "Beranda", nav_fault_codes: "Kode Kesalahan", nav_repair_guides: "Panduan Perbaikan",
    nav_service_specs: "Spesifikasi Servis", nav_maintenance: "Perawatan", nav_tips: "Tips & Trik", nav_sign_in: "Masuk",
    hero_title_line1: "MEKANIK VIRTUAL", hero_title_line2: "ANDA.", hero_title_line3: "JAWABAN NYATA.", hero_title_highlight: "CEPAT.",
    hero_subtitle: "Cari kode kesalahan, panduan perbaikan, spesifikasi servis, dan jawaban mekanik nyata untuk peralatan berat dan mesin.",
    hero_search_placeholder: "Cari kode kesalahan...", hero_search_btn: "Cari", hero_popular: "Pencarian populer:",
    pop_search_1: "Cummins 559", pop_search_2: "Regenerasi DPF Kubota", pop_search_3: "Cat 120M Torsi", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "Halo, saya ReMech.", hero_bubble_text: "Mari bekerja sama untuk membantu kebutuhan mekanik Anda.",
    cat_fault_codes: "KODE KESALAHAN", cat_fault_codes_desc: "Temukan dan diagnosa kode kesalahan mesin dan alat berat berdasarkan produsen dan sistem.",
    cat_repair_guides: "PANDUAN PERBAIKAN", cat_repair_guides_desc: "Prosedur perbaikan langkah demi langkah dengan foto, pengujian, dan saran.",
    cat_service_specs: "SPESIFIKASI SERVIS", cat_service_specs_desc: "Spesifikasi, torsi, kapasitas, cairan, dan data servis.",
    cat_maintenance: "PERAWATAN", cat_maintenance_desc: "Jaga peralatan Anda tetap berjalan dengan jadwal dan prosedur perawatan yang komprehensif.",
    cat_browse_all: "Lihat semua",
    stat_fault_codes: "Kode Kesalahan", stat_repair_guides: "Panduan Perbaikan", stat_service_specs: "Spesifikasi Servis",
    stat_training_videos: "Video Pelatihan", stat_updated: "Diperbarui Setiap Hari", stat_updated_label: "Konten Baru Ditambahkan",
    section_manufacturers: "CARI BERDASARKAN PRODUSEN", view_all_manufacturers: "Lihat semua produsen",
    mfg_cummins: "Cummins", mfg_caterpillar: "Caterpillar", mfg_volvo: "Volvo",
    mfg_hitachi: "Hitachi", mfg_kobelco: "Kobelco", mfg_komatsu: "Komatsu", mfg_yanmar: "Yanmar",
    latest_fault_codes: "KODE KESALAHAN TERBARU", popular_repair_guides: "PANDUAN PERBAIKAN POPULER", latest_videos: "VIDEO PELATIHAN TERBARU",
    view_all: "Lihat semua", view_all_fault_codes: "Lihat semua kode kesalahan", view_all_repair_guides: "Lihat semua panduan", view_all_videos: "Lihat semua video",
    need_expert_help: "BUTUH BANTUAN AHLI?", cta_cant_find: "Tidak menemukan apa yang Anda cari?",
    cta_ask_remech: "Tanyakan pertanyaan Anda kepada ReMech dan dapatkan jawaban dari ahli mekanik nyata.",
    cta_ask_now: "Tanya ReMech Sekarang", cta_real_answers: "Jawaban nyata. Mekanik nyata. Tanpa robot. Hanya pengalaman.",
    search_placeholder: "Cari kode kesalahan, spesifikasi...",
    footer_tagline: "Mekanik virtual terpercaya Anda. Kami menyediakan jawaban nyata, kode kesalahan, dan panduan perbaikan untuk peralatan berat dan mesin diesel.",
    footer_quick_links: "Tautan Cepat", footer_support: "Dukungan", footer_contact: "Kontak",
    footer_home: "Beranda", footer_fault_codes: "Kode Kesalahan", footer_repair_guides: "Panduan Perbaikan",
    footer_service_specs: "Spesifikasi Servis", footer_training_videos: "Video Pelatihan",
    footer_contact_us: "Hubungi Kami", footer_faq: "FAQ", footer_privacy: "Kebijakan Privasi",
    footer_terms: "Ketentuan Layanan", footer_ask_remech: "Tanya ReMech", footer_copyright: "ReMech. Semua hak dilindungi.",
    login_welcome_back: "Selamat Datang Kembali", login_create_account: "Buat Akun",
    login_subtitle_signin: "Masuk untuk mengakses panduan perbaikan, diagram, dan dukungan ahli.",
    login_subtitle_register: "Bergabunglah dengan ReMech untuk mulai mendiagnosa dan memperbaiki seperti profesional.",
    login_full_name: "Nama Lengkap", login_email: "Alamat Email", login_password: "Kata Sandi",
    login_forgot_password: "Lupa kata sandi?", login_sign_in: "Masuk", login_register: "Daftar",
    login_no_account: "Belum punya akun? ", login_have_account: "Sudah punya akun? ",
    login_register_now: "Daftar sekarang", login_sign_in_link: "Masuk", login_back_home: "Kembali ke Beranda",
    login_placeholder_name: "Budi Santoso", login_placeholder_email: "mekanik@contoh.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "Sistem Bahan Bakar", sys_engine: "Mesin",
    fc_559_title: "Tekanan Rel Meteran Injektor Rendah",
    fc_1117_title: "Sensor Tekanan Bahan Bakar",
    fc_156_title: "Tegangan Suplai Injektor",
    fc_288_title: "Suhu Cairan Pendingin Mesin Tinggi",
    fc_3251_title: "Tekanan Turbocharger Rendah",
    rg_fca_title: "Cara Menguji Aktuator Kontrol Bahan Bakar (FCA)", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "Regenerasi DPF Dijelaskan dan Pengujian", rg_dpf_sub: "Semua Mesin Diesel",
    rg_hydraulic_title: "Panduan Pengujian Tekanan Hidrolik", rg_hydraulic_sub: "Umum",
    rg_cat_title: "Masalah Umum Cat 120M Grader", rg_cat_sub: "Cat Graders",
    vid_cummins_title: "Cummins 559 –\nPanduan Diagnostik Lengkap",
    vid_dpf_title: "Pembersihan DPF\nLangkah demi Langkah",
    vid_hydrema_title: "Hydrema 922G\nTinjauan Sistem Hidrolik",
    vid_cat_title: "Cat 120M –\nLayanan & Perawatan",
  },
  vi: {
    nav_home: "Trang chủ", nav_fault_codes: "Mã lỗi", nav_repair_guides: "Hướng dẫn sửa chữa",
    nav_service_specs: "Thông số kỹ thuật", nav_maintenance: "Bảo dưỡng", nav_tips: "Mẹo & Thủ thuật", nav_sign_in: "Đăng nhập",
    hero_title_line1: "THỢ MÁY ẢO", hero_title_line2: "CỦA BẠN.", hero_title_line3: "CÂU TRẢ LỜI THỰC.", hero_title_highlight: "NHANH.",
    hero_subtitle: "Tìm kiếm mã lỗi, hướng dẫn sửa chữa, thông số kỹ thuật và câu trả lời cơ khí thực tế cho thiết bị nặng và động cơ.",
    hero_search_placeholder: "Tìm kiếm mã lỗi...", hero_search_btn: "Tìm kiếm", hero_popular: "Tìm kiếm phổ biến:",
    pop_search_1: "Cummins 559", pop_search_2: "Tái tạo DPF Kubota", pop_search_3: "Cat 120M Lực siết", pop_search_4: "Hydrema 922G",
    hero_bubble_name: "Xin chào, tôi là ReMech.", hero_bubble_text: "Hãy cùng nhau giải quyết các nhu cầu cơ khí của bạn.",
    cat_fault_codes: "MÃ LỖI", cat_fault_codes_desc: "Tìm và chẩn đoán mã lỗi động cơ và máy móc theo nhà sản xuất và hệ thống.",
    cat_repair_guides: "HƯỚNG DẪN SỬA CHỮA", cat_repair_guides_desc: "Quy trình sửa chữa từng bước với ảnh, kiểm tra và lời khuyên.",
    cat_service_specs: "THÔNG SỐ KỸ THUẬT", cat_service_specs_desc: "Thông số kỹ thuật, mô-men xoắn, dung lượng, chất lỏng và dữ liệu dịch vụ.",
    cat_maintenance: "BẢO DƯỠNG", cat_maintenance_desc: "Giữ thiết bị của bạn hoạt động với lịch trình và quy trình bảo dưỡng toàn diện.",
    cat_browse_all: "Xem tất cả",
    stat_fault_codes: "Mã lỗi", stat_repair_guides: "Hướng dẫn sửa chữa", stat_service_specs: "Thông số kỹ thuật",
    stat_training_videos: "Video đào tạo", stat_updated: "Cập nhật hàng ngày", stat_updated_label: "Nội dung mới được thêm",
    section_manufacturers: "DUYỆT THEO NHÀ SẢN XUẤT", view_all_manufacturers: "Xem tất cả nhà sản xuất",
    mfg_cummins: "Cummins", mfg_caterpillar: "Caterpillar", mfg_volvo: "Volvo",
    mfg_hitachi: "Hitachi", mfg_kobelco: "Kobelco", mfg_komatsu: "Komatsu", mfg_yanmar: "Yanmar",
    latest_fault_codes: "MÃ LỖI MỚI NHẤT", popular_repair_guides: "HƯỚNG DẪN PHỔ BIẾN", latest_videos: "VIDEO ĐÀO TẠO MỚI NHẤT",
    view_all: "Xem tất cả", view_all_fault_codes: "Xem tất cả mã lỗi", view_all_repair_guides: "Xem tất cả hướng dẫn", view_all_videos: "Xem tất cả video",
    need_expert_help: "CẦN SỰ HỖ TRỢ CHUYÊN GIA?", cta_cant_find: "Không tìm thấy những gì bạn cần?",
    cta_ask_remech: "Hỏi ReMech câu hỏi của bạn và nhận câu trả lời từ các chuyên gia cơ khí thực sự.",
    cta_ask_now: "Hỏi ReMech Ngay", cta_real_answers: "Câu trả lời thực. Thợ máy thực. Không robot. Chỉ kinh nghiệm.",
    search_placeholder: "Tìm kiếm mã lỗi, thông số...",
    footer_tagline: "Thợ máy ảo đáng tin cậy của bạn. Chúng tôi cung cấp câu trả lời thực, mã lỗi và hướng dẫn sửa chữa cho thiết bị nặng và động cơ diesel.",
    footer_quick_links: "Liên kết nhanh", footer_support: "Hỗ trợ", footer_contact: "Liên hệ",
    footer_home: "Trang chủ", footer_fault_codes: "Mã lỗi", footer_repair_guides: "Hướng dẫn sửa chữa",
    footer_service_specs: "Thông số kỹ thuật", footer_training_videos: "Video đào tạo",
    footer_contact_us: "Liên hệ chúng tôi", footer_faq: "Câu hỏi thường gặp", footer_privacy: "Chính sách bảo mật",
    footer_terms: "Điều khoản dịch vụ", footer_ask_remech: "Hỏi ReMech", footer_copyright: "ReMech. Tất cả quyền được bảo lưu.",
    login_welcome_back: "Chào mừng trở lại", login_create_account: "Tạo tài khoản",
    login_subtitle_signin: "Đăng nhập để truy cập hướng dẫn sửa chữa, sơ đồ và hỗ trợ chuyên gia.",
    login_subtitle_register: "Tham gia ReMech để bắt đầu chẩn đoán và sửa chữa như một chuyên gia.",
    login_full_name: "Họ và tên", login_email: "Địa chỉ email", login_password: "Mật khẩu",
    login_forgot_password: "Quên mật khẩu?", login_sign_in: "Đăng nhập", login_register: "Đăng ký",
    login_no_account: "Chưa có tài khoản? ", login_have_account: "Đã có tài khoản? ",
    login_register_now: "Đăng ký ngay", login_sign_in_link: "Đăng nhập", login_back_home: "Về trang chủ",
    login_placeholder_name: "Nguyễn Văn A", login_placeholder_email: "thomay@vidu.com", login_placeholder_password: "••••••••",
    sys_fuel_system: "Hệ thống nhiên liệu", sys_engine: "Động cơ",
    fc_559_title: "Áp suất đường ray đo lường bộ phun thấp",
    fc_1117_title: "Cảm biến áp suất nhiên liệu",
    fc_156_title: "Điện áp cung cấp bộ phun",
    fc_288_title: "Nhiệt độ nước làm mát động cơ cao",
    fc_3251_title: "Áp suất tăng áp turbo thấp",
    rg_fca_title: "Cách kiểm tra bộ chấp hành điều khiển nhiên liệu (FCA)", rg_fca_sub: "Cummins ISX / QSX / QSB",
    rg_dpf_title: "Giải thích và kiểm tra tái tạo DPF", rg_dpf_sub: "Tất cả động cơ diesel",
    rg_hydraulic_title: "Hướng dẫn kiểm tra áp suất thủy lực", rg_hydraulic_sub: "Chung",
    rg_cat_title: "Các vấn đề thường gặp Cat 120M Grader", rg_cat_sub: "Cat Graders",
    vid_cummins_title: "Cummins 559 –\nHướng dẫn chẩn đoán đầy đủ",
    vid_dpf_title: "Làm sạch DPF\nTừng bước",
    vid_hydrema_title: "Hydrema 922G\nTổng quan hệ thống thủy lực",
    vid_cat_title: "Cat 120M –\nDịch vụ & Bảo dưỡng",
  },
};
