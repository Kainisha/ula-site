import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '@root/theme';
import LocomotiveScroll from 'locomotive-scroll';
import GlobalStyles from '@root/globalStyles';
import Header from './organisms/Header';
import SEO from './seo';
import { MainStyled } from './styles';
import './layout.css';
import '../fonts.css';

const Layout = ({ children, title }) => {
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window.document === 'undefined') {
      return;
    }

    LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 3,
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SEO title={title} />
        <Header />
        <MainStyled data-scroll-container>{children}</MainStyled>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: '',
};

export default Layout;
