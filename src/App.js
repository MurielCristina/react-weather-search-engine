import "./App.css";

import WeatherSearchEngine from "./WeatherSearchEngine";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>REACT WEATHER SEARCH ENGINE</h1>
        <WeatherSearchEngine />
        <Footer />
      </div>
    </div>
  );
}
