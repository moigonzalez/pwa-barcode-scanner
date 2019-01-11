import React from 'react';

const ProductDisplayTitle = ({productName, code, thumb}) => (
  <div className="productDisplay__titleContainer">
    <div className="productDisplay__thumbContainer">
      <img src={thumb} alt="Product front image" />
    </div>
    <div className="productDisplay__textContainer">
      <h2 className="productDisplay__title">{productName}</h2>
      <div className="productDisplay__barcode">{code}</div>
    </div>
  </div>
);

export default ProductDisplayTitle;
