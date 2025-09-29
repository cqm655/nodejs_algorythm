const palindrom_checker = (value) => {
    // comparam sirul intrat cu sirul inversat
    console.log(value.toString().toLowerCase().split(''));
    let val = value.toLowerCase()

    let reverseVal = val.split('').reverse().join('');

    return val === reverseVal;
}

console.log(palindrom_checker('5a5'));