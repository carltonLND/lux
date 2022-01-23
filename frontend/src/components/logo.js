import logo from "../util/images/Logo.svg";

const Logo = ({ width }) => {
  return (
    <img className={`block w-${width || "20"}`} src={logo} alt="Lux Logo" />
  );
};

export default Logo;
