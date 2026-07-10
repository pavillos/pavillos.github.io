const translations = {
  es: {
    navAbout: "Sobre mí",
    navExpertise: "Áreas",
    navProduct: "Producto",
    navPublications: "Publicaciones",
    navOutreach: "Divulgación",
    navRecognition: "Reconocimientos",
    navBackground: "Trayectoria",
    navConsulting: "Consultoría",
    navContact: "Contacto",
    heroEyebrow: "IA | Bioinformática y Bioestadística | multiomics | medicina de precisión | investigación en cáncer",
    heroLead: "Ayudo a equipos biomédicos a transformar datos ómicos, clínicos y de imagen en modelos interpretables, análisis reproducibles y conocimiento traslacional.",
    heroCurrent: "Postdoctoral Research Assistant en GMEG (CNIO, CIBERONC), trabajando en la intersección entre investigación en cáncer, microbioma, transcriptómica espacial e Inteligencia Artificial (IA) biomédica.",
    ctaContact: "Contactar por email",
    ctaCv: "Descargar CV",
    ctaLinkedin: "LinkedIn",
    portraitCaption: "GMEG · CNIO/CIBERONC · Madrid, España",
    metricPapers: "registros en PubMed",
    metricCongresses: "contribuciones a congresos",
    metricHindex: "índice h en Google Scholar",
    metricYears: "años de experiencia",
    metricSystems: "sistemas de software y datos",
    aboutKicker: "Sobre mí",
    aboutTitle: "Ciencia computacional para decisiones biomédicas.",
    aboutBody1: "Soy bioinformático y bioestadístico, doctor en Ciencias Biomédicas y Biotecnológicas. Mi trabajo conecta modelización estadística, Machine Learning, Deep Learning e IA con investigación biomédica para hacer que los datos de alta dimensionalidad sean más útiles, interpretables y reproducibles.",
    aboutBody2: "Trabajo en investigación en cáncer, biopsia líquida, clasificadores moleculares, microbioma, viroma y transcriptómica espacial. Mi foco es construir métodos basados en IA, software reproducible y productos de datos orientados al impacto clínico y traslacional.",
    aboutAffiliation: "Afiliación actual: Genetic & Molecular Epidemiology Group (GMEG) - Spanish National Cancer Research Center (CNIO) y Centro de Investigación Biomédica en Red Cáncer (CIBERONC).",
    expertiseKicker: "Áreas",
    expertiseTitle: "Dónde puedo contribuir",
    expertise1Title: "IA y multiomics",
    expertise1Body: "Machine Learning, Deep Learning, IA y marcos estadísticos para integrar genómica, transcriptómica, microbioma, datos clínicos y variables derivadas de imagen.",
    expertise2Title: "Investigación en cáncer",
    expertise2Body: "Métodos computacionales para detección de cáncer, clasificación molecular, biopsia líquida y oncología traslacional, con aplicaciones en investigación en cáncer y desarrollo de biomarcadores orientados a la clínica.",
    expertise3Title: "Bioestadística",
    expertise3Body: "Diseño de estudios, análisis de supervivencia, estadística bayesiana, pensamiento causal, modelización, visualización e interpretación orientada a publicación.",
    expertise4Title: "Software reproducible y agentes",
    expertise4Body: "R, Python, Linux, diseño de workflows, contenedorización, control de versiones, LLMs, coding agents, informes y pipelines que hacen el análisis científico transparente, mantenible y reutilizable.",
    productKicker: "Producto y software",
    productTitle: "Software de investigación, workflows de IA y sistemas de datos traslacionales.",
    productPdacmocBody: "Paquete de R y aplicación Shiny para aplicar clasificadores moleculares publicados de cáncer de páncreas, el nuevo modelo PDAConsensus y workflows de clasificación traslacional.",
    productPdaconsensusBody: "Modelo consenso desarrollado para integrar clasificadores moleculares existentes de cáncer de páncreas en un marco unificado para asignación reproducible de subtipos.",
    productBriefBody: "Sistema de inteligencia asistido por IA con un panel privado diario para curación y puntuación de noticias, además de un weekly digest público sobre señales científicas, biotecnológicas y de IA.",
    productPrivateTitle: "Sistemas privados de producción científica",
    productPrivateBody: "Sistemas privados LaTeX Documents y Quarto Slides para manuscritos, tesis y presentaciones científicas alineadas con mi marca.",
    productPipelineTitle: "Pipeline bioinformático de viroma",
    productPipelineBody: "Pipeline bioinformático para análisis de viroma, generación de variables y resultados preparados para Machine Learning downstream.",
    productPancaidTitle: "PANCAID Sample Tracker",
    productPancaidBody: "Aplicación web privada para el seguimiento de la recogida de muestras biológicas y del estado de los análisis multiómicos en seis instituciones socias (UKE, UT, UU, MUG, QMUL, CNIO) del consorcio PANCAID de detección precoz de cáncer de páncreas.",
    productCvSystemTitle: "Sistema de sincronización de CV y perfil",
    productCvSystemBody: "Sistema interno que mantiene un único registro maestro estructurado y genera o sincroniza a partir de él el CVN, el CV, ORCID, el perfil de GitHub y los datos de la web.",
    productDevelopmentTitle: "En desarrollo",
    productDevelopmentBody: "ORACLE, LORE-AI y el pipeline bioinformático de viroma están en desarrollo como sistemas adicionales de software biomédico orientados a IA.",
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
    career2Title: "Postdoctoral Researcher · CIBIR",
    career2Body: "Análisis de microbiota en el Centro de Investigación Biomédica de La Rioja, apoyando proyectos biomédicos con bioinformática, análisis estadístico y resultados reproducibles.",
    career3Title: "PhD Researcher · CIBIR / Universidad de La Rioja / KU Leuven",
    career3Body: "Caracterización del bacterioma y viroma intestinal en infección por VIH, inflamación y riesgo cardiovascular, incluyendo estancias doctorales en el Laboratory of Viral Metagenomics, Rega Institute, KU Leuven.",
    educationTitle: "Formación",
    educationDegrees: "Doctorado, cuatro másteres y grado en Bioquímica",
    educationBody: "Doctorado en Ciencias Biomédicas y Biotecnológicas, con Cum Laude, Mención Internacional y Premio Extraordinario de Doctorado. Formación de máster en Bioinformática y Biología Computacional, Bioestadística, Inteligencia Artificial y Deep Learning, y Química y Biotecnología. Grado en Bioquímica.",
    consultingKicker: "Consultoría",
    consultingTitle: "Consultoría científica para proyectos biomédicos intensivos en datos.",
    consultingBody: "Apoyo a equipos académicos y traslacionales que necesitan ayuda rigurosa, reproducible y orientada a publicación con datos biomédicos complejos. Cada colaboración se define de forma privada según los objetivos, el calendario y la complejidad de los datos.",
    service1: "Análisis bioinformático y multiomics",
    service2: "Bioestadística, análisis de supervivencia y modelización bayesiana",
    service3: "Métodos de IA y Machine Learning para datos biomédicos",
    service4: "Microbioma, viroma y transcriptómica espacial",
    service5: "Informes reproducibles, código y resultados listos para manuscrito",
    service6: "Transferencia del conocimiento a patentes y propiedad intelectual",
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

function formatBucketCount(value, bucketSize = 5) {
  const count = Number(value);
  const size = Number(bucketSize);
  if (!Number.isFinite(count) || !Number.isFinite(size) || size <= 0) return "";
  const bucket = Math.floor(count / size) * size;
  if (bucket === 0) return String(count);
  return count === bucket ? String(bucket) : `${bucket}+`;
}

function updateManualCounts() {
  document.querySelectorAll("[data-manual-count]").forEach((node) => {
    node.textContent = formatBucketCount(node.dataset.manualCount, node.dataset.bucketSize);
  });
}

async function updatePubMedCount() {
  const node = document.querySelector("[data-pubmed-count]");
  if (!node) return;
  const term = "(Villoslada-Blanco) OR (SCOURGE Cohort Group[Corporate Author])";
  const params = new URLSearchParams({ db: "pubmed", term, retmode: "json" });
  const response = await fetch(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?${params}`);
  if (!response.ok) throw new Error("PubMed count request failed");
  const data = await response.json();
  node.textContent = formatBucketCount(data.esearchresult.count, node.dataset.bucketSize);
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

    if (node.hasAttribute("data-exact-years")) {
      const isExactAnniversary =
        now.getMonth() === start.getMonth() && now.getDate() === start.getDate();
      node.textContent = isExactAnniversary ? String(years) : `${years}+`;
      return;
    }

    node.textContent = formatBucketCount(years, node.dataset.bucketSize);
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
updateManualCounts();
updateYearsSince();
updatePubMedCount();
setLanguage(localStorage.getItem("preferred-language") || "en");
