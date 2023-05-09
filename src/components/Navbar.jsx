/* eslint-disable-next-line */
import navStyle from "../scss/navbar.module.scss";
import logo from "../helpers/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <a href="">Home</a>
      <a href="">More</a>
      <a href="">About</a>
    </nav>
  );
};

export default Navbar;
