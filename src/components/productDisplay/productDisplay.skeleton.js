import React from 'react';

const ProductDisplaySkeleton = () => (
  <div className="productDisplay__container">
    <div className="productDisplay__titleContainer">
      <div className="productDisplay__thumbContainer">
        <div className="skeleton__image" />
      </div>
      <div className="productDisplay__textContainer">
        <div className="skeleton__title" />
        <div className="skeleton__text" />
      </div>
    </div>
    <div className="productDisplay__section">
      <div className="skeleton__title" />
      <div className="skeleton__text" />
    </div>
    <div className="productDisplay__section">
      <div className="skeleton__title" />
      <div className="skeleton__text" />
    </div>
    <div className="productDisplay__section">
      <div className="skeleton__title" />
      <div className="skeleton__text" />
    </div>
  </div>
);

export default ProductDisplaySkeleton;
