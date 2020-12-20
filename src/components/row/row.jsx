import React from 'react';
import {IsExpired, Priority, Status} from '../../const';
import {formatDates, getKeyByValue} from '../../utils/common';

const Row = ({issue}) => {
  // todo обрезать длинные темы

  const {status, priority, isExpired, date, dueDate, actualDueDate} = issue;
  const isExpiredClassName = getKeyByValue(IsExpired, isExpired);

  // fDate – буква f значит "форматированный"
  const [fDate, fDueDate, fActualDate] =  formatDates(`DD.MM.yyyy hh:mm`, date, dueDate, actualDueDate);

  return (
    <tr className="table__row">
      <td className="table__cell">{issue.id}</td>
      <td className="table__cell">{fDate}</td>
      <td className="table__cell table__cell_topic">{issue.topic}</td>
      <td className="table__cell table__cell_client">{issue.client}</td>
      <td className="table__cell">{issue.type}</td>
      <td className="table__cell">{issue.product}</td>
      <td className="table__cell">{issue.department}</td>
      <td className="table__cell table__cell_responsible">{issue.responsible}</td>
      <td className={`table__cell table__cell_status table__cell_status_${status.toLowerCase()}`}>
        {Status[status]}
      </td>
      <td className="table__cell">{fDueDate}</td>
      <td className="table__cell">{fActualDate}</td>
      <td className="table__cell table__cell_last-answer">{issue.lastAnswer}</td>
      <td className={`table__cell table__cell_priority table__cell_priority_${priority.toLowerCase()}`}>
        {Priority[priority]}
      </td>
      <td className={`table__cell table__cell_expired table__cell_expired_${isExpiredClassName.toLowerCase()}`}>
        <span>{isExpired}</span>
      </td>
    </tr>
  );
};

export default Row;
