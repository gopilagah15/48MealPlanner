import React, { useState } from 'react';

const MealInput = ({ addMeal }) => {
  const [mealName, setMealName] = useState('');
  const [cost, setCost] = useState('');
  const [day, setDay] = useState('Monday');

  const handleSubmit = () => {
    if (mealName && cost && day) {
      addMeal(day, mealName, cost);
      setMealName('');
      setCost('');
    }
  };

  return (
    <div className="meal-input">
      <h2>Add a Meal</h2>
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={mealName}
        onChange={(e) => setMealName(e.target.value)}
        placeholder="Meal name"
      />
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Cost"
      />
      <button onClick={handleSubmit}>Add Meal</button>
    </div>
  );
};

export default MealInput;
