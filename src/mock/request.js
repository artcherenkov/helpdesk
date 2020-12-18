import moment from 'moment';
import {getRandomDate, getRandomInt, getRandomArrayItem} from '../utils/common';

const BEGINDATE = moment(`2015-01-01`);
const ENDDATE = moment(`2022-01-01`);

const request = {
  id: `1`,
  date: ``,
  topic: ``,
  client: ``,
  type: ``,
  product: ``,
  department: ``,
  responsible: ``,
  status: ``,
  dueDate: ``,
  actualDueDate: ``,
  lastAnswer: ``,
  priority: ``,
  isExpired: ``,
}

const topics = [
  `Задвоение при выборе алиасов.`,
  `Казцинк. Отображение в отчетах стоимости добавляемых в позиции материалов.`,
  `Конвертирование из формате GGE в формат АВС`,
  `Дополнить список контекстов, не включаемых в PRF, и вынести их в отдельный файл для настройки`,
  `Десятичный разделитель "точка" при выгрузке в KENML`,
  `Округление итогов в форме 2 при базисно-индексном методе.`,
  `Назначение кода Казцинк нескольким позициям`,
  `Работа диалога выбора поправок. Ошибка при последовательной отмене поправок.`,
  `Очистка папок Backup и Update после завершения установки`,
  `Редактор стандартных фрагментов`,
  `Ввод формул в трансляторе стандартных фрагментов`
]

const people = [
  `Черенков Вячеслав`,
  `Демченко Павел`,
  `Надеин Алексей`,
  `Некряч Андрей`,
  `Воронин Иван`,
  `Черенков Артем`,
  `Джер Уолтер`,
  `Аннабела Олсопп`,
  `Арнод Готьен`,
  `Кловис Монсиньи`,
  `Коргин Катуавр`,
  `Ейман Думеин`,
  `Глэр Шемов`,
  `Бобби Друкс`,
  `Филипп Фейн`,
  `Стив Джобс`,
  `Илон Маск`
]

const types = [
  `Инцидент`,
  `Доработка`,
  `Обращение`,
]

const products = [
  `АВС-Н`,
  `Google`,
  `Yandex`,
  `Tesla`,
  `Apple`,
  `Samsung`,
  `Toyota`,
  `BMW`,
  `Mercedes`
]

const departments = [
  `Разработчики`,
  `Бухгалтерия`,
  `Юридический отдел`,
  `Техническая поддержка`,
  `Отдел продаж`
]

const statuses = [
  `Открыто`,
  `Закрыто`,
  `В разработке`,
  `Отклонено`,
  `Тестируется`,
]

const priorities = [
  `Низкий`,
  `Нормальный`,
  `Высокий`,
]

export const generateRequest = (i = getRandomInt(0, 1000)) => {
  const date = getRandomDate(BEGINDATE, ENDDATE);
  const dueDate = getRandomDate(date, new moment(date).add(getRandomInt(0, 30), `days`));
  const actualDueDate = getRandomDate(date, new moment(date).add(getRandomInt(0, 30), `days`));

  return {
    id: i,
    date: date.format(`DD.MM.yyyy`),
    topic: getRandomArrayItem(topics),
    client: getRandomArrayItem(people),
    type: getRandomArrayItem(types),
    product: getRandomArrayItem(products),
    department: getRandomArrayItem(departments),
    responsible: getRandomArrayItem(people),
    status: getRandomArrayItem(statuses),
    dueDate: dueDate.format(`DD.MM.yyyy`),
    actualDueDate: actualDueDate.format(`DD.MM.yyyy`),
    lastAnswer: getRandomArrayItem(people),
    priority: getRandomArrayItem(priorities),
    isExpired: actualDueDate > dueDate
  }
}

export const generateRequests = (count = 10) => {
  const requests = [];
  for (let i = 0; i < count; i++) {
    requests.push(generateRequest(i));
  }
  return requests;
}
