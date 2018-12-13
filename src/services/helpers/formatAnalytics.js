import moment from 'moment';

import { timeSelectors, parsers, TIME_PERIODS } from 'services/helpers';

const { WEEK_AGO, MONTH_AGO, YEAR_AGO, BEGGINING } = timeSelectors;
const { byDay, byWeekDay, byDate, byMonth, byYear } = parsers;

const makeInitialDates = (startDate, limit, dateKey, parser) => {
  let currentDate = startDate;
  const initialDates = [];
  for (let i = 0; i < limit; i++) {
    initialDates.push({
      date: parser(currentDate),
      count: 0,
    });
    currentDate = moment(currentDate).add(1, dateKey);
  }

  return initialDates;
};

const formatData = (initialDates, data, parser) => initialDates.map(date => {
  let dateData = date;
  data.forEach(dateStat => {
    const { dimensions, metrics } = dateStat;
    const parsedDate = parser(dimensions[0]);
    if (date.date === parsedDate) {
      dateData.count += Number(metrics[0].values[0]);
    }      
  });
  return dateData;
});

const formatByToday = data => [{
  date: byDay(data[0].dimensions[0]),
  count: data[0].metrics[0].values[0],
}];

const formatByLastWeek = data => {
  const initialDays = makeInitialDates(WEEK_AGO, 7, 'd', byWeekDay);
  return formatData(initialDays, data, byWeekDay);
};

const formatByLastMonth = data => {
  const initialDays = makeInitialDates(MONTH_AGO, 30, 'd', byDate);
  return formatData(initialDays, data, byDate);
};

const formatByLastYear = data => {
  const initialMonths = makeInitialDates(YEAR_AGO, 12, 'M', byMonth);
  return formatData(initialMonths, data, byMonth);
};

const formatByAllTime = data => {
  const initialYears = makeInitialDates(BEGGINING, 1, 'Y', byYear);
  return formatData(initialYears, data, byYear);
};

export const formatDataByTime = (data, period) => {
  switch (period) {
    case TIME_PERIODS[0]:
      return formatByToday(data);
    case TIME_PERIODS[1]:
      return formatByLastWeek(data);
    case TIME_PERIODS[2]:
      return formatByLastMonth(data);
    case TIME_PERIODS[3]:
      return formatByLastYear(data);
    default:
      return formatByAllTime(data);
  }
};
