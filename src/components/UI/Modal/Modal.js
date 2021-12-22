import styles from "./Modal.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import Chart from "./Chart/Chart";

const Overlay = (props) => {
  return (
    <div className={styles.overlay} onClick={() => props.onClose(false)}></div>
  );
};

const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

const Modal = (props) => {
  const xLabels = props.coinHistory.prices.map((date) =>
    new Date(date[0]).toLocaleDateString()
  );
  const yLabels = props.coinHistory.prices.map((date) => date[1]);

  return (
    <div>
      <Card>
        <div className={styles["coin-info"]}>
          <img src={props.coinInfo.image} alt="" />
          <h2>
            {props.coinInfo.name}
            <br />
            <span className={styles.symbol}>
              ({props.coinInfo.symbol.toUpperCase()})
            </span>
          </h2>
        </div>

        <AiFillCloseCircle
          className={styles["close-icon"]}
          onClick={() => props.onClose(false)}
        />

        <Chart xLabels={xLabels} yLabels={yLabels} name={props.coinInfo.name} />
      </Card>

      <Overlay />
    </div>
  );
};

export default Modal;
