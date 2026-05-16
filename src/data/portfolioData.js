export const profileData = {
  name: "Amar WADE",
  title: "Amar WADE",
  eyebrow: "A la recherche d'alternance · Apprenti ingénieur",
  pitch:
    "Élève ingénieur en informatique à l’EILCO, passionné par le développement web full stack et la conception d’applications performantes et sécurisées, je suis titulaire d’un DUT Informatique obtenu avec mention Bien à Dakar. Je maîtrise Java, Spring Boot, PHP, REST API, MySQL, JavaScript et Angular. Lors de mon stage chez Intouch Group, j’ai contribué au développement d’une application web sécurisée de gestion de contenu avec Spring Boot et Vaadin. Rigoureux, autonome et à l’aise avec les méthodes Agile, je recherche une alternance en développement web full stack à partir de septembre 2026.",
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
