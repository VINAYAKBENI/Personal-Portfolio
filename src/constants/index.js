import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SOFTWARE DEVELOPER",
    company_name: "FINVESTFx",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Constructed a React Native application with vital API calls for real-time data presentation, search, and filter functions; improved user engagement by 70% with secure authentication and category-specific data organization.",
      "Orchestrated development of automation scripts with Puppeteer, established APIs, devised complex MongoDB queries, and authored front-end code in React; enhanced software testing efficiency by 45% for a $8+ billion financial institutions.",
      "Created efficient invoice processing algorithms in Python, Numpy, Pandas and Sklearn which take input in JSON, CSV, and Excel formats with Flask APIs for error management; delivered 98% accurate Pricing and Credit Term Predictions, enhancing financial strategies for businesses.",
    ],
  },
  {
    title: "ANDROID DEVELOPER INTERN",
    company_name: "CHAI CUBICLE",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jul 2023",
    points: [
      "Constructed a food ordering platform with Flutter and Firebase, significantly increasing online customer traffic and contributing to a 45% rise in sales through optimized user experience and real-time order updates.",
      "Engineered a seamless app experience with features like menu browsing, order placement, Wishlist additions, Google Maps integration, and secure G-Pay transactions; boosted customer engagement by 35% and purchase conversion rates by 20%.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Vinayak proved me wrong.",
    name: "Yash Somani",
    designation: "SDE",
    company: "Aditya Birla",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Vinayak does.",
    name: "Abhishek Solanki",
    designation: "SDE 2",
    company: "FinvestFx",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Vinayak optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Anirudh Gautum",
    designation: "SDE",
    company: "FinvestFx",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Pro Market Place",
    description:
    "Delivered a full-stack application with advanced features like search, payment integration, and order optimization, boosting satisfaction by 30% and sales by 18% in the $100+ billion Indian e-commerce market.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDb",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/VINAYAKBENI/Projects/tree/master/App%20Dev%20Project/ProMarketPlace",
  },
  {
    name: "SmartStock",
    description:
    "Developed a Next.js Inventory Management Dashboard, streamlining inventory tracking and analytics with real-time data updates and improved user interface for enhanced operational efficiency.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Postgres",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/VINAYAKBENI/SmartStock",
  },
  {
    name: "Finanseer",
    description:
    "Developed a MERN-based Financial Dashboard App with advanced machine learning for revenue forecasting, reducing data retrieval time by 40% and boosting user engagement by 25%.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDb",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://finanseer-eosin.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
