import React from 'react';
import Header from './components/recipe/Header';
import PrepInfo from './components/recipe/PrepInfo';
import Directions from './components/recipe/Directions';
import Ingredients from './components/recipe/Ingredients';
import './App.css';

function App() {
  const exampleList = [
    { label: 'Dough', ingredients: ['3 cups of flour', "3 jugs of sugar"] },
    { label: 'Sauce', ingredients: ['1 big old tomato'] },
  ];

  return (
    <div className="App">
      <div className="container">
        <Header name={"Sun-Dried Tomato Pizza"} category={"Pizza"}></Header>
        <PrepInfo prepTime={"15 Mins"} totalTime={"2 Hrs"} serves={"8"}/>
        <div className="row">
          <div className="col-12 col-sm-4">
            <Ingredients list={exampleList}/>
          </div>
          <div className="col-12 col-sm-8">
            <Directions directions={"Put the pizza in the oven and bake it."}></Directions>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
