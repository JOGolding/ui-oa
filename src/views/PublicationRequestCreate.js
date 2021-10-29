import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { useForm, useFormState } from 'react-final-form';

import {
  AccordionSet,
  Button,
  Pane,
  PaneFooter,
  PaneHeader,
  Paneset,
} from '@folio/stripes/components';
import RequestInfoForm from '../components/PublicationRequestFormSections/RequestInfoForm';
import CorrespondingAuthorForm from '../components/PublicationRequestFormSections/CorrespondingAuthorForm/CorrespondingAuthorForm';
import RequestContactForm from '../components/PublicationRequestFormSections/RequestContactForm/RequestContactForm';
import PublicationForm from '../components/PublicationRequestFormSections/PublicationForm';
import PublicationStatusForm from '../components/PublicationRequestFormSections/PublicationStatusForm';
import FundingForm from '../components/PublicationRequestFormSections/FundingForm';

const propTypes = {
  handlers: PropTypes.shape({
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }).isRequired,
  pristine: PropTypes.bool,
  refValues: PropTypes.object,
  submitting: PropTypes.bool,
};


const PublicationRequestCreate = ({ handlers: { onClose, onSubmit }, pristine, submitting }) => {
  const { values } = useFormState();
  const { change } = useForm();


  // TODO: create hook to store values in state to remove linting error (Ask Ethan)
  useEffect(() => {
    if (
      values.useCorrespondingAuthor &&
      values.requestContact?.partyOwner !== values.correspondingAuthor?.partyOwner
    ) {
      change('requestContact.partyOwner', values.correspondingAuthor?.partyOwner);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [change, values.useCorrespondingAuthor, values.correspondingAuthor?.partyOwner, values.requestContact?.partyOwner]);

  const renderPaneFooter = () => {
    return (
      <PaneFooter
        renderEnd={(
          <Button
            buttonStyle="primary mega"
            disabled={pristine || submitting}
            marginBottom0
            onClick={onSubmit}
            type="submit"
          >
            <FormattedMessage id="stripes-components.saveAndClose" />
          </Button>
        )}
        renderStart={(
          <Button
            buttonStyle="default mega"
            marginBottom0
            onClick={onClose}
          >
            <FormattedMessage id="stripes-components.cancel" />
          </Button>
        )}
      />
    );
  };

  return (
    <Paneset>
      <Pane
        centerContent
        defaultWidth="100%"
        footer={renderPaneFooter()}
        renderHeader={renderProps => <PaneHeader {...renderProps} paneTitle="New publication request" />}
      >
        <AccordionSet>
          <RequestInfoForm />
          <CorrespondingAuthorForm />
          <RequestContactForm />
          <PublicationForm />
          <PublicationStatusForm />
          <FundingForm />
        </AccordionSet>
      </Pane>
    </Paneset>
  );
};

PublicationRequestCreate.propTypes = propTypes;

export default PublicationRequestCreate;
