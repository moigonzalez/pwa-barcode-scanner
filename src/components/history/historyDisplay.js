import React, { Component } from 'react';

import HistoryHandler from './hisotryHandler';
import NutriScore from '../NutriScore';

class HistoryDisplay extends Component {
  render() {
    const  products = HistoryHandler.getProducts();
    return (
      <div className="history__list">
        {products.map((x, i) => {
          const { thumb, name, score } = JSON.parse(x.data);
          return (
          <div key={i} className="history__listItem">
            <div className="history__thumbWrapper">
              <img src={thumb} alt={`${name} thumb image`}/>
            </div>
            <div className="history__textWrapper">
              <h2>{name}</h2>
              <div>{x.code}</div>
              <NutriScore score={score} />
            </div>
          </div>)
        }
        )}
      </div>
    );
  }
};

export default HistoryDisplay;
