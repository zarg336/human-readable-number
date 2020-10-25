module.exports = function toReadable(number) {
    const One = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const Ten = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) return 'zero';

    const hundreds = Math.floor(number / 100);
    const tens = number - hundreds * 100;
    const tenL = Math.floor(tens / 10);
    const tenR = tens % 10;

    const result = [];
    if (hundreds > 0) {
        result.push(`${One[hundreds - 1]} hundred`);
    }

    if (tenL > 1) {
        result.push(`${Ten[tenL - 2]}`);

        if (tenR > 0) {
            result.push(`${One[tenR - 1]}`);
        }
    } else {
        if (One[tens - 1]) result.push(`${One[tens - 1]}`);
    }

    return result.join(' ');
}
