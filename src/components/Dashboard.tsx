import React, {useState, useEffect} from 'react';
import TransactionBalance from "./TransactionBalance ";
import TransactionHistory from "./TransactionHistory";
import TransactionForm from "./TransactionForm";
import Navbar  from "./Navbar";
import BudgetTransaction from './BudgetTransaction';
import '../App.css';

import APIURL from './helpers/enviorment.';


type acceptedProps ={
    deleteToken:() => void
}

export const Dashboard =({ deleteToken}: acceptedProps) => {
    const [transactions,setTransactions] =useState<Transaction[]>([]);
    
    useEffect(() =>{
        getMine()
} ,[])

    

const getMine = () =>{
    console.log('run')
    setTransactions([]);
    fetch(`http://localhost:3000/budget/mine`,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")!.toString()
        }
    })
    .then(res => res.json())
    .then(json => setTransactions(json))
}

const deleteTransaction = (transaction:Transaction) => {
    let url =`http://localhost:3000/budget/delete/${transaction.id}`
    fetch( url,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem('token')!.toString()
        }
    })
    .then(res => res.json())
    .then(() => getMine())
}

return(
    <div>
        <Navbar deleteToken={deleteToken} />
        <div className="w-full max-w-s m-auto py-10">
            <h1 className="text-center text-3x1 font-bold"> Budget Tracker</h1>
            <TransactionBalance transactions={transactions}/>
            <BudgetTransaction transactions={transactions} />
            {TransactionHistory.length > 0 ? <TransactionHistory deleteTransaction={deleteTransaction} transactions={transactions} getMine={getMine}/>:null}
            <TransactionForm getMine={getMine} />
        </div>
    </div>
    )
};