import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Common
import Header  from './components/common/Header';
import Footer  from './components/common/Footer';

// Pages
import Landing    from './components/pages/landing';
import Course     from './components/pages/course';
import ComingSoon from './components/pages/coming-soon';
import NewJob     from './components/pages/new-job';
import Contact    from './components/pages/contact';
import About      from './components/pages/about';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

const courses = {

  'blockchain-for-business': {
    caption:"Monobloc Web3 Bootcamp",
    title:"Blockchain for business",
    description:[
      "The Blockchain for Business course is designed to be accessible to participants with non-technical backgrounds. The course typically emphasizes the business applications and implications of blockchain technology. ",
      "Real-world examples to explain technical concepts in a way that is easy to understand. For example, they may compare blockchain technology to a digital ledger or a distributed database. They may also provide examples of blockchain use cases in industries such as finance, supply chain management, and healthcare.",
      "Participants will also have access to support resources, such as online tutorials and technical assistance, to help them navigate the technical aspects of the course. The course is designed to empower participants with the knowledge and skills needed to leverage blockchain technology for business purposes."
    ],
    skills:[
      'The basics of Blockchain technology and how it works.',
      'How cryptocurrencies are created, traded and stored.',
      'Potential applications for Blockchain that will impact the new economy.',
      'Challenges involved in adopting a digital currency.',
      'Understand how blockchain is applied to different aspects of business.',
    ],
    details:[
      {
        title: 'Course Duration',
        value: '20 hours',
      },
      {
        title: 'Teaching Method',
        value: 'Blended - Live Streaming',
      },
      {
        title: 'Background',
        value: 'No technical knowledge required',
      },
    ],
    weeks:[

      // Week 1
      'Basic Concepts of Blockchain',
      
      // Week 2
      <>
        Types of blockchains<br/>
        Types of algorithms<br/>
        Forks<br/>
        DLTs
      </>,

      // Week 3
      <>
        Smart Contracts<br/>
        dApps<br/>
        DAOs
      </>,

      // Week 4
      <>
        Legal and Regulatory Aspects of Blockchain<br/>
        Tokenomics<br/>
        Crypto Assets<br/>
        Use Cases
      </>,
    ]

  },
  
  'fintech-innovation': {
    caption:"Monobloc Web3 Bootcamp",
    title:"Fintech Innovation",
    description:[
      "Since its appearance, FinTech has been considered a disruptive force within the financial industry. The Fintech Innovation course includes mobile banking apps, peer-to-peer lending platforms, digital wallets, blockchain-based solutions, and artificial intelligence-powered chatbots. These innovations have disrupted the traditional financial industry by offering consumers new options that are often more convenient, affordable, and tailored to their individual needs.",
      "Fintech innovation has also led to the emergence of new players in the financial industry, such as tech startups, that are challenging the dominance of traditional financial institutions. This competition has pushed the industry to adapt and innovate, resulting in better services and products for consumers.",
    ],
    skills:[
      'An up-to-date examination of the maturing FinTech industry and an understanding of the technologies set to shape the future of finance.',
      'Insight into who is currently adopting and driving financial technology innovation and the potential for partnerships between incumbents.',
      'The ability to critically assess the future of the financial services industry, through exploring complex real-world problems and how FinTech can be used to find solutions.',
      'A strategic framework to apply, and the opportunity to share this with like-minded professionals.',
    ],
    details:[
      {
        title: 'Course Duration',
        value: '12 hours',
      },
      {
        title: 'Teaching Method',
        value: 'Blended - Live Streaming',
      },
      {
        title: 'Background',
        value: 'No technical knowledge required',
      },
    ],
    weeks:[

      // Week 1
      <>
        Introduction and Context<br/>
        Impact of technology<br/>
        FinTech vs Traditional Banking<br/>
        FinTech Features
      </>,
      
      // Week 2
      <>
        Open Banking<br/>
        Economic Impact<br/>
        FinTech vs Banks<br/>
        Big Tech and Telecos
      </>,

      // Week 3
      <>
        Overview<br/>
        Crowdfunding<br/>
        Crowdlending<br/>
      </>,

      // Week 4
      <>
        Wealthtech<br/>
        Payments<br/>
        New Business Models<br/>
      </>,
    ]

  },

  'defi': {
    caption:"Monobloc Web3 Bootcamp",
    title:"DeFi (Decentralized Finance)",
    description:[
      "This course explores the potential of Decentralized Finance (DeFi) to transform the way businesses operate. DeFi is a new financial system that operates on the blockchain, enabling financial transactions to be conducted in a decentralized, transparent, and secure way. In this course, you will learn about the basics of DeFi, its potential applications, the challenges involved in adopting it, and how to work in a multidisciplinary team to build a DeFi project.",
    ],
    skills:[
      'Understand the basics of DeFi and how it works',
      'Identify potential applications for DeFi in different industries',
      'Analyze the challenges involved in adopting DeFi',
      'Work in a multidisciplinary team to design and build a DeFi project',
      'Evaluate the impact of DeFi on the future of finance',
    ],
    details:[
      {
        title: 'Course Duration',
        value: '15 hours',
      },
      {
        title: 'Teaching Method',
        value: 'Blended - Live Streaming',
      },
      {
        title: 'Background',
        value: 'No technical knowledge required',
      },
    ],
    weeks:[
      // Week 1
      <>
        Introduction & Concepts | 
        The Disruption | 
        DeFi Ecosystem
      </>,
      
      // Week 2
      <>
        Key Concepts | 
        Collateralization | 
        Composability | 
        Liquidity | 
        Governance | 
        Arbitrage
      </>,

      // Week 3
      <>
        Principal Actors | 
        Crypto Assets | 
        Real Estate | 
        Invoicing | 
        STOs - IEO - IFO | 
        Regulations
      </>,

      // Week 4
      <>
        Accounts & Wallets | 
        Exchanges | 
        AMM | 
        Impermanent Loss | 
        DEX
      </>,

      // Week 5
      <>
        Stablecoins | 
        Lending & Borrowing | 
        Chain Scanners | 
        Flash Loans | 
        Wealthtech | 
        Asset Management | 
        Savings | 
        Lotteries | 
        Non-profit
      </>,

      // Week 6
      <>
        Derivatives | 
        Insurance | 
        Staking ETH 2.0 | 
      </>,

      // Week 7
      <>
        Practical Uses | 
        Aave | 
        Uniswap + Liquidity Pools | 
        TokenSet + UMA | 
        Syntethix | 
        Zerion/Multis | 
        Zapper - Compose - Furucombo | 
        Opyn | 
        Building a DeFi portfolio | 
        Final work
      </>,
    ]
  },

  'daos': {
    caption: "Monobloc Web3 Bootcamp",
    title: "DAOs (Decentralized Autonomous Organizations)",
    description: [
      "This course explores the potential of Decentralized Autonomous Organizations (DAOs) to transform the way businesses operate. DAOs are organizations that are governed by smart contracts on the blockchain, enabling them to function autonomously without the need for a central authority or middleman. In this course, you will learn about the basics of DAOs, their potential applications, the challenges involved in adopting them, and how to work in a multidisciplinary team to build a DAO.",
    ],
    skills: [
      "Understand the basics of DAOs and how they work",
      "Identify potential applications for DAOs in different industries",
      "Analyze the challenges involved in adopting DAOs",
      "Work in a multidisciplinary team to design and build a DAO",
      "Evaluate the impact of DAOs on the future of business",
    ],
    details: [
      {
        title: "Course Duration",
        value: "10 hours",
      },
      {
        title: "Teaching Method",
        value: "Blended - Live Streaming",
      },
      {
        title: "Background",
        value: "No technical knowledge required",
      },
    ],
    weeks: [
      // Week 1
      <>
        Basic Concepts of DAOs<br/>
        Introduction to DAOs<br/>
        How DAOs are governed by smart contracts<br/>
        The advantages of DAOs over traditional organizations
      </>,
      
      // Week 2
      <>
        Applications of DAOs in Business<br/>
        Overview of potential applications of DAOs in different industries<br/>
        Case studies of successful DAOs<br/>
        Challenges in implementing DAOs in business
      </>,

      // Week 3
      <>
        Legal and Regulatory Aspects of DAOs<br/>
        Overview of potential applications of DAOs in different industries<br/>
        Analysis of the legal implications of DAOs<br/>
        Compliance issues and challenges for DAOs
      </>,

      // Week 4
      <>
        Designing and Building a DAO<br/>
        Multidisciplinary teamwork for designing and building a DAO<br/>
        Principles of DAO design<br/>
        Technical aspects of building a DAO
      </>,
    ],
  },
  
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/course/blockchain-for-business",
    element: <Course
      {...courses['blockchain-for-business']}
    />,
  },
  {
    path: "/course/fintech-innovation",
    element: <Course
      {...courses['fintech-innovation']}
    />,
  },
  {
    path: "/course/defi",
    element: <Course
      {...courses['defi']}
    />,
  },
  {
    path: "/course/daos",
    element: <Course
      {...courses['daos']}
    />,
  },
  {
    path: "/coming-soon",
    element: <ComingSoon/>,
  },
  {
    path: "new-job",
    element: <NewJob/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "about",
    element: <About/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Header/>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  <Footer/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
