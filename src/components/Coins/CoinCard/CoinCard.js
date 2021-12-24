import styles from "./CoinCard.module.css";
import CoinInfo from "./CoinInfo/CoinInfo";
import CoinPrice from "./CoinPrice/CoinPrice";
import CoinStats from "./CoinStats/CoinStats";
import React from "react";

const CoinCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <CoinInfo
          name={props.name}
          imgUrl={props.imgUrl}
          symbol={props.symbol}
        />

        <CoinPrice
          currency={props.currency}
          price={props.price}
          priceIsUp={props.priceChange >= 0}
          priceChange={props.priceChange}
        />

        <CoinStats
          currency={props.currency}
          marketCap={props.marketCap}
          volume={props.volume}
          setChosenCoin={props.setChosenCoin}
          id={props.id}
        />
      </div>
    </div>
  );
};

export default React.memo(CoinCard);
