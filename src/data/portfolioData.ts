export interface EducationItem {
  institution: string;
  degree: string;
  status?: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  skillsLearned: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactInfo {
  linkedin: string;
  email: string;
  phone: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Pearlin Varsha",
    title: "Computer Science Student, Software Developer, and Problem Solver",
    intro: "I enjoy building software, learning new technologies, and solving real-world problems through technology. I'm passionate about continuous learning and exploring opportunities in software development, databases, and modern web technologies.",
    portrait: "/portrait.jpg",
  },
  about: [
    "I'm Pearlin Varsha, a Computer Science student at VIT, currently entering my second year. My interest in technology comes from a curiosity about how ideas can be transformed into products that people use every day. I enjoy learning new concepts, solving challenging problems, and continuously improving my technical skills.",
    "During my internship at Expert Hire, I gained hands-on experience with software development workflows, backend technologies, databases, testing, and collaborative development practices. The experience helped me understand how software is built in real-world environments and strengthened my interest in pursuing a career in software engineering.",
    "My technical foundation includes Python, Java, SQL, and PostgreSQL, and I have also begun exploring React and modern web development. I enjoy building projects that challenge me to learn something new and help me grow as a developer.",
    "Beyond technology, you'll usually find me reading fiction, watching movies, following sports, or exploring new ideas and perspectives. I believe that learning extends beyond the classroom, and I'm always looking for opportunities to grow, collaborate, and create meaningful solutions through technology."
  ],
  education: [
    {
      institution: "Vellore Institute of Technology (VIT)",
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      status: "Completed First Year, Entering Second Year",
      description: "Currently pursuing a degree in Computer Science, developing knowledge in programming, software development, databases, and problem-solving. Actively exploring modern technologies and building practical technical skills through projects and internships."
    },
    {
      institution: "Springdays School",
      degree: "Higher Secondary Education (Grades 11–12)",
      description: "Completed higher secondary education with a focus on academic excellence and preparation for engineering studies. Developed analytical thinking, problem-solving abilities, and a strong foundation for pursuing Computer Science."
    },
    {
      institution: "Ida Scudder School",
      degree: "Secondary Education (Up to Grade 10)",
      description: "Completed foundational schooling, building strong academic fundamentals and developing interests in technology, reading, and learning."
    }
  ] as EducationItem[],
  experience: {
    company: "Expert Hire",
    role: "Intern",
    period: "Summer Intern",
    description: "Completed an internship at Expert Hire, where I gained hands-on exposure to software development practices, backend technologies, databases, testing, and collaborative development workflows.",
    skillsLearned: [
      "Python Development",
      "REST API Development",
      "Database Design using PostgreSQL",
      "Backend Application Development",
      "Writing and Executing Test Cases",
      "API Testing using Postman",
      "Debugging and Problem Solving",
      "Understanding Software Development Life Cycles",
      "Writing Clean and Maintainable Code"
    ]
  } as ExperienceItem,
  skillsCategories: [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"]
    },
    {
      title: "Interests",
      skills: ["Software Development", "Problem Solving", "Artificial Intelligence", "Reading Fiction", "Movies", "Sports"]
    }
  ] as SkillCategory[],
  contact: {
    linkedin: "https://www.linkedin.com/in/pearlinvarsha/",
    email: "pearlin.varsha2006@gmail.com",
    phone: "8220983704"
  } as ContactInfo
};
