import { createStore } from 'vuex'

export default createStore({
  state: {
    techSkills: [
      'C# .NET',
      'Java',
      'SQL',
      'JavaScript / Vue.js',
      'Object-Oriented Design',
      'Cloud (Azure)',
      'CI/CD tool sets (GIT, Azure, DevOps',
    ],
    profSkills: [
      'Effective Communication',
      'Team Player',
      'Strong Problem Solver',
      'Good Time Management',
    ],
    education: {
      cert: 'Software Development',
      date: 'April 2023',
      school: 'Tech Elevator',
      location: 'Cleveland, OH',
    },
    interests: [
      'Photography',
      'Creating w/3D Printer',
      'Building PCs',
      'Honda Grom Riding',
      'Exploring New Places',
    ],
    projects: {
      portfolio: {
        title: 'Portfolio Website',
        paragraph: [
          'Hope you\'re enjoying it thus far!'
        ],
        date: 'June 2023',
        url: 'http://github.com/DaleJMitchell/DaleJMitchell.github.io',
        img: 'ProfilePage.png'
      },
      agaveAtlas: {
        title: 'Agave Atlas',
        paragraph: [
          'Agave Atlas is a comprehensive website that helps you find the best margaritas in in your area.',
        ],
        description: [
          'Agave Atlas is your ultimate guide to finding the best margaritas in Cleveland! We understand that it can be hard to find the perfect spot to grab a margarita, especially if you\'re new to the area. That\'s why we created a website that makes it easy to find restaurants that sell margaritas and view their drink menu. Not only does Agave Atlas display the best margaritas in Cleveland, but it also allows users to filter by location, flavor, name, or reviews. So whether you\'re in the mood for a classic margarita or something more exotic, we\'ve got you covered! But that\'s not all - Agave Atlas also utilizes a weather API to help you plan your next outing. Our website tells you whether it\'s a good day to sit outside and enjoy a margarita on the patio, or whether you should opt for an indoor table instead. And if you\'re a true margarita connoisseur, you can even log in and contribute to the website. Add your favorite restaurants, upload photos of your favorite margaritas, or leave reviews for others to see. Overall, Agave Atlas is the perfect tool for anyone who loves margaritas and wants to discover new spots in Cleveland. Try it out today and never miss out on the best margaritas in town again!',
          'Discover the power of Ohioans Care as it revolutionizes the way Ohioans access and offer support for all aspects of life. Join us in creating a brighter future where no one is burdened by the complexities of navigating the support system alone.',
        ],
        date: 'April 2022',
        url: 'https://github.com/DaleJMitchell/Agave-Atlas',
        img: 'AgaveAtlas.gif'
      },
      VendoMatic800: {
        title: 'VendoMatic800',
        paragraph: [
          'The vending machine dispenses four kinds of cute stuffed animals: ducks, penguins, cats, and ponies.Each vending machine item has a name and a price.'
        ],
        description: [
          'Welcome to our Cute Stuffed Animal Vending Machine! Our vending machine offers a delightful selection of four kinds of cute stuffed animals: ducks, penguins, cats, and ponies. Each item is carefully priced and displayed for your convenience.Here\'s what you can do with our vending machine: Display Vending Machine Items: Get an overview of all the adorable stuffed animals available, including their slot identifiers, purchase prices, and remaining quantities. If an item is sold out, it will be clearly indicated. Purchase: Begin the purchasing process and embark on an exciting journey to bring home your favorite cuddly companion. Throughout the process, you will have the option to feed money, select a product, and finish the transaction. Our vending machine will guide you every step of the way. Exit: Should you decide not to make a purchase or wish to leave the vending machine, simply select this option to exit the program. Please note that our vending machine is automatically restocked each time the application runs, ensuring a fresh supply of fluffy friends. Our machine records the date, time, and details of each transaction, including the deposited amount, spent amount, new balance, and any change given. Each sales report is uniquely named to include the date and time. We strive to make your experience with our Cute Stuffed Animal Vending Machine as enjoyable and secure as possible. Feel free to explore the various options and bring home a cuddly companion that will warm your heart. If you have any questions or need assistance, please don\'t hesitate to reach out to our friendly staff. Happy shopping!',
        ],
        date: 'March 2023',
        url: 'https://github.com/DaleJMitchell/Stuffed-Animal-Vending-Machine',
        img: 'VendoMatic800.gif'
      },
      
    },
    workExp: {
      whiteMechanical: {
        name: 'White Mechanical',
        dates: 'Jan 2017 - Jan 2023',
        jobTitle: 'Commercial HVAC Repair Journeyman',
        location: 'Alliance Ohio',
        bullets: [
          'Tested, troubleshot, and repaired systems by identifying malfunctions, and replacing parts/components. Read diagrams, specifications, drawings, blueprints, and schematics',
          'Participated in numerous professional development activities to update knowledge and increase service/repair capabilities',
          'Traveled extensively throughout the assigned region to assess customer service needs; repaired/installed appropriate components', 
          'Replaced electrical motors, compressors, and HVAC systems up to [208/230, 277, 480] volts',
          'Installed auxiliary components to heating-cooling systems, including expansion valves, air ducts, pipes, blowers, dampers, and flues',
        ]
      },
      spectrum: {
        name: 'Spectrum',
        dates: 'May 2012 - Jan 2017',
        jobTitle: 'Cable Install & Repair Technician',
        location: 'Canton Ohio',
        bullets: [
          'Traveled to customer sites to inspect the equipment, discuss their concerns, independently diagnose service issues, and construct innovative solutions',
          'Able to analyze and resolve a variety of complex technical issues',
          'Excellent, effective communication skills using written and verbal skills',
          'Strong time management skills with the ability to work on multiple projects on a deadline',
          'Able to adopt to different communication styles',
          'Cable/Phone/Internet installations and disconnects; configured systems to standard, educated users about company products/equipment, and juggled scheduling demand',
        ]
      },
      bestBuy: {
        name: 'Best Buy',
        dates: 'November 2006 - May 2012',
        jobTitle: 'Front End Lead | Apple Expert',
        location: 'North Canton, OH',
      }
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
