import styles from "./CoinInfo.module.css";

const CoinInfo = (props) => {
  return (
    <div className={styles["coin-info"]}>
      <img
        src={props.imgUrl}
        alt={`${props.name} crypto logo`}
        className={styles.logo}
      />
      <h2>
        {props.name} <br /> <span>{props.symbol.toUpperCase()}</span>
      </h2>
    </div>
  );
};

export default CoinInfo;
