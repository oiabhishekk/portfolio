// src/config.ts

export const personalInfo = {
  firstName: "Abhishek",
  lastName: "Sharma",
  titles: ["Full-Stack Developer", "Software Engineer", "B.Tech CSE Student"],
  avatarUrl: "https://avatars.githubusercontent.com/u/137642480?v=4",
  location: "Patna - India",
  email: "abhiiiworks@gmail.com",
  phone: "+91 7325061603",
  whatsapp: "917325061603",
  linkedinUrl: "https://www.linkedin.com/in/abhizzz",
  linkedinUsername: "@abhizzz",
  githubUrl: "https://github.com/oiabhishekk",
  githubUsername: "@oiabhishekk",
  aboutMe: [
    "Motivated <span class=\"text-primary font-medium\">Full-Stack Developer</span> with hands-on experience designing and building scalable web applications. Proficient in React.js, Next.js, TypeScript, Node.js, and relational/non-relational databases.",
    "Experienced in end-to-end development, from designing responsive interfaces to constructing RESTful APIs and orchestrating deployments on Cloudflare Edge. Passionate about writing clean, modular code to solve real-world problems.",
    "I look forward to collaborating <strong class=\"text-text-main\">with you!</strong>"
  ],
  languages: [
    { flag: "🇮🇳", name: "Hindi", level: "Native", description: "Native speaker with excellent listening and speaking skills." },
    { flag: "🇺🇸", name: "English", level: "Fluent", description: "Native speaker with good communication and writing skills." },
  ],
  interests: [
    { icon: "fa-solid fa-magnifying-glass-chart", title: "<span class=\"text-primary\">Learning</span> New Technologies", description: "Continuously learning Advanced tools and technologies in the full-stack field." },
    { icon: "fa-solid fa-laptop-code", title: "<span class=\"text-primary\">Problem</span> solving", description: "Solving complex problems using logical and analytical thinking." },
    { icon: "fa-solid fa-server", title: "<span class=\"text-primary\">Building</span> scalable APIs", description: "Working with backend systems to extract insights and meaningful patterns." },
    { icon: "fa-solid fa-chart-pie", title: "<span class=\"text-primary\">UI/UX</span> Designing", description: "Designing interactive interfaces for clear and effective user visualization." },
    { icon: "fa-solid fa-database", title: "<span class=\"text-primary\">Solving SQL</span> challenges", description: "Practicing and solving SQL challenges to improve query skills." },
    { icon: "fa-solid fa-heart", title: "<span class=\"text-primary\">Portfolio</span> Design", description: "Enjoy building modern portfolio high lighting projects and capabilities." }
  ]
};

export const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "Language" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", category: "Language" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", category: "Language" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", category: "Language" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", category: "Language" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", category: "Language" },

  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Library" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", category: "Library", invert: true },
  { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg", category: "Library", invert: true },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "Library" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", category: "Library", invert: true },

  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", category: "Tool" },
  { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg", category: "Tool" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", category: "Tool", invert: true },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "Tool" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", category: "Tool", invert: true },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", category: "Tool" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman", category: "Tool" },
  { name: "Bash / CLI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg", category: "Tool" },
  { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini", category: "Tool" },
  { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic", category: "Tool", invert: true },

  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", category: "Database" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", category: "Database" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg", category: "Database", invert: true },
  { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg", category: "Database" },
  { name: "Sequelize", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg", category: "Database" }
];

export const projects = [
  {
    title: "Kingshot Alliance Tracker",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    link: "https://kingshot-1521.vercel.app/en",
    description: "Engineered a full-stack alliance management platform to coordinate KvK strategy, resource planning, and player analytics with a dynamic multilingual interface (i18n)."
  },
  {
    title: "Instagram Video Downloader",
    tags: ["Astro", "TypeScript", "Cloudflare Workers", "REST APIs"],
    link: "https://igvideo.abhiiiworks.workers.dev/",
    description: "Developed a high-performance web service serving low-latency global downloads. Integrated media metadata REST APIs to parse and extract high-speed CDN URLs."
  },
  {
    title: "Patna Furniture Website",
    tags: ["Astro", "TypeScript", "Tailwind CSS", "SEO"],
    link: "https://patnafurniture.abhiiiworks.workers.dev/",
    description: "Designed a localized commercial business site optimized for local Patna search traffic. Implemented JSON-LD schemas and edge routing."
  }
];

export const education = [

  {
    degree: "Masters in Computer Applications (MCA)",
    period: "2026 - 2028",
    institution: "IIT Patna & IIIT Ranchi (Hybrid Mode)",
    location: "Patna, Bihar, India",
    percentage: "Ongoing",
    description: "Pursuing online MCA with primary focus on Software Engineering and AI."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2022 - 2025",
    institution: "Arcade Business College",
    location: "Patna, Bihar, India",
    percentage: "69%",
    description: "Pursuing undergraduate studies with a focus on computer science, software engineering, and full-stack development."
  },
  {
    degree: "Intermediate (Class XII)",
    period: "2021",
    institution: "College of Commerce, Arts and Science",
    location: "Patna, Bihar, India",
    percentage: "83%",
    description: "Completed higher secondary education with strong fundamentals."
  },
  {
    degree: "Matriculation (Class X)",
    period: "2019",
    institution: "SVM",
    location: "Patna, Bihar, India",
    percentage: "80%",
    description: "Completed primary education with excellent academic records."
  }
];

export const achievements = [
  {
    title: "Production Deployments",
    description: "Developed and deployed multiple production-grade web applications utilizing modern deployment pipelines on Vercel and Cloudflare.",
    icon: "fa-solid fa-server"
  },
  {
    title: "Modern UI/UX",
    description: "Proficient in writing optimized, responsive, and cross-browser compatible layouts using Tailwind CSS and modern CSS3.",
    icon: "fa-solid fa-mobile-screen"
  },
  {
    title: "Developer Workflows",
    description: "Proven ability to build developer workflows using monorepo setups (Turborepo, pnpm) for rapid local environment scaffolding.",
    icon: "fa-solid fa-code-branch"
  },
  {
    title: "Open-Source",
    description: "Active open-source contributor with personal projects demonstrating code readability, lint rules, and scalable architecture.",
    icon: "fa-brands fa-osi"
  }
];
