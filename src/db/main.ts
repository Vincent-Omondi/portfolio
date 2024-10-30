import groupieImg from "../../public/images/groupie.png";
import bookieImg from "../../public/images/bookie.png";
import myImage from "../../public/images/vincent.png";
import mutahItImg from "../../public/images/mutah-it.png";
import randQuoteImg from "../../public/images/randquote.png";
import redditCloneImg from "../../public/images/reddit-clone.png";
import theDojoImg from "../../public/images/the-dojo.png";
import afyachainImg from "../../public/images/afyachain.png";

export const heroData = {
  img: myImage,
  hi: "Hello, my name is",
  name: "Vincent Omondi",
  expertise: ["Full-stack Developer", "Data Engineer"],
  about:
    "I’m a passionate full-stack developer and data solutions engineer skilled in building intelligent, scalable applications that combine technical precision with data-driven strategy. Blending software expertise with analytical insights, I create seamless digital solutions that empower businesses to innovate and thrive in today’s data-centric world.",
  btnText: "Get my resume",
};

export const aboutData = {
  title: "About My",
  cards: [
    {
      title: "Past",
      text: "I discovered my passion for programming when I was just 14 years old. At first, it was just a hobby, but I quickly became interested in web development and the creative possibilities it offered. Over the years, I continued to develop my skills and fell more in love with building websites.",
    },
    {
      title: "Present",
      text: "Now, as a software engineering student at Mutah University, I am pursuing my dream of becoming a professional programmer. I also work as a freelance web developer, which has allowed me to apply my skills in real-world projects and gain practical experience.",
    },
    {
      title: "Future",
      text: "Looking ahead, I'm excited about the future of programming and the endless opportunities it presents. I'm confident that my passion for the field, coupled with my skills, will enable me to make meaningful contributions to the industry in the years to come.",
    },
  ],
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Backend",
      skills: [
        {
          category: "Languages",
          items: [
            { name: "Go", icon: "devicon:go" },
            { name: "Python", icon: "logos:python" },
            { name: "Ruby", icon: "logos:ruby" },
            { name: "Node.js", icon: "logos:nodejs-icon" },
          ]
        },
        {
          category: "Frameworks",
          items: [
            { name: "Django", icon: "logos:django-icon" },
            { name: "Rails", icon: "devicon:rails" },
          ]
        },
        {
          category: "Database Management",
          items: [
            { name: "MySQL", icon: "logos:mysql" },
            { name: "PostgreSQL", icon: "logos:postgresql" },
            { name: "MongoDB", icon: "skill-icons:mongodb" },
          ]
        },
        {
          category: "APIs",
          items: [
            { name: "REST", icon: "simple-icons:fastapi" },
            { name: "GraphQL", icon: "logos:graphql" },
            { name: "gRPC", icon: "logos:grpc" },
          ]
        }
      ]
    },
    {
      title: "Frontend",
      skills: [
        {
          category: "Languages",
          items: [
            { name: "JavaScript", icon: "logos:javascript" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            { name: "HTML", icon: "logos:html-5" },
          ]
        },
        {
          category: "Frameworks/Libraries",
          items: [
            { name: "React", icon: "logos:react" },
            { name: "Next", icon: "logos:nextjs-icon" },
          ]
        },
        {
          category: "Styling",
          items: [
            { name: "CSS", icon: "logos:css-3" },
            { name: "SCSS", icon: "logos:sass" },
            { name: "Tailwind", icon: "logos:tailwindcss-icon" },
            { name: "Bootstrap", icon: "logos:bootstrap" },
          ]
        },
        {
          category: "Build Tools",
          items: [
            { name: "Webpack", icon: "logos:webpack" },
            { name: "Vite", icon: "logos:vitejs" },
          ]
        }
      ]
    },
    {
      title: "Miscellaneous",
      skills: [
        {
          category: "Version Control",
          items: [
            { name: "Git", icon: "logos:git-icon" },
            { name: "GitHub", icon: "logos:github-icon" },
            { name: "GitLab", icon: "logos:gitlab" },
          ]
        },
        {
          category: "Testing",
          items: [
            { name: "Jest", icon: "logos:jest" },
            { name: "Mocha", icon: "logos:mocha" },
            { name: "Cypress", icon: "logos:cypress" },
          ]
        },
        {
          category: "CI/CD",
          items: [
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "Jenkins", icon: "logos:jenkins" },
            { name: "GitHub Actions", icon: "logos:github-actions" },
          ]
        },
        {
          category: "Cloud",
          items: [
            { name: "AWS", icon: "logos:aws" },
            { name: "GCP", icon: "logos:google-cloud" },
            { name: "Azure", icon: "logos:microsoft-azure" },
          ]
        }
      ]
    }
  ]
};

export const contactData = {
  title: "Want To",
  cards: [
    {
      title: "offer job opportunity?",
      text: "I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
    },
    {
      title: "Connect?",
      text: "Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about your work. Let's grab a virtual coffee and see where the conversation takes us!",
    },
    {
      title: "Build something?",
      text: "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a custom e-commerce platform or a cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
    },
  ],
  links: [
    {
      label: "Email",
      url: "mailto:muhammadaldawahreh@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/MuhammadJaafer",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-dawahreh/",
    },
    {
      label: "Resume",
      url: "/Docs/resume.pdf",
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
    {
      name: "AfyaChain",
      image: afyachainImg,
      technologies: [
        "Go",
        "Solidity",
        "HTML",
        "CSS",
        "Javascript",
      ],
      description:
        "AfyaChain is a blockchain-based Electronic Medical Record (EMR) and Health Management Information System (HMIS) designed to address the critical inefficiencies in Kenya's healthcare system.",
      demoUrl: "https://afyachain.co.ke",
      codeUrl: "",
    },
    {
      name: "Groupie Tracker",
      image: groupieImg,
      technologies: [
        "Go",
        "Javascript",
        "HTML",
        "CSS",
        "Dockerfile",
      ],
      description:
        "Consists of receiving a given API and manipulating the data contained in it to create a site and display the information about music artists, their concert locations, and related dates.",
      codeUrl: "https://github.com/Vincent-Omondi/groupie-tracker.git",
    },
  ],
};
