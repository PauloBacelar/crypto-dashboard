import styles from "./CoinsGrid.module.css";
import CoinCard from "../CoinCard/CoinCard";

const CoinsGrid = (props) => {
  return (
    <div className={styles.container}>
      {props.data.map((coin) => {
        return <CoinCard key={Math.random().toString()} />;
      })}
    </div>
  );
};

export default CoinsGrid;
