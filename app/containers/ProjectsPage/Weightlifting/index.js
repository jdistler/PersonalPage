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

export default class WeightliftingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Weightlifting Page"
          meta={[
            { name: 'description', content: 'Weightlifting' },
          ]}
        />
       <SpacedGrid>
       <Row>
         <Col md={12}><p className="lead">
           Weightlifting
           </p>
         </Col>
         </Row>
         <Row>
         <Col md={12}><p>Implementation WIP.</p></Col>
       </Row>
       </SpacedGrid>
      </div>
    );
  }
}
