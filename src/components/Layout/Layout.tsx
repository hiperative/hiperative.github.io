import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import * as Styles from './Layout.styled';
import './index.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Styles.Wrapper>
          {/* <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0
            }}> */}
          {children}
          {/* </div> */}
        </Styles.Wrapper>
        <Footer />
      </>
    )}
  />
);

export default Layout;
