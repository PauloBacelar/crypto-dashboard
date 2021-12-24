import reactDom from "react-dom";
import styles from "./Modal.module.css";
import { useState, useEffect, useMemo } from "react";
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
  const fullDateHistory = useMemo(
    () =>
      props.coinHistory.prices.map((date) =>
        new Date(date[0]).toLocaleDateString()
      ),
    [props.coinHistory.prices]
  );
  const fullPriceHistory = useMemo(
    () => props.coinHistory.prices.map((date) => date[1]),
    [props.coinHistory.prices]
  );

  const [time, setTime] = useState(365);
  const [dateHistory, setDateHistory] = useState(fullDateHistory);
  const [priceHistory, setPriceHistory] = useState(fullPriceHistory);

  useEffect(() => {
    setDateHistory(fullDateHistory.slice(365 - time));
    setPriceHistory(fullPriceHistory.slice(365 - time));
  }, [time, fullDateHistory, fullPriceHistory]);

  return reactDom.createPortal(
    <>
      <Card>
        <div className={styles["coin-info"]}>
          <img src={props.coinInfo.image} alt={`${props.coinInfo.name} logo`} />
          <h2>
            {props.coinInfo.name}
            <br />
            <span className={styles.symbol}>
              ({props.coinInfo.symbol.toUpperCase()})
            </span>
          </h2>
        </div>

        <select
          aria-label="Default select example"
          name="time"
          id="time"
          value={time}
          onChange={(e) => setTime(+e.target.value)}
          className={styles.select}
        >
          <option value="365">365d</option>
          <option value="180">6mo</option>
          <option value="90">3mo</option>
          <option value="30">1mo</option>
          <option value="7">7d</option>
        </select>

        <AiFillCloseCircle
          className={styles["close-icon"]}
          onClick={() => props.onClose(false)}
        />

        <Chart
          xLabels={dateHistory}
          yLabels={priceHistory}
          name={props.coinInfo.name}
        />
      </Card>

      <Overlay onClose={props.onClose} />
    </>,
    document.querySelector("#portal")
  );
};

export default Modal;
