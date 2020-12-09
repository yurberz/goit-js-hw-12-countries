export default {
  searchQuery: "",

  fetchCountries() {
    const url = `https://restcountries.eu/rest/v2/name/${this.query}`;
    return fetch(url).then((res) => res.json());
  },

  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
