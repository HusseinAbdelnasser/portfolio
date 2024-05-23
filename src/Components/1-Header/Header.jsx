
import { useEffect, useState } from "react";
import "./header.css";
import { Link } from 'react-scroll';


const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme])
  return (
    <header className="  flex">
      <button onClick={() => {
        setshowModal(true)
      }} className="menu icon-menu flex">    </button>
      <div />

      <nav>
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
      </nav>

      <button className="mode flex"
        onClick={() => {
          localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
          // @ts-ignore
          setTheme(localStorage.getItem("currentMode"))
        }}
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun">  </span>
        )}

      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button className="icon-close" onClick={() => {
                setshowModal(false)
              }} />

            </li>
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
        </div>
      )}
    </header>
  );
};

export default Header;
