import React from 'react';
import RedirectComponent from '../components/RedirectComponent';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RedirectPage: React.FC = () => {
  return (
    <div>
      {/* Include the RedirectComponent for automatic redirection */}
      <RedirectComponent url="https://buy.stripe.com/dRm7sM4XFdpm0LHdC0bjW06"/>
    </div>
  );
};

export default RedirectPage;
