import "./scss/app.scss";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import data from "./helpers/data.js";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="cardContainer">
        {data.map((item) => {
          const { id, title, date, image, desc } = item;
          return (
            <Card
              key={id}
              title={title}
              image={image}
              desc={desc}
              date={date}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
