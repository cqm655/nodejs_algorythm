const factorial = (value) => {
  let result = 1
    if(value < 0) throw new Error('value must be greater than 0');

    //Inițializăm result cu 1. Folosim 1 pentru că este elementul neutru la înmulțire factorial(0) = 1
   for(let i = 2; i <= value; i++) {
       //Pornim de la 2 pentru că înmulțitul cu 1 nu schimbă valoarea — economisim o iterare.
       result *= i
       //Aceasta este echivalent cu result = result * i. La fiecare pas înmulțim result cu i și stocăm înapoi în result.
   }
    console.log(result)
    return result
}

factorial(3)