
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          This project was coded by{" "} 
          <a href="https://github.com/ingabublii">Inga Bublii</a>{" "} and is {" "} <a href="https://github.com/ingabublii/react-weather-app">open sourced on Github</a>
        </footer>
      </div>
    </div>
  );
}


