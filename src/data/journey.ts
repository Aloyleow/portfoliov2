type Exp = {
  name: string
  src: string
  alt: string
  about: string

}


export const experience: Exp[] = [
  {
    name: "FigureLab.com (Web-Developer FreeLance)",
    src: "/journey/figureLab.png",
    alt: "figurelablogo",
    about: `
    From Nov 2024 to Dec 2024.
    Developed and designed a Web Application for FigureLab.com (The Figure Lab PLT)
    Independently managed the project lifecycle, including initial planning, wireframing, coding and develoyment.
    `
  },
  {
    name: "General Assembly BootCamp (Software Engineering)",
    src: "/journey/ga.png",
    alt: "galogo",
    about: `
    From July 2024 to Sep 2024.
    Developed and designed four major projects from the backend to the frontend. Lets*Help, Wally, Covid-19 cases, 3Endventure
    `
  },
  {
    name: "Great Eastern Life (Financial Advisor)",
    src: "/journey/ge.png",
    alt: "gelogo",
    about: `
    From Jan 2015 to July 2024.
    Provided personalized, strategic financial guidance to clients which includes retriemnt planning, wealth accumulation and financial protection.
    `
  }
  
]

type Cert = {
  name: string;
  image: string;
  type: string;
  sector: string;
  
}

export const certs: Cert[] = [
  {
    name: "GENERAL ASSEMBLY SPACE ACADEMY",
    image: "/journey/ga.png",
    type: "Certification Of Completion",
    sector: "Software Engineering Bootcamp | 420 hours",
  },
  {
    name: "GOOGLE",
    image:"/journey/google.svg",
    type: "Professional Certificate",
    sector: "Google Cybersecurity Specialization",
  },
  {
    name: "Singapore University of Social Sciences (SUSS)",
    image: "/journey/suss.png",
    type: "Bachelor of Science - BS, Finance",
    sector: "Finance",
  }
]