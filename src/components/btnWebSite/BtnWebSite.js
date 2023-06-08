import webSite from "./globe-svgrepo-com.svg";

const BtnWebSite = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={webSite} alt="" />
      Web Site
    </a>
  );
};

export default BtnWebSite;
