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

export default class ProjectsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Projects Page"
          meta={[
            { name: 'description', content: 'Project page of Joseph Distler' },
          ]}
        />
       <SpacedGrid>
       <Row>
         <Col md={12}><p className="lead">
           <Link to="/projects/cryptocurrency/cryptoswap">
           Cryptocurrency algorithmic trader
           </Link>
           </p>
         </Col>
         </Row>
         <Row>
         <Col md={12}><p>A trading bot in Java using the XChange library for interacting with 50+ bitcoin and altcoin exchanges.</p></Col>
       </Row>
       </SpacedGrid>
       <SpacedGrid>
        <Row>
          <Col md={12}><p className="lead">
            <Link to="/projects/weightlifting">
            Weight Lifting Tracker
            </Link>
            </p>
          </Col>
          </Row>
          <Row>
          <Col md={12}><p>A workout planner to record weight lifting progression and track progress live in the gym as each set is completed.</p></Col>
        </Row>
        </SpacedGrid>
      </div>
    );
  }
}
