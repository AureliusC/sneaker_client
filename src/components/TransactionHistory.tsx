import React from 'react';
import TransactionItem from "./TransactionItem";

interface Props {
    getMine: () => void
    transactions:Transaction[],
    deleteTransaction:(text:Transaction) => void;
}



const TransactionHistory: React.FC<Props> = ({ transactions, deleteTransaction, getMine }) => {
    console.log(transactions, 'history')
    return (
        <div className="relative p-2">
            <h3 className="border-b-2 text-2xl text-center font-medium mb-2 pb-3">History</h3>
            <ul>
                {transactions.map(transaction => (
                    <TransactionItem deleteTransaction={deleteTransaction} key={transaction.title} transaction={transaction} getMine={getMine}/>
                    ))}
            </ul>
            <br/>
        </div>
    );
};

    

export default TransactionHistory;