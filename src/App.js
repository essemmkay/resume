import React, {useState} from 'react';
import './App.css';
import ReactJson from 'react-json-view'
import Typing from 'react-typing-animation';

function App() {
  const [displayHello, setDisplayHello] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  let resume = {
    name: "Syed Murtaz Haider",
    age: "28 yrs",
    streetAddress: "House # E-829, Street 36, Sector 2, Khayaban e Sir Syed",
    city: "Rawalpindi",
    country: "Pakistan",
    contactNumber: "0323-5232371",
    skype: "murtazkazmi",
    aboutMe: "Talented Software developer with 5 years of application development experience in a broad range of fields, including desktop, mobile and web development. Solid understanding of full mobile and software development lifecycles, UI/UX, web analytics, changing web standards, and Agile methodologies. Dedicated to continuously developing, implementing, and adopting new technologies to maximize development efficiency and produce innovative applications.",
    skills: {
      technologies: ["Hyperledger Fabric","DevOps","React Native","MEAN/MERN Stack","Node JS","SailsJS","Microsoft Azure Services","Heroku","Amazon Web Services (AWS)","Android Native","Ionic"],
      databases: ["SQL SERVER","MySql","MongoDB","couchDb"]
    },
    workHistory: [
      {
        companyName: "Reactive Space - Islamabad",
        startDate: new Date("11/4/2019"),
        isPresentJob: true,
        designation: "Full Stack Developer / Team Lead",
        type: "Full Time",
        projects: [
          {
            name: "Tyslin",
            description: "Crypto Wallet with cold and hot wallets for Tyslin coin and other familiar cryptocurrencies."
          },
          {
            name: 'GreenSecure',
            description: "Blockchain based solution for waste management and recycling."
          }
        ],
        duties: ["Full Stack Development on MEAN and MERN stacks, AWS deployment with EC2 and ECS, CI/CD using bitbucket pipelines"]
      },
      {
        companyName: "Induent - Islamabad",
        startDate: new Date("6/1/2018"),
        isPresentJob: true,
        designation: "Senior Software Architect / Full Stack Developer",
        type: "Consultancy",
        projects: [
          {
            name: "SMIS - Treehouse",
            description: "School Management System for an International School in Islamabad. App is available on playstore and app store"
          },
          {
            name: "Al - Quran مصحف الأمير منصور بن مقرن ",
            description: "React Native Religious App. App is available on playstore and app store"
          },
          {
            name: "WorkCycler",
            description: "React Native services on demand. App is available on playstore and app store"
          },
          {
            name: "SellNew",
            description: "React native classified ads app."
          },{
            name: "iTorah",
            description: "Ionic Religious App. App is available on playstore and app store"
          }
        ]
      },
      {
        companyName: "Locopixel - Islamabad",
        startDate: new Date("2/26/2018"),
        designation: "MEAN Stack Developer",
        type: "Full Time",
        endDate: new Date("5/31/2018"),
        projects: [{
          name: "LocoShops",
          description: "E-Commerce as a Service, MEAN Stack"
        }]
      },
      {
        companyName: "IRM-PRP - Islamabad",
        startDate: new Date("9/1/2016"),
        designation: "Full Stack Developer",
        type: "Full Time",
        endDate: new Date("2/23/2018")
      },
      {
        companyName: "SOFIT - Islamabad",
        startDate: new Date("9/1/2014"),
        designation: "Full Stack Developer",
        type: "Full Time",
        endDate: new Date("8/31/2016"),
        projects: [{
          name: "KEZA",
          description: "Food Ordering, Restaurant Reservation, Food Delivery app"
        },{
          name: "RSHandler",
          description: "HRMIS for a HR service provider for Mobilink, Warid, Ericsson"
        }]
      }
    ],
    education: [
      {
        institute: "COMSATS Islamabad",
        tenure: "2011 - 2015",
        degree: "Bachelors in Computer Science"
      },
      {
        institute: "Fauji Foundation College, New Lalazar, Rawalpindi",
        tenure: "2008 - 2010",
        degree: "Intermediate - Computer Science"
      },
      {
        institute: "Army Public School, Westridge, Rawalpindi",
        endingYear: "2008",
        degree: "Matriculation - Computer Science"
      }
    ]
  }
  return (
    <div className="resume">
      <div className="row">
        <span>essemmkayy@Macbook-Air ~ % &nbsp;&nbsp;</span>
        <Typing speed={10} onFinishedTyping={() => setDisplayHello(true)}><span>node hello-world.js</span></Typing>
      </div>
      {displayHello ? (<div className="row">
        <span>Hello World!</span>
      </div>) : null}
      {displayHello ? (<div className="row">
        <span>essemmkayy@Macbook-Air ~ % &nbsp;&nbsp;</span>
        <Typing speed={10} onFinishedTyping={() => setShowProfile(true)}><span>node essemmkayy.js</span></Typing>
      </div>) : null}
      {showProfile ? (<div className="row">
        <ReactJson src={resume} theme="brewer" displayDataTypes={false} enableClipboard={false} style={{backgroundColor: "#000000"}}
          name={null} displayObjectSize={false}/>
      </div>) : null}
    </div>
  );
}

export default App;
