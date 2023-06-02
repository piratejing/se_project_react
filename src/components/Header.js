import "../blocks/Header.css";
import headerAvatar from "../images/avatar-wtwr.svg";
import headerLogo from "../images/wtwr-logo.svg";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={headerLogo} alt="logo" />
        </div>
        <div className="header__date">June 1st, Oregon</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button className="header__button" type="text" onClick={onCreateModal}>
            +Add New Clothes
          </button>
        </div>
        <div className="header__name">Alan Shieh</div>
        <div>
          <img src={headerAvatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
