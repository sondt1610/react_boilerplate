/*
  W00 Products Page
*/

import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Breadcrumb from 'components/Breadcrumb';
import { Container } from 'components/Container';
import { Checkbox, Radio } from 'antd';
import reducer from './reducer';
import saga from './saga';
import * as TYPE from './actionTypes';

const key = 'products';

export function ProductsPage(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [value, setValue] = useState(1);

  const onChange = () => {};
  const onChangeRadio = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // Call api
    props.getProducts();
  }, ['componentDidMount']);

  return (
    // <Container>Product List</Container>
    <>
      <Breadcrumb />
      <Container className="site-layout-background">
        <div>Product List</div>
        <Checkbox onChange={onChange}>Buy</Checkbox>
        <div>Size</div>
        <Radio.Group onChange={onChangeRadio} value={value}>
          <Radio value={1}>S</Radio>
          <Radio value={2}>XS</Radio>
          <Radio value={3}>L</Radio>
          <Radio value={4}>M</Radio>
        </Radio.Group>
      </Container>
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
