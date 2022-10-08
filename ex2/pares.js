function pares (array) {
    let nums = [];
    for (let i = 0; i <array.length; ) {
    if (array[i] % 2 === 0) {
        nums.push(array[i]);
    }
}
    console.log('os numeros pares entre 32 a 321 são: ' , nums);
}

let array = [32, 321];

pares (array);
