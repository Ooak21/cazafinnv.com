/* CAZA FINNANCIAL: site interactions */
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0aWZoY3ZiZ3hxd2x5d3Vndmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1MDc5NTgsImV4cCI6MjA4ODA4Mzk1OH0.UfRVLuvM8_HPvKXUEDXb0cxR50znv16L5Tf99AnSc7g";
const INTAKE_URL =
  "https://jtifhcvbgxqwlywugvjv.supabase.co/functions/v1/caza-intake";
const LANG_KEY = "caza_lang";

const I18N = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.checklist": "What to bring",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Book a consultation",

    "hero.eyebrow": "Las Vegas · Family tax firm · Since 1992",
    "hero.title": "Tax and financial guidance you can actually",
    "hero.titleEm": "trust",
    "hero.lead":
      "Thirty years of tax seasons with Las Vegas families, from casino floors to small businesses. We tell the money where to go, so you are not left wondering where it went.",
    "hero.cta": "Book a consultation",
    "hero.ctaSecondary": "View services",

    "stats.s1": "30",
    "stats.l1": "Years serving Las Vegas",
    "stats.s2": "3,000",
    "stats.l2": "Clients served",
    "stats.s3": "EN · ES",
    "stats.l3": "Fully bilingual office",
    "stats.who": "Who we serve",
    "stats.w1": "Families",
    "stats.w2": "Small business",
    "stats.w3": "Real estate investors",
    "stats.w4": "Corporations",
    "stats.w5": "Non-profits",

    "services.lead":
      "Tailored tax and accounting for individuals, businesses, and families who want to stay organized, compliant, and financially secure.",
    "services.bookLink": "Book a consultation",
    "services.eyebrow": "What we do",
    "services.title": "Four pillars of care for your household and business",
    "services.more": "Learn more",
    "services.tax.title": "Tax Preparation",
    "services.tax.body":
      "Personal, business, corporate, and non-profit returns. We maximize rental property deductions: short-term rentals, duplexes to fourplexes, and multi-unit properties.",
    "services.book.title": "Bookkeeping",
    "services.book.body":
      "We track every dollar of income and expense, personal or business, small operation or large.",
    "services.pay.title": "Payroll",
    "services.pay.body":
      "Pay yourself the right way, avoid double taxation, and let us guide you to build wealth while saving on taxes.",
    "services.comm.title": "Community & Family Services",
    "services.comm.body":
      "We educate our community on preparing the family legally and financially: life insurance, living trusts, debt acceleration payoff (velocity banking), and funeral membership services. We partner with trusted notaries, real estate agents, and lenders, plus resources for traveling for less, health and wellness, and spiritual wellbeing.",

    "easy.title": "We make things easy",
    "easy.cta": "Book a consultation",

    "about.eyebrow": "Why choose us",
    "about.title": "Why families and businesses trust Caza Finnancial",
    "about.ctaTitle": "You work directly with Ismael, not a call center.",
    "about.ctaLink": "Get started today",
    "about.lede":
      "Caza Finnancial is a family business. We specialize in tax preparation for individuals, small business owners, corporations, partnerships, and non-profits.",
    "about.w1.title": "Three decades in the community",
    "about.w1.body":
      "Income tax and bookkeeping began in 1992. From 1998 to 2010 we served more than 3,000 Las Vegas casino-industry employees. After selling that practice, we relaunched in 2013 as Caza Finnancial.",
    "about.w2.title": "Bilingual, family-run",
    "about.w2.body":
      "Fully bilingual English and Spanish. You work with a family office that knows this community, not a seasonal booth.",
    "about.w3.title": "More than a tax preparer",
    "about.w3.body":
      "Income tax teacher 2002-2007, loan officer, CAZA Realty office manager and agent, real estate investor, and life insurance agent. Guidance that goes past the return.",

    "story.eyebrow": "Our story",
    "story.title": "Built on relationships, not just returns",
    "story.body":
      "Caza Finnancial got its start in 1992, when income tax and bookkeeping began with my wife and me serving our community. From 1998 to 2010 we served Las Vegas casino-industry employees, more than 3,000 clients strong. After selling that practice, we relaunched under a new name in 2013: Caza Finnancial. Today we serve individuals, small businesses, corporations, partnerships, and non-profits across Las Vegas.",
    "story.cta": "Book a consultation",
    "story.card": "Family-owned and serving Las Vegas since 1992.",
    "story.statTitle": "Clear strategy and honest numbers",
    "story.statLabel": "Years with Las Vegas families",

    "about.role": "Business Consultant & Tax Advisor",
    "about.chip1": "Preparing taxes since 1998",
    "about.chip2": "Former income tax teacher",
    "about.chip3": "Bilingual EN / ES",
    "about.t1.year": "1992",
    "about.t1.text": "Started at the kitchen table",
    "about.t2.year": "1998-2010",
    "about.t2.text": "Served 3,000+ casino-industry employees in Las Vegas",
    "about.t3.year": "2013",
    "about.t3.text": "Relaunched as Caza Finnancial",
    "about.t4.year": "Today",
    "about.t4.text": "Still family, still serving Las Vegas",
    "about.timelineAria": "Family history",

    "check.eyebrow": "Preparation",
    "check.title": "What to bring",
    "check.lead":
      "Arrive ready and we can move faster. Bring what applies to your household or business.",
    "check.ind.title": "Individuals",
    "check.ind.i1": "Photo ID",
    "check.ind.i2": "Social Security or ITIN numbers for household",
    "check.ind.i3": "W-2s",
    "check.ind.i4": "1099s",
    "check.ind.i5": "Prior-year return",
    "check.ind.i6": "Mortgage interest Form 1098",
    "check.ind.i7": "Childcare and education expenses",
    "check.biz.title": "Business & Rental",
    "check.biz.i1": "Income records or profit and loss statement",
    "check.biz.i2": "Expense receipts",
    "check.biz.i3": "Payroll records",
    "check.biz.i4": "Rental income and expenses per property",
    "check.biz.i5": "Asset purchases",

    "process.eyebrow": "How it works",
    "process.title": "A simple, year-round process",
    "process.desc":
      "We make the books and the return easier through a clear process, from the first conversation through year-round support.",
    "process.view": "View our services",
    "process.s1.title": "Book a consultation",
    "process.s1.body":
      "Use the form, call, or email. Tell us the service you need and your preferred language. We follow up to confirm a time.",
    "process.s2.title": "We review and build your plan",
    "process.s2.body":
      "We go through your income, expenses, and goals, then put together a tax, bookkeeping, payroll, or family plan for what you actually need.",
    "process.s3.title": "Ongoing support",
    "process.s3.body":
      "We work year-round. Tax season is busy, but bookkeeping, payroll, and family services continue so you stay organized between deadlines.",

    "results.eyebrow": "By the numbers",
    "results.title": "A family practice with a long memory",
    "results.body":
      "Three decades of tax seasons with Las Vegas families and businesses. Real numbers from a real practice, not a franchise booth.",
    "results.cta": "Book a consultation",
    "results.note": "Family-owned and bilingual since 1992",
    "results.r1": "Years serving Las Vegas",
    "results.r2": "Clients served",
    "results.r3": "Family-owned since",
    "results.r4": "Languages spoken",

    "faq.eyebrow": "FAQ",
    "faq.title": "Common questions",
    "faq.lead":
      "Straight answers about how we work with families, rentals, and year-round needs.",
    "faq.q1": "Do you handle ITIN filers?",
    "faq.a1":
      "Yes. We prepare returns for clients who use an ITIN and can point you to official IRS resources for applying or renewing an ITIN when needed.",
    "faq.q2": "Do you speak Spanish?",
    "faq.a2":
      "Yes. We are fully bilingual in English and Spanish. You can work with us in the language that feels most comfortable for your household.",
    "faq.q3": "Can you handle rental properties and short-term rentals?",
    "faq.a3":
      "Yes. We specialize in maximizing rental property deductions, including short-term rentals, duplexes to fourplexes, and multi-unit properties. Bring income and expense records for each property.",
    "faq.q4": "Do you work with non-profits?",
    "faq.a4":
      "Yes. We prepare returns for non-profit organizations as part of our tax preparation practice, alongside individuals, small businesses, corporations, and partnerships.",
    "faq.q5": "How do appointments work?",
    "faq.a5":
      "Use the intake form below or call us to request a consultation. Tell us the service you need and your preferred language. We will follow up to confirm a time that works for you.",
    "faq.q6": "Are you year-round or seasonal?",
    "faq.a6":
      "We work year-round. Tax season is busy, but bookkeeping, payroll, and community family services continue throughout the year so you can stay organized between filing deadlines.",

    "res.eyebrow": "Resources",
    "res.title": "Helpful links and key dates",
    "res.lead": "Official IRS tools and a reminder for the federal filing calendar.",
    "res.r1.tag": "IRS",
    "res.r1.title": "Where's My Refund",
    "res.r1.body": "Check the status of your federal tax refund directly with the IRS.",
    "res.r1.meta": "irs.gov",
    "res.r2.tag": "IRS",
    "res.r2.title": "ITIN information",
    "res.r2.body":
      "Learn about the Individual Taxpayer Identification Number and how to apply or renew.",
    "res.r2.meta": "irs.gov",
    "res.r3.tag": "Deadline",
    "res.r3.title": "Key filing date",
    "res.r3.body":
      "The federal individual income tax filing deadline is typically April 15. File early when you can, and reach out if you need an extension conversation.",
    "res.r3.meta": "April 15",

    "contact.eyebrow": "Contact",
    "contact.title": "Book a consultation",
    "contact.lead":
      "Tell us how we can help. We serve families and businesses across Las Vegas, NV.",
    "contact.welcome": "You will work directly with me.",
    "contact.phoneLbl": "Phone",
    "contact.emailLbl": "Email",
    "contact.locLbl": "Location",
    "contact.loc": "Las Vegas, NV",

    "form.name": "Name",
    "form.namePh": "Your full name",
    "form.phone": "Phone",
    "form.phonePh": "702-000-0000",
    "form.email": "Email",
    "form.emailPh": "you@email.com",
    "form.service": "Service interested in",
    "form.servicePh": "Select a service",
    "form.s1": "Personal taxes",
    "form.s2": "Business or corporate taxes",
    "form.s3": "Bookkeeping",
    "form.s4": "Payroll",
    "form.s5": "Other",
    "form.lang": "Preferred language",
    "form.langEn": "English",
    "form.langEs": "Español",
    "form.message": "Message",
    "form.messagePh": "How can we help?",
    "form.submit": "Send request",
    "form.sending": "Sending…",
    "form.success":
      "Thank you. Your request was sent. We will be in touch soon.",
    "form.error":
      "Something went wrong. Please call 702-203-2757 or email cazafinnv@gmail.com.",
    "form.required": "Please complete all required fields.",

    "footer.blurb":
      "Family tax firm serving Las Vegas families, small businesses, and the Latino community.",
    "footer.links": "Quick links",
    "footer.contact": "Contact",
    "footer.disclaimer":
      "Content on this site is general information only and is not tax or legal advice. Consult a qualified professional about your situation.",
    "footer.copy": "© 2026 Caza Finnancial. All rights reserved.",
    "footer.connect": "Let's",
    "footer.connectEm": "Connect",
  },

  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.checklist": "Qué traer",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.cta": "Reserve una consulta",

    "hero.eyebrow": "Las Vegas · Firma familiar de impuestos · Desde 1992",
    "hero.title": "Guía fiscal y financiera en la que de verdad puede",
    "hero.titleEm": "confiar",
    "hero.lead":
      "Treinta años de temporadas de impuestos con familias de Las Vegas, desde los pisos de los casinos hasta los pequeños negocios. Le decimos al dinero a dónde ir, para que no se pregunte a dónde se fue.",
    "hero.cta": "Reserve una consulta",
    "hero.ctaSecondary": "Ver servicios",

    "stats.s1": "30",
    "stats.l1": "Años sirviendo a Las Vegas",
    "stats.s2": "3,000",
    "stats.l2": "Clientes atendidos",
    "stats.s3": "EN · ES",
    "stats.l3": "Oficina completamente bilingüe",
    "stats.who": "A quién servimos",
    "stats.w1": "Familias",
    "stats.w2": "Pequeños negocios",
    "stats.w3": "Inversionistas de bienes raíces",
    "stats.w4": "Corporaciones",
    "stats.w5": "Sin fines de lucro",

    "services.lead":
      "Impuestos y contabilidad a la medida para personas, negocios y familias que quieren mantenerse organizados, en cumplimiento y seguros.",
    "services.bookLink": "Reserve una consulta",
    "services.eyebrow": "Qué hacemos",
    "services.title": "Cuatro pilares de cuidado para su hogar y su negocio",
    "services.more": "Saber más",
    "services.tax.title": "Preparación de impuestos",
    "services.tax.body":
      "Declaraciones personales, de negocio, corporativas y de organizaciones sin fines de lucro. Maximizamos las deducciones de propiedades de renta: rentas a corto plazo, dúplex a cuádruplex y propiedades multiunidad.",
    "services.book.title": "Contabilidad",
    "services.book.body":
      "Llevamos el control de cada dólar de ingresos y gastos, personales o de negocio, sea su operación pequeña o grande.",
    "services.pay.title": "Nómina",
    "services.pay.body":
      "Páguese a sí mismo de la manera correcta, evite la doble tributación y permítanos guiarle para construir patrimonio mientras ahorra en impuestos.",
    "services.comm.title": "Servicios comunitarios y familiares",
    "services.comm.body":
      "Educamos a nuestra comunidad sobre cómo preparar a la familia en lo legal y lo financiero: seguros de vida, fideicomisos en vida, aceleración de pago de deudas (velocity banking) y membresías de servicios funerarios. Colaboramos con notarios, agentes de bienes raíces y prestamistas de confianza, además de recursos para viajar por menos, salud y bienestar, y el bienestar espiritual.",

    "easy.title": "Lo hacemos fácil",
    "easy.cta": "Reserve una consulta",

    "about.eyebrow": "Por qué elegirnos",
    "about.title": "Por qué las familias y los negocios confían en Caza Finnancial",
    "about.ctaTitle": "Trabaja directamente con Ismael, no con un centro de llamadas.",
    "about.ctaLink": "Comience hoy",
    "about.lede":
      "Caza Finnancial es un negocio familiar. Nos especializamos en la preparación de impuestos para personas, dueños de pequeños negocios, corporaciones, sociedades y organizaciones sin fines de lucro.",
    "about.w1.title": "Tres décadas en la comunidad",
    "about.w1.body":
      "Los impuestos y la contabilidad comenzaron en 1992. De 1998 a 2010 servimos a más de 3,000 empleados de la industria de casinos de Las Vegas. Tras vender esa práctica, relanzamos en 2013 como Caza Finnancial.",
    "about.w2.title": "Bilingüe y familiar",
    "about.w2.body":
      "Completamente bilingües en inglés y español. Trabaja con una oficina familiar que conoce esta comunidad, no con un puesto de temporada.",
    "about.w3.title": "Más que un preparador de impuestos",
    "about.w3.body":
      "Profesor de impuestos de 2002 a 2007, oficial de préstamos, gerente y agente de CAZA Realty, inversionista de bienes raíces y agente de seguros de vida. Orientación que va más allá de la declaración.",

    "story.eyebrow": "Nuestra historia",
    "story.title": "Construida sobre relaciones, no solo declaraciones",
    "story.body":
      "Caza Finnancial nació en 1992, cuando mi esposa y yo comenzamos a preparar impuestos y llevar contabilidad para nuestra comunidad. De 1998 a 2010 servimos a los empleados de la industria de los casinos de Las Vegas, con más de 3,000 clientes. Tras vender esa práctica, relanzamos con un nuevo nombre en 2013: Caza Finnancial. Hoy servimos a personas, pequeños negocios, corporaciones, sociedades y organizaciones sin fines de lucro en Las Vegas.",
    "story.cta": "Reserve una consulta",
    "story.card": "Negocio familiar al servicio de Las Vegas desde 1992.",
    "story.statTitle": "Estrategia clara y números honestos",
    "story.statLabel": "Años con familias de Las Vegas",

    "about.role": "Consultor de negocios y asesor fiscal",
    "about.chip1": "Preparando impuestos desde 1998",
    "about.chip2": "Exprofesor de impuestos",
    "about.chip3": "Bilingüe EN / ES",
    "about.t1.year": "1992",
    "about.t1.text": "Comenzamos en la mesa de la cocina",
    "about.t2.year": "1998-2010",
    "about.t2.text":
      "Servimos a más de 3,000 empleados de la industria de casinos en Las Vegas",
    "about.t3.year": "2013",
    "about.t3.text": "Relanzamos como Caza Finnancial",
    "about.t4.year": "Hoy",
    "about.t4.text": "Seguimos siendo familia, al servicio de Las Vegas",
    "about.timelineAria": "Historia familiar",

    "check.eyebrow": "Preparación",
    "check.title": "Qué traer",
    "check.lead":
      "Llegue preparado y avanzamos más rápido. Traiga lo que aplique a su hogar o negocio.",
    "check.ind.title": "Personas",
    "check.ind.i1": "Identificación con foto",
    "check.ind.i2": "Números de Seguro Social o ITIN del hogar",
    "check.ind.i3": "Formularios W-2",
    "check.ind.i4": "Formularios 1099",
    "check.ind.i5": "Declaración del año anterior",
    "check.ind.i6": "Intereses hipotecarios Formulario 1098",
    "check.ind.i7": "Gastos de cuidado infantil y educación",
    "check.biz.title": "Negocio y renta",
    "check.biz.i1": "Registros de ingresos o estado de resultados",
    "check.biz.i2": "Recibos de gastos",
    "check.biz.i3": "Registros de nómina",
    "check.biz.i4": "Ingresos y gastos de renta por propiedad",
    "check.biz.i5": "Compras de activos",

    "process.eyebrow": "Cómo funciona",
    "process.title": "Un proceso simple, todo el año",
    "process.desc":
      "Hacemos más fáciles los libros y la declaración con un proceso claro, desde la primera conversación hasta el apoyo durante todo el año.",
    "process.view": "Ver nuestros servicios",
    "process.s1.title": "Reserve una consulta",
    "process.s1.body":
      "Use el formulario, llame o escriba. Indíquenos el servicio que necesita y su idioma preferido. Confirmamos un horario.",
    "process.s2.title": "Revisamos y armamos su plan",
    "process.s2.body":
      "Revisamos ingresos, gastos y metas, y armamos un plan de impuestos, contabilidad, nómina o familia según lo que realmente necesita.",
    "process.s3.title": "Apoyo continuo",
    "process.s3.body":
      "Trabajamos todo el año. La temporada de impuestos es ocupada, pero la contabilidad, la nómina y los servicios familiares continúan para que se mantenga organizado entre fechas límite.",

    "results.eyebrow": "En números",
    "results.title": "Una práctica familiar con memoria larga",
    "results.body":
      "Tres décadas de temporadas de impuestos con familias y negocios de Las Vegas. Números reales de una práctica real, no de un puesto de franquicia.",
    "results.cta": "Reserve una consulta",
    "results.note": "Negocio familiar y bilingüe desde 1992",
    "results.r1": "Años sirviendo a Las Vegas",
    "results.r2": "Clientes atendidos",
    "results.r3": "Negocio familiar desde",
    "results.r4": "Idiomas",

    "faq.eyebrow": "Preguntas",
    "faq.title": "Preguntas frecuentes",
    "faq.lead":
      "Respuestas claras sobre cómo trabajamos con familias, rentas y necesidades durante todo el año.",
    "faq.q1": "¿Atienden a contribuyentes con ITIN?",
    "faq.a1":
      "Sí. Preparamos declaraciones para clientes que usan un ITIN y podemos orientarle hacia los recursos oficiales del IRS para solicitar o renovar un ITIN cuando sea necesario.",
    "faq.q2": "¿Hablan español?",
    "faq.a2":
      "Sí. Somos completamente bilingües en inglés y español. Puede trabajar con nosotros en el idioma que le resulte más cómodo a su hogar.",
    "faq.q3":
      "¿Pueden manejar propiedades de renta y rentas a corto plazo?",
    "faq.a3":
      "Sí. Nos especializamos en maximizar las deducciones de propiedades de renta, incluyendo rentas a corto plazo, dúplex a cuádruplex y propiedades multiunidad. Traiga los registros de ingresos y gastos de cada propiedad.",
    "faq.q4": "¿Trabajan con organizaciones sin fines de lucro?",
    "faq.a4":
      "Sí. Preparamos declaraciones para organizaciones sin fines de lucro como parte de nuestra práctica de impuestos, junto con personas, pequeños negocios, corporaciones y sociedades.",
    "faq.q5": "¿Cómo funcionan las citas?",
    "faq.a5":
      "Use el formulario de abajo o llámenos para solicitar una consulta. Indíquenos el servicio que necesita y su idioma preferido. Le contactaremos para confirmar un horario que le convenga.",
    "faq.q6": "¿Atienden todo el año o solo en temporada?",
    "faq.a6":
      "Trabajamos todo el año. La temporada de impuestos es ocupada, pero la contabilidad, la nómina y los servicios comunitarios y familiares continúan durante el año para que se mantenga organizado entre fechas de presentación.",

    "res.eyebrow": "Recursos",
    "res.title": "Enlaces útiles y fechas clave",
    "res.lead":
      "Herramientas oficiales del IRS y un recordatorio del calendario federal de presentación.",
    "res.r1.tag": "IRS",
    "res.r1.title": "¿Dónde está mi reembolso?",
    "res.r1.body":
      "Consulte el estado de su reembolso federal de impuestos directamente con el IRS.",
    "res.r1.meta": "irs.gov",
    "res.r2.tag": "IRS",
    "res.r2.title": "Información sobre el ITIN",
    "res.r2.body":
      "Conozca el Número de Identificación Personal del Contribuyente y cómo solicitarlo o renovarlo.",
    "res.r2.meta": "irs.gov",
    "res.r3.tag": "Fecha límite",
    "res.r3.title": "Fecha clave de presentación",
    "res.r3.body":
      "La fecha límite federal para presentar la declaración individual de impuestos suele ser el 15 de abril. Presente temprano cuando pueda, y contáctenos si necesita hablar sobre una prórroga.",
    "res.r3.meta": "15 de abril",

    "contact.eyebrow": "Contacto",
    "contact.title": "Reserve una consulta",
    "contact.lead":
      "Cuéntenos cómo podemos ayudarle. Servimos a familias y negocios en Las Vegas, NV.",
    "contact.welcome": "Trabajará directamente conmigo.",
    "contact.phoneLbl": "Teléfono",
    "contact.emailLbl": "Correo",
    "contact.locLbl": "Ubicación",
    "contact.loc": "Las Vegas, NV",

    "form.name": "Nombre",
    "form.namePh": "Su nombre completo",
    "form.phone": "Teléfono",
    "form.phonePh": "702-000-0000",
    "form.email": "Correo electrónico",
    "form.emailPh": "usted@email.com",
    "form.service": "Servicio de interés",
    "form.servicePh": "Seleccione un servicio",
    "form.s1": "Impuestos personales",
    "form.s2": "Impuestos de negocio o corporativos",
    "form.s3": "Contabilidad",
    "form.s4": "Nómina",
    "form.s5": "Otro",
    "form.lang": "Idioma preferido",
    "form.langEn": "English",
    "form.langEs": "Español",
    "form.message": "Mensaje",
    "form.messagePh": "¿Cómo podemos ayudarle?",
    "form.submit": "Enviar solicitud",
    "form.sending": "Enviando…",
    "form.success":
      "Gracias. Su solicitud fue enviada. Nos pondremos en contacto pronto.",
    "form.error":
      "Algo salió mal. Por favor llame al 702-203-2757 o escriba a cazafinnv@gmail.com.",
    "form.required": "Complete todos los campos obligatorios.",

    "footer.blurb":
      "Firma familiar de impuestos al servicio de familias, pequeños negocios y la comunidad latina de Las Vegas.",
    "footer.links": "Enlaces",
    "footer.contact": "Contacto",
    "footer.disclaimer":
      "El contenido de este sitio es información general únicamente y no constituye asesoría fiscal ni legal. Consulte a un profesional calificado sobre su situación.",
    "footer.copy": "© 2026 Caza Finnancial. Todos los derechos reservados.",
    "footer.connect": "Vamos a",
    "footer.connectEm": "conectar",
  },
};

