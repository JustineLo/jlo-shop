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
  excerpt: string;
  description: string;
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
    excerpt: "readncollect.excerpt",
    description: "readncollect.description",
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
    excerpt: "chaton.excerpt",
    description: "chaton.description",
    imagesUrl: [chaton1],
    projectUrl: "https://stijj.itch.io/chaton",
    price: 800,
    stack: ["Unity", "C#"],
  },
  {
    id: 3,
    title: "MisterGoodBeer",
    creationDate: new Date("01/01/2021"),
    githubUrl: "",
    excerpt: "mistergoodbeer.excerpt",
    description: "mistergoodbeer.description",
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
    excerpt: "voyageLudique.excerpt",
    description: "voyageLudique.description",
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
    excerpt: "searchHackerNews.excerpt",
    description: "searchHackerNews.description",
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
    excerpt: "banqueImages.excerpt",
    description: "banqueImages.description",
    imagesUrl: [banque1, banque2, banque3, banque4],
    projectUrl: "https://banqueimages-justineloprojects.netlify.app/",
    price: 400,
    stack: ["React"],
  },
  {
    id: 7,
    title: "Markdown Previewer",
    creationDate: new Date("02/20/2022"),
    githubUrl: "https://github.com/JustineLo/previsualisateur-markdown",
    excerpt: "markdownPreviewer.excerpt",
    description: "markdownPreviewer.description",
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
    excerpt: "generateurDeCouleurs.excerpt",
    description: "generateurDeCouleurs.description",
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
    excerpt: "tsSimpleModal.excerpt",
    description: "tsSimpleModal.description",
    imagesUrl: [modal1, modal2, modal3],
    projectUrl: "https://www.npmjs.com/package/ts-simple-modal",
    price: 100,
    stack: ["TypeScript", "React"],
  },
  {
    id: 14,
    title: "Les Petits Plats",
    creationDate: new Date("12/16/2022"),
    githubUrl: "https://github.com/JustineLo/P7",
    excerpt: "lesPetitsPlats.excerpt",
    description: "lesPetitsPlats.description",
    imagesUrl: [plats1, plats2, plats3, plats4, plats5],
    projectUrl: "https://kasa-jlo.netlify.app/",
    price: 600,
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 15,
    title: "Billed",
    creationDate: new Date("07/11/2023"),
    githubUrl: "https://github.com/JustineLo/Billed-app-FR-Front",
    excerpt: "billed.excerpt",
    description: "billed.description",
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
    excerpt: "kasa.excerpt",
    description: "kasa.description",
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
    excerpt: "argentBank.excerpt",
    description: "argentBank.description",
    imagesUrl: [bank1, bank2, bank3, bank4, bank5],
    projectUrl: "",
    price: 500,
    stack: ["React", "TypeScript", "Redux"],
  },
  {
    id: 18,
    title: "HRnet",
    creationDate: new Date("05/01/2023"),
    githubUrl: "https://github.com/JustineLo/P14",
    excerpt: "HRnet.excerpt",
    description: "HRnet.description",
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
    excerpt: "sportSee.excerpt",
    description: "sportSee.description",
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
    excerpt: "fishEye.excerpt",
    description: "fishEye.description",
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
    excerpt: "booki.excerpt",
    description: "booki.description",
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
    excerpt: "ohmyfood.excerpt",
    description: "ohmyfood.description",
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
    excerpt: "gameOn.excerpt",
    description: "gameOn.description",
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
