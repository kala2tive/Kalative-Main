import Gif1 from "../assets/HomeWhy1.gif";
import Gif2 from "../assets/HomeWhy2.gif";
import Gif3 from "../assets/HomeWhy3.gif";

import Aditya from "../assets/Aditya.jpg";
import Akshat from "../assets/Akshat.jpg";
import Kashyap from "../assets/Kashyap.jpg";

const homeWhyUs = [
    {
        id : 1,
        title : 'Development of Real Values',
        description : 'We are living in a global village with abundance of information but lack of appealing ways to access it. This compels us to consume unnecessary content, ignoring the things that is necessary.',
        bgColor : '#FF866A',
        presentGif : Gif1
    },
    {
        id : 2,
        title : 'To Build Curiosity',
        description : 'There is an emphasis put on education and career building but not enough on the development of real values. There is a disconnect between different generations and we are unable to mend the gaps.',
        bgColor : '#FFC066',
        presentGif : Gif2
    },
    {
        id : 3,
        title : 'Creativity for Students',
        description : 'There is an absence of synergy amongst students for nurturing or exploring the creative world. Young minds are the most creative curious individuals but an career centric education system limits them to hone their talents.',
        bgColor : '#8DCCD6',
        presentGif : Gif3
    },
    
]

const homeObjectivies = [
    {
        id : 1,
        content : 'To re-introduce the ancient Indian ethics and values in the education system and help in establishing a students community.',
        color : '#FFB449'
    },
    {
        id : 2,
        content : 'Working on, in eradicating major teenage problems like - depression, mental health issues, addiction and social behaviour.',
        color : '#54AFBC'
    },
    {
        id : 3,
        content : 'To give some fun time to students, and also spread awareness om some of the necessary topics.',
        color : '#FE5C36'
    },
    
]

const homeTestimonials = [
  {
    id: 1,
    detail:
      "This magazine approaches you in a unique manner. It discusses and uncovers topics which are usually avoided. The characters and the mini stories in the magazine provide a sense of familiarity and have a moral value to it. In a sense, both children and adults can relate to this. As a reader, the graphics make the content even more enjoyable. I would recommend this magazine to all my acquaintances and would want them to have the same joyous experience I had while exploring it.",
    person: "Adity, 11th std student, Delhi",
  },
  {
    id: 2,
    detail:
      "Compared to the first book, every section flows well. On the FK readability it is giving me 71-72 which is even better than the first one. On the sthayi-bhava scale the result is exactly the same putting it in the Karuna-veera spectrum which is good. As far as the concepts go, they work/flow well. Authenticity is what I like most about the content.\nOverall well done. Keep this model up and I have no doubt that it will be a great success.",
    person: "Psychologist",
  }
]

const homeTeam = [
  {
    id: 1,
    image: Aditya,
    name: "Aditya Havaldar",
    role: "Founder & CEO",
    socials: [
      {
        id: 1,
        name: "logo-instagram",
        link: "https://instagram.com/thezealitkalakaar",
      },
      {
        id: 2,
        name: "logo-twitter",
        link: "https://twitter.com/adithyahavaldar",
      },
      {
        id: 3,
        name: "logo-linkedin",
        link: "https://www.linkedin.com/in/adithya-havaldar-87aa461a5",
      },
    ],
  },
  {
    id: 2,
    image: Akshat,
    name: "Akshat Anand",
    role: "Writer & Founder",
    socials: [
      {
        id: 1,
        name: "logo-instagram",
        link: "https://instagram.com/akshat_anand1001",
      },
      {
        id: 2,
        name: "logo-twitter",
        link: "https://twitter.com/akshatanand1001",
      },
      {
        id: 3,
        name: "logo-linkedin",
        link: "https://www.linkedin.com/in/akshat-anand-031010232",
      },
    ],
  },
  {
    id: 3,
    image: Kashyap,
    name: "Kaashyap B.K",
    role: "HEAD - BUSINESS",
    socials: [
      {
        id: 1,
        name: "logo-instagram",
        link: "https://instagram.com/kaashyap_15",
      },
      {
        id: 2,
        name: "logo-twitter",
        link: "https://twitter.com/bkkaashyap",
      },
      {
        id: 3,
        name: "logo-linkedin",
        link: "https://www.linkedin.com/in/kaashyap-bk-601987227",
      },
    ],
  }
];

export { homeWhyUs, homeObjectivies, homeTestimonials, homeTeam };