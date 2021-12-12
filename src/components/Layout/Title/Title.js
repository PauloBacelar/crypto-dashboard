import styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Crypto Dashboard</h1>
        <p>Information about the most popular cryptocurrencies of the market</p>
      </div>
    </div>
  );
};

export default Title;
