const reverseString = (str) => {
    const reversedStr = str.split('').reverse().join('');
    console.log('reversed-func: ',reversedStr)
    // str.split('') → împarte șirul (str) într-un array de caractere.
    //
    //     Exemplu: "abc".split('') → ["a", "b", "c"].
    //
    //     .reverse() → inversează ordinea elementelor din array.
    //
    //     Exemplu: ["a", "b", "c"].reverse() → ["c", "b", "a"].
    //
    //     .join('') → le unește înapoi într-un șir, fără separator.
    //
    //     Exemplu: ["c", "b", "a"].join('') → "cba".
    let reversedNoFunc = ''

    for(let i = str.length - 1; i>=0; i--){
           reversedNoFunc += str[i]
    }
    console.log('reversed-mnanual', reversedNoFunc)
    return reversedNoFunc
}

console.log(reverseString('abcd'))