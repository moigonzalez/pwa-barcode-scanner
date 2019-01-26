import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HistoryHandler from './historyHandler';

import ArrowRight from 'react-feather/dist/icons/arrow-right';
import Trash2 from 'react-feather/dist/icons/trash-2';

import styles from './historyDisplay.css';

class HistoryDisplay extends Component {

  state = {
    products: HistoryHandler.getProducts()
  };

  deleteProduct = (id) => {
    this.setState({
      products: HistoryHandler.deleteProduct(id)
    });
  }

  render() {
    return (
      <div className="history__list">
        {this.state.products === null ?
          <div className="history__emptyState">
            <h2 className="history__emptyState__title">
              Scan some products to see them here! 🥚
            </h2>
          </div>
          :
          this.state.products.map((x, i) => {
          const { thumb, name, score } = JSON.parse(x.data);
          return (
          <div key={i} className="history__listItem">
            <div className="history__delete">
              <button className="history__deleteBtn" onClick={() => this.deleteProduct(x.code)}>
                <Trash2 size={20} />
              </button>
            </div>
            <div className="history__thumbWrapper">
              {thumb ?
                <img src={thumb} className="history__thumb" alt={`${name} thumb image`}/>
                :
                <div className="skeleton__imageThumb">
                  Picture not found
                </div>
              }
            </div>
            <div className="history__textWrapper">
              <h2 className="history__title">{name}</h2>
              <div className="history__barcode">{x.code}</div>
            </div>
            <Link className="history__linkWrapper" to={`/product/${x.code}`}>
              <ArrowRight className="history__arrowRight" size={20} />
            </Link>
          </div>)
        }
        )}
      </div>
    );
  }
};

export default HistoryDisplay;
