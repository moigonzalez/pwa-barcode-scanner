import React from 'react';
import AddProductInfo from '../addProductInfo';

import styles from './productNotFound.css';

const ProductNotFound = (props) => (
  <div className="productNotFound__container">
    <h2 className="productDisplay__title not-found">Product not found 😢</h2>
    <p>The product with barcode: {props.match.params.id} was not found!</p>
    <form onSubmit={doSomething}>
      <p>You can enter manually enter the barcode of the product and try again</p>
      <input className="textInput" type="text" />
      <button type="submit">Find</button>
    </form>
    <AddProductInfo />
  </div>
);

export default ProductNotFound;
