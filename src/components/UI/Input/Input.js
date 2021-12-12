import { BsSearch } from "react-icons/bs";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles["input-container"]}>
      <label htmlFor="" className={styles.label}>
        {props.label && props.label}
        {!props.label && <BsSearch />}
      </label>

      <input
        {...props.input}
        className={styles.input}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
