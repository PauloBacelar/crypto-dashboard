import axios from "axios";

const API_KEY = "859327c415mshc26c9950ac5fccap19b7dejsn0945ec15cc45";

const fetchData = (func) => {
  var options = {
    method: "GET",
    url: "https://alpha-vantage.p.rapidapi.com/query",
    params: {
      market: "USD",
      symbol: "BTC",
      function: func,
    },
    headers: {
      "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchData("DIGITAL_CURRENCY_DAILY");
