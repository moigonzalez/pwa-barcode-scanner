import React from 'react';

import styles from './addProductInfo.css';

const AddProductInfo = (barcode) => (
  <div className="off_disclaimer">
    <p>
    The information provided comes from the
    <a href="https://world.openfoodfacts.org/">Open Food Facts</a> Database.
    </p>
    <div>
    {barcode !== undefined ?
      <p>You can extend the information of this product in
        <a _target="_blank" href={`https://world.openfoodfacts.org/product/${barcode}`}>here</a> 🙂
      </p>
      :
      <p>Learn how to contribute in
        <a target="_blank" href="https://world.openfoodfacts.org/contribute">here</a> 🙂
      </p>
    }
    </div>
  </div>
);

export default AddProductInfo;
