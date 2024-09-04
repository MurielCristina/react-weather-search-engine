import "./App.css";

import WeatherSearchEngine from "./WeatherSearchEngine";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <WeatherSearchEngine defaultCity="Castellón de la Plana" />
        <Footer />
      </div>
    </div>
  );
}
