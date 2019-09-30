import React from 'react';

import './nutriScore.css';

const NutriScore = (props) => {
  const { score, extraClass } = props;
  return (<div className="nutriscore__container">
    {score !== undefined ?
      <img className={`${extraClass} nutriscore__image`} alt={`Nutrition score ${score}`} src={`https://static.openfoodfacts.org/images/misc/nutriscore-${score}.svg`} />
      :
      ''
    }
  </div>);
};

export default NutriScore;
