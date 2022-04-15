import {api} from "./data";

export function getRangedApi(period) {
  const date = new Date();
  const dateTo = date.toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'});
  let dateFrom;
  switch (period) {
    case 'oneWeek':
      date.setDate(date.getDate() - 7);
      break;
    case 'twoWeeks':
      date.setDate(date.getDate() - 14);
      break;
    case 'oneMonth':
      date.setDate(date.getDate() - 30);
      break;
    default:
      return 'Error. Period is not provided!';
  }

  dateFrom = date.toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'});
  return `${api}&dateFrom=${dateFrom}&dateTo=${dateTo}`;
}

export const formatPricesData = (data) => {
  return data.map(({price, date}) => {
    let x = date.split('.').reverse().join('-');
    return {x, y: price};
  });
}

export const formatMoney = (number) => {
  let strMoney = parseInt(number).toString();
  switch (true) {
    case number < 10000:
      return `$${strMoney[0]} ${strMoney.substring(1)}`;
    case number < 100000:
      return `$${strMoney.substring(0, 2)} ${strMoney.substring(2)}`;
    case (number > 99999 && number < 1000000):
      return `$${strMoney.substring(0, 3)} ${strMoney.substring(3)}`;
    case (number > 999999 && number < 10000000):
      return `$${strMoney[0]} ${strMoney.substring(1, 4)} ${strMoney.substring(4)}`;
    default:
      return `$${strMoney}`;
  }
}

export const getReminder = (number, length) => {
  const reminder = (number % 10 **length);
  return reminder ? `.${reminder.toString().slice(0, length)}` : `.${'0'.repeat(length)}`;
}