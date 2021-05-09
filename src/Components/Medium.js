import React from 'react'
import  LandingComp  from './LandingComp';

import doctorImage1 from "../static/images/doctor1.png"
import doctorImage2 from "../static/images/doctor2.png"
import doctorImage3 from "../static/images/doctor3.png";
import doctorImage4 from "../static/images/doctor4.png";

import blueBC from "../static/images/blueToPurple.jpg";
import frame2 from "../static/images/frame2.png";
import frame3 from "../static/images/frame3.png";
import frame4 from "../static/images/frame4.png";

import useWindowsPosition from "./GetPosition";


const data = [
    {
      text : `Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
      Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.`,
      image: doctorImage2,
      bcImage : blueBC,
    },
    {
      text : `The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.
      You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.`,
      image: doctorImage1,
      bcImage : frame2,
    },
    {
      text : `Among those who develop symptoms, most (about 80%) recover from the disease without needing hospital treatment. About 15% become seriously ill and require oxygen and 5% become critically ill and need intensive care.
      Complications leading to death may include respiratory failure, acute respiratory distress syndrome (ARDS), sepsis and septic shock, thromboembolism, and/or multiorgan failure, including injury of the heart, liver or kidneys.
      In rare situations, children can develop a severe inflammatory syndrome a few weeks after infection. `,
      image: doctorImage3,
      bcImage: frame3,
    },
    {
      text : `People aged 60 years and over, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, obesity or cancer, are at higher risk of developing serious illness. 
      However, anyone can get sick with COVID-19 and become seriously ill or die at any age.`,
      image: doctorImage4,
      bcImage: frame4,
    },
  ]

export const Medium = () => {

    const kk = useWindowsPosition();

    


    return <div style={{ height : '400vh', backgroundColor : 'gray' }} >
        {
          kk >= 0
          ? <LandingComp OBJ={data[0]} INDEX={1}  />
          : null
        }
        {
          kk >= 400
          ? <LandingComp OBJ={data[1]} INDEX={2}  />
          : null
        }
        {
          kk >= 1000
          ? <LandingComp OBJ={data[2]} INDEX={3}  />
          : null
        }
        {
          kk >= 1700
          ? <LandingComp OBJ={data[3]} INDEX={4}  />
          : null
        }
      {/* <LandingComp OBJ={data[0]} INDEX={1} effect={[0, 400]} />
      <LandingComp OBJ={data[1]} INDEX={2} effect={[400, 800]} />
      <LandingComp OBJ={data[2]} INDEX={3} effect={[800, 1200]} />
      <LandingComp OBJ={data[3]} INDEX={4} effect={[1200, 1600]} /> */}
    </div>
}