import React, { useEffect, useState } from 'react';

import MonthlySpend from './components/MonthlySpend';
import MonthlyBudget from './components/MonthlyBudget';

import { dbRef } from './utils/fire.js';
import { child, get } from "firebase/database";

function BudgetShell() {
  const [monthlyBudget, setMonthlyBudget] = useState({
    budget: [],
    spend: [],
  });

  const getData = () => {
    get(child(dbRef, `users`)).then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val()[0]);
        // TODO update if more users
        setMonthlyBudget({
          budget: snapshot.val()[0].monthlyBudget,
          spend: snapshot.val()[0].monthlySpend,
        });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  useEffect(()=>{
    getData();
    console.log('budget ',monthlyBudget)
    // console.log('spend ',)
  },[])

  return (
    <div>
      <MonthlySpend monthlySpend={monthlyBudget.spend} />
      <MonthlyBudget monthlyBudget={monthlyBudget.budget} />
    </div>
  );
}

export default BudgetShell;
