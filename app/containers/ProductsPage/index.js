/*
  W00 Products Page
*/

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import * as TYPE from './actionTypes';
const key = 'products';

export function ProductsPage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // Call api
    props.getProducts();
  }, ['componentDidMount']);

  return (
    <>
      <div>Product List</div>
    </>
  );
}

ProductsPage.defaultProps = {
  // products: initialState
};

ProductsPage.propTypes = {
  getProducts: PropTypes.func
};

const mapStateToProps = ({ router, products }) => ({
  location: router.location,
  products
});

export function mapDispatchToProps(dispatch) {
  return {
    getProducts: data => dispatch({ type: TYPE.GET_PRODUCTS_REQUESTING, data })
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(ProductsPage);
