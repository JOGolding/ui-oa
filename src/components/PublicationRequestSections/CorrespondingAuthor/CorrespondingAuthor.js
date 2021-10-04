import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import {
  Accordion,
  Badge,
  Col,
  KeyValue,
  NoValue,
  Row
} from '@folio/stripes/components';

const propTypes = {
  request: PropTypes.object
};

const renderBadge = (correspondingAuthor) => {
  return correspondingAuthor ? <Badge>1</Badge> : <Badge>0</Badge>
}

const CorrespondingAuthor = ({ request }) => {
  return (
    <Accordion
      closedByDefault
      displayWhenClosed={renderBadge(request?.correspondingAuthor)}
      displayWhenOpen={renderBadge(request?.correspondingAuthor)}
      label={<FormattedMessage id="ui-oa.publicationRequest.correspondingAuthor" />}
    >
      <Row start="xs">
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-oa.publicationRequest.title" />}>
            <div>
              {request?.correspondingAuthor ?
                <div>{request.correspondingAuthor.partyOwner.title}</div>
                :
                <NoValue />
              }
            </div>
          </KeyValue>
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-oa.publicationRequest.familyName" />}>
            <div>
              {request?.correspondingAuthor ?
                <div>{request.correspondingAuthor.partyOwner.familyName}</div>
                :
                <NoValue />
              }
            </div>
          </KeyValue>
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-oa.publicationRequest.givenName" />}>
            <div>
              {request?.correspondingAuthor ?
                <div>{request.correspondingAuthor.partyOwner.givenNames}</div>
                :
                <NoValue />
              }
            </div>
          </KeyValue>
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-oa.publicationRequest.orcidId" />}>
            <div>
              {request?.correspondingAuthor ?
                <div>{request.correspondingAuthor.partyOwner.orcidId}</div>
                :
                <NoValue />
              }
            </div>
          </KeyValue>
        </Col>
      </Row>

      <Row start="xs">
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-oa.publicationRequest.mainEmail" />}>
            <div>
              {request?.correspondingAuthor ?
                <div>{request.correspondingAuthor.partyOwner.mainEmail}</div>
                :
                <NoValue />
              }
            </div>
          </KeyValue>
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-oa.publicationRequest.phone" />}>
            <div>
              {request?.correspondingAuthor ?
                <div>{request.correspondingAuthor.partyOwner.phone}</div>
                :
                <NoValue />
              }
            </div>
          </KeyValue>
        </Col>
        <Col xs={3}>
          <KeyValue label={<FormattedMessage id="ui-oa.publicationRequest.mobile" />}>
            <div>
              {request?.correspondingAuthor ?
                <div>{request.correspondingAuthor.partyOwner.mobile}</div>
                :
                <NoValue />
              }
            </div>
          </KeyValue>
        </Col>
        <Col xs={3} />
      </Row>

      <Row start="xs">
        <Col xs={6}>
          <KeyValue label={<FormattedMessage id="ui-oa.otherEmail.otherEmailAddresses" />}>
            <div>
              {request?.otherEmailAddresses?.length ?
                <ul>
                  {request?.otherEmailAddresses?.map(email => <li key={email?.id}>{email?.emailAddress}</li>)}
                </ul>
                :
                <NoValue />
              }
            </div>
          </KeyValue>
        </Col>
      </Row>
    </Accordion>
  );
};

CorrespondingAuthor.propTypes = propTypes;

export default CorrespondingAuthor;
