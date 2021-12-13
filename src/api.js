// Imports
import axios from "axios";

// Constants
const API_KEY = "859327c415mshc26c9950ac5fccap19b7dejsn0945ec15cc45";
const BASE_URL = "https://coingecko.p.rapidapi.com";

// Fetch function
const fetchData = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets",
    params,
    headers: {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": "859327c415mshc26c9950ac5fccap19b7dejsn0945ec15cc45",
    },
  };

  const data = await axios.get(BASE_URL + endpoint, options);
  return data;
};

const data = {
  getHomeData: (currency) =>
    fetchData("/coins/markets", {
      vs_currency: currency,
      page: "1",
      per_page: "100",
      order: "market_cap_desc",
    }),

  getCoinHistory: (coinID, from, to, currency) => {
    fetchData(`/coins/${coinID}/market_chart/range`, {
      from,
      vs_currency: currency,
      to,
    });
  },
};

export default data;
