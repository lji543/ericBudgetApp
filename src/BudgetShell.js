import React from 'react';

import MonthlySpend from './components/MonthlySpend';
import MonthlyBudget from './components/MonthlyBudget';

function BudgetShell() {
  return (
    <div>
      <MonthlySpend />
      <MonthlyBudget />
    </div>
  );
}

export default BudgetShell;
