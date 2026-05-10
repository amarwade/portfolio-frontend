export const profileData = {
  name: "Amar WADE",
  title: "A la recherche d'alternance en developpement logiciel",
  eyebrow: "Disponible en alternance · Backend & full stack",
  /** Une phrase d’accroche très visible sous le nom */
  //heroTagline:
    //"Du besoin métier à l’application en production : Java, Spring Boot, APIs sécurisées et produits web maintenables.",
  pitch:
    "Etudiant en cycle ingénieur en informatique à l'EILCO (Calais), passionné par le développement web full stack. Formé au DUT Informatique avec mention Bien à l'École Supérieure Polytechnique de Dakar, j'ai acquis une solide maîtrise des technologies backend (Java, Spring Boot, PHP, REST API, MySQL) et frontend (JavaScript, Angular, HTML/CSS). Lors de mon stage chez InTouch Group, j'ai conçu et développé de bout en bout une application web sécurisée en gérant l'analyse fonctionnelle, la base de données, l'authentification OAuth2 et les tests API. Autodidacte et rigoureux, je complète constamment mes compétences par des certifications et une veille technologique active. À l'aise en environnement Agile, j'attache une importance particulière à la qualité et la sécurité des applications. Je recherche une alternance en développement web full stack à partir de septembre 2025.",
  /** Place ta photo dans frontend/public/ (ex. photo-profil.jpg) puis mets le bon nom de fichier ici */
  heroImage: "/photo-profil.jpg",
  heroImageAlt: "Amar WADE — développeur Java et applications web",
  location: "62100 Calais, France",
  email: "amarwade927@gmail.com",
  phone: "+33 7 45 65 12 33",
  github: "https://github.com/amarwade",
  linkedin: "https://www.linkedin.com/in/amar-wade",
  cvUrl: "cv-amar-wade.pdf",
  languagesLine: "Français · Anglais · Wolof",
};

export const formationData = [
  {
    id: "eilco",
    period: "2025 – 2026",
    title: "Cycle ingénieur — Informatique",
    institution: "EILCO — École d’ingénieurs du Littoral Côte d’Opale",
  },
  {
    id: "dut",
    period: "2023 – 2025",
    title: "DUT Informatique",
    institution: "ESP — École Supérieure Polytechnique, Dakar (Sénégal)",
    detail: "Mention Bien",
  },
  {
    id: "bac",
    period: "2022 – 2023",
    title: "Baccalauréat scientifique (S2)",
    institution: "Sénégal",
    detail: "Mention Bien",
  },
];

export const certificationData = [
  {
    id: "cyber-unodc",
    name: "Cybercriminalité",
    provider: "UNODC — Nations Unies",
    date: "2026",
  },
  {
    id: "java-udemy",
    name: "Java Masterclass",
    provider: "Udemy",
    date: "en cours",
  },
  {
    id: "huawei-dcnt",
    name: "Data Communication & Network Technology",
    provider: "Huawei Talent Online",
    date: "2024",
  },
];

export const experienceData = [
  {
    id: "intouch",
    period: "2025 • 2 mois",
    title: "Développeur d’application web",
    organization: "InTouch Group — Stage, Sénégal",
    highlights: [
      "Analyse des besoins fonctionnels avec les équipes métiers et rédaction des spécifications techniques",
      "Conception et développement complet d'une application web sécurisée (Spring Boot, Vaadin) — de l'architecture à la mise en production",
      "Implémentation d'une authentification sécurisée OAuth2 via Keycloak et Spring Security — gestion des rôles et des accès utilisateurs",
      "Modélisation et conception de la base de données MySQL, optimisation des requêtes SQL",
      "Développement et documentation d'API REST, tests et validation via Postman",
      "Gestion de projet en méthodologie Agile (Scrum), versioning Git/GitHub, gestion des dépendances Maven",
      "Détection et correction d'anomalies lors des phases de test et de recette fonctionnelle",
    ],
  },
];

export const skillsByCategory = [
  {
    id: "languages",
    title: "Langages de programmation",
    items: ["Java", "JavaScript", "PHP", "Python", "C", "SQL", "HTML", "CSS"],
  },
  {
    id: "frameworks",
    title: "Frameworks & technologies",
    items: [
      "Spring Boot",
      "Spring Security",
      "Vaadin Flow",
      "JPA / Hibernate",
      "Keycloak (OAuth2)",
      "REST API",
      "Angular (bases)",
      "Lombok",
    ],
  },
  {
    id: "databases",
    title: "Bases de données",
    items: ["MySQL", "Oracle / PL-SQL"],
  },
  {
    id: "architecture",
    title: "Architecture & bonnes pratiques",
    items: ["MVC", "MVP", "SOLID", "Design patterns"],
  },
  {
    id: "tools",
    title: "Outils & méthodes",
    items: [
      "Maven",
      "Git",
      "GitLab",
      "GitHub",
      "Docker",
      "Postman",
      "Agile (Scrum)",
      "UML",
      "Merise",
    ],
  },
  {
    id: "systems",
    title: "Systèmes",
    items: ["Linux (Ubuntu)", "Windows"],
  },
];
