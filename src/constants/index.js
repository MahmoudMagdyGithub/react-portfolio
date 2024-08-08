import PortfolioImage from "../assets/projects/portfolio-website.jpg";
import NomoImage from "../assets/projects/nomo.png";
import NomoWebAppImage from "../assets/projects/nomo-web-app.png";
import NomoMailImage from "../assets/projects/nomo-mail.png";

export const HERO_CONTENT = `
I'm a front-end developer with a passion for building strong and scalable web applications. Over the past two years, I've gained hands-on experience with technologies like React and Next.js. My aim is to use my skills to create innovative solutions that help businesses grow and provide great experiences for users.`;

export const ABOUT_TEXT = `I'm a passionate front-end developer with 2 years of professional experience, specializing in creating efficient and user-friendly web applications. My expertise includes working with technologies like React.js, Next.js, Tailwind CSS and Material UI. I got into web development out of curiosity about how things work, and it quickly turned into a fulfilling career. I love learning and adapting to new challenges, which keeps me motivated and engaged. I thrive in team settings, where I can collaborate and problem-solve to deliver top-notch solutions. When I'm not coding, I enjoy doing sports and exploring the latest in technology.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2024",
    role: "Front-end Developer",
    company: "Nomo",
    description: `We've developed a Gmail Chrome extension that enhances your email experience by allowing effortless generation and summarization of emails. Our web application includes a feature to store email templates, enabling easy reuse whenever needed. Additionally, the Tasks feature leverages AI to create, update, and delete tasks based on your input, handling multiple CRUD operations at once. We also offer a Calendar feature that fully integrates with Google Calendar, making it simple to schedule and reschedule meetings with the help of AI.
           
                  We use a monorepo with Lerna.js to manage our Chrome extension, email templates, task management, and calendar integration. Lerna simplifies dependency management and version control. This setup enhances integration and maintenance efficiency.`,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Slate.js",
      "Segment",
      "Zustand",
      "TanStack Query",
      "Lerna",
      "Sass",
      "Material-UI",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: PortfolioImage,
    description:
      "Personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind CSS", "Framer motion"],
  },
  {
    title: "Nomo",
    image: NomoImage,
    description: `Nomo is an AI-powered productivity app that helps streamline your workflow. It includes both a Chrome extension and a web application.`,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Slate.js",
      "Segment",
      "Zustand",
      "TanStack Query",
      "Lerna",
      "Material-UI",
      "Sass",
    ],
  },
  {
    title: "Nomo Web Application",
    image: NomoWebAppImage,
    description: `Nomo Web Application is a significant element of Nomo super-app. Developed using Next.js, it comprises three main features. First, it serves as a repository for frequently used email templates generated from Chrome extension, allowing users to easily reuse them.
                  Second, it includes a Tasks section where users can create, update, and delete tasks using either voice commands or prompts to the AI.
                  Lastly, it has a Calendar feature integrated with Google Calendar, enabling users to view, update, delete, and create events all powered by AI.`,

    technologies: [
      "Next.js",
      "Slate.js",
      "TypeScript",
      "Segment",
      "Zustand",
      "TanStack Query",
      "FullCalendar",
      "Material-UI",
      "Sass",
    ],
  },
  {
    title: "Nomo Chrome Extension",
    image: NomoMailImage,
    description: `Nomo Chrome extension is a key feature of Nomo super-app.
                  Developed using React.js, which helps users generate and summarize emails effortlessly for Gmail using AI.`,

    technologies: [
      "React.js",
      "Slate.js",
      "TypeScript",
      "Segment",
      "Zustand",
      "TanStack Query",
      "Material-UI",
      "Sass",
    ],
  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  // phoneNo: "+12 4555 666 00 ",
  email: "mahmoudmagdymail@gmail.com",
};
