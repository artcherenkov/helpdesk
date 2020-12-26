import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { IsExpired, Priority, Status } from '../../const';
import { formatDates, getKeyByValue } from '../../utils/common';
import issueProp from '../../types/issue.prop';

const Row = ({ issue }) => {
  // todo обрезать длинные темы

  const { status, priority, isExpired, createdAt, dueDate, actualDueDate } = issue;
  const isExpiredClassName = getKeyByValue(IsExpired, isExpired);
  const priorityClassName = getKeyByValue(Priority, priority);
  const statusClassName = getKeyByValue(Status, status);

  // fDate – буква f значит "форматированный"
  const [fDate, fDueDate, fActualDate] = formatDates(`DD.MM.yyyy hh:mm`, moment(createdAt), moment(dueDate), moment(actualDueDate));

  return (
    <tr className="table__row">
      <td className="table__cell">{issue.id}</td>
      <td className="table__cell">{fDate}</td>
      <td className="table__cell table__cell_topic">
        <Link to={`/issue/${issue.id}`}>
          {issue.topic}
        </Link>
      </td>
      <td className="table__cell table__cell_client">{issue.client}</td>
      <td className="table__cell">{issue.type}</td>
      <td className="table__cell table__cell_product">{issue.product}</td>
      <td className="table__cell">{issue.department}</td>
      <td className="table__cell table__cell_responsible">{issue.responsible}</td>
      <td className={`table__cell table__cell_status table__cell_status_${statusClassName}`}>
        {status}
      </td>
      <td className="table__cell">{fDueDate}</td>
      <td className="table__cell">{fActualDate}</td>
      <td className="table__cell table__cell_last-answer">{issue.lastAnswer}</td>
      <td className={`table__cell table__cell_priority table__cell_priority_${priorityClassName.toLowerCase()}`}>
        {priority}
      </td>
      <td className={`table__cell table__cell_expired table__cell_expired_${isExpiredClassName.toLowerCase()}`}>
        <span>{isExpired}</span>
      </td>
    </tr>
  );
};

Row.propTypes = {
  issue: issueProp,
};

export default Row;
