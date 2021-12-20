// @ts-check
// BEGIN (write your solution here)
const getFormattedTime = (time) => time < 10 ? `0${time}` : time;

const formattedTime = (minitesTotal) => {
  const hoursTotal = Math.floor(minitesTotal / 60);
  const days = Math.floor(hoursTotal / 24);
  const hh = hoursTotal - days * 24;
  const mm = minitesTotal - hoursTotal * 60;

  const result = `${getFormattedTime(hh)}:${getFormattedTime(mm)}`;
  return result;
};

export default formattedTime;
// END