import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card1 from "./components/Card";
import data from "./components/data2";

//TODO: https://youtu.be/bMknfKXIFA8?t=16728

export default function App() {
  // map over JS array data
  const cards = data.map((object) => {
    // return instance of Card with props from data properties
    return (
      <>
        <Card1 key={object.id} {...object} />
      </>
    );
  });

  return (
    <>
      <Navbar navTitle="Bath's Anime List" />
      <Hero headerText="Some Recommendations" />
      <div className="card-grid">{cards.slice(0, 3)}</div>
      <br></br>
      <div className="card-grid">{cards.slice(3, 6)}</div>
      <br></br>
      <div className="card-grid">{cards.slice(6, 9)}</div>
      <br></br>
    </>
  );
}
