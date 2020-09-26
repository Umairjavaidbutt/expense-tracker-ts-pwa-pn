import React, { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";
import { TransactionType } from '../components/Types'



const initialState = {
  transactions: [{
    id: 1,
    text: 'expense',
    amount:100 
  }],
  deleteTransaction: (id:number) => {},
  addTransaction: (transaction: TransactionType) => {}
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider : React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id:number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(transaction:TransactionType) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
