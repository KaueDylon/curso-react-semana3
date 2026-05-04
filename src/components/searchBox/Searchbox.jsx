import { Search } from "lucide-react";
import "./Searchbox.css";

function Searchbox() {
  return (
    <>
      <div>
        <div className="box">
          <div className="icon-search">
            <Search />
          </div>
          <input className="search" type="text" />
        </div>
      </div>
    </>
  );
}

export default Searchbox;
