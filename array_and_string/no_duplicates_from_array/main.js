// const NoDuplicates = (array) => {
//     return [...new Set(array)]
// }

// const NoDuplicates = (array) => {
//     let newArray = [];
//
//     for (let i = 0; i < array.length; i++) {
//         if(!newArray.includes(array[i])) {
//             newArray.push(array[i]);
//         }
//     }
//
//     return newArray;
// }

//array.indexOf(value) returnează poziția primei apariții.
// Dacă acea poziție coincide cu index (poziția curentă), păstrăm elementul.
const NoDuplicates = (array) =>
    array.filter((value, index) => array.indexOf(value) === index);//


console.log(NoDuplicates([4,3,2,2,4,5,5,6,7]))