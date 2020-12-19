import React from 'react';
import {IsExpired, Priority, Status} from '../../const';
import {formatDates, getKeyByValue} from '../../utils/common';

const Row = ({request}) => {
  // todo обрезать длинные темы

  const {status, priority, isExpired, date, dueDate, actualDueDate} = request;
  const isExpiredClassName = getKeyByValue(IsExpired, isExpired);

  // fDate – буква f значит "форматированный"
  const [fDate, fDueDate, fActualDate] =  formatDates(`DD.MM.yyyy hh:mm`, date, dueDate, actualDueDate);

  return (
    <tr className="table__row">
      <td className="table__cell">{request.id}</td>
      <td className="table__cell">{fDate}</td>
      <td className="table__cell table__cell_topic">{request.topic}</td>
      <td className="table__cell table__cell_client">{request.client}</td>
      <td className="table__cell">{request.type}</td>
      <td className="table__cell">{request.product}</td>
      <td className="table__cell">{request.department}</td>
      <td className="table__cell table__cell_responsible">{request.responsible}</td>
      <td className={`table__cell table__cell_status table__cell_status_${status.toLowerCase()}`}>
        {Status[status]}
      </td>
      <td className="table__cell">{fDueDate}</td>
      <td className="table__cell">{fActualDate}</td>
      <td className="table__cell table__cell_last-answer">{request.lastAnswer}</td>
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
