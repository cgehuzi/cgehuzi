// @ts-check
// BEGIN (write your solution here)
const isHappyTicket = (ticket) => {
  const iter = (start, end, startSum, endSum) => {
    if (start > end) {
      return startSum === endSum;
    }

    const nextStartSum = startSum + Number(ticket[start]);
    const nextEndSum = endSum + Number(ticket[end]);
    const nextStart = start + 1;
    const nextEnd = end - 1;

    return iter(nextStart, nextEnd, nextStartSum, nextEndSum);
  };

  return iter(0, ticket.length - 1, 0, 0);
};

export default isHappyTicket;
// END