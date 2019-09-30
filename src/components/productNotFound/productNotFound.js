import React, { useState } from 'react';
import AddProductInfo from '../addProductInfo';

import BarcodeInputField from '../barcodeInputField';

import './productNotFound.css';

const ProductNotFound = (props) => {
  const { location } = props;

  const [ code ] = useState(new URLSearchParams(location.search).get('code'));

    return (<div className="productNotFound__container">
      <h2 className="productDisplay__title not-found">Product not found <span role="img" aria-label="crying emoji">😢</span></h2>
      <p>The barcode: {code} gave no results!</p>
      <p>You can also enter the barcode below and try again:</p>
      <BarcodeInputField />
      <AddProductInfo />
    </div>)
};

export default ProductNotFound;
