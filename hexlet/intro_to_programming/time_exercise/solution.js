// Форматированное время (Введение в программирование)

const getFormattedTime = (time) => time < 10 ? `0${time}` : time;

const formattedTime = (minites_total) => {
    const hours_total = Math.floor(minites_total / 60);
    const days = Math.floor(hours_total / 24);
    const hh = hours_total - days * 24;
    const mm = minites_total - hours_total * 60;

    // return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
    return `${getFormattedTime(hh)}:${getFormattedTime(mm)}`;
}

export default formattedTime;