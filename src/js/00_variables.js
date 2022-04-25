const listResult = document.querySelector(".js-list-result");
const listFavourites = document.querySelector(".js-list-favourites");
const searchBtn = document.querySelector(".js-search-btn");
const resetFavouritesBtn = document.querySelector(".js-resetFavourites-btn");
const favouritesPlaceholder = document.querySelector(
  ".js-placeholder-favourites-text"
);
const resultsPlaceholder = document.querySelector(
  ".js-placeholder-results-text"
);
const logBtn = document.querySelector(".js-log-btn");
let firstRender = true;

let resultSearch;
let favouriteAnimes = JSON.parse(localStorage.getItem("favourites")) || [];
