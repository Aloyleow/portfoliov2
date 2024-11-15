export const aboutMe: string = `
Driven by a passion for building innovative, user-focused, 
and secure solutions. 
Always motivated and eager to grow, 
i will consistently push my boundaries and acquire new knowledge.
<span style="color: #3176AF;">The only constant in dev is change and being the change is my only constant</span>.
` 

type TechSkills = {
  name: string
  icon: string
}[]

export const techSkills: TechSkills = [
  {
    name: "JavaScript",
    icon: "/aboutme/js.svg", 
  },
  {
    name: "TypeScript",
    icon: "/aboutme/ts.svg", 
  },
  {
    name: "Python",
    icon: "/aboutme/python.svg", 
  },
  {
    name: "HTML",
    icon: "/aboutme/html.svg", 
  },
  {
    name: "CSS",
    icon: "/aboutme/css.svg", 
  },
  {
    name: "PostgreSQL",
    icon: "/aboutme/pgsql.svg", 
  },
  {
    name: "MongoDB",
    icon: "/aboutme/mdb.svg", 
  },
  {
    name: "AWS S3",
    icon: "/aboutme/aws.svg", 
  },
  {
    name: "React",
    icon: "/aboutme/react.svg", 
  },
  {
    name: "Node.js",
    icon: "/aboutme/node.svg", 
  },
  {
    name: "Express.js",
    icon: "/aboutme/express.svg"
  },
  {
    name: "Postman",
    icon: "/aboutme/postman.svg", 
  },
  {
    name: "Git",
    icon: "/aboutme/git.svg", 
  }
]

export const softSkills: Record<string, string[]> = {
  finance: [
    "Financial Planning",
    "Financial Analysis",
    "Financial Accounting",
  ] ,
  projectPlanning: [
    "User Stories",
    "UI/UX",
    "MVP",
    "Wireframes",
    "Agile Methodology",
    "Customer service",
    "Goal settings",
    "Roadmaps",
  ],
  communications: [
    "Active Listener",
    "Constructive Feedback Delivery",
    "Adaptability"
  ]
}