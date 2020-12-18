import React from 'react';

export default function Row({request}) {
  // todo Сделать перечисления с именами классов, чтобы можно было применить нужный класс в зависимости от данных
  // todo обрезать длинные темы
  // todo итерироваться по ключам объекта и заполнять строку?
  // todo исправить формат дат
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
      <td className="table__status table__status--opened">{request.status}</td>
      <td>{request.dueDate}</td>
      <td>{request.actualDueDate}</td>
      <td>{request.lastAnswer}</td>
      <td className="table__priority table__priority--normal">{request.priority}</td>
      <td className="table__expired table__expired--no"><span>{request.isExpired.toString()}</span></td>
    </tr>
  )
}
