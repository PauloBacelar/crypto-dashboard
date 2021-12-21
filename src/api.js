// Imports
import axios from "axios";

// Constants
const API_KEY = "859327c415mshc26c9950ac5fccap19b7dejsn0945ec15cc45";
const BASE_URL = "https://coingecko.p.rapidapi.com";

// Fetch function
const fetchData = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: BASE_URL + endpoint,
    params,
    headers: {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
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

  getCoinHistory: (coinID, from, to, currency) =>
    fetchData(`/coins/${coinID}/market_chart/range`, {
      from: from,
      vs_currency: currency,
      to: to,
    }),
};

const bitcoinData = data
  .getCoinHistory("bitcoin", "1392577232", "1422577232", "usd")
  .then((response) => {
    console.log(response.data);
  });

// axios
//   .request({
//     method: "GET",
//     url: "https://coingecko.p.rapidapi.com/coins/bitcoin/market_chart/range",
//     params: { from: "1392577232", vs_currency: "usd", to: "1422577232" },
//     headers: {
//       "x-rapidapi-host": "coingecko.p.rapidapi.com",
//       "x-rapidapi-key": "cab2c8b3a3msh3d06a5d178eb54ep1ff524jsnba143026a970",
//     },
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

export default data;
