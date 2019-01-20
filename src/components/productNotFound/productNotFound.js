import React, { Component } from 'react';
import AddProductInfo from '../addProductInfo';

import { withRouter } from 'react-router';

import styles from './productNotFound.css';

class ProductNotFound extends Component {

  constructor(props) {
    super(props);

    this.code = new URLSearchParams(this.props.location.search).get('code');

    this.state = {
      enteredProduct: this.code
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/product/${this.state.enteredProduct}`);
  }

  onInputChange = (e) => {
    this.setState({
      enteredProduct: e.target.value
    });
  }

  render() {
    return (<div className="productNotFound__container">
      <h2 className="productDisplay__title not-found">Product not found 😢</h2>
      <p>The barcode: {this.code} gave no results!</p>
      <form onSubmit={this.onSubmit}>
        <p>You can also enter the barcode below and try again:</p>
        <input placeholder="e.g. 7622300710613" className="textInput" type="number" onChange={this.onInputChange}/>
        <button className="btn" type="submit">Find</button>
      </form>
      <AddProductInfo />
    </div>)
  }
};

export default withRouter(ProductNotFound);
