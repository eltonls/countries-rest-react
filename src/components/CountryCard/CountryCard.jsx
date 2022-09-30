import React from "react";
import Styles from "./CountryCard.module.css";

const CountryCard = (props) => {
  return (
    <div className={Styles["country-card"]}>
      <div className={Styles["country-card__header"]}>
        <img href={props.imgLink} />
      </div>
      <div className={Styles["country-card__body"]}>
        <h2 className="heading-secondary">{props.countryName}</h2>
        <ul className={Styles["country-card__info-list"]}>
          <li className={Styles["country-card__info-item"]}>
            Population: {props.population}
          </li>
          <li className={Styles["country-card__info-item"]}>
            Region: {props.region}
          </li>
          <li className={Styles["country-card__info-item"]}>
            Capital: {props.capital}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CountryCard;
