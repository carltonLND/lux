import logo from "../../util/images/LogoCirc.svg";

const LogoCirc = ({ width }) => {
  return (
    <img className={`block w-${width || "20"}`} src={logo} alt="Lux Logo" />
  );
};

export default LogoCirc;
