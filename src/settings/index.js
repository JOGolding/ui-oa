import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import { useSettings } from '@k-int/stripes-kint-components';

import { RequestStatusEdit } from './settingsComponents';

const propTypes = {
  resources: PropTypes.shape({
    settings: PropTypes.shape({
      records: PropTypes.array
    })
  }),
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

const OASettings = (props) => {
  const persistentPages = [
    {
      component: RequestStatusEdit,
      label: <FormattedMessage id="ui-oa.settings.refdata.editPicklistValues" />,
      route: 'requestStatus',
    }
  ];

  const { isLoading, SettingsComponent } = useSettings({
    dynamicPageExclusions: [],
    intlKey: 'ui-oa',
    persistentPages,
    refdataEndpoint: 'oa/refdata',
    settingEndpoint: 'oa/settings/appSettings'
  });

  if (isLoading) {
    return null;
  }

  return (
    <SettingsComponent
      {...props}
    />
  );
};

OASettings.propTypes = propTypes;

export default OASettings;
