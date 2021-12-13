import data from "./api";
import { useEffect, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Title from "./components/Layout/Title/Title";
import Input from "./components/UI/Input/Input";

const App = () => {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      data
        .getHomeData(currency)
        .then((result) => {
          setHomeData(result.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
          } else if (error.request) {
            console.log(error.request);
          } else if (error.message) {
            console.log(error.message);
          }
        });
    }, 3000);
  }, [currency]);

  console.log(homeData);

  return (
    <>
      <header>
        <Header currency={currency} setCurrency={setCurrency} />
      </header>

      <main>
        <Title />

        <Input input={{ placeholder: "e.g.: bitcoin" }} onChange={setSearch} />
      </main>
    </>
  );
};

export default App;
