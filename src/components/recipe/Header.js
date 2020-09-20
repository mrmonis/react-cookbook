import React from 'react';

const Header = ({category, name}) => {
  return (
    <div className="recipe-header">
      <h2 className="recipe-category">{category}</h2>
      <h1 className="recipe-name">{name}</h1>
    </div>
  )
}

export default Header;
