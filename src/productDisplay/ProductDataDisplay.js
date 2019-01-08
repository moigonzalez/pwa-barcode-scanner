import React from 'react';


const ProductDataDisplay = (data) => {
  console.log(data);

  return (<h2>{data.data.product.product_name}</h2>);
};

export default ProductDataDisplay;
