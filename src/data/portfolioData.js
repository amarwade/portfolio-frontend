export const profileData = {
  name: "Amar WADE",
  title: "Élève-ingénieur en informatique — Stage assistant ingénieur",
  eyebrow: "Recherche d’un stage assistant ingénieur de 8 semaines · juin–août 2027",
  pitch:
    "Élève-ingénieur en informatique en 2ᵉ année à l’EILCO, je recherche un stage d’assistant ingénieur de 8 semaines entre début juin et fin août 2027. Je conçois des applications web sécurisées en Java et Spring Boot, du backend au déploiement cloud avec Docker et CI/CD. J’ai déjà travaillé en entreprise dans une équipe Agile Scrum et mène des projets concrets en équipe et en autonomie.",
  heroTagline: "Java & Spring Boot · Applications web sécurisées · Cloud & CI/CD",
  heroImage: "/photo-profil.png",
  heroImageAlt: "Amar WADE — développeur Java et applications web",
  location: "Calais, France",
  email: "amarwade927@gmail.com",
  phone: "+33 7 45 65 12 33",
  github: "https://github.com/amarwade",
  linkedin: "https://www.linkedin.com/in/amar-wade-dev",
  cvUrl: "cv-amar-wade.pdf",
  languagesLine: "Français · Anglais · Wolof",
  drivingLicense: "Permis B",
};

export const formationData = [
  {
    id: "eilco-engineering-cycle",
    period: "2025 – 2027",
    title: "Cycle ingénieur en informatique (2ᵉ année en cours)",
    institution: "EILCO — École d’Ingénieurs du Littoral Côte d’Opale, Calais",
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
    id: "machine-learning-az",
    name: "Machine Learning A-Z — ML, DL, AI with AWS, Python & R",
    provider: "Udemy",
    date: "en cours",
  },
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
    period: "Juin – juillet 2025 · Stage de 2 mois",
    title: "Développeur d’application web",
    organization: "InTouch Group — Sénégal",
    highlights: [
      "Analyse des besoins des équipes métiers et développement d’une application web sécurisée avec Spring Boot et Vaadin",
      "Mise en place de l’authentification et de la gestion des accès avec Spring Security et Keycloak (OAuth2)",
      "Conception de la base MySQL, optimisation des requêtes SQL et développement et test d’API REST avec Postman",
      "Travail en Agile Scrum avec Git/GitHub et Maven ; correction des anomalies relevées lors des tests",
    ],
  },
  {
    id: "face-cote-opale",
    period: "Janvier – juin 2026",
    title: "Responsable terrain — Projet solidaire",
    organization: "FACE Côte d’Opale — Calais",
    highlights: [
      "Pilotage, en groupe de trois étudiants, d’une action de sensibilisation aux programmes « Tissons du lien » et « Sénior Move » auprès des seniors isolés du Calaisis",
      "Organisation de deux sorties terrain : distribution de flyers, questionnaires et échanges avec plusieurs dizaines de seniors",
      "Livraison d’un cahier des charges, d’un plan d’action en quatre phases et 23 actions, d’un planning TeamGantt et de comptes rendus au tuteur",
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
      "Python",
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML / CSS",
      "React",
      "Vaadin Flow",
      "Tailwind CSS",
      "Angular (bases)",
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
    items: ["OAuth2 / Keycloak", "JWT", "OWASP Top 10"],
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
      "UML",
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
      "Agile / Scrum",
    ],
  },
  {
    id: "systems",
    title: "Systèmes & réseaux",
    items: ["Linux (Ubuntu)", "Bash", "SSH", "Nginx"],
  },
];
