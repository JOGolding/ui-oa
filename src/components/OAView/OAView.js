import React from 'react';
import PropTypes from 'prop-types';

import {
  Pane,
  TextField,
  MultiColumnList
} from '@folio/stripes/components';

import {
  SearchAndSortQuery,
  PersistedPaneset,
} from '@folio/stripes/smart-components';
import { FormattedMessage } from 'react-intl';
import css from './OAView.css';

const propTypes = {
  children: PropTypes.object,
  scholarlyWorks: PropTypes.arrayOf(PropTypes.object),
  queryGetter: PropTypes.func.isRequired,
  querySetter: PropTypes.func.isRequired,
};

const OAView = ({
  children,
  data,
  queryGetter,
  querySetter
}) => {
  const arr = data.scholarlyWorks
  console.log(arr)

  return (
    <SearchAndSortQuery
      querySetter={querySetter}
      queryGetter={queryGetter}
      initialSearchState={{ query: '' }}
    >
      {
        ({
          searchValue,
          getSearchHandlers,
        }) => (<div>
          <PersistedPaneset
            appId="@folio/agreements"
            id="agreements-paneset"
          >
            <Pane
              defaultWidth="20%"
              paneTitle={<FormattedMessage id="stripes-smart-components.searchAndFilter" />}
            >
              <TextField
                label="Filter"
                name="query"
                onChange={getSearchHandlers().query}
                value={searchValue.query}
              />
            </Pane>
            <Pane
              defaultWidth="fill"
            >
              <MultiColumnList
                autosize
                contentData={arr}
                visibleColumns={['authorNameList', 'publisherURL', 'localReference', 'journalIssueDate', 'journalVolume', 'journalIssue', 'journalPages']}
                onRowClick={id => `${urls.scholarlyWorkView(id)}`}
              />
            </Pane>
            {children}
          </PersistedPaneset>
        </div>)
      }
    </SearchAndSortQuery>
  )
}

OAView.propTypes = propTypes;

export default OAView;