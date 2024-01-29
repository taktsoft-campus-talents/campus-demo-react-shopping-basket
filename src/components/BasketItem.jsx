import styles from "./BasketItem.module.css";

export function BasketItem({ product, amount, price, onAmountChange }) {
  function handleDecreaseAmount() {
    onAmountChange(amount - 1);
  }

  function handleIncreaseAmount() {
    onAmountChange(amount + 1);
  }

  return (
    <tr className={styles["basket-item"]}>
      <td>{product}</td>
      <td>
        <div className={styles["amount-selector"]}>
          <button
            onClick={handleDecreaseAmount}
            className={styles["amount-button"]}
          >
            -
          </button>
          {amount}
          <button
            onClick={handleIncreaseAmount}
            className={styles["amount-button"]}
          >
            +
          </button>
        </div>
      </td>
      <td>{price}</td>
      <td>{amount * price}</td>
    </tr>
  );
}
