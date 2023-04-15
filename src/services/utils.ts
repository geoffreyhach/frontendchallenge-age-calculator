export const calculateTimeBeetweenDates = (date1: Date, date2: Date) => {
  const differenceInMs = date1.getTime() - date2.getTime();
  const differenceInDays = Math.ceil(differenceInMs / (1000 * 3600 * 24));

  return {
    year: Math.floor(differenceInDays / 365),
    month: Math.floor((differenceInDays % 365) / 30),
    day: Math.floor((differenceInDays % 365) % 30),
  };
};
