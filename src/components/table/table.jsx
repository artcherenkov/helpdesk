import React from 'react';

import Row from '../row/row';

export default function Table({requests}) {
  return (
    <section className="table">
      <div className="table__wrapper">
        <table>
          <thead className="table__head">
            <tr>
              <td>№ заявки</td>
              <td>Дата создания</td>
              <td>Тема заявки</td>
              <td className="table__customer">Заказчик</td>
              <td>Тип заявки</td>
              <td>Продукт</td>
              <td>Отдел</td>
              <td>Ответственный</td>
              <td>Статус</td>
              <td>Регламентная дата решения</td>
              <td>Дата решения</td>
              <td>Последний ответ</td>
              <td>Приоритет</td>
              <td>Просрочен</td>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, i) => <Row key={`request-${i}`} request={request} />)}
          </tbody>
        </table>
      </div>
    </section>
  )
};
