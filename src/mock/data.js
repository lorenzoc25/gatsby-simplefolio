import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lorenzo Cao', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Lorenzo Cao',
  // eslint-disable-next-line prettier/prettier
  subtitle: 'I\'m a Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hi! I'm a rising sophomore studying Computer Science at UCLA",
  paragraphTwo:
    "I'm Passionate about Software Engineering and Web Development in general(with working/project experiences) but also willing to explore all the potentials in the technology field such as AI.",
  paragraphThree: 'To learn more, please check my resume below!',
  resume: 'https://drive.google.com/file/d/1IKNJTUGOna-rC61yWELg5W-6uMIGKIE-/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'codely1.jpg',
    title: 'Codely.us',
    info: 'A prototype of a realtime online 1v1 coding platfrom.',
    info2: '',
    url: 'https://devpost.com/software/codely',
    repo: 'https://github.com/Markliniubility/Codely', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'skreech2.jpg',
    title: 'Skreech!',
    info: 'A 2D platformer game that me and my teammates built using Unity',
    info2: '',
    url: 'https://sudarshanseshadri26.itch.io/skreech',
    repo: 'https://github.com/OlayColay/Gravbeam', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rb3.jpg',
    title: 'Rocket Booster',
    info: 'A Serverless reverse proxy and load balancing library built for Cloudflare Workers.',
    info2: 'I contributed to this as a Summer of Code Developer',
    url: 'https://github.com/booster-labs/rocket-booster',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to reach out to me? No problem!',
  btn: '',
  email: 'lorenzoc25@g.ucla.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lorenzoc25/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lorenzoc25',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
