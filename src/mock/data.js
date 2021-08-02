import React from "react";
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "Hau Nguyen's page", 
  lang: 'en, vn', 
  description: 'Welcome to my website', 
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Hậu',
  subtitle: "I'm a Fresher Front-end Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hey! My full name is Nguyễn Thanh Hậu, I was born and grown up in Tây Ninh province and now I've worked at HCMC.",
  paragraphTwo: "I made a career change because I love how technology changes the world such as we can do many things while we're staying at home, how we transfer money, book a car, or streaming media through applications...etc. Technology makes our lives easier!",
  paragraphThree: "Besides technology, I like running as well. This is the best way to reach and break your limitation. It's so great when you set a goal, keep training day by day, overcome the pain and finally achieve your goal. I recommend everyone should do exercise often, do any kind of exercise you want, not only running, you will love it!!!",
  paragraphFour: "For more detail, please find my resume by clicking the button below.",
  resume: 'https://drive.google.com/file/d/1Qb8zh6kCScLpGXExDgAaduSpqu2-oCpg/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
const projectOneMainFeatures = <> A food order app built by Reactjs. <br /> 
                                  Main features:
                                <ul>
                                  <li>Choose and order food on an available menu.</li>
                                  <li>GET and POST data to a realtime database.</li>
                                  <li>Search the Order any time by entering Order Code</li>
                                </ul>
                                </>;
const porjectTwoMainFeatures = <>An application follows Google Keep concept but is much more simpler.<br/>
                                  Main features:
                                <ul>
                                  <li>Add/Remove notes.</li>
                                  <li>Automatic expansion.</li>
                                  <li>Form validation.</li>
                                </ul>
                                </>;
const porjectThreeInfo = <>A pretty landing page was built with Bootstrap 5. <br/>This is a Challenge by Frontend Mentor.</>;
const porjectFourInfo = <>A game help to train your memory. <br/> 
                          Players attempt to match Simon by choosing the pads in the proper sequence.</>;


export const projectsData = [
  {
    id: nanoid(),
    img: 'React restaurant.jpeg',
    title: 'React restaurant',
    info: projectOneMainFeatures,
    info2: '#functional-based-components, #react-context, #realtime-database, #responsive-design',
    url: 'https://react-restaurant-3dd93.firebaseapp.com/',
    repo: 'https://github.com/haunguyen1064/React-restaurant', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Keeper app.png',
    title: 'A simple to-do app',
    info: porjectTwoMainFeatures,
    info2: '#functional-based-components, #react-hook, #non-backend',
    url: 'https://keeper-app-ba55f.firebaseapp.com/',
    repo: 'https://github.com/haunguyen1064/Keeper-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Huddle.jpg',
    title: 'Huddle landing page',
    info: porjectThreeInfo,
    info2: '#HTML, #CSS, #Bootstrap-5, #responsive-design',
    url: 'https://haunguyen1064.github.io/huddle-landing-page-with-curved-sections-master/',
    repo: 'https://github.com/haunguyen1064/huddle-landing-page-with-curved-sections-master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Simon game.jpeg',
    title: 'Simon game',
    info: porjectFourInfo,
    info2: '#HTML, #CSS, #Javascript, #Jquery',
    url: 'https://haunguyen1064.github.io/Simon-game/',
    repo: 'https://github.com/haunguyen1064/Simon-game/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Projects.jpeg',
    title: 'Other projects',
    info: 'Here are other projects that I have done.',
    info2: '#HTML, #CSS, #Javascript, #responsive-design',
    url: 'https://haunguyen1064.github.io/Projects/',
    repo: 'https://github.com/haunguyen1064/Projects', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to connect with me? Awesome!',
  btn: 'My email',
  email: 'haunguyen1064@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thanh-h%E1%BA%ADu-nguy%E1%BB%85n-b3394911b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/haunguyen1064',
    },
    {
      id: nanoid(),
      name: 'codesandbox',
      url: 'https://codesandbox.io/u/haunguyen1064',
    },
  ],
};


// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
