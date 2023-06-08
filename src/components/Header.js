import "../blocks/Header.css";
import logo from "../images/wtwrlogo.svg";
import avatar from "../images/avatar.svg";
import ToggleSwitch from "./ToggleSwitch";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { currentDate } from "../utils/constants";

const Header = ({ onCreateModal }) => {
  console.log("Header");
  return (
    <header className="header">
      <div className="header__logo-container">
        <NavLink exact to="/">
          <div className="header__logo">
            <img src={logo} alt="wtwr logo" />
          </div>
        </NavLink>
        <div className="header__date">{currentDate}, Oregon</div>
      </div>

      <div className="header__avatar-logo-container">
        <ToggleSwitch />
        <div className="header__button-holder">
          <button className="header__button" type="text" onClick={onCreateModal}>
            + Add clothes
          </button>
        </div>
        <NavLink to="/profile" className="header__link">
          <div className="header__name">Alan Shieh</div>
        </NavLink>
        <NavLink to="/profile">
          <div className="header__avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
