import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { BsInfoCircleFill } from "react-icons/bs";
import styles from "./CoinStats.module.css";

const CoinStats = (props) => {
  const iconStyles = { marginBottom: 3.5, marginRight: 3 };

  const marketCapTooltip = (props) => {
    return (
      <Tooltip id="button-tooltip" {...props}>
        The total value of all the coins in circulation
      </Tooltip>
    );
  };

  const volumeTooltip = (props) => {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Number of coins traded in the last 24 hours
      </Tooltip>
    );
  };

  return (
    <div className={styles.stats}>
      <OverlayTrigger placement="top" overlay={marketCapTooltip}>
        <button className={styles.button}>
          <BsInfoCircleFill style={iconStyles} /> Market cap: {props.currency}{" "}
          {props.marketCap.toLocaleString()}
        </button>
      </OverlayTrigger>

      <OverlayTrigger placement="top" overlay={volumeTooltip}>
        <button className={styles.button}>
          <BsInfoCircleFill style={iconStyles} /> Volume:{" "}
          {props.volume.toLocaleString()}
        </button>
      </OverlayTrigger>

      <button
        className={styles.button}
        onClick={() => props.setChosenCoin(props.id)}
      >
        Check price history
      </button>
    </div>
  );
};

export default CoinStats;
