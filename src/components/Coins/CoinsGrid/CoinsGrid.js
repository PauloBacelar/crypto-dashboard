import styles from "./CoinsGrid.module.css";
import CoinCard from "../CoinCard/CoinCard";

const CoinsGrid = (props) => {
  return (
    <div className={styles.container}>
      {props.data.map((coin) => {
        console.log(coin);
        return (
          <CoinCard
            key={Math.random().toString()}
            name={coin.name}
            imgUrl={coin.image}
            symbol={coin.symbol}
          />
        );
      })}
    </div>
  );
};

export default CoinsGrid;
