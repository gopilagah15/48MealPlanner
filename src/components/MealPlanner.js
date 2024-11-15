import React, { useState } from 'react'; 
import MealInput from './MealInput';
import WeeklyMealPlan from './WeeklyMealPlan ';
import ShoppingList from './ShoppingList';
import BudgetSummary from './BudgetSummary';

const MealPlanner = () => {
  const [meals, setMeals] = useState({});
  const [mealCosts, setMealCosts] = useState([]);

  const addMeal = (day, mealName, cost) => {
    const updatedMeals = { ...meals, [day]: { name: mealName, cost: parseFloat(cost) || 0 } };
    setMeals(updatedMeals);
    setMealCosts([...mealCosts, parseFloat(cost) || 0]);
  };

  const generateShoppingList = () => {
    return Object.values(meals).map((meal) => meal.name);
  };

  const calculateMonthlyBudget = () => {
    const weeklyTotal = mealCosts.reduce((sum, itemCost) => sum + itemCost, 0);
    return (weeklyTotal * 4).toFixed(2);
  };

  return (
    <div className="meal-planner">
      <h1>Meal Planner</h1>
      <MealInput addMeal={addMeal} />
      <WeeklyMealPlan meals={meals} />
      <ShoppingList shoppingList={generateShoppingList()} />
      <BudgetSummary monthlyBudget={calculateMonthlyBudget()} />
    </div>
  );
};

export default MealPlanner;
