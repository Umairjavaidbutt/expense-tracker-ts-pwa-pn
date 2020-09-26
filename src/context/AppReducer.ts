import { TransactionType, TransactionsArray } from "../components/Types";

type Action = {type: 'ADD_TRANSACTION', payload: TransactionType} | {type: 'DELETE_TRANSACTION', payload: number}

export default (state : TransactionsArray, action: Action) => {
    switch (action.type) {
      case "DELETE_TRANSACTION":
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload
          )
        };
      case "ADD_TRANSACTION":
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        };
      default:
        return state;
    }
  };
  