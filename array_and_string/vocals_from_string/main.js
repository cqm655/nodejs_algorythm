const vocals = ['a', 'e', 'i']

const vocalFromString = value => {
    console.log(value)

   return value.split('').filter(x => vocals.includes(x));
}

console.log(vocalFromString('abecedar'))
