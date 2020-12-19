import React from 'react';
import {IsExpired, Priority, Status} from '../../const';
import {getKeyByValue} from '../../utils/common';

export default function Row({request}) {
  // todo обрезать длинные темы
  // todo итерироваться по ключам объекта и заполнять строку?
  // todo исправить формат дат

  const {status, priority, isExpired} = request;
  const isExpiredClassName = getKeyByValue(IsExpired, isExpired);

  return (
    <tr>
      <td>{request.id}</td>
      <td>{request.date}</td>
      <td>{request.topic}</td>
      <td>{request.client}</td>
      <td>{request.type}</td>
      <td>{request.product}</td>
      <td>{request.department}</td>
      <td>{request.responsible}</td>
      <td className={`table__status table__status--${status.toLowerCase()}`}>
        {Status[status]}
      </td>
      <td>{request.dueDate}</td>
      <td>{request.actualDueDate}</td>
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
