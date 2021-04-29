// import logo from './logo.svg';
import logo from "./logo192.png";
import doctorImage1 from "./static/images/doctor1.png"
import doctorImage2 from "./static/images/doctor2.png"
import doctorImage3 from "./static/images/doctor3.png";
import doctorImage4 from "./static/images/doctor4.png";

import blueBC from "./static/images/blueToPurple.jpg";
import frame2 from "./static/images/frame2.png";
import frame3 from "./static/images/frame3.png";
import frame4 from "./static/images/frame4.png";
import './App.css';
import { LandingComp } from './Components/LandingComp';
import { useCallback } from "react";
import { useSpring } from 'react-spring'

const data = [
  {
    text : `Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
    Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.`,
    image: doctorImage2,
    bcImage : blueBC
  },
  {
    text : `The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
    You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.`,
    image: doctorImage1,
    bcImage : frame2
  },
  {
    text : `Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
    Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.`,
    image: doctorImage3,
    bcImage: frame3
  },
  {
    text : `Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
    Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.`,
    image: doctorImage4,
    bcImage: frame4
  },
]


function App() {

  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }))
  const onScroll = useCallback(e => set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }), [])

  console.log("OnScroll : ", scroll)
  return <div onScroll={onScroll} >
      {
        data.map(
          (obj, ind) => <LandingComp offset={scroll} TEXT={obj.text} IMAGE={obj.image} BCIMAGE={obj.bcImage} INDEX={ind+1} key={ind} />
        )
      }
  </div>
}

export default App;
