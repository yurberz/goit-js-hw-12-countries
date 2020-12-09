import "./styles.css";
import apiCountries from "./js/fetchCountries";
import updateMarkup from "./js/update-markup";
import refs from "./js/refs";
import debounce from "lodash.debounce";

//===

const searchCountry = (evt) => {
  apiCountries.query = evt.target.value;
  if (apiCountries.query) {
    apiCountries.fetchCountries().then(updateMarkup);
  }
};

refs.input.addEventListener("input", debounce(searchCountry, 500));
