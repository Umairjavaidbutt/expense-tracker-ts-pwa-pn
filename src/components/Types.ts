export interface TransactionType  {
    id: number;
    text: string;
    amount: number;
}

export interface TransactionsArray {
    transactions: Array<TransactionType>;
    // transactions: TransactionType[];
    
}