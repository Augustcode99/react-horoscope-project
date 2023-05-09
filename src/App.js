import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import data from "./helpers/data";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Card />
    </div>
  );
}

export default App;
