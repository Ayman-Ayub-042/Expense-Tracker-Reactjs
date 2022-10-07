import React from 'react'
import './ExpensesList.css'
import Expenseitems from './Expenseitems';
const ExpensesList = (props) => {
    let expenseContent = <p>No expense found. </p>;
   if(props.items.length===0){
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
   

   }
  return (
    <ul className='expenses-list'>
      {  props.items.map((expenses)=>(
      <Expenseitems
      key={expenses.id}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
      />
     ))}
    </ul>
  )
}

export default ExpensesList