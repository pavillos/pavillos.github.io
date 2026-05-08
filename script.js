const translations = {
  es: {
    navExpertise: "Especialidad",
    navProjects: "Proyectos",
    navConsulting: "Consultoría",
    navContact: "Contacto",
    heroEyebrow: "Bioinformática y Bioestadística | Inteligencia Artificial y Multi-ómica | Medicina de Precisión | Investigación en Cáncer",
    heroLead: "Ayudo a equipos biomédicos a transformar datos ómicos, clínicos y de imagen en modelos interpretables, análisis reproducibles e insight traslacional.",
    heroCurrent: "Research Assistant en el Genetic & Molecular Epidemiology Group (GMEG), Spanish National Cancer Research Center (CNIO) y Centro de Investigación Biomédica en Red Cáncer (CIBERONC), trabajando en la intersección entre investigación en cáncer, microbioma, transcriptómica espacial e Inteligencia Artificial (IA) biomédica.",
    ctaContact: "Contactar por email",
    ctaCv: "Descargar CV",
    ctaLinkedin: "LinkedIn",
    portraitCaption: "GMEG · CNIO/CIBERONC · Madrid, España",
    metricPapers: "registros de autor en PubMed",
    metricHindex: "h-index en Google Scholar",
    metricYears: "años desde octubre de 2018",
    metricPhd: "Cum Laude · Mención Internacional",
    aboutKicker: "Sobre mí",
    aboutTitle: "Ciencia computacional para decisiones biomédicas.",
    aboutBody1: "Soy bioinformático y bioestadístico, doctor en Ciencias Biomédicas y Biotecnológicas. Mi trabajo conecta modelización estadística, Machine Learning, Deep Learning e Inteligencia Artificial (IA) con investigación biomédica para hacer que los datos de alta dimensionalidad sean más útiles, interpretables y reproducibles.",
    aboutBody2: "En el Genetic & Molecular Epidemiology Group (GMEG), Spanish National Cancer Research Center (CNIO) y Centro de Investigación Biomédica en Red Cáncer (CIBERONC), trabajo en investigación en cáncer, biopsia líquida, clasificadores moleculares, microbioma, viroma y transcriptómica espacial. Me centro en métodos basados en Inteligencia Artificial, software reproducible y productos de datos orientados a impacto clínico y traslacional.",
    expertiseKicker: "Especialidad",
    expertiseTitle: "Dónde puedo contribuir",
    expertise1Title: "Inteligencia Artificial y Multi-ómica",
    expertise1Body: "Machine Learning, Deep Learning, Inteligencia Artificial y marcos estadísticos para integrar genómica, transcriptómica, metilación, microbioma, datos clínicos y variables derivadas de imagen.",
    expertise2Title: "Investigación en cáncer",
    expertise2Body: "Métodos computacionales para detección de cáncer, clasificación molecular, biopsia líquida y oncología traslacional, con aplicaciones actuales en adenocarcinoma ductal pancreático.",
    expertise3Title: "Bioestadística",
    expertise3Body: "Diseño de estudios, análisis de supervivencia, estadística bayesiana, pensamiento causal, modelización, visualización e interpretación orientada a publicación.",
    expertise4Title: "Análisis reproducible",
    expertise4Body: "R, Python, Linux, diseño de workflows, informes y pipelines que hacen el análisis científico transparente, mantenible y reutilizable.",
    projectsKicker: "Trabajo seleccionado",
    projectsTitle: "Software de investigación y productos de datos traslacionales.",
    project1Body: "Un clasificador molecular de consenso para adenocarcinoma ductal pancreático, conectando sistemas de subtipado publicados mediante Machine Learning, software reproducible y una aplicación Shiny orientada al uso clínico.",
    publicationsKicker: "Publicaciones",
    publicationsTitle: "Perfiles de publicación y CVN",
    publicationsBody: "Puedes consultar mi producción científica y perfiles académicos en Google Scholar, ORCID, ResearchGate y mi CVN. Estas fuentes ofrecen la visión más actualizada de citas, registros indexados y producción académica formal.",
    cvnLink: "Descargar CVN",
    consultingKicker: "Consultoría",
    consultingTitle: "Consultoría científica para proyectos biomédicos intensivos en datos.",
    consultingBody: "Apoyo a equipos académicos y traslacionales que necesitan ayuda rigurosa, reproducible y orientada a publicación con datos biomédicos complejos. Cada colaboración se define de forma privada según objetivos, calendario y complejidad de los datos.",
    service1: "Análisis bioinformático y multi-ómico",
    service2: "Bioestadística, análisis de supervivencia y modelización bayesiana",
    service3: "Métodos de Inteligencia Artificial y Machine Learning para datos biomédicos",
    service4: "Microbioma, viroma y transcriptómica espacial",
    service5: "Informes reproducibles, código y resultados listos para manuscrito",
    writingKicker: "Escritura y novedades",
    writingTitle: "Escritura sobre ciencia, crecimiento e Inteligencia Artificial biomédica.",
    writingBody: "Publico en LinkedIn sobre Inteligencia Artificial, multi-ómica, medicina de precisión, investigación en cáncer, biología computacional y crecimiento personal.",
    writingLink: "Seguir actualizaciones en LinkedIn",
    contactKicker: "Contacto",
    contactTitle: "Abierto a colaboraciones, consultoría y conversaciones de I+D traslacional."
  }
};

const originalText = {};

document.querySelectorAll("[data-i18n]").forEach((node) => {
  originalText[node.dataset.i18n] = node.textContent;
});

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

updateYearsSince();
setLanguage(localStorage.getItem("preferred-language") || "en");
