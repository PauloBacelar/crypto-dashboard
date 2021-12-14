import styles from "./CoinCard.module.css";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const CoinCard = (props) => {
  const priceIsUp = props.priceChange >= 0;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles["card-top"]}>
          <img
            src={props.imgUrl}
            alt={`${props.name} crypto logo`}
            className={styles.logo}
          />

          <h2>
            {props.name} <br /> <span>{props.symbol.toUpperCase()}</span>
          </h2>
        </div>

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
              {props.priceChange.toFixed(2)}%
            </span>{" "}
            (24h)
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
