import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import { TransactionType } from "./Types";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: TransactionType) => {
          return (
            <li key={transaction.id} className={transaction.amount < 0 ? "minus" : "plus"}>
              {transaction.text}{" "}
              <span>
                {transaction.amount < 0 ? "-" : "+"}$
                {Math.abs(transaction.amount)}
              </span>
              <button
                onClick={() => deleteTransaction(transaction.id)}
                className="delete-btn"
              >
                            x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
