import avterimage from "../../data/IMG20240708165513-removebg-preview02.png"

import projectImage01 from "../../data/Screenshot 2026-10-14 211247.png"
import projectImage02 from "../../data/home.png"

export const portfolioData = {
  personalInfo: {
    name: "Towhid",
    title: "Full Stack Web Developer",
    subtitle: "MERN Stack Specialist",
    tagline: "Crafting modern, scalable web applications with pixel-perfect design, dynamic interactions, and robust architectures.",
    avatar: avterimage,
    resumeUrl: "#", // Replace with real /resume.pdf
    email: "towhidislam3489@gmail.com",
    phone: "+880 1893727352",
    whatsapp: "+8801893727352",
    location: "Mymensingh, Bangladesh",
    status: "Available for Hire & Freelance",
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/md-towhidul-islam0",
      icon: "Github",
      color: "hover:text-purple-400 hover:border-purple-500",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-towhidul-islam0/",
      icon: "Linkedin",
      color: "hover:text-blue-400 hover:border-blue-500",
    },
    // {
    //   name: "Twitter / X",
    //   url: "https://x.com",
    //   icon: "Twitter",
    //   color: "hover:text-sky-400 hover:border-sky-500",
    // },
    // {
    //   name: "Facebook",
    //   url: "https://facebook.com",
    //   icon: "Facebook",
    //   color: "hover:text-indigo-400 hover:border-indigo-500",
    // },
  ],

  about: {
    intro: "Hello! I'm a passionate Full Stack Developer with a knack for turning complex problems into elegant, human-centered digital solutions.",
    journey:
      "My programming journey started with competitive problem-solving in C and C++. Spending hundreds of hours tackling algorithms gave me a strong logic foundation before I ever built my first website—solving 600+ problems on Codeforces and reaching a 2★ rating on CodeChef. Today, I apply that same problem- solving discipline to modern web development.My primary focus is building full- stack, responsive applications using Next.js, React, TypeScript, and Tailwind CSS.For me, the best way to master new tools is by diving in and building real projects—one problem and one feature at a time. 🌱",
    workEnjoyed:
      "I’m at my best when I’m solving concrete problems under structured deadlines. For me, software development isn't just about shipping code quickly—it’s about taking full ownership from start to finish. I enjoy the process of turning complex requirements into clean, responsive user interfaces and secure backends. Whether I’m optimizing dynamic routes or refining authentication flows, I focus on reliability, punctuality, and writing code that is built to last.",
    hobbies: [
      {
        title: "Sports & Fitness",
        desc: "Active cricket and football player on weekends to keep energy high.",
        icon: "Trophy",
      },
      {
        title: "Digital Art & Painting",
        desc: "Exploring visual aesthetics, color palettes, and sketching.",
        icon: "Palette",
      },
      {
        title: "Tech Gadgets & Reading",
        desc: "Following tech innovations, system design blogs, and open-source releases.",
        icon: "BookOpen",
      },
      {
        title: "Photography & Travel",
        desc: "Capturing street moments and exploring scenic landscapes.",
        icon: "Camera",
      },
    ],
    personalityTraits: [
      "Detail-Oriented Architect",
      "Fast & Curious Learner",
      "Clean Code Advocate",
      "Collaborative Team Player",
    ],
  },

  skills: {
    frontend: [
      { name: "React.js", level: 92, badge: "Advanced" },
      { name: "Next.js", level: 88, badge: "Advanced" },
      { name: "JavaScript (ES6+)", level: 94, badge: "Expert" },
      { name: "TypeScript", level: 82, badge: "Intermediate" },
      { name: "Tailwind CSS", level: 95, badge: "Expert" },
      { name: "HTML5 & CSS3", level: 98, badge: "Expert" },
    ],
    backend: [
      { name: "Node.js", level: 86, badge: "Advanced" },
      { name: "Express.js", level: 88, badge: "Advanced" },
      { name: "MongoDB & Mongoose", level: 85, badge: "Advanced" },
      { name: "RESTful APIs", level: 90, badge: "Expert" },
      { name: "JWT & NextAuth", level: 84, badge: "Intermediate" },
      { name: "Firebase", level: 82, badge: "Intermediate" },
    ],
    tools: [
      { name: "Git & GitHub", level: 90, badge: "Expert" },
      { name: "VS Code", level: 95, badge: "Expert" },
      { name: "Figma (UI Implementation)", level: 80, badge: "Intermediate" },
      { name: "Postman", level: 88, badge: "Advanced" },
      { name: "Vercel & Netlify", level: 92, badge: "Expert" },
      { name: "npm / pnpm", level: 90, badge: "Expert" },
    ],
  },

  education: [
    {
      degree: "Diploma in Computer Science & Technology",
      institution: "Mymensingh Polytechnic Institute ",
      period: "2023 – present",
      result: "CGPA: 3.33 / 4.00",
      description:
        "Focused coursework in Data Structures, Algorithms, Database Management Systems, Software Engineering, and Web Technologies.",
      // highlights: [
      //   "Dean's Honor List for 3 consecutive semesters",
      //   "Lead Developer in University Tech Club Hackathon",
      // ],
    },
    {
      degree: "Secondary School Certificate (HSC) - Science",
      institution: "APBn high school",
      period: "2023",
      result: "GPA: 5.00 / 5.00",
      description: "Majored in Higher Mathematics, Physics, Chemistry, and Information & Communication Technology.",
      // highlights: ["Academic Excellence Merit Award"],
    },
  ],

  experience: [
    // {
    //   role: "Frontend Developer (Junior / Intern)",
    //   company: "Nexus Digital Innovations",
    //   period: "July 2024 – Present",
    //   location: "Remote / Hybrid",
    //   description:
    //     "Contributed to building high-converting landing pages, interactive client portals, and modular dashboard components using React and Tailwind CSS.",
    //   responsibilities: [
    //     "Implemented 15+ responsive React components with strict accessibility standards",
    //     "Improved website loading performance by 35% through image optimization and code splitting",
    //     "Collaborated with backend engineers to consume RESTful endpoints and handle error boundaries",
    //   ],
    // },
    // {
    //   role: "Freelance Web Developer",
    //   company: "Self-Employed",
    //   period: "2023 – Present",
    //   location: "Global",
    //   description:
    //     "Designed and deployed custom portfolio websites, business landing pages, and web apps for independent clients and local enterprises.",
    //   responsibilities: [
    //     "Delivered responsive, SEO-optimized web applications with high client satisfaction",
    //     "Integrated dynamic contact systems, booking forms, and payment gateways",
    //   ],
    // },
  ],

  projects: [
    {
      id: "Bazar-dor",
      name: "Bazar-dor",
      shortDescription:
        "🛒 BazarDor — Daily Market Price Tracker Essential commodity prices in Bangladesh can fluctuate wildly, so I built BazarDor to make tracking daily market rates simple and accessible. 🇧🇩 It’s a responsive web app where users can look up updated daily prices, see whether rates are trending up or down, compare prices across different local markets, and filter items by category. What I focused on while building this: Setting up secure, multi-provider login (Google & GitHub) using Better Auth. Handling dynamic routing and category filtering in Next.js. Building a clean, mobile-first layout with Tailwind CSS that remains readable on any screen size. 🛠️ Tech Stack: Next.js, React, TypeScript, Tailwind CSS, Better Auth, MongoDB, Vercel ",
      image: projectImage01,
      tags: ["Next.js", "MongoDB", "Tailwind CSS","TypeScript","Better-Auth","Hero Ui"],
      liveUrl: "https://bazar-dor-wheat.vercel.app/",
      githubClientUrl: "https://github.com/md-towhidul-islam0/bazar-dor",
      overview:
       "",
      challenges:
       "",
      improvements: [
      ],
    },
    {
      id: "FitLog",
      name: "FitLog",
      shortDescription:
        "FitLog is a responsive workout planning web app built with Next.js, React, TypeScript, and Tailwind CSS. It allows users to explore exercises, filter by muscle groups, create daily workout plans, save favorite workouts, and view estimated workout statistics through a clean, dark-themed interface. ",
      image: projectImage02,
      tags: ["Next.js", "MongoDB", "Tailwind CSS","TypeScript","Better-Auth","Hero Ui"],
      liveUrl: "https://fitlog-xi-smoky.vercel.app/",
      githubClientUrl: "https://github.com/md-towhidul-islam0",
      overview:
        "",
      challenges:
        "",
      improvements: [
      ],
    },
    // {
    //   id: "shopnova-ecommerce",
    //   name: "ShopNova - Modern E-Commerce Platform",
    //   shortDescription:
    //     "A fast, responsive online storefront featuring dynamic product filtering, cart drawer, Stripe checkout simulation, and user order history.",
    //   image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=900&auto=format&fit=crop",
    //   tags: ["React", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
    //   liveUrl: "https://shopnova-store.vercel.app",
    //   githubClientUrl: "https://github.com/example/shopnova-client",
    //   overview:
    //     "ShopNova was built to provide an ultra-smooth retail shopping experience with instant category search, faceted product filters, seamless checkout flows, and an intuitive customer profile panel.",
    //   challenges:
    //     "Synchronizing local cart state with backend database while handling guests vs authenticated user states seamlessly. Solved using Redux Toolkit with persistent local storage hydration.",
    //   improvements: [
    //     "Add product reviews with image uploads and verified buyer badges.",
    //     "Implement recommendation engine based on browsing history.",
    //     "Integrate mobile wallet payment options (bKash/Nagad/Cards).",
    //   ],
    // },
    // {
    //   id: "taskflow-dashboard",
    //   name: "TaskFlow - Collaborative Project Management SaaS",
    //   shortDescription:
    //     "Kanban-style project tracking dashboard featuring drag-and-drop task boards, sprint progress charts, and team member assignment.",
    //   image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop",
    //   tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Chart.js"],
    //   liveUrl: "https://taskflow-app.vercel.app",
    //   githubClientUrl: "https://github.com/example/taskflow-client",
    //   overview:
    //     "TaskFlow empowers agile engineering teams to organize user stories, track blockers, and monitor velocity through interactive Kanban boards and visual burn-down charts.",
    //   challenges:
    //     "Ensuring 60fps smooth drag-and-drop interactions across desktop and mobile touch devices without lagging state updates. Solved by decoupling animation logic from API sync calls.",
    //   improvements: [
    //     "Add real-time team collaboration cursor indicators using WebSockets.",
    //     "AI-assisted task summary generation and automated sprint planning.",
    //     "Slack and Discord webhook notifications for task state changes.",
    //   ],
    // },
  ],
};
