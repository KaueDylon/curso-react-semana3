import Navbar from "../../components/nav/Navbar";
import CardItem from "../../components/cardItem/CardItem";
import useUtilsItems from "../../hooks/useUtilsItems";
import "./MainMenu.css";

function MainMenu() {
  const items = useUtilsItems();
  return (
    <>
      <div className="main-menu">
        <Navbar />
        <div className="cards-container">
          {items.map((item) => (
            <CardItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainMenu;
