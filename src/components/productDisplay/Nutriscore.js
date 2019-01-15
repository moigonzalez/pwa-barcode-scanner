import React from 'react';

const Nutriscore = (score) => (
  (<div className="nutriscore__container">
    {score.score !== undefined ?
      <img className="nutriscore__image" alt={`Nutrition score ${score.score}`} src={`https://static.openfoodfacts.org/images/misc/nutriscore-${score.score}.svg`} />
      :
      ''
    }
  </div>)
);

export default Nutriscore;
