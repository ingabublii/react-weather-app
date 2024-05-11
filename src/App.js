
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Kyiv"/>
        <footer>
          This project was coded by{" "} 
          <a href="https://github.com/ingabublii">Inga Bublii</a>{" "} and is {" "} <a href="https://github.com/ingabublii/react-weather-app">open sourced on Github</a> and hosted on <a href="https://comfy-gaufre-d3f4bc.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}


