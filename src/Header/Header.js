import "./Header.css";

const Header = ({ onCreateModal }) => {
  console.log("Header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/wtwrlogo.svg").default} alt="logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            Add New Clothes
          </button>
        </div>
        <div>Name</div>
        <div>
          <img src={require("../images/avatar.svg").default} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;