/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import CenteredSection from 'components/CenteredSection';
import { Row, Col } from 'react-bootstrap';
import H3 from 'components/H3';
import SpacedGrid from 'components/SpacedGrid'
import { Link } from 'react-router';

export default class CryptoswapPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Cryptoswap"
          meta={[
            { name: 'description', content: 'Cryptoswap' },
          ]}
        />
       <SpacedGrid>
       <Row>
         <Col md={12}><p className="lead">
           Cryptoswap
           </p>
         </Col>
         </Row>
         <Row>
         <Col md={12}><p>Visualization WIP.</p></Col>
       </Row>
       </SpacedGrid>
      </div>
    );
  }
}
