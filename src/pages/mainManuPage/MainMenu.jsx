import Navbar from "../../components/nav/Navbar";
import CardItem from "../../components/cardItem/CardItem";
import "./MainMenu.css";

function MainMenu() {
  return (
    <>
      <div className="main-menu">
        <Navbar />
        <div className="cards-container">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </>
  );
}

export default MainMenu;
