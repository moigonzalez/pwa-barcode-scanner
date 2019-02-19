import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ArrowRight from 'react-feather/dist/icons/arrow-right';

import './productPreview.css';

class ProductPreview extends Component {

  constructor(props) {
    super(props);

    this.box = React.createRef();
  }

  componentDidUpdate() {
    setTimeout(() => this.box.current.classList.add('active'), 50);
  }

  render() {
    const product = this.props.product;

    if (product === null) {
      return ('');
    }

    return (
      <div className="productPreview__box" ref={this.box}>
        <div className="history__thumbWrapper">
          {product.image_thumb_url ?
            <img src={product.image_thumb_url} className="history__thumb" alt={`${product.name} thumb image`}/>
            :
            <div className="skeleton__imageThumb">
              Picture not found
            </div>
          }
        </div>
        <div className="history__textWrapper">
          <h2 className="history__title">{product.product_name}</h2>
          <div className="history__barcode">{product.code}</div>
        </div>
        <Link className="history__linkWrapper" to={`/product/${product.code}`}>
          <ArrowRight className="history__arrowRight" size={20} />
        </Link>
      </div>
    );
  }
}

export default ProductPreview;
