/* eslint-disable-next-line */
import navStyle from "../scss/navbar.module.scss";
import logo from "../helpers/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <a href={window.location.pathname}>Home</a>
      <a href={window.location.pathname}>More</a>
      <a href={window.location.pathname}>About</a>
    </nav>
  );
};

export default Navbar;
