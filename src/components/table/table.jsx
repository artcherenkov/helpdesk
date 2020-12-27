import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import Row from '../row/row';
import { getIssues, getOrganizations } from '../../store/reducers/app-store/selectors';
import { getFilters, getLoadingState } from '../../store/reducers/app-state/selectors';
import IssueProp from '../../types/issue.prop';

const getOrganizationId = (organizations, issue) => {
  if (issue.organizationName) {
    return organizations.find(org => org.name === issue.organizationName)[`org-id`];
  }
  return null;
};

const Table = ({ issues, isLoading, filters, organizations }) => {
  const filteredIssues = issues
    .sort((a, b) => moment(b.createdAt).unix() - moment(a.createdAt).unix())
    .filter((issue) => {
      const filterValues = Object.values(filters).filter((value) => value !== ``);
      const issueValues = Object.values(issue);
      return filterValues.every(value => issueValues.includes(value));
    });

  return (
    <section className="table-section">
      <div className="table__wrapper">
        <table className="table">
          <thead className="table__head">
            <tr className="table__row">
              <th className="table__cell table__cell_header">№</th>
              <th className="table__cell table__cell_header">Дата создания</th>
              <th className="table__cell table__cell_header table__cell_content_topic">Тема заявки</th>
              <th className="table__cell table__cell_header table__cell_content_client">Заказчик</th>
              <th className="table__cell table__cell_header">Тип заявки</th>
              <th className="table__cell table__cell_header">Продукт</th>
              <th className="table__cell table__cell_header">Отдел</th>
              <th className="table__cell table__cell_header">Ответственный</th>
              <th className="table__cell table__cell_header">Статус</th>
              <th className="table__cell table__cell_header">Регламентная дата решения</th>
              <th className="table__cell table__cell_header">Дата решения</th>
              <th className="table__cell table__cell_header">Последний ответ</th>
              <th className="table__cell table__cell_header">Приоритет</th>
              <th className="table__cell table__cell_header">Просрочен</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {isLoading && <tr><td>Загрузка...</td></tr>}
            {filteredIssues && filteredIssues.map((issue, i) => (
              <Row key={`issue-${i}`} issue={issue} organizationId={getOrganizationId(organizations, issue)} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

Table.propTypes = {
  issues: PropTypes.arrayOf(IssueProp).isRequired,
  isLoading: PropTypes.bool.isRequired,
  filters: PropTypes.object.isRequired,
  organizations: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  issues: getIssues(state),
  isLoading: getLoadingState(state),
  filters: getFilters(state),
  organizations: getOrganizations(state),
});

export { Table };
export default connect(mapStateToProps, null)(Table);
