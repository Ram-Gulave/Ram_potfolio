// data/skills.ts

export type SkillItem = {
  name: string;
  iconClass?: string;   // for devicon classes
  iconPath?: string;    // for custom image files
};

export type SkillCategory = {
  [x: string]: never[];
  title: string;
  iconClass?: string;
  iconPath?: string;
  skills: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    iconClass: "devicon-react-original colored",
    skills: [
      { name: "HTML", iconClass: "devicon-html5-plain colored" },
      { name: "CSS", iconClass: "devicon-css3-plain colored" },
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "Tailwind CSS", iconPath: "/tailwind-css.png" },
      { name: "Bootstrap", iconClass: "devicon-bootstrap-plain colored" },
      { name: "Material-UI", iconPath: "/materialui.png" }
    ]
  },
  {
    title: "Backend",
    iconClass: "devicon-nodejs-plain colored",
    skills: [
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Express.js", iconClass: "devicon-express-original colored" },
      { name: "Flask", iconPath: "/flask.png" },
      { name: "REST API", iconClass: "devicon-fastapi-plain colored" },
      { name: "Python", iconClass: "devicon-python-plain colored" },
      { name: "Java", iconClass: "devicon-java-plain colored" },
      { name: "C", iconClass: "devicon-cplusplus-plain colored" }
    ]
  },
  {
    title: "Databases",
    iconClass: "devicon-mongodb-plain colored",
    skills: [
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
      { name: "SQL", iconClass: "devicon-microsoftsqlserver-plain colored" },
      { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" }
    ]
  },
  {
    title: "Tools & Platforms",
    iconClass: "devicon-git-plain colored",
    skills: [
      { name: "Git", iconClass: "devicon-git-plain colored" },
      { name: "GitHub", iconClass: "devicon-github-original colored" },
      { name: "VS Code", iconClass: "devicon-vscode-plain colored" },
      { name: "Firebase", iconClass: "devicon-firebase-plain colored" },
    ]
  },
  {
    title: "Programming & AI",
    iconClass: "devicon-brain-or-ai-icon colored", // placeholder class if you want a devicon for it
    skills: [
      { name: "Python", iconClass: "devicon-python-plain colored" },
      { name: "C", iconClass: "devicon-cplusplus-plain colored" },
      { name: "Java", iconClass: "devicon-java-plain colored" },
      { name: "TypeScript", iconClass: "devicon-typescript-plain colored" }
    ]
  },
  {
    title: "Other Skills",
    iconClass: "devicon-brain-or-ai-icon colored",
    // iconPath: "/icons/rocket.svg",  // example custom icon
    skills: [
      { name: "Canva", iconPath: "/canva.png" },
      { name: "Postman", iconClass: "devicon-postman-plain colored" },
      { name: "Figma", iconPath: "/figma.png" },
      { name: "OpenAI", iconPath: "/chatgpt.png" },
    ]
  }
];
