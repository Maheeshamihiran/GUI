import React from 'react';
import './Nutritional.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Nutritional = () => {
    const [goal, setGoal] = useState("decreaseWeight");
  
    const advice = {
      decreaseWeight: {
        title: "Goal: Decrease Weight",
        content: `
          - Calorie Intake: 
                           Consume fewer calories than you burn (caloric deficit). Aim for a reduction of
                           500–750 calories per day.

          - Macronutrient Balance:
                          - Protein: 25–30% of daily calories to preserve muscle mass.
                          - Carbohydrates: 35–50% of daily calories. Choose complex carbs like whole grains, fruits, and vegetables.
                          - Fats: 20–30% of daily calories. Focus on healthy fats.

          - Meal Tips:
                           Eat smaller, more frequent meals, and avoid sugary drinks.

          - Hydration: 
                           Drink at least 2–3 liters of water daily.
        `,
        image: "Decrease Weight.jpg",
      },
      buildMuscle: {
        title: "Goal: Build Muscle",
        content: `
          - Calorie Intake: Consume more calories than you burn (caloric surplus). Increase 
                            by 250–500 calories per day.
          
          - Macronutrient Balance:
                         - Protein: 1.6–2.2 grams per kilogram of body weight per day.
                         - Carbohydrates: 45–55% of daily calories to fuel workouts.
                         - Fats: 20–30% of daily calories for hormonal balance.

          - Meal Tips: 
                          Eat protein-rich foods with every meal and include pre/post-workout meals.

          - Hydration:    
                          Drink 3–4 liters of water daily.
        `,
        image: "Build Muscle.jpg",
      },
      maintainFitness: {
        title: "Goal: Maintain Fitness",
        content: `
          - Calorie Intake:   
                       Match calorie intake with calorie expenditure.

          - Macronutrient Balance:
                        - Protein: 15–25% of daily calories.
                        - Carbohydrates: 45–55% of daily calories.
                        - Fats: 25–35% of daily calories.
          - Meal Tips: 
                       Focus on balanced meals with whole, nutrient-dense foods.

          - Hydration: 2–3 liters of water daily.
        `,
        image: 'Maintain Fitness.jpg',
      },
      improveEndurance: {
        title: "Goal: Improve Endurance",
        content: `
          - Calorie Intake:
                           Ensure adequate energy for long workouts.
          
          - Macronutrient Balance:
                        - Protein: 15–20% of daily calories.
                        - Carbohydrates: 55–65% of daily calories.
                        - Fats: 20–25% of daily calories.
          
          
          - Meal Tips: 
                        Prioritize carb-rich meals before endurance workouts.
          
          - Hydration:  
                        Drink water consistently and use electrolytes during long exercises.
        `,
        image: 'Improve Endurance.jpg',
      },
      improveFlexibility:{
        title: "Goal:Improve Flexibility ",
        content: `
          - Calorie Intake:  
                           Maintain a balanced caloric intake to support overall health and 
                           flexibility training.Focus on nutrient-dense foods.
                           
          - Macronutrient Balance:
                         -Protein: 15–20% of daily calories to aid in muscle recovery.
                         -Carbohydrates  : 50–55% of daily calories for sustained energy.
                         -Fats: 20–25% of daily calories.
          
          - Meal Tips:
                       -Include anti-inflammatory foods like:
                       -Fatty Fish: Salmon, mackerel, or sardines.
                       -Nuts and Seeds: Almonds, walnuts, chia seeds, and flaxseeds.
                       -Leafy Greens: Spinach, kale, and arugula.
          
           - Hydration:   
                        Drink 2–3 liters of water daily to maintain tissue 
                        elasticity and joint lubrication.
          
           -Supplementation:
                        Consider omega-3 fatty acids (fish oil) or collagen peptides if  
                        recommended by a healthcare provider.
        `,
        image: 'Improve Flexibility.jpg',
      },
      genaral:{
        title: "Goal:Improve Flexibility ",
        content: `
           -Avoid Processed Foods: Limit intake of refined sugars, trans fats, and artificial additives.

           -Eat Mindfully: Pay attention to portion sizes and avoid overeating.

           -Customize Nutrition: Adjust calorie and macronutrient intake based on individual body composition and activity levels.

           -Consult a Professional: Always consult a dietitian or healthcare provider for personalized advice.
        `,
        image: 'Improve Flexibility.jpg',
      },

    };
  
    return (
      <div className="nutritional-advice">
        <h1>Nutritional Advice</h1>
        <div className="goal-selector">
          <label>Select Your Goal:</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="goal-dropdown"
          >
            <option value="decreaseWeight">Decrease Weight</option>
            <option value="buildMuscle">Build Muscle</option>
            <option value="maintainFitness">Maintain Fitness</option>
            <option value="improveEndurance">Improve Endurance</option>
            <option value="improveFlexibility">Improve Flexibility</option>
            <option value="genaral">Genaral</option>
          </select>
          <Link to={`/achievement?goal=${goal}`} className="achievement-link">
        <button>Track Achievements</button>
      </Link>
        </div>
        <div className="advice-content">
          <h2>{advice[goal].title}</h2>
          <img src={advice[goal].image} alt={advice[goal].title} className="goal-image" />
          <p>{advice[goal].content}</p>
        </div>
      </div>
    );
  };

export default Nutritional;