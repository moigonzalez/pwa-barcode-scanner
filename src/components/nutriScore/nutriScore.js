import React from 'react';

import './nutriScore.css';

const NutriScore = (props) => (
  <div className="nutriscore__container">
    {props.score !== undefined ?
      <img className={`${props.extraClass} nutriscore__image`} alt={`Nutrition score ${props.score}`} src={`https://static.openfoodfacts.org/images/misc/nutriscore-${props.score}.svg`} />
      :
      ''
    }
  </div>
);

export default NutriScore;
