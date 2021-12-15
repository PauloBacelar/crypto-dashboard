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
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            currency={props.currency}
            marketCap={coin.market_cap}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
};

export default CoinsGrid;
