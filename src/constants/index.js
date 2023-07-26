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
  git,
  figma,
  True,
  jobit,
  threejs,
  Dash,
  Movix,
  Share

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
    title: "JavaScript Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Redux Toolkit",
    icon: backend,
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Truthics Solutions",
    icon: True,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Iram proved me wrong.",
    name: "Waqar Ahmed",
    designation: "CEO",
    company: "Truthics Solution",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Iram does.",
    name: "Chris Brown",
    designation: "COO",
    company: "upler",
  },
];

const projects = [
  {
    name: "Movix",
    description:
      "Web-based platform that allows users to search movies and tv shows, providing a convenient and amazing entertainment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image:Movix,
    source_code_link: "https://github.com/BelikeIram/Movix",
  },
  {
    name: "ReactJS Dashboard",
    description:
      "Web application that enables users to search for different graphs, calender, tables and much more. A complete Dashboard",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Nivo",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: Dash,
    source_code_link: "https://github.com/BelikeIram/react-dashboard",
  },
  {
    name: "Search Everywhere",
    description:
      "A photo sharing web application, where a user can upload, edit, remove photos from the gallery",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "ContextApi",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "pink-text-gradient",
      },
    ],
    image: Share,
    source_code_link: "https://github.com/BelikeIram/Sanity.io-share-everywhere-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
