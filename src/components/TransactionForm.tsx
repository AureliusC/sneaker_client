import React, { useState } from 'react';
import APIURL from './helpers/enviorment.'

interface Props {
    getMine: () => void
}

const initialState = {
    date: "September 11",
    title:"",
    amount:0
};

const TransactionForm: React.FC<Props> = ({ getMine }) => {

    const [newTransaction, setNewTransaction] = useState<Transaction>(initialState)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let budget = {
            title: newTransaction.title,
            date: newTransaction.date,
            amount: newTransaction.amount
        }
        console.log(typeof budget.date)
        fetch('http://localhost:3000/budget/create', {
            method: "POST",
            body: JSON.stringify({budget: budget}),
            headers: {
                "Content-Type": "application/json",
                Authorization : localStorage.getItem("token")!.toString()
            }
      
        })
            .then(res => res.json())
        .then(() => getMine())
        
        setNewTransaction(initialState);
    }

    const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTransaction({ ...newTransaction, title: e.target.value })
    }

    const handleInputAmountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewTransaction({...newTransaction, amount:parseInt(e.target.value)})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="border-b-4 text-2xl text-white text-center font-medium mb-2 pb-2">Add New Bills</h3>
            <div className="mb-3">
                <label className="block  text-white  text-lg font-bold mb-1" htmlFor="text">
                    Bill
                </label>
                <input onChange={handleInputTextChange} required value={newTransaction.title}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="text" type="text" placeholder="Enter Bill..." />
            </div>

            <div className="mb-6">
                <label className="block text-white text-lg font-bold mb-2" htmlFor="amount">
                   Budget
                </label>
                <input onChange={handleInputAmountChange} required value={newTransaction.amount}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount" type="number" placeholder="Enter Budget..." />
            </div>

            <button
                
                className="bg-blue-800 w-full hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Add Bill
            </button>

        </form>
    );
};

export default TransactionForm;