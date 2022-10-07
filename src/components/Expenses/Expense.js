import React , {useState}from 'react'
import './Expense.css'
import Card from '../UI/Card'
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from './ExpensesFilter';
import Expenseitems from './Expenseitems';
import ExpensesList from './ExpensesList';

function Expense(props) {
  const[filteredYear, setFilteredYear] = useState('2020');


   const filterChangeHandler = selectedYear =>{
    
    setFilteredYear(selectedYear);
   }

   const filteredexpenses = props.expenses.filter(expenses => {
    return expenses.date.getFullYear().toString()===filteredYear; 
   })

   
  return (
    <div>
      
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpenseChart expenses={filteredexpenses}/>
   <ExpensesList items={filteredexpenses}/>
       
    </Card>
    </div>
  )
}

export default Expense
