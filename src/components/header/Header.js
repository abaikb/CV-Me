import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        {/* <img className="photoMe" src="https://i.ibb.co/HTWrJxk/photo-output.png" alt="" /> */}
        <h1 className="header__title">
          <strong>
            Hi, my name is ABAI
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with a passion for learning and creating.</p>
        </div>
        <a href="https://docs.google.com/document/d/1u7UKDKvKVOk-Wl3fZYhVhALC5mLhH0igZU24JZ-Hl1A/export?format=pdf" className="btn">
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
