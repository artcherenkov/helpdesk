import React from 'react';
import {IsExpired, Priority, Status} from '../../const';
import {formatDates, getKeyByValue} from '../../utils/common';

export default function Row({request}) {
  // todo обрезать длинные темы

  const {status, priority, isExpired, date, dueDate, actualDueDate} = request;
  const isExpiredClassName = getKeyByValue(IsExpired, isExpired);

  // fDate – буква f значит "форматированный"
  const [fDate, fDueDate, fActualDate] =  formatDates(`DD.MM.yyyy hh:mm`, date, dueDate, actualDueDate);

  return (
    <tr>
      <td>{request.id}</td>
      <td>{fDate}</td>
      <td>{request.topic}</td>
      <td>{request.client}</td>
      <td>{request.type}</td>
      <td>{request.product}</td>
      <td>{request.department}</td>
      <td>{request.responsible}</td>
      <td className={`table__status table__status--${status.toLowerCase()}`}>
        {Status[status]}
      </td>
      <td>{fDueDate}</td>
      <td>{fActualDate}</td>
      <td>{request.lastAnswer}</td>
      <td className={`table__priority table__priority--${priority.toLowerCase()}`}>
        {Priority[priority]}
      </td>
      <td className={`table__expired table__expired--${isExpiredClassName}`}>
        <span>{isExpired}</span>
      </td>
    </tr>
  );
};
