import moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const TODAY = moment().format(DATE_FORMAT);

export const WEEK_AGO = moment().subtract(7, 'd').format(DATE_FORMAT);

export const parseDate = dateString => moment(dateString).format(DATE_FORMAT);
