export const Status = {
  OPENED: `Открыто`,
  DECLINED: `Отклонено`,
  CLOSED: `Закрыто`,
};

export const IsExpired = {
  YES: `Просрочен`,
  NO: `Не просрочен`,
};

export const Priority = {
  LOW: `Низкий`,
  NORMAL: `Нормальный`,
  HIGH: `Высокий`,
};

export const toCamel = (s) => {
  return s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

export const IssueModel = {
  CREATED_AT: `Дата создания`,
  TYPE: `Тип заявки`,
  PRODUCT: `Продукт`,
  DEPARTMENT: `Отдел`,
  RESPONSIBLE: `Ответственный`,
  STATUS: `Статус`,
  DUE_DATE: `Регламентная дата решения`,
  ACTUAL_DUE_DATE: `Дата решения`,
  LAST_ANSWER: `Последний ответ`,
  PRIORITY: `Приоритет`,
  IS_EXPIRED: `Просрочен`,
};

export const FILTERS = [
  {
    name: `department`,
    options: [
      `Отдел`,
      `Не выбрано`,
      `Отдел продаж`,
      `Техподдержка`,
      `Разработчики`,
    ],
  },
  {
    name: `product`,
    options: [
      `Продукт`,
      `Не выбрано`,
      `BIM-плагины`,
      `WEB`,
      `АВС`,
      `АВС SNB Compiler`,
      `АВС-KZ`,
      `АВС-RU`,
      `АВС_UZ`,
      `АВС-ПИР`,
    ],
  },
  {
    name: `status`,
    options: [
      `Статус`,
      `Не выбрано`,
      `Открыто`,
      `Закрыто`,
      `Отклонено`,
    ],
  },
];
