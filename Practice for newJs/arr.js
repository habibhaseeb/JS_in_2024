let Array0 = [1, 2, 3, 4, 5, 6, 'a', 'b', 'c'];
let Array1= ['d','e','f'];

const formatting = Array0.slice(6 , 9).concat(Array1.slice(0 , 3));

console.log(formatting);

const x = Array1.filter((num) => {
   let capital = "[ " + `${Array1[0].toUpperCase() + ',' + Array1[1] + ',' + Array1[2]}` + " ]";

    let setCapital = Array (capital);

   console.log(setCapital);
});

Array1 = Array0.copyWithin(3, 0, 2) // in this first index show how many pairs of the numbers

console.log(Array1)    // 2nd indicates the starting index and 3rd indicates the ending index

const iterator = Array0.entries;
console.log(...Array1, iterator.next.value);
