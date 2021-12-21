import styles from "./Modal.module.css";

const Overlay = (props) => {
  return (
    <div className={styles.overlay} onClick={() => props.onClose(false)}></div>
  );
};

const Card = () => {
  return <div className={styles.card}></div>;
};

const Modal = (props) => {
  console.log(props);

  return (
    <div>
      <Card>
        <h1>This is the content of the modal</h1>
      </Card>
      <Overlay onClose={props.onClose} />
    </div>
  );
};

export default Modal;
