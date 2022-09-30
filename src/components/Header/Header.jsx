import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Styles from "./Header.module.css";

const Header = (props) => { 
  const [icon, setIcon] = useState(true);

  const themeChangeButtonHandler = () => {
    props.themeHandler();
    setIcon(!icon);
  }

  return (
    <header className={Styles["header"]}>
      <h5 className="heading-quintenary">Where in the world?</h5>
      <button className="btn" onClick={themeChangeButtonHandler}>
        { icon ? "Dark Mode" : "Light Mode"}
        { icon ?  <FiMoon />  : <FiSun />} 
      </button>
    </header>
  )  
}

Header.propTypes = {
  isDarkTheme: PropTypes.bool,
  themeHandler: PropTypes.func
}

export default Header;
