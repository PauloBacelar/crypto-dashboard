import styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={styles.text}>
      <h1>Crypto Dashboard</h1>
      <h2>Information about the most popular cryptocurrencies of the market</h2>
    </div>
  );
};

export default Title;
