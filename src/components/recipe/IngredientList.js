import React from 'react';

const IngredientList = ({label, ingredients}) => {
  return (
    <div className="ingredient-list">
      <h5>{label}</h5>
      <ul>
        { ingredients.map((ingredient) => (
            <li key={ingredient.toString()}>{ingredient}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default IngredientList;