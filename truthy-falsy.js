const products = ['some random item']
const product = products[0]

// if (product !== undefined) {
//     console.log('Product found');
// } else {
//     console.log('Product not found');
// }



// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN = (not a number)

if (product) {
    console.log('Product found');
} else {
    console.log('Product not found');
}