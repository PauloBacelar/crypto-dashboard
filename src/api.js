// Imports
import axios from "axios";

// Constants
const API_KEY = "859327c415mshc26c9950ac5fccap19b7dejsn0945ec15cc45";
const BASE_URL = "https://coingecko.p.rapidapi.com";

// Fetch function
const fetchData = (endpoint, params) => {
  const options = {
    method: "GET",
    url: BASE_URL + endpoint,
    params,
    headers: {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": "cab2c8b3a3msh3d06a5d178eb54ep1ff524jsnba143026a970",
    },
  };

  axios
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

const data = {
  getHomeData: async (currency) =>
    await fetchData("/coins/markets", {
      vs_currency: currency,
      page: "1",
      per_page: "100",
      order: "market_cap_desc",
    }),

  getCoinHistory: async (coinID, from, to, currency) => {
    await fetchData(`/coins/${coinID}/market_chart/range`, {
      from,
      vs_currency: currency,
      to,
    });
  },
};
