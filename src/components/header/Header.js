import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>ABAI</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with a passion for learning and creating.</p>
        </div>
        <a href="https://docs.google.com/document/d/1QKzrBanWnml8JYkkm6lkw9g6IkoI2MrZ1JExPt0bbBc/export?format=pdf" className="btn">
          Download СV
        </a>
      </div>
    </header>
  );
};

export default Header;
