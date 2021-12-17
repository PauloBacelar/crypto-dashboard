import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import styles from "./CoinPrice.module.css";

const CoinPrice = (props) => {
  const priceIsUp = props.priceChange >= 0;

  return (
    <div className={styles.price}>
      <h3>
        {props.currency}{" "}
        {props.price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 4,
        })}
      </h3>

      <h4>
        {priceIsUp ? (
          <BsFillCaretUpFill color="#2cb362" />
        ) : (
          <BsFillCaretDownFill color="#bd5e74" />
        )}
        <span style={{ color: priceIsUp ? "#2cb362" : "#bd5e74" }}>
          {props.priceChange && props.priceChange.toFixed(2)}%
        </span>{" "}
        (24h)
      </h4>
    </div>
  );
};

export default CoinPrice;
