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

const  data = [
  {
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
    timezone : "IST"
  },
  {
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
      timezone : "IST"
    },
    {
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
      timezone : "IST"
    },
    {
      name: "cricket",
      img: cricket4,
      location: "Sky Stadium, Wellington",
      tag: "cricket",
      tagline: "cricket , world-cup  , sport",
      description: "New Zealand vs India",
      date: "Friday 18 November",
      totalpeople : "34,500",
      starttime:  "12:00" ,
      endtime : "17:00",
      timezone : "IST"
    },
    {
      name: "cricket",
      img: cricket5,
      location: "Bay Oval, Mount Maunganui",
      tag: "cricket",
      tagline: "cricket , world-cup  , sport",
      description: "New Zealand vs India",
      date: "Sunday 20 November",
      totalpeople : "10,000",
      starttime:  "12:00" ,
      endtime : "17:00",
      timezone : "IST"
    },
    {
      name: "cricket",
      img: cricket6,
      location: "McLean Park, Napier",
      tag: "cricket",
      tagline: "cricket , world-cup  , sport",
      description: "New Zealand vs India",
      date: "Tuesday 22 November",
      totalpeople : "19,700",
      starttime:  "12:00" ,
      endtime : "17:00",
      timezone : "IST"
    },
    {
      name: "comicon Delhi",
      img: comicon1,
      location: "NSIC Exhibition Ground, Okhla",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Delhi we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "9 - 11 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST"
    },
    {
      name: "comicon Bangluru",
      img: comicon2,
      location: "KTPO TRADE CENTRE, WhiteField",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Bangluru we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "19 - 21 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST"
    },
    {
      name: "comicon Mumbai",
      img: comicon3,
      location: "JIO WORLD CENTRE, Bandra-Kundra",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Mumbai we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "11 - 13 Feburary 2023",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST"
    },
    {
      name: "comicon Delhi",
      img: comicon4,
      location: "Delhi",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Delhi we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "9 - 11 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST"
    },
    {
      name: "comicon",
      img: comicon5,
      location: "Gurugram",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Delhi we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "9 - 11 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST"
    },
    {
      name: "comicon",
      img: comicon6,
      location: "Noida",
      tag: "comicon",
      tagline: "concert, comicon, expo",
      description: "Delhi we are back! And we are celebrating a decade of fun, with the 10th edition of Delhi Comic Con! We will have it all, the best of comics, movies, tv, anime, merch, gaming & more. Join us this December and lets ring in the Best Weekend Of The Year once again!",
      date: "9 - 11 December",
      totalpeople : "5000+",
      starttime:  "11.00 AM" ,
      endtime : "9.00 PM",
      timezone : "IST"
    },
    {
      name: "football",
      img: "",
      location: "",
      tag: "football",
      tagline: "sport, football, fifa world cup",
      description: "",
      date: "",
      totalpeople : "",
      starttime:  "" ,
      endtime : "",
      timezone : ""
    },
    {
      name: "football",
      img: "",
      location: "",
      tag: "football",
      tagline: "sport, football, fifa world cup",
      description: "",
      date: "",
      totalpeople : "",
      starttime:  "" ,
      endtime : "",
      timezone : ""
    },
    {
      name: "football",
      img: "",
      location: "",
      tag: "football",
      tagline: "sport, football, fifa world cup",
      description: "",
      date: "",
      totalpeople : "",
      starttime:  "" ,
      endtime : "",
      timezone : ""
    }
];


export default data;