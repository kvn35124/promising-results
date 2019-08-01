
// slowMath.add(6,2)
// .then((value) => {
//     console.log(value)
//     return slowMath.multiply(value, 2);
// }).then((value) => {
//     console.log(value)
//     return slowMath.divide(value, 4);
// }).then((value) => {
//     console.log(value)
//     return slowMath.subtract(value, 3);
// }).then((value) => {
//     console.log(value)
//     return slowMath.add(value, 98);
// }).then((value) => {
//     console.log(value)
//     return slowMath.remainder(value, 2);
// }).then((value) => {
//     console.log(value)
//     return slowMath.multiply(value, 50);
// }).then((value) => {
//     console.log(value)
//     return slowMath.remainder(value, 40);
// }).then((value) => {
//     console.log(value)
//     return slowMath.add(value, 32);
// }).then((value) => {
//     console.log(`The final result is ${value}.`)
// }).catch((error) => {
//     console.log(error)
// })

let doMath = async () => {
    let value = await slowMath.add(6,2)
    console.log(value)
    let value1 = await slowMath.multiply(value, 2)
    console.log(value1)
    let value2 = await slowMath.divide(value1, 4)
    console.log(value2)
    let value3 = await slowMath.subtract(value2, 3)
    console.log(value3)
    let value4 = await slowMath.add(value3, 98)
    console.log(value4)
    let value5 = await slowMath.remainder(value4, 2)
    console.log(value5)
    let value6 = await slowMath.multiply(value5, 50)
    console.log(value6)
    let value7 = await slowMath.remainder(value6, 40)
    console.log(value7)
    let value8 = await slowMath.add(value7, 32)
    console.log(`The final result is ${value8}.`)

}

doMath();
