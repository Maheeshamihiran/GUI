import React, { useState } from 'react';
import './Calarieintake.css';

const Calorieintake= () => {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [proteins, setProteins] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');
  const [date, setDate] = useState('');

  const handleLogMeal = () => {
    if (mealName && calories) {
      const currentDate = new Date().toISOString().split('T')[0]; 
      const currentTime = new Date().toLocaleTimeString(); 

 
      setMeals([
        ...meals,
        {
          id: Date.now(),
          name: mealName,
          calories: calories,
          proteins: proteins,
          carbs: carbs,
          fats: fats,
          date:currentDate,
          time: currentTime
        }
      ]);
      // Reset form fields
      setMealName('');
      setCalories('');
      setProteins('');
      setCarbs('');
      setFats('');
      setDate('');
    }
  };

  const handleRemoveMeal = (id) => {
    setMeals(meals.filter(meal => meal.id !== id));
  };

  return (
    <div className="calorie-container">
      <h1 className="calorie-title">2. Calorie Intake</h1>



      
      
      <div className="form-group">
        <label className="form-label">Meal Name:</label>
        <input
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          className="form-input"
        />
      </div>

      
      
      <div className="form-group">
        <label className="form-label">Calories:</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Proteins (g):</label>
        <input
          type="number"
          value={proteins}
          onChange={(e) => setProteins(e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Carbs (g):</label>
        <input
          type="number"
          value={carbs}
          onChange={(e) => setCarbs(e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Fats (g):</label>
        <input
          type="number"
          value={fats}
          onChange={(e) => setFats(e.target.value)}
          className="form-input"
        />
      </div>
      
      <button
        onClick={handleLogMeal}
        className="log-button"
      >
        Log Meal
      </button>
      
      <div>
        <h2 className="meal-log-title">Meal Log</h2>
        {meals.length === 0 ? (
          <p className="no-meals">No meals logged yet.</p>
        ) : (
          <ul className="meal-list">
            {meals.map((meal) => (
              <li key={meal.id} className="meal-item">
                
                <div className="meal-details">
                  <div className="meal-name">{meal.name}</div>
                  <div className="meal-date">{meal.date} at {meal.time}</div>

                  <div className="meal-metadata">
                    <span>Calories: {meal.calories} | </span>
                    {meal.proteins && <span>Proteins: {meal.proteins}g | </span>}
                    {meal.carbs && <span>Carbs: {meal.carbs}g | </span>}
                    {meal.fats && <span>Fats: {meal.fats}g</span>}
                  </div>
                </div>
                <button 
                  onClick={() => handleRemoveMeal(meal.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Calorieintake;