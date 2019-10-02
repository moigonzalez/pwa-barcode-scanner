import React from 'react';

import './nutriScore.css';

const NutriScore = (props) => {
  const { score, extraClass } = props;
  return (<>
    {score !== undefined ?
      <div className="nutriscore__container">
        <img className={`${extraClass} nutriscore__image`} alt={`Nutrition score ${score}`} src={`https://static.openfoodfacts.org/images/misc/nutriscore-${score}.svg`} />
      </div>
      :
      ''
    }
    </>
  );
};

export default NutriScore;
