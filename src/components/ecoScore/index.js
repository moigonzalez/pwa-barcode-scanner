import React from 'react';

const EcoScore = ({ score }) => {
  if (!score) {
    return null;
  }

  return <img
  className="nutriscore__detail nutriscore__image"
    src={`https://static.openfoodfacts.org/images/attributes/ecoscore-${score}.svg`}
    alt="ecoscore" />
}

export default EcoScore;
