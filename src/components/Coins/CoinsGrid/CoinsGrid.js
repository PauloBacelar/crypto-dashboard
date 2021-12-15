import styles from "./CoinsGrid.module.css";
import CoinCard from "../CoinCard/CoinCard";

const CoinsGrid = (props) => {
  const searchedCoins = props.data.filter((coin) =>
    coin.id.includes(props.search)
  );

  return (
    <div className={styles.container}>
      {searchedCoins.map((coin) => {
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
