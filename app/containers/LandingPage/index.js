/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import CenteredSection from 'components/CenteredSection';
import LargeIcon from 'components/LargeIcon';

import I from  'components/I'
import H1 from 'components/H1';
import AlignVertically from 'components/AlignVertically';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <AlignVertically>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'Home page of Joseph Distler' },
          ]}
        />
        <LargeIcon>
        <a href="#" title="Resume"><I className="fa fa-file-text-o"></I></a>
        <a href="mailto:jdistler@utexas.edu"  title="jdistler@utexas.edu"><I className="fa fa-envelope-o"></I></a>
        <a href="tel:+1-201-367-8707" title="201-367-8707"><I className="fa fa-phone"></I></a>
        <a href="https://www.linkedin.com/in/josephdistler/" title="https://www.linkedin.com/in/josephdistler/"><I className="fa fa-linkedin"></I></a>
        <a href="https://github.com/jdistler" title="https://github.com/jdistler"><I className="fa fa-github"></I></a>
        </LargeIcon>
      </AlignVertically>
    );
  }
}
