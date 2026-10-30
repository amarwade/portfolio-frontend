# Portfolio d’Amar WADE

Portfolio personnel d’Amar WADE, élève-ingénieur en informatique à l’EILCO. Le site présente son parcours, ses expériences, ses compétences, ses certifications et ses projets. Il permet également de télécharger son CV et de le contacter.

## Aperçu

- **Profil :** élève-ingénieur en informatique, en 2ᵉ année du cycle ingénieur
- **Objectif :** stage assistant ingénieur de 8 semaines, entre début juin et fin août 2027
- **Localisation :** Calais, France
- **LinkedIn :** [linkedin.com/in/amar-wade-dev](https://www.linkedin.com/in/amar-wade-dev)
- **GitHub :** [github.com/amarwade](https://github.com/amarwade)

## Technologies

- React 19 et JavaScript
- Create React App (`react-scripts`)
- Axios pour les appels à l’API
- CSS pour la mise en page et les animations
- Jest et React Testing Library pour les tests

## Fonctionnalités

- Présentation du profil et du parcours académique
- Sections dédiées aux expériences, compétences et certifications
- Récupération des projets depuis l’API et filtrage par technologie
- Formulaire de contact connecté à l’API
- Téléchargement du CV
- Navigation adaptée aux appareils mobiles

## Prérequis

- Node.js et npm

## Installation

```bash
git clone https://github.com/amarwade/portfolio-frontend.git
cd portfolio-frontend
npm install
```

## Configuration

Par défaut, l’application utilise l’API de production. Pour utiliser une autre API, créez un fichier `.env` à la racine du projet à partir de `.env.example` :

```bash
cp .env.example .env
```

```env
REACT_APP_API_BASE_URL=http://localhost:8080/api
REACT_APP_API_TIMEOUT_MS=15000
```

Redémarrez le serveur de développement après toute modification de `.env`.

## Lancer le projet

```bash
npm start
```

L’application est disponible à l’adresse [http://localhost:3000](http://localhost:3000).

## Tests et build

Lancer les tests en mode non interactif :

```bash
npm test -- --watchAll=false
```

Générer le build de production :

```bash
npm run build
```

Le build optimisé est créé dans le dossier `build/`.

## Structure du projet

```text
src/
├── api/                 # Configuration Axios
├── components/          # Sections et composants React
├── data/                # Données du profil et du portfolio
├── hooks/               # Hooks React
├── services/            # Accès à l’API (projets, contact)
├── App.js               # Assemblage des sections
└── App.test.js          # Test d’intégration du portfolio
public/
└── cv-amar-wade.pdf     # CV téléchargeable
```

Les informations personnelles du site sont définies dans [`src/data/portfolioData.js`](src/data/portfolioData.js). Les projets et l’envoi du formulaire de contact utilisent respectivement les routes `/projects` et `/contact` de l’API configurée.

## Déploiement

Le projet peut être déployé sur un hébergeur de sites statiques compatible avec React. Configurez `REACT_APP_API_BASE_URL` dans les variables d’environnement de la plateforme, puis lancez `npm run build` pour générer les fichiers à publier.
