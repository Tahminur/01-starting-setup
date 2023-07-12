import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import React, { useState} from 'react';

function Expenses(props){
    //const expenses = props.expenses;

    const [filteredYear,setChosenYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
      setChosenYear(selectedYear);
    };
    
    return(    
      <div>
        <Card className='expenses'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          {props.expenses.map((expense) => (
            <ExpenseItem 
              title={expense.title}
              amount={expense.amount}
              date = {expense.date}
            />
          ))}
        </Card>
      </div>
    )
    
}

export default Expenses;