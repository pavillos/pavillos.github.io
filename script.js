const translations = {
  es: {
    navAbout: "Sobre mí",
    navExpertise: "Especialidad",
    navProduct: "Producto",
    navPublications: "Publicaciones",
    navOutreach: "Divulgación",
    navRecognition: "Reconocimientos",
    navBackground: "Trayectoria",
    navConsulting: "Consultoría",
    navContact: "Contacto",
    heroEyebrow: "Bioinformática y Bioestadística | IA | multiomics | medicina de precisión | investigación en cáncer",
    heroLead: "Ayudo a equipos biomédicos a transformar datos ómicos, clínicos y de imagen en modelos interpretables, análisis reproducibles y conocimiento traslacional.",
    heroCurrent: "Postdoctoral Research Assistant en GMEG (CNIO, CIBERONC), trabajando en la intersección entre investigación en cáncer, microbioma, transcriptómica espacial e Inteligencia Artificial (IA) biomédica.",
    ctaContact: "Contactar por email",
    ctaCv: "Descargar CV",
    ctaLinkedin: "LinkedIn",
    portraitCaption: "GMEG · CNIO/CIBERONC · Madrid, España",
    metricPapers: "registros en PubMed",
    metricCongresses: "contribuciones a congresos",
    metricHindex: "índice h en Google Scholar",
    metricYears: "años de experiencia investigadora",
    aboutKicker: "Sobre mí",
    aboutTitle: "Ciencia computacional para decisiones biomédicas.",
    aboutBody1: "Soy bioinformático y bioestadístico, doctor en Ciencias Biomédicas y Biotecnológicas. Mi trabajo conecta modelización estadística, Machine Learning, Deep Learning e IA con investigación biomédica para hacer que los datos de alta dimensionalidad sean más útiles, interpretables y reproducibles.",
    aboutBody2: "Trabajo en investigación en cáncer, biopsia líquida, clasificadores moleculares, microbioma, viroma y transcriptómica espacial. Mi foco es construir métodos basados en IA, software reproducible y productos de datos orientados al impacto clínico y traslacional.",
    aboutAffiliation: "Afiliación actual: Genetic & Molecular Epidemiology Group (GMEG) - Spanish National Cancer Research Center (CNIO) y Centro de Investigación Biomédica en Red Cáncer (CIBERONC).",
    expertiseKicker: "Especialidad",
    expertiseTitle: "Dónde puedo contribuir",
    expertise1Title: "IA y multiomics",
    expertise1Body: "Machine Learning, Deep Learning, IA y marcos estadísticos para integrar genómica, transcriptómica, microbioma, datos clínicos y variables derivadas de imagen.",
    expertise2Title: "Investigación en cáncer",
    expertise2Body: "Métodos computacionales para detección de cáncer, clasificación molecular, biopsia líquida y oncología traslacional, con aplicaciones en investigación en cáncer y desarrollo de biomarcadores orientados a la clínica.",
    expertise3Title: "Bioestadística",
    expertise3Body: "Diseño de estudios, análisis de supervivencia, estadística bayesiana, pensamiento causal, modelización, visualización e interpretación orientada a publicación.",
    expertise4Title: "Análisis reproducible y agentes",
    expertise4Body: "R, Python, Linux, diseño de workflows, LLMs, coding agents, informes y pipelines que hacen el análisis científico transparente, mantenible y reutilizable.",
    productKicker: "Producto y software",
    productTitle: "Software de investigación y productos de datos traslacionales.",
    productBody: "Un producto de clasificación molecular centrado en cáncer y construido alrededor del adenocarcinoma ductal pancreático, conectando sistemas de subtipado publicados mediante Machine Learning, software reproducible y una aplicación Shiny orientada al uso clínico.",
    publicationsKicker: "Publicaciones",
    publicationsTitle: "Perfiles de publicación, PubMed y CVN",
    publicationsBody: "Puedes consultar mi producción científica y perfiles académicos en Google Scholar, ORCID, ResearchGate, PubMed y mi CVN.",
    cvnLink: "Descargar CVN",
    outreachKicker: "Divulgación científica",
    outreachTitle: "Ideas en la intersección entre ciencia, IA y crecimiento profesional.",
    outreachScience: "Escribo sobre temas científicos y técnicos relacionados con IA, multiomics, medicina de precisión, investigación en cáncer y biología computacional, traduciendo métodos nuevos a contexto biomédico práctico.",
    outreachGrowth: "También escribo sobre crecimiento personal, constancia, toma de decisiones y los hábitos detrás de una carrera científica sostenible.",
    outreachExampleScienceLabel: "Nota científica",
    outreachExampleScienceTitle: "IA y multiomics para medicina de precisión",
    outreachExampleScienceBody: "Reflexiones breves y aplicadas sobre artículos, modelos y herramientas de IA biomédica.",
    outreachExampleGrowthLabel: "Crecimiento personal",
    outreachExampleGrowthTitle: "Disciplina más allá del laboratorio",
    outreachExampleGrowthBody: "Notas sobre foco, deporte, rutinas y desarrollo profesional a largo plazo.",
    outreachLink: "Seguir actualizaciones en LinkedIn",
    recognitionKicker: "Reconocimientos",
    recognitionTitle: "Premios, mentoría y comunidad científica.",
    recognitionAwardsLabel: "Premios.",
    recognitionAwardsText: "Premio Extraordinario de Doctorado, Talento Joven Riojano 2024, primer premio al mejor TFM en el 6.º Datathon de la 9.ª Conferencia de Bioinformática y premio SEIMC a la mejor comunicación.",
    recognitionRolesLabel: "Roles.",
    recognitionRolesText: "Embajador de la European Association for Cancer Research (EACR) y mentor/asesor en Nucleate Spain.",
    recognitionMembershipsLabel: "Membresías.",
    recognitionMembershipsText: "SEBiBC, ISCB/RSG-Spain, International Biometric Society, Sociedad Española de Bioestadística, EACR, IAP, EPC, ALIPANC y SCOURGE Cohort Group.",
    backgroundKicker: "Trayectoria",
    backgroundTitle: "Formación académica y trayectoria investigadora.",
    career1Title: "Postdoctoral Research Assistant · GMEG (CNIO, CIBERONC)",
    career1Body: "IA para investigación en cáncer, biopsia líquida, microbioma, transcriptómica espacial y productos de datos orientados a la clínica. Contrato en CNIO desde julio de 2023 y en CIBERONC desde octubre de 2024.",
    career2Title: "PhD Researcher · CIBIR",
    career2Body: "Periodo de transición posdoctoral centrado en análisis de microbiota en el Centro de Investigación Biomédica de La Rioja tras completar el doctorado.",
    career3Title: "PhD Student · CIBIR / Universidad de La Rioja / KU Leuven",
    career3Body: "Caracterización del bacterioma y viroma intestinal en infección por VIH, inflamación y riesgo cardiovascular, incluyendo estancias doctorales en el Laboratory of Viral Metagenomics, Rega Institute, KU Leuven.",
    educationTitle: "Formación",
    educationDegrees: "Doctorado, cuatro másteres y grado en Bioquímica",
    educationBody: "Doctorado en Ciencias Biomédicas y Biotecnológicas por la Universidad de La Rioja, con Cum Laude, Mención Internacional y Premio Extraordinario de Doctorado. Formación de máster en Bioinformática y Biología Computacional, Bioestadística, Inteligencia Artificial y Deep Learning, y Química y Biotecnología. Grado en Bioquímica por la Universidad Autónoma de Madrid.",
    consultingKicker: "Consultoría",
    consultingTitle: "Consultoría científica para proyectos biomédicos intensivos en datos.",
    consultingBody: "Apoyo a equipos académicos y traslacionales que necesitan ayuda rigurosa, reproducible y orientada a publicación con datos biomédicos complejos. Cada colaboración se define de forma privada según objetivos, calendario y complejidad de los datos.",
    service1: "Análisis bioinformático y multiomics",
    service2: "Bioestadística, análisis de supervivencia y modelización bayesiana",
    service3: "Métodos de IA y Machine Learning para datos biomédicos",
    service4: "Microbioma, viroma y transcriptómica espacial",
    service5: "Informes reproducibles, código y resultados listos para manuscrito",
    contactKicker: "Contacto",
    contactTitle: "Abierto a colaboraciones, consultoría y conversaciones de I+D traslacional."
  }
};

const originalText = {};

document.querySelectorAll("[data-i18n]").forEach((node) => {
  originalText[node.dataset.i18n] = node.textContent;
});

function prepareExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.target = "_blank";
    const rel = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
    rel.add("noopener");
    rel.add("noreferrer");
    link.setAttribute("rel", Array.from(rel).join(" "));
  });
}

function updateYearsSince() {
  document.querySelectorAll("[data-years-since]").forEach((node) => {
    const start = new Date(`${node.dataset.yearsSince}T00:00:00`);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    const anniversaryPassed =
      now.getMonth() > start.getMonth() ||
      (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());
    if (!anniversaryPassed) years -= 1;
    node.textContent = `${years}+`;
  });
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = lang === "en" ? originalText[key] : translations.es[key] || originalText[key];
  });
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  localStorage.setItem("preferred-language", lang);
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

prepareExternalLinks();
updateYearsSince();
setLanguage(localStorage.getItem("preferred-language") || "en");
