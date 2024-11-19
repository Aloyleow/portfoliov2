type Project = {
  index: string;
  name: string;
  techStack: {
    FrontEnd: string[];
    BackEnd: string[];
    DataBase: string[];
    DevOps: string[];
    APIs: string[];
  };
  image: string;
  about: string;
}[]
export const projects: Project = [
  {
    index: "A",
    name: "Web-folio v2",
    techStack:
    {
      FrontEnd: ["React", "TypeScript"],
      BackEnd: ["N/A"],
      DataBase: ["N/A"],
      DevOps: ["Git", "Vercel"],
      APIs: ["N/A"],
    },
    image: "/projects/portfolio.png",
    about: `
      Upgraded my portfolio with improved user experience and interface, 
      applied efficient React state management and CSS for styling with responsive designs. 
      Implemented form validation using Formik and Yup.
       `,
  },
  {
    index: "B",
    name: "Lets*Help (Project Eleos)",
    techStack:
    {
      FrontEnd: ["React", "JavaScript", "MUI"],
      BackEnd: ["Node.js", "SQL", "Express"],
      DataBase: ["PostgreSQL"],
      DevOps: ["Git", "Render"],
      APIs: ["RESTful APIs with JWTauth"],
    },
    image: "/projects/eleos.jpg",
    about: `
       LETSHELP is a volunteer event platform that I developed and designed to enable organizations to host events. 
       The public can sign up to attend these events while earning stars. 
       Key features include user authentication and authorization, email notifications, 
       and full CRUD functionality.
       `,

  },
  {
    index: "C",
    name: "Wally",
    techStack:
    {
      FrontEnd: ["React", "JavaScript", "MUI"],
      BackEnd: ["Node.js", "Express"],
      DataBase: ["MongoDB"],
      DevOps: ["Git", "Render"],
      APIs: ["RESTful APIs with JWTauth"],
    },
    image: "/projects/wally.jpg",
    about: `
        Collaborated with two teammates to develop a wallet web application that simulates a banking experience. 
        Users can log in, create accounts, and conduct transactions, including depositing and withdrawing money.  
        `,

  },
  {
    index: "D",
    name: "covid19-casedetails",
    techStack:
    {
      FrontEnd: ["React", "JavaScript", "Pico"],
      BackEnd: ["N/A"],
      DataBase: ["External data referencing"],
      DevOps: ["Git", "Netlify"],
      APIs: ["RESTful APIs"],
    },
    image: "/projects/covid.jpg",
    about: `
        An application to retrieve Covid-19 Cases from an external API, users
        are able to view and do simple analysis while saving data for tracking. 
        `,

  }, 
  {
    index: "E",
    name: "3Endventure-Game",
    techStack:
    {
      FrontEnd: ["JavaScript", "HTML", "CSS"],
      BackEnd: ["N/A"],
      DataBase: ["N/A"],
      DevOps: ["Git", "github.io"],
      APIs: ["N/A"],
    },
    image: "/projects/3Endventure.jpg",
    about: `
        The very first web app that I created while learning about JavaScript, 
        a choose your own adventure type of game with RNG components during combat
        `

  }
]