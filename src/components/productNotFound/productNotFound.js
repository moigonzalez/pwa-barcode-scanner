import React, { Component } from 'react';
import AddProductInfo from '../addProductInfo';

import BarcodeInputField from '../barcodeInputField';

import './productNotFound.css';

class ProductNotFound extends Component {

  constructor(props) {
    super(props);

    this.code = new URLSearchParams(this.props.location.search).get('code');
  }

  render() {
    return (
    <div className="productNotFound__container">
      <h2 className="productDisplay__title not-found">Product not found 😢</h2>
      <p>The barcode: {this.code} gave no results!</p>
      <p>You can also enter the barcode below and try again:</p>
      <BarcodeInputField />
      <AddProductInfo />
    </div>)
  }
};

export default ProductNotFound;
