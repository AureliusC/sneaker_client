import React from 'react';

interface Props{
    transactions:Transaction[]
    
}
const BudgetTransaction:React.FC<Props> =({transactions}) =>{

 const amounts = transactions.map(transaction => transaction.amount);
 const budget = amounts.filter(function (a) {return a >= 0;}).reduce(function(a,b){return a +b;}, 0);
 return(
     <div className="flex justify-between pl-1 bg-white shadow-md my-6">
         <div className="flex-1 text-center border-r-1 font-medium">
             <h4>Total Budget</h4>
    <p className="text-red=600">{budget}</p>
         </div>
     </div>
 );
};

export default BudgetTransaction;