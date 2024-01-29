import styles from "./App.module.css";
import { BasketItem } from "./components/BasketItem";
import { useState } from "react";

function App() {
  const [basketItems, setBasketItems] = useState([
    {
      id: 1,
      name: "Refrigerator",
      price: 500,
      amount: 1,
    },
    {
      id: 2,
      name: "Car",
      price: 20000,
      amount: 1,
    },
    {
      id: 3,
      name: "Potatoe",
      price: 0.5,
      amount: 4,
    },
  ]);

  function handleAmountChange(id, newAmount) {
    setBasketItems(
      basketItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            // id: item.id,
            // name: item.name,
            // price: item.price,
            // amount: item.amount,
            amount: newAmount,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h1>Shopping Basket</h1>
      <table className={styles["basket-table"]}>
        <tbody>
          {basketItems.map((item) => {
            return (
              <BasketItem
                key={item.id}
                onAmountChange={(newAmount) => {
                  handleAmountChange(item.id, newAmount);
                }}
                product={item.name}
                amount={item.amount}
                price={item.price}
              />
            );
          })}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              {basketItems.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.price * currentItem.amount;
              }, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
