import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import './App.css';
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); 

  /* useEffect(() => {
    fetch("https://restcountries.com/v3.1/all") 
      .then((res) => {
        console.log(res.json());
      })
      .catch((err) => console.log(err));
  }, []) */


  const changeThemeHandler = () => {
    setIsDarkTheme((previous) => {
      return !previous;
    }); 
  } 
 
  return (
    <div className={`App ${isDarkTheme ? "dark" : "light"}`}> 
        <Header isDarktheme={isDarkTheme} themeHandler={changeThemeHandler} />  
        <SearchForm />
    </div>
  );
}

export default App;
