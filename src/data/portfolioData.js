export const profileData = {
  name: "Amar WADE",
  title: "Élève ingénieur en informatique — Développeur Full Stack",
  eyebrow: "Recherche de stage de 2 mois ou plus · Cycle ingénieur 2ᵉ année",
  pitch:
    "Élève ingénieur en informatique en 2ᵉ année à l’EILCO (Calais), je développe des applications web full stack, du backend Java/Spring Boot au frontend Angular, React et TypeScript. Je m’intéresse aussi à la sécurité applicative (OAuth2, Keycloak) et aux pratiques DevOps (Docker, CI/CD). Après une première expérience chez InTouch Group et plusieurs projets menés en équipe et en autonomie, je recherche un stage d’au moins deux mois en développement applicatif. Rigoureux et autodidacte, j’aime apprendre et résoudre des problèmes concrets.",
  heroTagline: "Backend Java/Spring Boot · Frontend React, Angular & TypeScript",
  heroImage: "/photo-profil.png",
  heroImageAlt: "Amar WADE — développeur Java et applications web",
  location: "", 
  email: "amarwade927@gmail.com",
  phone: "+33 7 45 65 12 33",
  github: "https://github.com/amarwade",
  linkedin: "https://www.linkedin.com/in/amar-wade",
  cvUrl: "cv-amar-wade.pdf",
  languagesLine: "Français · Anglais · Wolof",
  drivingLicense: "Permis B",
};

export const formationData = [
  {
    id: "eilco-second-year",
    period: "2026 – 2027",
    title: "2ᵉ année du cycle ingénieur en informatique",
    institution: "EILCO — Calais",
    detail: "En cours",
  },
  {
    id: "eilco-first-year",
    period: "2025 – 2026",
    title: "1ʳᵉ année du cycle ingénieur en informatique",
    institution: "EILCO — Calais",
  },
  {
    id: "dut",
    period: "2023 – 2025",
    title: "DUT Informatique",
    institution: "École Supérieure Polytechnique (ESP) — Dakar, Sénégal",
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
    period: "2025 · Stage de 2 mois",
    title: "Développeur d’application web",
    organization: "InTouch Group — Sénégal",
    highlights: [
      "Analyse des besoins métiers et conception d’une application web sécurisée avec Spring Boot et Vaadin",
      "Mise en place de l’authentification OAuth2 avec Spring Security et Keycloak",
      "Conception de la base MySQL, optimisation SQL et développement d’API REST testées avec Postman",
      "Travail en méthode Agile (Scrum), gestion du code avec Git/GitHub et des dépendances avec Maven",
      "Analyse et correction d’anomalies pendant les phases de test et de validation",
    ],
  },
  {
    id: "face-cote-opale",
    period: "Janvier – juin 2026",
    title: "Responsable terrain — Projet solidaire",
    organization: "FACE Côte d’Opale — Calais",
    highlights: [
      "Projet mené en équipe de trois pour faire connaître les programmes « Tissons du lien » et « Sénior Move » auprès des seniors isolés du Calaisis",
      "Préparation et pilotage de deux sorties de terrain : distribution de flyers, collecte de questionnaires et échanges avec des seniors",
      "Réalisation d’un cahier des charges, de supports de communication et d’un plan d’action de quatre phases remis à l’association",
      "Organisation du projet avec TeamGantt, réunions Google Meet et comptes rendus réguliers au tuteur",
    ],
  },
  {
    id: "portfolio-full-stack",
    period: "Projet personnel · en production",
    title: "Portfolio full stack",
    organization: "Spring Boot · React · PostgreSQL",
    highlights: [
      "Conception et déploiement de bout en bout : API REST documentée et testée, frontend React et base PostgreSQL hébergée sur Neon",
      "Sécurisation avec Spring Security et OAuth2, variables d’environnement et configurations distinctes pour le développement et la production",
      "Déploiement du backend sur Render et du frontend sur Vercel, avec dépôts GitHub séparés",
      "Gestion du projet en sprints et tests à chaque étape",
    ],
  },
];

export const skillsByCategory = [
  {
    id: "backend",
    title: "Backend",
    items: [
      "Java (principal)",
      "Spring Boot",
      "Spring Security",
      "JPA / Hibernate",
      "PHP",
      "API REST",
      "OpenAPI / Swagger",
      "Python (bases)",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML / CSS",
      "Angular",
      "React",
      "Vaadin Flow",
      "Tailwind CSS",
    ],
  },
  {
    id: "databases",
    title: "Bases de données",
    items: [
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "PL/SQL",
      "Redis (cache)",
      "Modélisation relationnelle",
      "Indexation",
    ],
  },
  {
    id: "security",
    title: "Sécurité",
    items: ["OAuth2 / Keycloak", "JWT", "OWASP Top 10", "CORS / CSRF"],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "GitLab CI",
      "Vercel",
      "Render",
      "Neon",
      "AWS / Azure (notions)",
    ],
  },
  {
    id: "testing",
    title: "Tests",
    items: ["JUnit 5", "Mockito", "Spring Boot Test", "Postman / Newman"],
  },
  {
    id: "architecture",
    title: "Architecture",
    items: [
      "MVC",
      "MVP",
      "SOLID",
      "Design patterns",
      "Clean Architecture",
      "Microservices (notions)",
      "UML",
      "Merise",
    ],
  },
  {
    id: "tools",
    title: "Outils & méthodes",
    items: [
      "Git",
      "GitHub",
      "GitLab",
      "Maven",
      "IntelliJ",
      "VS Code",
      "Jira",
      "Figma (notions)",
      "Agile / Scrum",
    ],
  },
  {
    id: "systems",
    title: "Systèmes & réseaux",
    items: ["Linux (Ubuntu)", "Bash", "SSH", "Nginx", "Windows", "Réseaux (bases)"],
  },
];
