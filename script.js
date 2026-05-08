const translations = {
  es: {
    navExpertise: "Especialidad",
    navProjects: "Proyectos",
    navConsulting: "Consultoria",
    navContact: "Contacto",
    heroEyebrow: "Bioinformatica y bioestadistica | IA y multiomica | Medicina de precision",
    heroLead: "Ayudo a equipos biomedicos a transformar datos omicos, clinicos y de imagen en modelos interpretables, analisis reproducibles e insight traslacional.",
    heroCurrent: "Investigador postdoctoral en CNIO/CIBERONC, trabajando en la interseccion entre cancer de pancreas, microbioma, transcriptomica espacial e IA biomedica.",
    ctaContact: "Contactar por email",
    ctaCv: "Descargar CV",
    ctaLinkedin: "LinkedIn",
    portraitCaption: "CNIO/CIBERONC · Madrid, Espana",
    metricPapers: "articulos indexados en PubMed",
    metricHindex: "h-index en Google Scholar",
    metricYears: "anos en investigacion biomedica",
    metricPhd: "Cum Laude · Mencion Internacional",
    aboutKicker: "Sobre mi",
    aboutTitle: "Ciencia computacional para decisiones biomedicas.",
    aboutBody1: "Soy bioinformatico y bioestadistico, doctor en Ciencias Biomedicas y Biotecnologicas. Mi trabajo conecta modelizacion estadistica, aprendizaje automatico e investigacion biomedica para hacer que los datos de alta dimensionalidad sean mas utiles, interpretables y reproducibles.",
    aboutBody2: "En CNIO y CIBERONC trabajo en adenocarcinoma ductal pancreatico, biopsia liquida, clasificadores moleculares, microbioma, viroma y transcriptomica espacial. Tambien escribo de forma regular sobre IA, multiomica y crecimiento personal como parte de una practica profesional mas amplia: mantenerme riguroso, visible y util.",
    expertiseKicker: "Especialidad",
    expertiseTitle: "Donde puedo contribuir",
    expertise1Title: "IA y multiomica",
    expertise1Body: "Machine learning, deep learning y marcos estadisticos para integrar genomica, transcriptomica, metilacion, microbioma, datos clinicos y variables derivadas de imagen.",
    expertise2Title: "Investigacion en cancer",
    expertise2Body: "Metodos computacionales para deteccion de cancer de pancreas, clasificacion molecular, biopsia liquida y oncologia traslacional.",
    expertise3Title: "Bioestadistica",
    expertise3Body: "Diseno de estudios, analisis de supervivencia, estadistica bayesiana, pensamiento causal, modelizacion, visualizacion e interpretacion orientada a publicacion.",
    expertise4Title: "Analisis reproducible",
    expertise4Body: "R, Python, Linux, diseno de workflows, informes y pipelines que hacen el analisis cientifico transparente, mantenible y reutilizable.",
    projectsKicker: "Trabajo seleccionado",
    projectsTitle: "Investigacion, software y productos de datos traslacionales.",
    project1Body: "Un clasificador molecular de consenso para adenocarcinoma ductal pancreatico, conectando sistemas de subtipado publicados mediante machine learning y software reproducible.",
    project2Title: "Analisis de microbioma y viroma",
    project2Body: "Analisis bioinformatico de bacterioma y viroma intestinal y oral en infeccion por VIH, cancer de pancreas e investigacion endocrina pediatrica.",
    project3Title: "Transcriptomica espacial y modelos multinivel",
    project3Body: "Modelizacion de la interaccion molecular entre cancer de pancreas y diabetes mellitus a resolucion de transcriptomica espacial.",
    publicationsKicker: "Publicaciones",
    publicationsTitle: "Produccion cientifica seleccionada",
    publicationsBody: "Mi produccion cientifica incluye trabajos en Genome Medicine, Scientific Reports, Communications Biology, eLife, Frontiers in Medicine y otras revistas biomedicas, con contribuciones en cancer, microbioma, viroma, genetica de COVID-19 y biomedicina computacional.",
    cvnLink: "Descargar CVN",
    consultingKicker: "Consultoria",
    consultingTitle: "Consultoria cientifica para proyectos biomedicos intensivos en datos.",
    consultingBody: "Apoyo a equipos academicos y traslacionales que necesitan ayuda rigurosa, reproducible y orientada a publicacion con datos biomedicos complejos. Cada colaboracion se define de forma privada segun objetivos, calendario y complejidad de los datos.",
    service1: "Analisis bioinformatico y multiomico",
    service2: "Bioestadistica, analisis de supervivencia y modelizacion bayesiana",
    service3: "Metodos de IA/ML para datos biomedicos",
    service4: "Microbioma, viroma y transcriptomica espacial",
    service5: "Informes reproducibles, codigo y resultados listos para manuscrito",
    writingKicker: "Escritura y novedades",
    writingTitle: "Reflexiones semanales sobre ciencia, crecimiento e IA biomedica.",
    writingBody: "Publico regularmente en LinkedIn: crecimiento personal los lunes y notas cientificas miercoles y viernes, sobre todo alrededor de IA, multiomica, medicina de precision, cancer y biologia computacional.",
    writingLink: "Seguir actualizaciones en LinkedIn",
    contactKicker: "Contacto",
    contactTitle: "Abierto a colaboraciones, consultoria y conversaciones de I+D traslacional."
  }
};

const originalText = {};

document.querySelectorAll("[data-i18n]").forEach((node) => {
  originalText[node.dataset.i18n] = node.textContent;
});

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

setLanguage(localStorage.getItem("preferred-language") || "en");
