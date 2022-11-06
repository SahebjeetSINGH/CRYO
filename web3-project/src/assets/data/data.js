const cricket1  = require('../images/cricket1.jpg');
const cricket2  = require('../images/cricket2.jpg');
const cricket3  = require('../images/cricket3.jpg');
const cricket4  = require('../images/cricket4.jpg');
const cricket5  = require('../images/cricket5.jpg');
const cricket6  = require('../images/cricket6.jpg');
const comicon1  = require('../images/comicon.jpg');
const comicon2  = require('../images/comicon2.jpg');
const comicon3  = require('../images/comicon3.jpg');
const comicon4  = require('../images/conmicon4.jpg');
const comicon5  = require('../images/conmicon5.jpg');
const comicon6  = require('../images/comicon6.jpg');
const football1  = require('../images/football1.jpg');
const football2  = require('../images/football2.jpg');
const football3  = require('../images/football3.jpg');

const  data = [
  {
    id: '1',
    name: "Zimbabwe vs India",
    img: cricket1,
    location: "Melbourne Cricket Ground, Melbourne, Australia",
    tag: "cricket",
    tagline: "cricket , world-cup  , sport",
    description: "Zimbabwe vs India",
    date: "Sunday 06 November",
    totalpeople : "1,00,000",
    starttime:  "13:30" ,
    endtime : "18:30",
    timezone : "IST",
    price : "Rs. 5000"
  },
  {
    id: '2',
      name: "South Africa vs Netherlands",
      img: cricket2,
      location: "Adelaide Oval, Adelaide",
      tag: "cricket",
      tagline: "cricket , world-cup  , sport",
      description: "South Africa vs Netherlands",
      date: "Sunday 06 November",
      totalpeople : "53,500",
      starttime:  "05:30" ,
      endtime : "10:30",
      timezone : "IST",
      price : "Rs. 6000"
    },
    {
      id: '3',
      name: "Pakistan vs Bangladesh",
      img: cricket3,
      location: "Adelaide Oval, Adelaide",
      tag: "cricket",
      tagline: "cricket , world-cup  , sport",
      description: "Pakistan vs Bangladesh",
      date: "Sunday 06 November",
      totalpeople : "53,500",
      starttime:  "09:30" ,
      endtime : "14:30",
      timezone : "IST",
      price : "Rs. 7000"
    },
    {
      id: '4',
      name: "New Zealand vs India",
      img: cricket4,
      location: "Sky Stadium, Wellington",
      tag: "cricket",
      tagline: "cricket , world-cup  , sport",
      description: "New Zealand vs India",
      date: "Friday 18 November",
      totalpeople : "34,500",
      starttime:  "12:00" ,
      endtime : "17:00",
      timezone : "IST",
      price : "Rs. 5500"
    },
    {
      id: '5',
      name: "New Zealand vs India",
      img: cricket5,
      location: "Bay Oval, Mount Maunganui",
      tag: "cricket",
      tagline: "cricket , world-cup  , sport",
      description: "New Zealand vs India",
      date: "Sunday 20 November",
      totalpeople : "10,000",
      starttime:  "12:00" ,
      endtime : "17:00",
      timezone : "IST",
      price : "Rs. 4000"
    },
    {
      id: '6',
      name: "New Zealand vs India",
      img: cricket6,
      location: "McLean Park, Napier",
      tag: "cricket",
      tagline: "cricket , world-cup  , sport",
      description: "New Zealand vs India",
      date: "Tuesday 22 November",
      totalpeople : "19,700",
      starttime:  "12:00" ,
      endtime : "17:00",
      timezone : "IST",
      price : "Rs. 6300"
    },
    {
      id: '7',
      name: "Comicon Delhi",
      img: comicon1,
      location: "NSIC Exhibition Ground, Okhla",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Delhi we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "9 - 11 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST",
      price : "Rs. 1000"
    },
    {
      id: '8',
      name: "Comicon Bangluru",
      img: comicon2,
      location: "KTPO TRADE CENTRE, WhiteField",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Bangluru we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "19 - 21 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST",
      price : "Rs. 1500"
    },
    {
      id: '9',
      name: "Comicon Mumbai",
      img: comicon3,
      location: "JIO WORLD CENTRE, Bandra-Kundra",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Mumbai we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "11 - 13 Feburary 2023",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST",
      price : "Rs. 800"
    },
    {
      id: '10',
      name: "Comicon Delhi",
      img: comicon4,
      location: "Delhi",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Delhi we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "9 - 11 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST",
      price : "Rs. 1200"
    },
    {
      id: '11',
      name: "Comicon Gurugram",
      img: comicon5,
      location: "Gurugram",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Delhi we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "9 - 11 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST",
      price : "Rs. 900"
    },
    {
      id: '12',
      name: "Comicon Noida",
      img: comicon6,
      location: "Noida",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Delhi we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "9 - 11 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST",
      price : "Rs. 1600"
    },
    {
      id: '13',
      name: "Chelsea vs Arsenal",
      img: football1,
      location: "Stamford Bridge, England",
      tag: "football",
      tagline: "sport, football, fifa world cup",
      description: "Chelsea vs Arsenal",
      date: "Sunday 06 November",
      totalpeople : "41,837",
      starttime:  "17:30" ,
      endtime : "19:30",
      timezone : "IST",
      price : "Rs. 8000"
    },
    {
      id: '14',
      name: "Rayo Vallecano vs Real Madrid",
      img: football2,
      location: "Estadio De Vallecas, Spain",
      tag: "football",
      tagline: "sport, football, fifa world cup",
      description: "Rayo Vallecano vs Real Madrid",
      date: "Tuesday 08 November",
      totalpeople : "14,505",
      starttime:  "01:30" ,
      endtime : "03:30",
      timezone : "IST",
      price : "Rs. 7500"
    },
    {
      id: '15',
      name: "Osasuna vs Barcelona",
      img: football3,
      location: "Estadio El Sadar, Spain",
      tag: "football",
      tagline: "sport, football, fifa world cup",
      description: "Osasuna vs Barcelona",
      date: "Wednesday 09 November",
      totalpeople : "23,576",
      starttime:  "02:00",
      endtime : "04:00",
      timezone : "IST",
      price : "Rs. 6000"
    }
];


export default data;
