import React from 'react';

const BudgetSummary = ({ monthlyBudget }) => (
  <div className="budget-summary">
    <h2>Monthly Food Budget Summary</h2>
    <p>Total Monthly Budget: ${monthlyBudget}</p>
  </div>
);

export default BudgetSummary;
