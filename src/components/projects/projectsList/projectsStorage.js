const projects = [
  {
    id: "portfolioSite",
    title: "This Website",
    tech: ["React", "HTML5", "CSS3", "Git/GitHub"],
    description1:
      "A personal portfolio website I built for myself. Utilizes several node packages including React Router and React Icons (see GitHub README for more details).",
    description2:
      "Deployed with Netlify with a connected GitHub repo for CI/CD.\n Node package manager used for bootstrapping with create-react-app, installing dependencies and build steps.",
    links: {
      website: "http://localhost:3000/",
      github: "https://github.com/YSquid/portfolio2.0",
    },
    previewURL: "../../../../assets/portfolio.png",
  },
  {
    id: "redditMininmal",
    title: "Reddit Clone",
    tech: ["React", "Redux", "HTML5", "CSS3", "Git/GitHub"],
    description1:
      "A minimal functionality Reddit clone webapp. Utilizes the Reddit JSON API to load Reddit Data. Redux was used for state management, following the Redux Toolkit design pattern. See GitHub README for full details.",
    description2:
      "Deployed with Netlify with a connected GitHub repo for CI/CD.\n Node package manager used for bootstrapping with create-react-app, installing dependencies and build steps.",
    links: {
      website: "https://ak-reddit-minimal.netlify.app/",
      github: "https://github.com/YSquid/reddit-minimal",
    },
    previewURL: "../../../../assets/redditClient.png",
  },
  {
    id: "mrkCBD",
    title: "Mr. K CBD Landing Page",
    tech: ["HTML5", "CSS3", "Git/GitHub"],
    description1: 'A simple landing page for a CBD brand made with HTML5 and CSS3',
    links: {
      website: "https://mrkcbd.com/",
      github: "https://gith ub.com/YSquid/mrk-landing",
    },
    previewURL: "../../../../assets/mrkCBD.png",
  }
];

export default projects;
