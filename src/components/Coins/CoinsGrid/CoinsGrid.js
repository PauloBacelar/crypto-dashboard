import styles from "./CoinsGrid.module.css";
import CoinCard from "../CoinCard/CoinCard";
import { useMemo } from "react";

const CoinsGrid = (props) => {
  const searchedCoins = useMemo(
    () =>
      props.data.filter(
        (coin) =>
          coin.id.includes(props.search) || coin.symbol.includes(props.search)
      ),
    [props.data, props.search]
  );

  return (
    <div className={styles.container}>
      {searchedCoins.map((coin) => {
        return (
          <CoinCard
            key={Math.random().toString()}
            id={coin.id}
            name={coin.name}
            imgUrl={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            currency={props.currency}
            marketCap={coin.market_cap}
            volume={coin.total_volume}
            setChosenCoin={props.setChosenCoin}
          />
        );
      })}
    </div>
  );
};

export default CoinsGrid;
