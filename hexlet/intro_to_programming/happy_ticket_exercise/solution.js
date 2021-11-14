const isHappyTicket = (ticket) => {
    const iter = (start, end, start_sum, end_sum) => {
        if (start > end) {
            return start_sum === end_sum;
        }

        start_sum += Number(ticket[start]);
        end_sum += Number(ticket[end]);
        start += 1;
        end -= 1;

        return iter(start, end, start_sum, end_sum);
    }

    return iter(0, ticket.length - 1, 0, 0);
}

export default isHappyTicket;