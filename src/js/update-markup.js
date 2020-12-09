import countryTpl from "../templates/country.hbs";
import countriesTpl from "../templates/list-countries.hbs";
import refs from "./refs";
import { notice } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

//===

const updateMarkup = (countriesMarkup) => {
  if (countriesMarkup.length === 1) {
    refs.body.insertAdjacentHTML("beforeend", countryTpl(countriesMarkup));
  }

  if (countriesMarkup.length > 1 && countriesMarkup.length <= 10) {
    refs.body.insertAdjacentHTML("beforeend", countriesTpl(countriesMarkup));
  }

  if (countriesMarkup.length > 10) {
    notice({
      title: "+++ATTENTION+++",
      text: "Too many matches found. Please enter a more specific query!",
      delay: 1500,
    });
  }
};

export default updateMarkup;
