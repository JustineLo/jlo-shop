import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import md1 from "./assets/md1.png";
import md2 from "./assets/md2.png";
import md3 from "./assets/md3.png";
import banque1 from "./assets/banque1.png";
import banque2 from "./assets/banque2.png";
import banque3 from "./assets/banque3.png";
import banque4 from "./assets/banque4.png";
import gencouleurs1 from "./assets/gencouleurs1.png";
import gencouleurs2 from "./assets/gencouleurs2.png";
import rnc1 from "./assets/rnc1.png";
import rnc2 from "./assets/rnc2.png";
import rnc3 from "./assets/rnc3.png";
import rnc4 from "./assets/rnc4.png";
import hacker1 from "./assets/hacker1.png";
import hacker2 from "./assets/hacker2.png";
import hacker3 from "./assets/hacker3.png";
import mgb1 from "./assets/mgb1.png";
import mgb2 from "./assets/mgb2.png";
import chaton1 from "./assets/chaton1.png";
import modal1 from "./assets/modal1.png";
import modal2 from "./assets/modal2.png";
import modal3 from "./assets/modal3.png";
import booki1 from "./assets/booki1.png";
import booki2 from "./assets/booki2.png";
import p21 from "./assets/p2-1.png";
import p22 from "./assets/p2-2.png";
import fisheye1 from "./assets/fisheye1.png";
import fisheye2 from "./assets/fisheye2.png";
import fisheye3 from "./assets/fisheye3.png";
import fisheye4 from "./assets/fisheye4.png";
import sportsee1 from "./assets/sportsee1.png";
import sportsee2 from "./assets/sportsee2.png";
import sportsee3 from "./assets/sportsee3.png";
import sportsee4 from "./assets/sportsee4.png";
import hrnet1 from "./assets/hrnet1.png";
import hrnet2 from "./assets/hrnet2.png";
import hrnet3 from "./assets/hrnet3.png";
import bank1 from "./assets/bank1.png";
import bank2 from "./assets/bank2.png";
import bank3 from "./assets/bank3.png";
import bank4 from "./assets/bank4.png";
import bank5 from "./assets/bank5.png";
import kasa1 from "./assets/kasa1.png";
import kasa2 from "./assets/kasa2.png";
import kasa3 from "./assets/kasa3.png";
import kasa4 from "./assets/kasa4.png";
import kasa5 from "./assets/kasa5.png";
import plats1 from "./assets/plats1.png";
import plats2 from "./assets/plats2.png";
import plats3 from "./assets/plats3.png";
import plats4 from "./assets/plats4.png";
import plats5 from "./assets/plats5.png";
import billed1 from "./assets/billed1.png";
import billed2 from "./assets/billed2.png";
import billed3 from "./assets/billed3.png";
export interface Project {
  id: number;
  title: string;
  creationDate: Date;
  githubUrl: string;
  excerpt: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  imagesUrl: string[];
  projectUrl: string;
  price: number;
  stack: string[];
  tags?: string[];
}

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "ReadNCollect",
    creationDate: new Date("03/23/2023"),
    githubUrl: "https://github.com/JustineLo/readncollect",
    excerpt: {
      en: "Transform articles into a knowledge collage. Extract, craft and export insights.",
      fr: "Transformez les articles en une mosaïque de connaissances. Extrayez, élaborez et exportez vos idées.",
    },
    description: {
      en: `
        <p>The app lets users input article URLs, extracting the essential content. But it's not just another note-taking platform. Its magic lies in its unique collage feature. Users can merge, rearrange, and craft their notes into a personalized mosaic of knowledge. Think of it as a canvas where insights from various articles come together harmoniously.</p>
        <p>But, what if you could hold this canvas in your hands? Recognizing the value of tangible insights, I integrated a feature allowing users to export their knowledge collages into a neatly organized PDF. It's not just an app; it's a solution tailored for the readers of the digital age.</p>
        <h4>Tech Stack:</h4>
        <ul>
        <li>Typescript: For a reliable frontend experience.</li>
        <li>Python: Powering the backend for efficient data processing.</li>
        </ul>`,
      fr: `
        <p>L'application permet aux utilisateurs d'entrer des URLs d'articles, en extrayant le contenu essentiel. Mais ce n'est pas qu'une simple plateforme de prise de notes. Son atout réside dans sa fonction de collage unique. Les utilisateurs peuvent fusionner, réarranger et élaborer leurs notes en une mosaïque de connaissances personnalisée. C'est comme une toile où les idées de différents articles se rencontrent harmonieusement.</p>
        <p>Et si vous pouviez tenir cette toile entre vos mains ? Reconnaissant la valeur des insights tangibles, j'ai intégré une fonction permettant aux utilisateurs d'exporter leurs collages de connaissances sous forme de PDF bien organisé. Ce n'est pas qu'une app; c'est une solution conçue pour les lecteurs de l'ère numérique.</p>
        <h4>Technologies utilisées :</h4>
        <ul>
        <li>Typescript : Pour une expérience frontend fiable.</li>
        <li>Python : Alimentant le backend pour un traitement des données efficace.</li>
        </ul>`,
    },
    imagesUrl: [rnc2, rnc3, rnc4, rnc1],
    projectUrl: "https://readncollect.com",
    price: 1000,
    stack: ["React", "TypeScript", "Python"],
  },
  {
    id: 2,
    title: "Chaton",
    creationDate: new Date("03/01/2022"),
    githubUrl: "https://github.com/JustineLo/Chaton-game",
    excerpt: {
      en: "2D game developed with Unity and C#.",
      fr: "Jeu 2D développé avec Unity et C#.",
    },
    description: {
      en: "<p>Dive into the delightful world of Chaton, a 2D game where players navigate a whimsical cat through a rain of diamonds, ducks, and more. The objective is simple yet captivating: collect precious diamonds for the cat's sweetheart while dodging mischievous obstacles that can deter your journey.</p><h3>Highlights:</h3><ul><li>Dynamic gameplay mechanics with increasing difficulty and speed as you progress.</li><li>Engaging soundtracks and sound effects that immerse players into the gameplay.</li><li>High-score leaderboard to challenge and compete with friends.</li></ul><h3>Technological Stack:</h3><ul><li>Unity: As the primary game development platform.</li><li>C# for gameplay scripts and mechanics.</li></ul>",
      fr: "<p>Plongez dans le monde délicieux de Chaton, un jeu 2D où les joueurs guident un chat fantaisiste à travers une pluie de diamants, de canards et plus encore. L'objectif est simple mais captivant : collecter de précieux diamants pour la dulcinée du chat tout en esquivant les obstacles malicieux qui peuvent entraver votre parcours.</p><h3>Points Forts :</h3><ul><li>Mécanismes de jeu dynamiques avec une difficulté et une vitesse croissantes à mesure que vous progressez.</li><li>Bandes sonores et effets sonores captivants qui immergent les joueurs dans le jeu.</li><li>Classement des meilleurs scores pour défier et concurrencer ses amis.</li></ul><h3>Technologies Utilisées :</h3><ul><li>Unity : Comme plateforme principale de développement de jeux.</li><li>C# pour les scripts et les mécanismes de jeu.</li></ul>",
    },
    imagesUrl: [chaton1],
    projectUrl: "https://stijj.itch.io/chaton",
    price: 800,
    stack: ["Unity", "C#"],
  },
  {
    id: 3,
    title: "MisterGoodBeer App",
    creationDate: new Date("01/01/2021"),
    githubUrl: "",
    excerpt: {
      en: "Mobile app for beer enthusiasts",
      fr: "Application mobile pour les amateurs de bière",
    },
    description: {
      en: '<div class="project-description"><h3>MisterGoodBeer App Contribution</h3><p>As a contributor to the MisterGoodBeer application, an engaging platform dedicated to assisting beer aficionados in discovering the nearest bars offering the most cost-effective pints, notable advancements were made on the frontend layer. Developed using the <strong>Flutter</strong> framework, the app not only ensures compatibility across both <strong>iOS and Android</strong> platforms but also boasts an impressive base of <strong>over 40,000 active users</strong>. Leveraging <strong>Firebase</strong> for its backend needs, the app promises efficient data handling and seamless user experience. While not being the original developer of the app, the input on the frontend has amplified its aesthetics, responsiveness, and user-centric features.</p></div>',
      fr: "<div class=\"project-description-fr\"><h3>Contribution à l'application MisterGoodBeer</h3><p>En tant que contributeur à l'application MisterGoodBeer, une plateforme captivante dédiée à aider les amateurs de bière à découvrir les bars les plus proches proposant les pintes les plus abordables, des améliorations notables ont été apportées à la couche frontend. Développée avec le framework <strong>Flutter</strong>, l'application garantit non seulement la compatibilité sur les plateformes <strong>iOS et Android</strong>, mais compte également une base impressionnante de <strong>plus de 40 000 utilisateurs actifs</strong>. Utilisant <strong>Firebase</strong> pour ses besoins backend, l'application assure une gestion efficace des données et une expérience utilisateur fluide. Sans être le développeur original de l'application, la contribution au frontend a amplifié son esthétique, sa réactivité et ses fonctionnalités centrées sur l'utilisateur.</p></div>",
    },
    imagesUrl: [mgb1, mgb2],
    projectUrl: "https://mistergoodbeer.com/",
    price: 1000,
    stack: ["Flutter", "Firebase"],
  },
  {
    id: 4,
    title: "Voyage Ludique",
    creationDate: new Date("08/07/2023"),
    githubUrl: "https://github.com/JustineLo/voyage-ludique",
    excerpt: {
      en: "Boardgame exchange tracker",
      fr: "Tracker d'échanges de jeux de plateau",
    },
    description: {
      en: `<h3>Voyage Ludique</h3>
        <p>Voyage Ludique is a dedicated platform designed to empower a board game community by streamlining the process of tracking a circulating collection of 70 games. As games change hands, members can effortlessly pinpoint their current location, ensuring transparency and accountability within the community.</p>
        <h4>Tech Stack:</h4>
        <ul>
        <li>Frontend: React and TypeScript for a modern, scalable, and type-safe application.</li>
        <li>Backend: Supabase for robust data management capabilities and seamless React integration.</li>
        <li>Express: API backend for added flexibility and control.</li>
        </ul>
        <h4>Why It Stands Out:</h4>
        <ul>
        <li>Born from direct community engagement and meticulously tailored to their needs.</li>
        <li>Showcases adaptability, technical proficiency, and genuine resonance with end-users.</li>
        </ul>`,
      fr: `<h3>Voyage Ludique</h3>
        <p>Voyage Ludique est une plateforme dédiée conçue pour renforcer une communauté de jeux de société en simplifiant le suivi d'une collection circulante de 70 jeux. Lorsque les jeux changent de main, les membres peuvent facilement localiser leur emplacement actuel, garantissant transparence et responsabilité au sein de la communauté.</p>
        <h4>Technologies utilisées :</h4>
        <ul>
        <li>Frontend : React et TypeScript pour une application moderne, évolutive et sûre.</li>
        <li>Backend : Supabase pour des capacités de gestion de données robustes et une intégration transparente avec React.</li>
        <li>Express : Backend API pour une flexibilité et un contrôle accrus.</li>
        </ul>
        <h4>Les raisons pour lesquelles il se distingue :</h4>
        <ul>
        <li>Issu d'un engagement communautaire direct et méticuleusement adapté à leurs besoins.</li>
        <li>Démontre l'adaptabilité, la compétence technique et la résonance authentique avec les utilisateurs finaux.</li>
        </ul>`,
    },
    imagesUrl: [project1, project3, project2, project4],
    projectUrl: "",
    price: 600,
    stack: ["React", "TypeScript", "Supabase", "ExpressJS"],
  },
  {
    id: 5,
    title: "Search Hacker News",
    creationDate: new Date("02/23/2022"),
    githubUrl: "https://github.com/JustineLo/search-hacker-news",
    excerpt: {
      en: "Dynamic tool to explore tech-related articles",
      fr: "Outil dynamique d'exploration d'articles tech.",
    },
    description: {
      en: "<h2>Search Hacker News: A Dynamic Search Tool</h2><p>A polished, interactive npm package offering a swift and user-centric search experience for delving into articles from the renowned platform, Hacker News.</p><h3>Highlights:</h3><ul><li>Intuitive integration with the Hacker News API ensuring users receive accurate and up-to-date results.</li><li>Dedicated story removal feature, catering for personalized reading lists.</li></ul><h3>Technological Stack:</h3><ul><li>React: Efficiently constructed UI components and managed state transitions.</li><li>Hacker News API: Tapped into a vast database of tech-related articles.</li><li>React-Reveal & React-Flip: Integrated for fluid animations and user interactivity.</li></ul>",
      fr: "<h2>Search Hacker News : Un outil de recherche dynamique</h2><p>Un package npm élégant et interactif offrant une expérience de recherche rapide et centrée sur l'utilisateur pour explorer les articles de la plateforme renommée, Hacker News.</p><h3>Points forts :</h3><ul><li>Intégration intuitive avec l'API de Hacker News garantissant aux utilisateurs des résultats précis et à jour.</li><li>Fonction dédiée de suppression d'histoire, adaptée aux listes de lecture personnalisées.</li></ul><h3>Technologies utilisées :</h3><ul><li>React : Construction efficace des composants UI et gestion des transitions d'état.</li><li>API de Hacker News : Accès à une vaste base de données d'articles liés à la technologie.</li><li>React-Reveal & React-Flip : Intégrés pour des animations fluides et une interactivité utilisateur.</li></ul>",
    },
    imagesUrl: [hacker1, hacker2, hacker3],
    projectUrl: "https://searchhackernews-justineloprojects.netlify.app/",
    price: 400,
    stack: ["React"],
  },
  {
    id: 6,
    title: "Banque d’images",
    creationDate: new Date("02/22/2022"),
    githubUrl: "https://github.com/JustineLo/banque-images",
    excerpt: {
      en: "Dynamic image bank with Unsplash API in React.",
      fr: "Banque d'images dynamique avec API Unsplash en React.",
    },
    description: {
      en: "<div class='project-description'><h2>Banque d'Images: An Interactive Image Repository</h2><p>Presenting a dynamic image bank powered by Unsplash API, which offers a user-friendly interface for searching and viewing high-resolution photos. The interactive frontend is efficiently crafted using React.</p><h3>Highlights:</h3><ul><li>Seamlessly integrates with the Unsplash API, facilitating the fetching of quality images.</li><li>Features a comprehensive search function, enabling users to explore a vast collection of images with ease.</li><li>Optimized for user interaction, automatically loading new images upon scrolling, and accentuated by captivating reveal animations.</li></ul><h3>Technological Stack:</h3><ul><li>React: Capitalized for constructing a responsive UI and managing the application's state.</li><li>Unsplash API: Leveraged for sourcing a rich collection of images.</li><li>React-Reveal: Incorporated to enhance UX with graceful animations.</li></ul><a href='https://justinelo-portfolio.netlify.app'>Discover More on Justine Lo's Portfolio</a></div>",
      fr: "<div class='project-description'><h2>Banque d'Images : Une Banque d'Images Interactive</h2><p>Présentation d'une banque d'images dynamique alimentée par l'API Unsplash, offrant une interface conviviale pour la recherche et la visualisation de photos haute résolution. L'interface interactive est efficacement conçue avec React.</p><h3>Points Forts :</h3><ul><li>Intégration transparente avec l'API Unsplash, facilitant la récupération d'images de qualité.</li><li>Dispose d'une fonction de recherche complète, permettant aux utilisateurs d'explorer facilement une vaste collection d'images.</li><li>Optimisé pour l'interaction utilisateur, chargeant automatiquement de nouvelles images lors du défilement, le tout accentué par des animations de révélation captivantes.</li></ul><h3>Technologies Utilisées :</h3><ul><li>React : Utilisé pour construire une interface utilisateur réactive et gérer l'état de l'application.</li><li>API Unsplash : Exploitée pour fournir une riche collection d'images.</li><li>React-Reveal : Intégré pour améliorer l'UX avec des animations élégantes.</li></ul><a href='https://justinelo-portfolio.netlify.app'>Découvrez Plus sur le Portfolio de Justine Lo</a></div>",
    },
    imagesUrl: [banque1, banque2, banque3, banque4],
    projectUrl: "https://banqueimages-justineloprojects.netlify.app/",
    price: 400,
    stack: ["React"],
  },
  {
    id: 7,
    title: "Markdown Previewer",
    creationDate: new Date("20/02/2022"),
    githubUrl: "https://github.com/JustineLo/previsualisateur-markdown",
    excerpt: {
      en: "Intuitive, user-friendly tool for real-time markdown rendering.",
      fr: "Outil intuitif pour un rendu markdown en temps réel.",
    },
    description: {
      en: "<h2>Markdown Previewer: Dynamic Markdown Rendering Tool</h2><p>An intuitive, user-friendly tool crafted to facilitate real-time markdown rendering. With a seamless interface, users can effortlessly input their markdown content and instantly visualize its formatted version.</p><h3>Highlights:</h3><ul><li>Live markdown rendering that provides instant feedback to the user.</li><li>In-built help modal for markdown syntax, ensuring ease of use even for those unfamiliar with markdown.</li><li>Elegant animations using React-Reveal for enhanced user engagement.</li></ul><h3>Technological Stack:</h3><ul><li>React: For building a dynamic and responsive UI.</li><li>ReactMarkdown: To effectively translate markdown syntax into HTML content.</li><li>React-Reveal: Employed for smooth UI animations.</li></ul>",
      fr: "<h2>Prévisualisateur Markdown : Outil Dynamique de Rendu Markdown</h2><p>Un outil intuitif et convivial conçu pour faciliter le rendu markdown en temps réel. Avec une interface fluide, les utilisateurs peuvent sans effort entrer leur contenu markdown et visualiser instantanément sa version formatée.</p><h3>Points Forts :</h3><ul><li>Rendu markdown en direct offrant un retour immédiat à l'utilisateur.</li><li>Modal d'aide intégré pour la syntaxe markdown, garantissant une facilité d'utilisation même pour ceux qui ne sont pas familiers avec markdown.</li><li>Animations élégantes avec React-Reveal pour une meilleure engagement utilisateur.</li></ul><h3>Technologies Utilisées :</h3><ul><li>React : Pour construire une interface utilisateur dynamique et réactive.</li><li>ReactMarkdown : Pour traduire efficacement la syntaxe markdown en contenu HTML.</li><li>React-Reveal : Utilisé pour des animations UI fluides.</li></ul>",
    },
    imagesUrl: [md1, md2, md3],
    projectUrl:
      "https://previsualisateur-markdown-justineloprojects.netlify.app/",
    price: 400,
    stack: ["React"],
  },
  {
    id: 8,
    title: "Generateur de couleurs",
    creationDate: new Date("02/20/2022"),
    githubUrl: "https://github.com/JustineLo/generateur-couleurs",
    excerpt: {
      en: "Interactive color generator for gradient palette creation.",
      fr: "Générateur de couleurs interactif pour palettes de dégradés.",
    },
    description: {
      en: "<h2>Color Generator: Customizable Color Palettes</h2><p>Dive into a universe of colors with this interactive color generator. This tool lets users effortlessly create a gradient palette from a base color, offering them inspiration and exact hex codes for design purposes.</p><h3>Highlights:</h3><ul><li>Dynamic color palette generation based on user-defined base color.</li><li>Clickable colors that copy the hex value directly to the clipboard with a notification alert.</li><li>Smooth animations using React-Reveal enhancing user experience and interface appeal.</li></ul><h3>Technological Stack:</h3><ul><li>React: For building a responsive and dynamic interface.</li><li>Values.js: To generate a variety of shades from the base color.</li><li>React-Reveal: Incorporated for elegant UI transitions and effects.</li></ul>",
      fr: "<h2>Générateur de Couleurs: Palettes de Couleurs Personnalisables</h2><p>Plongez dans un univers de couleurs avec ce générateur de couleurs interactif. Cet outil permet aux utilisateurs de créer facilement une palette de dégradés à partir d'une couleur de base, offrant inspiration et codes hex exacts pour des fins de design.</p><h3>Points Forts :</h3><ul><li>Génération dynamique de palettes de couleurs basée sur une couleur de base définie par l'utilisateur.</li><li>Couleurs cliquables qui copient directement la valeur hexadécimale dans le presse-papiers avec une alerte de notification.</li><li>Animations fluides avec React-Reveal pour améliorer l'expérience utilisateur et l'attrait de l'interface.</li></ul><h3>Technologies Utilisées :</h3><ul><li>React : Pour une interface dynamique et réactive.</li><li>Values.js : Pour générer une variété de nuances à partir de la couleur de base.</li><li>React-Reveal : Intégré pour des transitions et effets UI élégants.</li></ul>",
    },
    imagesUrl: [gencouleurs1, gencouleurs2],
    projectUrl: "https://generateurcouleurs-justineloprojects.netlify.app/",
    price: 400,
    stack: ["React"],
  },
  {
    id: 9,
    title: "ts-simple-modal",
    creationDate: new Date("06/09/2023"),
    githubUrl: "https://github.com/JustineLo/ts-simple-modal",
    excerpt: {
      en: "A nimble, customizable modal component in TypeScript.",
      fr: "Un composant modal léger en TypeScript.",
    },
    description: {
      en: "<p>Developed and published a nimble, customizable modal component tailored for React applications, entirely scripted in TypeScript.</p><h3>Key Features:</h3><ul><li>Availability as an NPM package, emphasizing ease of integration and deployment in varied React projects.</li><li>Written in TypeScript, ensuring type safety and enhanced developer experience.</li><li>Flexibility to determine modal visibility, closing functions, and modal content.</li></ul><h3>Technological Stack:</h3><ul><li>TypeScript: Leveraged for static type-checking and optimized performance.</li><li>React: Utilized for creating the dynamic modal component.</li></ul>",
      fr: "<p>Conception et publication d'un composant modal léger et personnalisable destiné aux applications React, entièrement rédigé en TypeScript.</p><h3>Caractéristiques Principales :</h3><ul><li>Disponibilité en tant que package NPM, mettant en avant la facilité d'intégration et de déploiement dans divers projets React.</li><li>Rédigé en TypeScript, garantissant la sécurité des types et une expérience de développement améliorée.</li><li>Flexibilité pour déterminer la visibilité du modal, les fonctions de fermeture, et le contenu du modal.</li></ul><h3>Technologies Utilisées :</h3><ul><li>TypeScript : Utilisé pour la vérification statique des types et une performance optimisée.</li><li>React : Utilisé pour créer le composant modal dynamique.</li></ul>",
    },
    imagesUrl: [modal1, modal2, modal3],
    projectUrl: "https://www.npmjs.com/package/ts-simple-modal",
    price: 100,
    stack: ["TypeScript", "React"],
  },
  {
    id: 14,
    title: "Les Petits Plats",
    creationDate: new Date("12/16/2023"),
    githubUrl: "https://github.com/JustineLo/P7",
    excerpt: {
      en: "Design a recipe search engine for a cookbook publisher's digital venture",
      fr: "Conception d'un moteur de recherche de recettes pour un éditeur de livres de cuisine",
    },
    description: {
      en: ` <p>Tasked by an established cookbook publisher venturing into the digital realm, the mission was to design a potent and user-friendly recipe search engine. This search engine is built to be extremely responsive, initiating searches with just 3 user-input characters and updating results with every additional keystroke.</p>
          <p>The search functionality can be accessed via the main search field or through tags, including ingredients, utensils, and appliances. Results are derived from an intersection of queries, ensuring users get recipes that match all selected tags.</p>
          <p><strong>Technologies Used:</strong></p>
          <ul>
              <li>HTML5 (W3C compliant)</li>
              <li>CSS3</li>
              <li>Vanilla JavaScript</li>
          </ul>
          <p>The project underscores a commitment to Green Code principles, security against HTML injections, and reusability.</p>`,
      fr: `<p>Mandaté par un éditeur de livres de cuisine établi s'aventurant dans le numérique, la mission était de concevoir un moteur de recherche de recettes puissant et convivial. Ce moteur est conçu pour être extrêmement réactif, lançant des recherches avec seulement 3 caractères entrés par l'utilisateur et mettant à jour les résultats à chaque nouvelle saisie.</p>
      <p>La fonctionnalité de recherche peut être accédée via le champ de recherche principal ou à travers des tags, y compris les ingrédients, ustensiles et appareils. Les résultats proviennent d'une intersection des requêtes, assurant aux utilisateurs d'obtenir des recettes correspondant à tous les tags sélectionnés.</p>
      <p><strong>Technologies Utilisées :</strong></p>
      <ul>
          <li>HTML5 (conforme W3C)</li>
          <li>CSS3</li>
          <li>JavaScript Vanilla</li>
      </ul>
      <p>Le projet souligne un engagement envers les principes du Green Code, la sécurité contre les injections HTML et la réutilisabilité.</p>`,
    },
    imagesUrl: [plats1, plats2, plats3, plats4, plats5],
    projectUrl: "https://kasa-jlo.netlify.app/",
    price: 600,
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 15,
    title: "Billed",
    creationDate: new Date("01/11/2023"),
    githubUrl: "https://github.com/JustineLo/Billed-app-FR-Front",
    excerpt: {
      en: "Developed a reporting system for Billed to streamline reimbursement",
      fr: "Développement d'un système de reporting pour Billed pour rationaliser les remboursements",
    },
    description: {
      en: `<p>Engaged with Billed, a leading SaaS solutions provider for HR teams, the primary focus of this project was to debug the existing expense reporting system and enhance its stability. The responsibilities included:</p> <ul> <li>Debugging the existing code to ensure optimal performance.</li> <li>Writing unit tests to validate individual parts of the code.</li> <li>Creating integration tests to verify the interaction between different pieces of the application.</li> <li>Developing an end-to-end test plan to ensure the entire process works as intended.</li> </ul> <p>The debugging and testing processes were central to improving the system's reliability, security, and efficiency, aligning with Billed's commitment to a seamless user experience and robust architecture.</p>`,
      fr: `<p>Engagé avec Billed, un fournisseur de solutions SaaS de premier plan pour les équipes RH, l'objectif principal de ce projet était de déboguer le système existant de reporting des dépenses et d'en améliorer la stabilité. Les responsabilités comprenaient :</p> <ul> <li>Le débogage du code existant pour assurer une performance optimale.</li> <li>L'écriture de tests unitaires pour valider les parties individuelles du code.</li> <li>La création de tests d'intégration pour vérifier l'interaction entre les différentes parties de l'application.</li> <li>L'élaboration d'un plan de test de bout en bout pour garantir que l'ensemble du processus fonctionne comme prévu.</li> </ul> <p>Les processus de débogage et de test étaient essentiels pour améliorer la fiabilité, la sécurité et l'efficacité du système, conformément à l'engagement de Billed envers une expérience utilisateur transparente et une architecture robuste.</p>`,
    },
    imagesUrl: [billed2, billed3, billed1],
    projectUrl: "",
    price: 500,
    stack: ["JavaScript", "Jest"],
  },
  {
    id: 16,
    title: "Kasa",
    creationDate: new Date("01/12/2023"),
    githubUrl: "https://github.com/JustineLo/kasa",
    excerpt: {
      en: "Revamp of Kasa site from ASP.NET to Reac.",
      fr: "Refonte du site Kasa de ASP.NET à React",
    },
    description: {
      en: `<p>Over a decade ago, the Kasa website was constructed using ASP.NET, but became burdened with outdated code.</p>
      <p>The project's primary goal was to transfer the app to React, utilizing components and React Router routes, all in accordance with responsive Figma designs.</p>
      <p>Key technical demands included the creation of modular, reusable React components, proper management of state and props, efficient handling of events, and more. React Router managed URL route parameters for each piece of housing data, with all router logic combined into a single file. The end result needed to be free of errors and warnings in the console.</p>`,
      fr: `<p>Il y a plus d'une décennie, le site web Kasa a été construit en utilisant ASP.NET, mais est devenu encombré de code obsolète.</p>
      <p>Le principal objectif du projet était de transférer l'application vers React, en utilisant des composants et des routes React Router, conformément aux maquettes réactives de Figma.</p>
      <p>Les exigences techniques clés comprenaient la création de composants React modulaires et réutilisables, une gestion appropriée de l'état et des props, une gestion efficace des événements, et plus encore. React Router gérait les paramètres de route URL pour chaque donnée immobilière, avec toute la logique du routeur combinée dans un seul fichier. Le résultat final devait être exempt d'erreurs et d'avertissements dans la console.</p>`,
    },
    imagesUrl: [kasa1, kasa2, kasa3, kasa4, kasa5],
    projectUrl: "https://kasa-jlo.netlify.app/",
    price: 400,
    stack: ["React"],
  },

  {
    id: 17,
    title: "Argent Bank",
    creationDate: new Date("04/04/2023"),
    githubUrl: "https://github.com/JustineLo/P13",
    excerpt: {
      en: "Collaboration with Remede Agency for Argent Bank digital platform.",
      fr: "Collaboration avec Remede Agency pour une plateforme numérique d'Argent Bank.",
    },
    description: {
      en: "<p>Collaborating with Remede Agency, we crafted a digital platform for Argent Bank, an innovative player in the banking sector. Our mission was to provide clients with a user-friendly and seamless digital banking experience, covering everything from profile management to transaction oversight.</p><h3>Key Features:</h3><ul><li>User-friendly interface for banking services.</li><li>Secure login and profile management.</li><li>View, add, modify, or delete transaction information.</li></ul><h3>Technologies Used:</h3><ul><li>React: For responsive and interactive web design.</li><li>Redux: State management to ensure a smooth user experience.</li><li>Swagger: Documentation and organization of backend API.</li></ul>",
      fr: "<p>En collaboration avec Remede Agency, nous avons créé une plateforme numérique pour Argent Bank, un acteur innovant dans le secteur bancaire. Notre mission était de fournir aux clients une expérience bancaire numérique conviviale et fluide, couvrant tout, de la gestion du profil à la supervision des transactions.</p><h3>Caractéristiques Clés :</h3><ul><li>Interface conviviale pour les services bancaires.</li><li>Connexion sécurisée et gestion de profil.</li><li>Voir, ajouter, modifier ou supprimer des informations de transaction.</li></ul><h3>Technologies Utilisées :</h3><ul><li>React : Pour une conception web réactive et interactive.</li><li>Redux : Gestion de l'état pour garantir une expérience utilisateur fluide.</li><li>Swagger : Documentation et organisation de l'API backend.</li></ul>",
    },
    imagesUrl: [bank1, bank2, bank3, bank4, bank5],
    projectUrl: "",
    price: 500,
    stack: ["React", "Redux"],
  },
  {
    id: 18,
    title: "HRnet",
    creationDate: new Date("05/01/2023"),
    githubUrl: "https://github.com/JustineLo/P14",
    excerpt: {
      en: "Revamping HRnet application from dated jQuery frontend.",
      fr: "Migration de l'application HRnet d'un jQuery daté en React TypeScript.",
    },
    description: {
      en: "<p>Engaged with WealthHealth's technology department to rejuvenate their internal HRnet web application, previously plagued with issues due to its dated jQuery frontend.</p><h3>Key Project Outcomes:</h3><ul><li>Transitioned entire HRnet project to a modern React framework.</li><li>Replaced four existing jQuery plugins with React components, improving overall functionality and UX.</li><li>Lighthouse performance tests conducted, displaying noticeable enhancement over the old version.</li></ul><h3>Technologies and Libraries Used:</h3><ul><li>React: For a responsive and dynamic user interface.</li><li>Material UI: A React UI framework for more interactive UI components.</li><li>Tanstack Table: Handling data in table format more efficiently.</li></ul>",
      fr: "<p>Engagés avec le département technologique de WealthHealth pour rajeunir leur application web interne HRnet, auparavant en proie à des problèmes en raison de son frontend jQuery daté.</p><h3>Principaux Résultats du Projet :</h3><ul><li>Transition de l'ensemble du projet HRnet vers un framework React moderne.</li><li>Remplacement de quatre plugins jQuery existants par des composants React, améliorant la fonctionnalité globale et l'UX.</li><li>Des tests de performance Lighthouse ont été menés, montrant une amélioration notable par rapport à l'ancienne version.</li></ul><h3>Technologies et Bibliothèques Utilisées :</h3><ul><li>React : Pour une interface utilisateur réactive et dynamique.</li><li>Material UI : Un framework UI React pour des composants UI plus interactifs.</li><li>Tanstack Table : Gérer les données au format tableau de manière plus efficace.</li></ul>",
    },
    imagesUrl: [hrnet1, hrnet2, hrnet3],
    projectUrl: "https://hrnet-jlo.netlify.app/",
    price: 400,
    stack: ["React", "TypeScript"],
  },
  {
    id: 19,
    title: "SportSee",
    creationDate: new Date("01/15/2023"),
    githubUrl: "https://github.com/JustineLo/P12",
    excerpt: {
      en: "SportSee user profile revamp offering insights into training sessions.",
      fr: "Refonte du profil utilisateur SportSee offrant un aperçu des sessions d'entraînement.",
    },
    description: {
      en: "<p>At SportSee, a booming sports coaching startup, the spotlight was on revamping the user profile page. This new iteration offers users insights into their completed training sessions and total calories burned.</p><p>Utilizing React for the profile page reconstruction, the project featured athletic activity graphs, tapping into Recharts library. </p><p>Backend development employed NodeJS, facilitating HTTP calls and serving mock data. To manage these calls, Fetch or Axios were preferred tools, organized outside React components into a dedicated service. Data modeling played a crucial role in ensuring API data was consistently formatted before use. The project documentation is complete and includes a Readme, JSDoc and proptypes.</p>",
      fr: "<p>Chez SportSee, une startup en plein essor dans le coaching sportif, l'accent a été mis sur la refonte de la page de profil utilisateur. Cette nouvelle version offre aux utilisateurs un aperçu de leurs sessions d'entraînement terminées et du total des calories brûlées.</p><p>En utilisant React pour la reconstruction de la page de profil, le projet comportait des graphiques d'activité athlétique, exploitant la bibliothèque Recharts. </p><p>Le développement backend a employé NodeJS, facilitant les appels HTTP et servant des données fictives. Pour gérer ces appels, Fetch ou Axios étaient les outils privilégiés, organisés en dehors des composants React dans un service dédié. La modélisation des données jouait un rôle crucial pour garantir que les données de l'API étaient formatées de manière cohérente avant utilisation. La documentation du projet est complète et incluent Readme, JSDoc et proptypes.</p>",
    },
    imagesUrl: [sportsee1, sportsee2, sportsee3, sportsee4],
    projectUrl: "https://sportsee-jlo.netlify.app/",
    price: 600,
    stack: ["React"],
  },
  {
    id: 13,
    title: "FishEye",
    creationDate: new Date("10/26/2022"),
    githubUrl: "https://github.com/JustineLo/Front-End-Fisheye",
    excerpt: {
      en: "A platform for independent photographers focused on accessibility",
      fr: "Une plateforme pour photographes indépendants axée sur l'accessibilité",
    },
    description: {
      en: `<p>FishEye, a platform dedicated to independent photographers showcasing their finest work, sought an overhaul of their decade-old website. The objective was to transition from a static to a dynamic and accessible site, making it a vibrant space for the artists. This prototype involved:</p>
    <ul>
        <li>Interactive media gallery with a like feature and sorting functionality.</li>
        <li>A lightbox media viewer with keyboard navigation.</li>
        <li>Contact form modal for users to reach out to photographers.</li>
    </ul>
    <p>The prime emphasis was on accessibility, ensuring that visually impaired users have a seamless experience. Semantic HTML elements, ARIA attributes, and image alt texts were meticulously integrated. Moreover, the code adheres to modern JavaScript standards, is ESLint validated, and perfectly readable by screen readers.</p>`,
      fr: `<p>FishEye, une plateforme dédiée aux photographes indépendants pour présenter leurs meilleurs travaux, souhaitait une refonte de leur site web datant d'une décennie. L'objectif était de passer d'un site statique à un site dynamique et accessible, le rendant ainsi un espace vivant pour les artistes. Ce prototype comportait :</p>
    <ul>
        <li>Une galerie multimédia interactive avec une fonction de "like" et de tri.</li>
        <li>Une visionneuse média lightbox avec navigation par clavier.</li>
        <li>Un formulaire de contact modale pour les utilisateurs désireux de contacter les photographes.</li>
    </ul>
    <p>L'accent a été mis sur l'accessibilité, garantissant une expérience sans faille aux utilisateurs malvoyants. Des éléments HTML sémantiques, des attributs ARIA et des textes alternatifs pour les images ont été soigneusement intégrés. De plus, le code respecte les normes modernes de JavaScript, est validé par ESLint et parfaitement lisible par les lecteurs d'écran.</p>`,
    },
    imagesUrl: [fisheye1, fisheye2, fisheye3, fisheye4],
    projectUrl: "https://fisheye-jlo.netlify.app/",
    price: 300,
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    title: "Booki",
    creationDate: new Date("05/20/2022"),
    githubUrl: "https://github.com/JustineLo/Booki",
    excerpt: {
      en: "A responsive platform developed using HTML and CSS only",
      fr: "Plateforme adaptative développée en utilisant uniquement HTML et CSS.",
    },
    description: {
      en: `<p>Description: Designed and developed a responsive web platform for "Booki" that provides users with options for accommodations in cities of their preference. The project was solely created using HTML and CSS without any collaboration.</p>
      <ul>
          <li><strong>Responsive Design:</strong> Integrated site designs for desktop, tablet, and mobile, ensuring seamless user experience across different devices.</li>
      </ul>
      <h3>Technological Stack:</h3>
      <ul>
          <li>HTML & CSS: Used to build the core frontend components ensuring a responsive design.</li>
      </ul>`,
      fr: `<p>Description : Conception et développement d'une plateforme web adaptative pour "Booki" offrant aux utilisateurs des options d'hébergements dans les villes de leur choix. Le projet a été entièrement réalisé en utilisant HTML et CSS, sans aucune collaboration.</p>
      <ul>
          <li><strong>Design Réactif :</strong> Intégration des designs du site pour ordinateur, tablette, et mobile, garantissant une expérience utilisateur fluide sur divers appareils.</li>
      </ul>
      <h3>Technologies Utilisées :</h3>
      <ul>
          <li>HTML & CSS : Utilisés pour la construction des composants frontend principaux tout en assurant un design réactif.</li>
      </ul>`,
    },
    imagesUrl: [booki1, booki2],
    projectUrl: "https://justinelo.github.io/Booki/",
    price: 200,
    stack: ["HTML", "CSS"],
  },

  {
    id: 11,
    title: "Ohmyfood!",
    creationDate: new Date("07/29/2022"),
    githubUrl: "https://github.com/JustineLo/P3",
    excerpt: {
      en: "Perfectly responsive application with pure CSS animations",
      fr: "Application parfaitement responsive avec animations en pur CSS",
    },
    description: {
      en: ` <p>Description: Development of a 100% mobile platform for "Ohmyfood!", a startup aiming to revolutionize the culinary experience. The website lists menus from gourmet restaurants, allowing users to pre-compose their meals for quick service upon arrival.</p>
        <ul>
            <li><strong>Mobile-first Design:</strong> Ensures an optimal mobile user experience by implementing responsive designs for tablets and desktops.</li>
            <li><strong>Elegant Animations:</strong> Use of CSS animations and transitions for various user interface interactions, including menu item selection and a custom "loading spinner".</li>
        </ul>
        <h4>Technologies & Constraints:</h4>
        <ul>
            <li>CSS & SASS: Website developed without frameworks, using SASS for enhanced styling capabilities.</li>
            <li>Compatibility: Ensured website compatibility with the latest desktop versions of Chrome and Firefox, and passed W3C validations.</li>
        </ul>
        `,
      fr: `<p>Description: Développement d'une plateforme 100% mobile pour "Ohmyfood!", une startup souhaitant révolutionner l'expérience culinaire. Le site répertorie les menus de restaurants gastronomiques, permettant aux utilisateurs de précomposer leurs repas pour un service rapide à leur arrivée.</p>
        <ul>
            <li><strong>Design Mobile-first:</strong> Garanti une expérience utilisateur mobile optimale en mettant en œuvre des designs réactifs pour tablettes et desktops.</li>
            <li><strong>Animations Élégantes:</strong> Utilisation d'animations et de transitions CSS pour diverses interactions de l'interface utilisateur, y compris la sélection d'éléments de menu et un "loading spinner" personnalisé.</li>
        </ul>
        <h4>Technologies & Contraintes:</h4>
        <ul>
            <li>CSS & SASS: Développement du site sans frameworks, en utilisant SASS pour des capacités de stylisme améliorées.</li>
            <li>Compatibilité: Assuré la compatibilité du site web avec les dernières versions desktop de Chrome et Firefox et passé les validations W3C.</li>
        </ul>
        `,
    },
    imagesUrl: [p21, p22],
    projectUrl: "https://justinelo.github.io/P3/",
    price: 40,
    stack: ["CSS", "SASS"],
  },
  {
    id: 12,
    title: "GameOn",
    creationDate: new Date("10/06/2022"),
    githubUrl: "https://github.com/JustineLo/GameOn-website-FR",
    excerpt: {
      en: "Eenhancing the application's registration form functionality.",
      fr: "Amélioration de la fonctionnalité du formulaire d'inscription.",
    },
    description: {
      en: `<p>Within the team at GameOn, a SME specializing in game conferences and competitions, the responsibility was undertaken to complete and enhance the application's registration form functionality. Following user feedback and the transition of a key team member, the project was picked up to ensure an optimal user experience.</p>
        <ul>
            <li>Implementation of validations for all form fields.</li>
            <li>Addition of confirmation and error messages.</li>
        </ul>
        <h4>Technologies Used:</h4>
        <ul>
            <li>HTML: Basic structure of the form.</li>
            <li>CSS: Design and layout of the form.</li>
            <li>JavaScript: To make the form interactive, add validations, events, and transitions.</li>
        </ul>
        <h4>Why This Project:</h4>
        <p>It was an opportunity to learn about the intricacies of form design, validation, and handling user input in a dynamic application.</p>
        `,
      fr: `<p>Au sein de l'équipe de GameOn, une PME spécialisée dans les conférences et les concours de jeux, la responsabilité a été confiée de compléter et d'améliorer la fonctionnalité du formulaire d'inscription de l'application. Suite à des retours utilisateurs et à la transition d'un membre clé de l'équipe, le projet a été repris pour assurer une expérience utilisateur optimale.</p>
        <ul>
            <li>Implémentation de validations pour tous les champs du formulaire.</li>
            <li>Ajout de messages de confirmation et d'erreur.</li>
        </ul>
        <h4>Technologies Utilisées:</h4>
        <ul>
            <li>HTML: Structure de base du formulaire.</li>
            <li>CSS: Conception et mise en page du formulaire.</li>
            <li>JavaScript: Pour rendre le formulaire interactif, ajouter des validations, des événements et des transitions.</li>
        </ul>
        <h4>Pourquoi Ce Projet:</h4>
        <p>C'était une opportunité d'en savoir plus sur les subtilités de la conception de formulaires, la validation et la gestion des entrées utilisateur dans une application dynamique.</p>
        `,
    },
    imagesUrl: [project1],
    projectUrl: "",
    price: 100,
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

export const stackOptions = (): string[] => {
  const allStacks = mockProjects.map((project) => project.stack).flat();
  const uniqueStacks = [...new Set(allStacks)];
  return uniqueStacks;
};
