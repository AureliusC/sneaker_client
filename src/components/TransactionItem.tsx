import React from "react";
import {ModalExample} from './UpdateModal';


interface Props{
    getMine:() => void,
    transaction:Transaction,
    deleteTransaction:(text:Transaction) => void;
}

const  TransactionItem :React.FC<Props> =({transaction, deleteTransaction, getMine}) =>{
    const  handleButtonClick=() =>{
        deleteTransaction(transaction)
    }

    return(
        <li key={transaction.title + transaction.amount} className={`bg-white shawdow-md flex border-r-4 justify -bwtween p-2 my-2 ${transaction.amount > 0 ? 'border-blue-600': 'border-blue-300'}`}>
            {transaction.title} <span>{transaction.amount}</span>

            <i onClick={handleButtonClick} className="far fa-trash"></i>
            <ModalExample transaction={transaction} getMine={getMine}/>
        </li>
    );
};

export default TransactionItem;