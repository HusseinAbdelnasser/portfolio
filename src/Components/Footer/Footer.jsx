import "./footer.css";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <Link to="hero" smooth={true} duration={500} >About</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      <p>© 2023 Spencer Sharp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;