let currentLang = "en";

function getStoredLang() {
  try {
    const v = localStorage.getItem(LANG_KEY);
    if (v === "en" || v === "es") return v;
  } catch (_) {}
  return "en";
}

function setLang(lang) {
  if (lang !== "en" && lang !== "es") lang = "en";
  currentLang = lang;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch (_) {}

  document.documentElement.lang = lang;
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });

  const enBtn = document.getElementById("langEn");
  const esBtn = document.getElementById("langEs");
  if (enBtn) enBtn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
  if (esBtn) esBtn.setAttribute("aria-pressed", lang === "es" ? "true" : "false");

  const msg = document.getElementById("formMsg");
  if (msg && !msg.dataset.keep) {
    msg.textContent = "";
    msg.className = "form-msg";
  }
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  const close = () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  const open = () => {
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("nav-open")) close();
    else open();
  });

  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 60);
    if (y > lastY && y > 140) header.classList.add("is-hidden");
    else header.classList.remove("is-hidden");
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initFaq() {
  const list = document.getElementById("faqList");
  if (!list) return;

  list.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const isOpen = item.getAttribute("data-open") === "true";
      list.querySelectorAll('.faq-item[data-open="true"]').forEach((other) => {
        if (other !== item) {
          other.setAttribute("data-open", "false");
          const ob = other.querySelector(".faq-btn");
          if (ob) ob.setAttribute("aria-expanded", "false");
        }
      });
      item.setAttribute("data-open", isOpen ? "false" : "true");
      btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  });
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  nodes.forEach((n) => io.observe(n));
}

