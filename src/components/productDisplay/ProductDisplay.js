import React, { Component } from 'react';
import ProductDataDisplay from './ProductDataDisplay';

import ProductDisplaySkeleton from './productDisplay.skeleton';

import './productDisplay.css';

class ProductDisplay extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      isLoading: true,
      productInfo: null
    }
  }

  componentWillMount() {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${this.props.match.params.id}.json`)
    .then(res => res.json())
    .then(res => this.onInfoFetched(res));
  }

  onInfoFetched(result) {
    this.setState({
      isLoading: false,
      productInfo: result
    })
  }

  render() {
    if (this.state.isLoading) {
      return (<ProductDisplaySkeleton />);
    }

      return (
        <>
          <ProductDataDisplay data={this.state.productInfo}/>
        </>
      );

  }
}

export default ProductDisplay;
