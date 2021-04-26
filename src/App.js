// import logo from './logo.svg';
import logo from "./logo192.png";
import './App.css';
import { LandingComp } from './Components/LandingComp';

const data = [
  {
    text : 'SHAKEEL hAIDER',
    image: logo
  },
  {
    text : 'SHAKEEL HAIDER 2',
    image: logo
  },
  {
    text : 'SHAKEEL HAIDER 3',
    image: logo
  },
  {
    text : 'SHAKEEL HAIDER 4',
    image: logo
  },
]


function App() {
  return <div>
      {
        data.map(
          (obj, ind) => <LandingComp TEXT={obj.text} IMAGE={obj.image} key={ind} />
        )
      }
  </div>
}

export default App;
