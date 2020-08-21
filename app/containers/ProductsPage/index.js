/*
  W00 Products Page
*/

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Breadcrumb from 'components/Breadcrumb';
import { Container } from 'components/Container';
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
    // <Container>Product List</Container>
    <>
      <Breadcrumb />
      <Container className="site-layout-background">Product List</Container>
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
