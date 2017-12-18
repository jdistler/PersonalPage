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
           <a href="http://raiblocks.direct">
           RaiBlocks Direct
           </a>
           </p>
         </Col>
         </Row>
         <Row>
         <Col md={12}><p>A local RaiBlocks marketplace with the goal of exchanging fiat or goods for RaiBlocks.</p></Col>
         <Col md={12}><p><a href="https://raiblocks.net/">RaiBlocks</a> is a decentralized cryptocurrency with significant improvements over competitors such as Bitcoin.</p></Col>
       </Row>
       </SpacedGrid>
      </div>
    );
  }
}
