const SumFrom1ToN = ( value) => {
    let sum = 0
    for(let i = 1; i <= value; i++){
        sum+=i
    }
    console.log(sum)
    return sum
}

SumFrom1ToN(4)