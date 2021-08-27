import React from 'react';

import PropTypes from 'prop-types';

import {
  Pane,
} from '@folio/stripes/components';

const propTypes = {
  handlers: PropTypes.shape({
    onClose: PropTypes.func.isRequired
  }).isRequired
};

const PublicationRequest = ({ handlers }) => {
  const paneProps = {
    defaultWidth: '55%',
    dismissible: true,
    onClose: handlers.onClose,
  };

  return (
    <Pane
      {...paneProps}
    >
      <div>Publication Request</div>
    </Pane>
  );
};

PublicationRequest.propTypes = propTypes;

export default PublicationRequest;
