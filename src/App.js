import data from "./api";
import { useEffect, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Title from "./components/Layout/Title/Title";
import Input from "./components/UI/Input/Input";
import Loader from "./components/UI/Loader/Loader";
import CoinsGrid from "./components/Coins/CoinsGrid/CoinsGrid";
import Modal from "./components/UI/Modal/Modal";

const App = () => {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [homeData, setHomeData] = useState([]);
  const [chosenCoin, setChosenCoin] = useState(null);
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

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
  }, [currency]);

  console.log(chosenCoin);

  return (
    <>
      <header>
        <Header currency={currency} setCurrency={setCurrency} />
      </header>

      <main>
        <Title />

        <Input input={{ placeholder: "e.g.: bitcoin" }} onChange={setSearch} />

        {loading && (
          <Loader
            styles={{
              display: "flex",
              justifyContent: "center",
              marginTop: 120,
            }}
          />
        )}

        {!loading && (
          <CoinsGrid
            data={homeData}
            currency={currency}
            search={search}
            setChosenCoin={setChosenCoin}
          />
        )}
      </main>

      {chosenCoin && <Modal />}
    </>
  );
};

export default App;
