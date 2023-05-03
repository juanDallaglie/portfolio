/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Juan Jose Dallaglie",
  title: "Portfolio de Juan Jose Dallaglie",
  subTitle: emoji(
    "Soy un médico especialista en cirugía general y oncología, con amplia experiencia en clínica quirúrgica, gastroenterología y trasplante de riñón y páncreas. Mi trayectoria profesional ha sido reconocida a través de diversas certificaciones y reconocimientos de colegios de médicos y asociaciones de cirugía. Me gradué en la Facultad de Ciencias Médicas de la Universidad de Buenos Aires en 1978 y he ejercido la medicina durante más de tres décadas. Además de mi especialización en cirugía, he profundizado mis conocimientos en políticas sanitarias y administración hospitalaria. Me apasiona la investigación y la enseñanza en el ámbito médico y he impartido numerosas conferencias y cursos de formación. Considero que la medicina es una vocación de servicio a los demás y estoy comprometido en brindar una atención de calidad y calidez a mis pacientes."
  ),
  // resumeLink: "https://google.com", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  // gmail: "JuanDallaglie@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// habilidades Section
const habilidadesSection = {
  title: "Lo que hago",
  subTitle: "MÉDICO CON EXPERIENCIA EN CUIDADOS INTENSIVOS Y CARDIOLOGÍA",
  Habilidades: [
    emoji(
      "⚡ Trato pacientes en entornos de cuidados intensivos y en consultorios"
    ),
    emoji(
      "⚡ Realizo procedimientos médicos, como inserción de catéteres y ventilación mecánica"
    ),
    emoji(
      "⚡ Evalúo y diagnostico pacientes con enfermedades cardíacas y administro tratamiento"
    ),
    emoji(
      "⚡ Colaboro con otros profesionales médicos para proporcionar atención integral al paciente"
    )
  ],

  softwarehabilidades: [
    {
      skillName: "Instrumentación Quirúrgica",
      fontAwesomeClassname: "fas fa-cut"
    },
    {
      skillName: "Manejo de Anestesia",
      fontAwesomeClassname: "fas fa-heartbeat"
    },
    {
      skillName: "Enseñanza",
      fontAwesomeClassname: "fas fa-chalkboard-teacher"
    },
    {
      skillName: "Historias Clínicas",
      fontAwesomeClassname: "fas fa-file-medical"
    },
    {
      skillName: "Sistemas de Gestión Hospitalaria",
      fontAwesomeClassname: "fas fa-hospital"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Educacion Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Facultad de Ciencias Médicas de la Universidad de Buenos Aires",
      // logo: require("./assets/images/ubalogo.png"),
      subHeader: "Doctor of Medicine",
      duration: "March 1972 - August 1978",
      desc: "",
      descBullets: [
        "Issued by the Faculty of Medical Sciences of the University of Buenos Aires"
      ]
    },
    {
      schoolName: "Academia Argentina de Cirugía",
      // logo: require("./assets/images/aacLogo.png"),
      subHeader: "Specialist in General Surgery",
      duration: "1984",
      desc: "",
      descBullets: [
        "Recognized by the Academia Argentina de Cirugía, Ministerio de Salud pública de la Nación"
      ]
    },
    {
      schoolName:
        "Colegio de Médicos de la Provincia de Buenos Aires, Distrito IV",
      // logo: require("./assets/images/cmdpbaLogo.png"),
      subHeader: "Specialist in Clinical Surgery",
      duration: "September 1984",
      desc: "",
      descBullets: [
        "Issued by the Colegio de Médicos de la Provincia de Buenos Aires, Distrito IV"
      ]
    },
    {
      schoolName: "Colegio de Médicos Distrito IV",
      // logo: require("./assets/images/cmdivLogo.png"),
      subHeader: "Specialist in Hierarchical Clinical Surgery",
      duration: "December 1990",
      desc: "",
      descBullets: ["Issued by the Colegio de Médicos Distrito IV"]
    },
    {
      schoolName: "Colegio de Médicos, Distrito IV",
      // logo: require("./assets/images/cmdpbaLogo.png"),
      subHeader: "Specialist in Gastroenterological Surgery",
      duration: "February 1990",
      desc: "",
      descBullets: ["Issued by the Colegio de Médicos, Distrito IV"]
    },
    {
      schoolName: "INCUCAI",
      // logo: require("./assets/images/incucaiLogo.png"),
      subHeader: "Authorized Kidney and Pancreas Transplant Surgeon",
      duration: "1989",
      desc: "",
      descBullets: ["Issued by INCUCAI"]
    },
    {
      schoolName: "Universidad de Buenos Aires",
      // logo: require("./assets/images/ubalogo.png"),
      subHeader: "Specialist in Oncological Surgery",
      duration: "1984",
      desc: "",
      descBullets: ["Issued by the Universidad de Buenos Aires"]
    },
    {
      schoolName: "Asociación Argentina de Cirugía",
      // logo: require("./assets/images/aacLogo.png"),
      subHeader: "Recertification of Specialist in General Surgery",
      duration: "October 1993",
      desc: "",
      descBullets: ["Issued by the Asociación Argentina de Cirugía"]
    },
    {
      schoolName:
        "Consejo de Profesionales Médicos - Academia Nacional de Medicina",
      // logo: require("./assets/images/anmLogo.png"),
      subHeader: "Recertification of Medical Surgeon",
      duration: "August 1993",
      desc: ""
    },
    {
      schoolName:
        "Facultad de Ciencias Médicas de la Universidad de Buenos Aires",
      // logo: require("./assets/images/ubalogo.png"),
      subHeader: "Doctor of Medicine",
      duration: "March 1972 - August 1978",
      desc: "",
      descBullets: [
        "Issued by the Faculty of Medical Sciences of the University of Buenos Aires"
      ]
    },
    {
      schoolName: "Academia Argentina de Cirugía",
      // logo: require("./assets/images/aacLogo.png"),
      subHeader: "Specialist in General Surgery",
      duration: "1984",
      desc: "",
      descBullets: [
        "Recognized by the Academia Argentina de Cirugía, Ministerio de Salud pública de la Nación"
      ]
    },
    {
      schoolName:
        "Colegio de Médicos de la Provincia de Buenos Aires, Distrito IV",
      // logo: require("./assets/images/cmdpbaLogo.png"),
      subHeader: "Specialist in Clinical Surgery",
      duration: "September 1984",
      desc: "",
      descBullets: [
        "Issued by the Colegio de Médicos de la Provincia de Buenos Aires, Distrito IV"
      ]
    },
    {
      schoolName: "Colegio de Médicos Distrito IV",
      // logo: require("./assets/images/cmdivLogo.png"),
      subHeader: "Specialist in Hierarchical Clinical Surgery",
      duration: "December 1990",
      desc: "",
      descBullets: ["Issued by the Colegio de Médicos Distrito IV"]
    },
    {
      schoolName: "Colegio de Médicos, Distrito IV",
      // logo: require("./assets/images/cmdpbaLogo.png"),
      subHeader: "Specialist in Gastroenterological Surgery",
      duration: "February 1990",
      desc: "",
      descBullets: ["Issued by the Colegio de Médicos, Distrito IV"]
    },
    {
      schoolName: "INCUCAI",
      // logo: require("./assets/images/incucaiLogo.png"),
      subHeader: "Authorized Kidney and Pancreas Transplant Surgeon",
      duration: "1989",
      desc: "",
      descBullets: ["Issued by INCUCAI"]
    },
    {
      schoolName: "Universidad de Buenos Aires",
      // logo: require("./assets/images/ubalogo.png"),
      subHeader: "Specialist in Oncological Surgery",
      duration: "1984",
      desc: "",
      descBullets: ["Issued by the Universidad de Buenos Aires"]
    },
    {
      schoolName: "Asociación Argentina de Cirugía",
      // logo: require("./assets/images/aacLogo.png"),
      subHeader: "Recertification of Specialist in General Surgery",
      duration: "October 1993",
      desc: "",
      descBullets: ["Issued by the Asociación Argentina de Cirugía"]
    },
    {
      schoolName:
        "Consejo de Profesionales Médicos - Academia Nacional de Medicina",
      // logo: require("./assets/images/anmLogo.png"),
      subHeader: "Recertification of Medical Surgeon",
      duration: "August 1993",
      desc: "",
      descBullets: ["Issued by the Asociación Argentina de Cirugía"]
    }
  ]
};
// Your top 3 proficient stacks/tech experiencia

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experiencia: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experiencia in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experiencia section
const workexperiencias = {
  display: true, //Set it to true to show workexperiencias Section
  experiencia: [
    {
      role: "Médico Residente",
      company: "Hospital Universitario",
      // companylogo: require("./assets/images/hospitalLogo.png"),
      date: "Julio 2021 – Presente",
      desc: "Atiendo pacientes en diferentes áreas del hospital, incluyendo urgencias, hospitalización y consultas externas. Trabajo en equipo con otros médicos y personal de enfermería para ofrecer un cuidado integral a los pacientes.",
      descBullets: [
        "Realizo procedimientos médicos como intubación endotraqueal, colocación de catéteres venosos centrales y arteriales, y drenajes torácicos.",
        "Colaboro en la docencia de estudiantes de medicina y en la formación de nuevos residentes.",
        "Participo en la realización de protocolos y guías clínicas para el manejo de enfermedades y situaciones de emergencia."
      ]
    },
    {
      role: "Médico General",
      company: "Centro de Salud Familiar",
      // companylogo: require("./assets/images/centrosaludLogo.png"),
      date: "Enero 2019 – Julio 2021",
      desc: "Atendía pacientes en consulta externa, realizaba procedimientos médicos como extracciones dentales, suturas y curaciones, y remitía a pacientes a especialistas en caso necesario.",
      descBullets: [
        "Participé en campañas de salud para la prevención y detección temprana de enfermedades como diabetes, hipertensión y cáncer.",
        "Realicé charlas educativas para la comunidad sobre hábitos saludables y medidas de prevención de enfermedades.",
        "Colaboré en la elaboración de informes estadísticos y de seguimiento de los pacientes atendidos."
      ]
    },
    {
      role: "Médico Interno",
      company: "Hospital Regional",
      // companylogo: require("./assets/images/hospitalLogo.png"),
      date: "Enero 2018 – Diciembre 2018",
      desc: "Roté por diferentes especialidades médicas, como cirugía, pediatría y medicina interna, para adquirir experiencia clínica en diferentes áreas. Realicé procedimientos médicos bajo supervisión de médicos especialistas.",
      descBullets: [
        "Participé en sesiones clínicas y presentaciones de casos para discutir diagnósticos y tratamientos con otros médicos y estudiantes de medicina.",
        "Apoyé en la realización de procedimientos quirúrgicos como asistente de cirugía.",
        "Realicé guardias médicas en el servicio de urgencias para atender pacientes en situaciones de emergencia."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Premios 🏆 "),
  subtitle:
    "PREMIOS, CERTIFICACIONES, CARTAS DE RECONOCIMIENTO Y ALGUNAS COSAS GENIALES QUE HE HECHO!",

  achievementsCards: [
    {
      title: "Premio XV Congreso Argentino de Gastroenterología",
      subtitle:
        "Recibí el premio por el trabajo 'Profilaxis de las lesiones agudas gastroduodenales en pacientes críticos' (Buenos Aires, octubre de 1981)",
      // image: require("./assets/images/gastroenterologyAward.webp"),
      imageAlt: "Premio XV Congreso Argentino de Gastroenterología",
      footerLink: []
    },
    {
      title:
        "Premio AADI 1984 al Mejor Trabajo Científico en el V Congreso Argentino de Instrumentadoras",
      subtitle:
        "Recibí el premio por el tema 'Cirugía experimental y clínica en animales' (noviembre de 1984)",
      // image: require("./assets/images/aadiAward.webp"),
      imageAlt:
        "Premio AADI 1984 al Mejor Trabajo Científico en el V Congreso Argentino de Instrumentadoras",
      footerLink: []
    },
    {
      title:
        "Mención de Honor en las V Jornadas Científicas de la Asociación de Médicos de Gral. San Martín y Tres de Febrero",
      subtitle:
        "Recibí la mención de honor por el trabajo 'Preservación de la función esplénica por autotrasplante periférico. Investigación experimental y su aplicación clínica' (septiembre de 1984)",
      // image: require("./assets/images/mentionOfHonorAward.webp"),
      imageAlt:
        "Mención de Honor en las V Jornadas Científicas de la Asociación de Médicos de Gral. San Martín y Tres de Febrero",
      footerLink: []
    },
    {
      title:
        "Reconocimiento especial en las XV Jornadas de la provincia de Buenos Aires en Mar del Plata",
      subtitle:
        "Recibí el reconocimiento especial por el trabajo 'Colectomía total con conservación esfinteriana. Estudio experimental' en colaboración con el Dr. Carlos Daniel Alberti, el Dr. Juan José Dallaglio, el Dr. Eduardo Delgado, el Dr. Eugenio Obiols, el Dr. Raúl Mombello, el Dr. Luis Castelletti y el Dr. Enrique Travisano (agosto de 1986)",
      // image: require("./assets/images/specialRecognitionAward.webp"),
      imageAlt:
        "Reconocimiento especial en las XV Jornadas de la provincia de Buenos Aires en Mar del Plata",
      footerLink: []
    },
    {
      title: "Premio Cirugía del Oeste",
      subtitle:
        "Recibí el Premio Cirugía del Oeste en las X Jornadas de la Sociedad de Cirugía del Oeste por mi trabajo en colaboración con el Dr. Carlos Daniel Alberti, el Dr. Juan José Dallaglio, la Inst. María Teresa Castro, la Inst. Elizabeth Susana Bonanata y el Dr. Eduardo Delgado, sobre 'La cirugía experimental como protocolo de la enseñanza de la instrumentación quirúrgica'.",
      // image: require("./assets/images/cirugiaOeste.webp"),
      imageAlt: "Premio Cirugía del Oeste",
      footerLink: []
    },
    {
      title:
        "Premio Mejor Trabajo en las Primeras Jornadas de Oncología Clínica",
      subtitle:
        "Recibí el Premio Mejor Trabajo en las Primeras Jornadas de Oncología Clínica del Colegio de Médicos de Surdos e Distrito IV en el Hospital Dr. Diego E. Thompson por mi trabajo en colaboración con el Dr. Carlos Daniel Alberti, el Dr. Juan José Dallaglio, el Dr. Raúl Mombello, el Dr. Eduardo Delgado, el Dr. Eugenio Obiols y el Dr. Alfredo Montes sobre 'Injerto de traquea autólogo, heterólogo y protésico. Una propuesta experimental en cirugía de tumores de traquea y bronquios'.",
      // image: require("./assets/images/oncologia.webp"),
      imageAlt:
        "Premio Mejor Trabajo en las Primeras Jornadas de Oncología Clínica",
      footerLink: []
    },
    {
      title: "Premio Juan Belaustegui del Forum de Investigación",
      subtitle:
        "Recibí el Premio Juan Belaustegui del Forum de Investigación en el 57 Congreso Argentino de Cirugía por el trabajo 'Autotrasplante esplénico central y periférico. Estudio experimental' en colaboración con otros profesionales de la salud.",
      // image: require("./assets/images/premio-juan-belaustegui.jpg"),
      imageAlt: "Premio Juan Belaustegui del Forum de Investigación",
      footerLink: []
    },
    {
      title: "Premio Juan Belaustegui del Forum de Investigación",
      subtitle:
        "Recibí el Premio Juan Belaustegui del Forum de Investigación en el 57 Congreso Argentino de Cirugía por el trabajo 'Autotrasplante esplénico central y periférico. Estudio experimental' en colaboración con otros profesionales de la salud.",
      // image: require("./assets/images/premio-juan-belaustegui.jpg"),
      imageAlt: "Premio Juan Belaustegui del Forum de Investigación",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactame ☎️"),
  subtitle: "contactame",
  number: "+92-0000000000",
  email_address: "JuanDallaglie@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  habilidadesSection,
  educationInfo,
  techStack,
  workexperiencias,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
