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
        <I className="fa fa-file-text-o"></I>
        <I className="fa fa-envelope-o"></I>
        <I className="fa fa-phone"></I>
        <I className="fa fa-linkedin"></I>
        <I className="fa fa-github"></I>
        </LargeIcon>
      </AlignVertically>
    );
  }
}
