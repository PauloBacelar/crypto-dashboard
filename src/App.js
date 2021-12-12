import data from "./api";
import Header from "./components/Layout/Header/Header";
import Title from "./components/Layout/TItle/Title";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Title />
      </main>
    </>
  );
};

export default App;
