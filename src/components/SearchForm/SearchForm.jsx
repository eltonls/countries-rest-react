import React from "react";
import {FiSearch} from "react-icons/fi";
import Styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <form className={Styles["form"]}>
      <div className="search-box">
        <FiSearch className={Styles["form__icon"]} />
        <input type="text" placeholder="Search for a country..." className={Styles["form__input"]} />
      </div>
    </form>
  )
}

export default SearchForm;
