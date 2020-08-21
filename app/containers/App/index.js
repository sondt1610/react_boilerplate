/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import ProductsPage from 'containers/ProductsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
// import Footer from 'components/Footer';

import { Layout } from 'antd';

import GlobalStyle from '../../global-styles';
const { Footer } = Layout;
const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 30px 16px 0;
    float: left;
  }

  .site-layout-background {
    background: #fff;
  }
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Ecomerce" defaultTitle="Topdeal">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Layout>
        <Header />
        <Layout>
          <SideBar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/features" component={FeaturePage} />
              <Route path="/products" component={ProductsPage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
            <Footer style={{ textAlign: 'center' }}>dfhbdfsd</Footer>
          </Layout>
        </Layout>
      </Layout>

      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
