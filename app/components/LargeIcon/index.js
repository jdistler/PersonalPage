import styled from 'styled-components';

import Section from 'components/Section';

const LargeIcon = styled(Section)`
  font-size: 6em;
  position: absolute;
  text-align: center
  left: 50%;
   top: 50%;
   -webkit-transform: translateX(-50%) translateY(-50%);
   transform: translateX(-50%) translateY(-50%);
   @media screen and (max-width: 600px) {
     padding-top: 1em;
     font-size: 5em;
   }
`;

export default LargeIcon;
