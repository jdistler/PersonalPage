/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export function App(props) {
  return (
  <AppWrapper>
      <Helmet
        titleTemplate="%s"
        defaultTitle="Joseph Distler's Site"
        meta={[
          { name: 'description', content: 'A personal website by Joseph Distler' },
        ]}
        link={[
                   {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"},
                   {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"},
                   {"rel": "stylesheet", "href": "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}
               ]}
      />
      <Header />
      {React.Children.toArray(props.children)}
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
