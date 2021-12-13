import styles from "./CoinCard.module.css";

const CoinCard = (props) => {
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
            {props.name} <br /> <span>({props.symbol.toUpperCase()})</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
