import moment from 'moment';
import {getRandomDate, getRandomInt, getRandomArrayItem, getRandomObjectItem} from '../utils/common';
import {IsExpired, Priority, Status} from '../const';
import { loremIpsum } from 'react-lorem-ipsum';

const BEGINDATE = moment(`2015-01-01`);
const ENDDATE = moment(`2022-01-01`);

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
];

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
];

const types = [
  `Инцидент`,
  `Доработка`,
  `Обращение`,
];

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
];

const departments = [
  `Разработчики`,
  `Бухгалтерия`,
  `Юридический отдел`,
  `Техническая поддержка`,
  `Отдел продаж`
];

export const generateIssue = (dev = false, i = getRandomInt(0, 1000)) => {
  const date = getRandomDate(BEGINDATE, ENDDATE);
  const dueDate = getRandomDate(date, new moment(date).add(getRandomInt(0, 30), `days`)).toISOString();
  const actualDueDate = getRandomDate(date, new moment(date).add(getRandomInt(0, 30), `days`)).toISOString();

  let issue = {
    topic: getRandomArrayItem(topics),
    client: getRandomArrayItem(people),
    type: getRandomArrayItem(types),
    product: getRandomArrayItem(products),
    department: getRandomArrayItem(departments),
    responsible: getRandomArrayItem(people),
    status: getRandomObjectItem(Status),
    dueDate: new Date(dueDate),
    actualDueDate: new Date(actualDueDate),
    lastAnswer: getRandomArrayItem(people),
    priority: getRandomObjectItem(Priority),
    isExpired: actualDueDate > dueDate ? IsExpired.YES : IsExpired.NO,
    description: loremIpsum()[0].slice(255)
  }

  if (dev) {
    return issue;
  }

  issue = {...issue, id: i, date}
  return issue;
};

export const generateIssues = (count = 10) => {
  const issues = [];
  for (let i = 0; i < count; i++) {
    issues.push(generateIssue(i + 1));
  }
  return issues;
}
