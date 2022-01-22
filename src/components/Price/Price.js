import styles from "../Price/Price.module.css";

function Price() {
  return (
    <div >
      <input className={styles.price}
        type="range"
        id="cowbell"
        name="cowbell"
        min="0"
        max="100"
        value="90"
        step="10"
      />
      <label for="cowbell">$ 640.00</label>
    </div>
  );
}

export default Price;
