import styles from "./CoinCard.module.css";
import { OverlayTrigger, Popover } from "react-bootstrap";
import CoinInfo from "./CoinInfo/CoinInfo";
import CoinPrice from "./CoinPrice/CoinPrice";
import CoinStats from "./CoinStats/CoinStats";

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

        <CoinStats />
      </div>
    </div>
  );
};

export default CoinCard;
