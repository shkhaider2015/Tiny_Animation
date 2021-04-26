// import logo from './logo.svg';
import logo from "./logo192.png";
import doctorImage1 from "./static/images/doctor1.png"
import doctorImage2 from "./static/images/doctor2.png"
import blueBC from "./static/images/blueToPurple.jpg";
import './App.css';
import { LandingComp } from './Components/LandingComp';

const data = [
  {
    text : `Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
    Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.`,
    image: doctorImage1,
    bcImage : blueBC
  },
  {
    text : `The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
    You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.`,
    image: doctorImage2,
    bcImage : blueBC
  },
  {
    text : 'SHAKEEL HAIDER 3',
    image: logo,
    bcImage: null
  },
  {
    text : 'SHAKEEL HAIDER 4',
    image: logo,
    bcImage: null
  },
]


function App() {
  return <div>
      {
        data.map(
          (obj, ind) => <LandingComp TEXT={obj.text} IMAGE={obj.image} BCIMAGE={obj.bcImage} key={ind} />
        )
      }
  </div>
}

export default App;