function initCounters() {
  const formatNum = (n) => n.toLocaleString("en-US");

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatNum(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = formatNum(target);
    }
    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll("[data-count]");
  const seen = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || seen.has(entry.target)) return;
        seen.add(entry.target);
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );
  counters.forEach((c) => observer.observe(c));

  window.addEventListener("load", () => {
    document.querySelectorAll(".hero__stat-num[data-count]").forEach((el) => {
      if (!seen.has(el)) {
        seen.add(el);
        animateCounter(el);
      }
    });
  });
}

function initForm() {
  const form = document.getElementById("intakeForm");
  if (!form) return;

  const msg = document.getElementById("formMsg");
  const btn = document.getElementById("submitBtn");
  const dict = () => I18N[currentLang] || I18N.en;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const hp = form.querySelector('[name="website"]');
    if (hp && hp.value) return;

    const name = (form.name.value || "").trim();
    const phone = (form.phone.value || "").trim();
    const email = (form.email.value || "").trim();
    const service = form.service.value || "";
    const lang = form.lang.value || "en";
    const message = (form.message.value || "").trim();

    if (!name || !phone || !email || !service) {
      msg.textContent = dict()["form.required"];
      msg.className = "form-msg err";
      delete msg.dataset.keep;
      return;
    }

    msg.textContent = "";
    msg.className = "form-msg";
    delete msg.dataset.keep;
    btn.disabled = true;
    const prevLabel = btn.textContent;
    btn.textContent = dict()["form.sending"];

    const payload = { name, phone, email, service, lang, message };

    try {
      const res = await fetch(INTAKE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          authorization: "Bearer " + SUPABASE_ANON_KEY,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("bad status " + res.status);

      msg.textContent = dict()["form.success"];
      msg.className = "form-msg ok";
      msg.dataset.keep = "1";
      form.reset();
      form.lang.value = currentLang === "es" ? "es" : "en";
    } catch (_) {
      msg.textContent = dict()["form.error"];
      msg.className = "form-msg err";
      msg.dataset.keep = "1";
    } finally {
      btn.disabled = false;
      btn.textContent = dict()["form.submit"] || prevLabel;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getStoredLang();
  setLang(lang);

  document.getElementById("langEn")?.addEventListener("click", () => setLang("en"));
  document.getElementById("langEs")?.addEventListener("click", () => setLang("es"));

  const langSelect = document.getElementById("lang");
  if (langSelect) langSelect.value = lang;

  initNav();
  initHeader();
  initFaq();
  initReveal();
  initCounters();
  initForm();
});
