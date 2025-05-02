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
  wordpress,
  docker,
  codecrew,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  portfolio,
  ems,
  travel,
  panchal,
  bandhan,
  pixostory,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Node.js Developer", icon: backend },
  { title: "React Js Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "WordPress Developer", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "WordPress", icon: wordpress },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "CodeCrew Infotech",
    icon: codecrew,
    iconBg: "#E6DEDD",
    date: "June 2021 - Nov 2021",
    points: [
      "Learned and applied fundamentals of HTML, CSS, JavaScript, and WordPress.",
      "Built basic websites and participated in plugin/theme development tasks.",
    ],
  },
  {
    title: "PHP/WordPress Developer (Trainee)",
    company_name: "CodeCrew Infotech",
    icon: codecrew,
    iconBg: "#383E56",
    date: "Dec 2021 - Apr 2022",
    points: [
      "During a 1-year, I focused on expanding my technical skills by learning PHP and WordPress.",
      "This period was dedicated to working on college projects, where I applied these technologies to develop and customize web solutions.",
      "This hands-on experience enhanced my proficiency in PHP and WordPress, preparing me for more advanced roles in web development.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "CodeCrew Infotech",
    icon: codecrew,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "During my 3-year career break, I focused on learning Full Stack Development.",
      "proficiency in Node.js, React.js, React Native, and the MERN stack,",
      "front-end and back-end development to create dynamic web and mobile applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sandip is a very hardworking and fast learner. He actively contributed to both frontend and backend development of our major projects.",
    name: "Yogesh",
    designation: "Founder",
    company: "CodeCrew Infotech",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    testimonial:
      "Very impressed with Sandip’s technical grasp and dedication to delivering quality MERN stack applications.",
    name: "Mehul Shah",
    designation: "Project Manager",
    company: "Pixostory",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    testimonial:
      "Very impressed with Sandip’s technical grasp and dedication to delivering quality MERN stack applications.",
    name: "Mehul Shah",
    designation: "Project Manager",
    company: "Pixostory",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const projects = [
  {
    name: "Employee Management System (EMS)",
    description:
      "A role-based employee portal for managing tasks, attendance, and reports, designed for admins, team leads, and project managers.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: ems,
    source_code_link: "https://github.com/your-username/ems-portal", // Replace with actual
  },
  {
    name: "Tours and Travels Website",
    description:
      "A responsive travel agency platform featuring tour listings, user reviews, secure bookings, and an admin dashboard.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: tripguide, // Replace with correct travel image if available
    source_code_link: "https://github.com/your-username/tours-travel-app", // Replace with actual
  },
  {
    name: "Pixostory – Video Production Website",
    description:
      "A corporate website built for Pixostory to showcase video production services with a clean layout and responsive design.",
    tags: [
      { name: "wordpress", color: "blue-text-gradient" },
      { name: "php", color: "green-text-gradient" },
      { name: "elementor", color: "pink-text-gradient" },
    ],
    image: pixostory,
    source_code_link: "https://pixostory.com",
  },
  {
    name: "Panchal Samaj Community App",
    description:
      "A mobile application for community members to connect, share updates, and manage member details using Firebase authentication.",
    tags: [
      { name: "reactnative", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
    ],
    image: panchal,
    source_code_link: "https://github.com/your-username/panchal-community-app", // Replace with actual
  },
  {
    name: "Bandhan – Wedding Planner Platform",
    description:
      "A wedding planner web app that connects clients with vendors, offering features like bookings, inquiries, and vendor profiles.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "cloudinary", color: "green-text-gradient" },
    ],
    image: bandhan,
    source_code_link: "https://github.com/your-username/bandhan-wedding-planner", // Replace with actual
  },
  {
    name: "Developer Portfolio Website",
    description:
      "A modern and animated portfolio website showcasing my experience, skills, and projects using React and Tailwind CSS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/your-username/portfolio-website", // Replace with actual
  },
];

export { services, technologies, experiences, testimonials, projects };
