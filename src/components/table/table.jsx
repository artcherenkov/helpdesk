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
            <tr>
              <td>205</td>
              <td>25.09.2020 17:09</td>
              <td>Программный продукт 'ABC_SNB_Compiler'</td>
              <td>Надеин Алексей/ООО НПП АВС-Н</td>
              <td>Доработка</td>
              <td>Трекер АВС</td>
              <td>Разработчики</td>
              <td>Новиков Дмитрий</td>
              <td className="table__status table__status--opened">Открыто</td>
              <td>29.09.2020 18:00</td>
              <td>–</td>
              <td>Новиков Дмитрий</td>
              <td className="table__priority table__priority--normal">Нормальный</td>
              <td className="table__expired table__expired--no"><span>Не просрочен</span></td>
            </tr>
            <tr>
              <td>205</td>
              <td>25.09.2020 17:09</td>
              <td>Программный продукт 'ABC_SNB_Compiler'</td>
              <td>Надеин Алексей/ООО НПП АВС-Н</td>
              <td>Доработка</td>
              <td>Трекер АВС</td>
              <td>Разработчики</td>
              <td>Новиков Дмитрий</td>
              <td className="table__status table__status--opened">Ожидается в релизе</td>
              <td>29.09.2020 18:00</td>
              <td>–</td>
              <td>Новиков Дмитрий</td>
              <td className="table__priority table__priority--high">Высокий</td>
              <td className="table__expired table__expired--yes"><span>Просрочен</span></td>
            </tr>
            <tr>
              <td>205</td>
              <td>25.09.2020 17:09</td>
              <td>Программный продукт 'ABC_SNB_Compiler'</td>
              <td>Надеин Алексей/ООО НПП АВС-Н</td>
              <td>Доработка</td>
              <td>Трекер АВС</td>
              <td>Разработчики</td>
              <td>Новиков Дмитрий</td>
              <td className="table__status table__status--closed">Закрыто</td>
              <td>29.09.2020 18:00</td>
              <td>–</td>
              <td>Новиков Дмитрий</td>
              <td className="table__priority table__priority--low">Низкий</td>
              <td className="table__expired table__expired--no"><span>Не просрочен</span></td>
            </tr>
            <tr>
              <td>205</td>
              <td>25.09.2020 17:09</td>
              <td>Программный продукт 'ABC_SNB_Compiler'</td>
              <td>Надеин Алексей/ООО НПП АВС-Н</td>
              <td>Доработка</td>
              <td>Трекер АВС</td>
              <td>Разработчики</td>
              <td>Новиков Дмитрий</td>
              <td className="table__status table__status--declined">Отклонено</td>
              <td>29.09.2020 18:00</td>
              <td>–</td>
              <td>Новиков Дмитрий</td>
              <td className="table__priority table__priority--normal">Нормальный</td>
              <td className="table__expired table__expired--no"><span>Не просрочен</span></td>
            </tr>
            <tr>
              <td>205</td>
              <td>25.09.2020 17:09</td>
              <td className="table__description">Программный продукт 'ABC_SNB_Compiler'</td>
              <td>Надеин Алексей/ООО НПП АВС-Н</td>
              <td>Доработка</td>
              <td>Трекер АВС</td>
              <td>Разработчики</td>
              <td>Новиков Дмитрий</td>
              <td className="table__status table__status--opened">Открыто</td>
              <td>29.09.2020 18:00</td>
              <td>–</td>
              <td>Новиков Дмитрий</td>
              <td className="table__priority table__priority--normal">Нормальный</td>
              <td className="table__expired table__expired--no"><span>Не просрочен</span></td>
            </tr>
            {requests.map((request, i) => <Row key={`request-${i}`} request={request} />)}
          </tbody>
        </table>
      </div>
    </section>
  )
}
