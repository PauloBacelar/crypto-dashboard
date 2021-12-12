import data from "./api";
import { useEffect, useState } from "react";
import Header from "./components/Layout/Header/Header";
import Title from "./components/Layout/Title/Title";
import Input from "./components/UI/Input/Input";

const App = () => {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [homeData, setHomeData] = useState([]);

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
