import "./style.css";
// import photoMe from "../../img/abai.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        {/* <img className="photoMe" src={photoMe} alt="" /> */}
        <h1 className="header__title">
          <strong>
            Hi, my name is ABAI
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with a passion for learning and creating.</p>
        </div>
        <a href="https://docs.google.com/document/d/1QKzrBanWnml8JYkkm6lkw9g6IkoI2MrZ1JExPt0bbBc/export?format=pdf" className="btn">
          Download СV
        </a>
        <a href="https://docs.google.com/document/d/1wnORs0jfv_l-XUNGz0anEbr1_20X4TCOxGKa1KUmDjk/export?format=pdf" className="btn">
          Скачать СV
        </a>
      </div>
    </header>
  );
};

export default Header;
