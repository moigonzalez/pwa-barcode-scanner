import React, { Component } from 'react';
import ProductDataDisplay from './ProductDataDisplay';
import { Link } from 'react-router-dom';

class ProductDisplay extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      isLoading: true,
      productInfo: null
    }
  }

  onInfoFetched(result) {
    this.setState({
      isLoading: false,
      productInfo: result
    })
  }

  componentWillMount() {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${this.props.match.params.id}.json`)
    .then(res => res.json())
    .then(res => this.onInfoFetched(res));
  }

  render() {
    if (this.state.isLoading) {
      return (<h2>Loading...</h2>);
    }
    else {
      return (
        <>
          <ProductDataDisplay data={this.state.productInfo}/>
          <Link to='/'>Back to cam</Link>
        </>
      );
    }
  }
}

export default ProductDisplay;
