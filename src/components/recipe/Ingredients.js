import React from 'react';
import IngredientList from './IngredientList';


const Ingredients = ({list}) => {
  return (
    <div className="ingredients">
      <h4>Ingredients</h4>
      { list.map((ingredientList) => ( <IngredientList key={ingredientList.label} {...ingredientList}/>)) }
    </div>
  )
}

export default Ingredients;