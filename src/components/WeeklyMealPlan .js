import React from 'react';

const WeeklyMealPlan = ({ meals }) => (
  <div className="weekly-meal-plan">
    <h2>Weekly Meal Plan</h2>
    <ul>
      {Object.entries(meals).map(([day, meal]) => (
        <li key={day}>
          {day}: {meal.name} - ${meal.cost.toFixed(2)}
        </li>
      ))}
    </ul>
  </div>
);

export default WeeklyMealPlan;
