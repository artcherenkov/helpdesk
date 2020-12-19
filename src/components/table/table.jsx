import React from 'react';

import Row from '../row/row';

export default function Table({requests}) {
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
            {requests.map((request, i) => (
              <Row key={`request-${i}`} request={request} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
};
