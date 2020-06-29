interface Mountain{
    name: string;
    height: number;
}
let mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19341},
    {name: "Everest", height: 29029},
    {name: "Denali", height: 20310}
];

/* Declare a function called findNameOfTallestMountain. It takes one parameter, an
array of Mountain objects. It returns a string, the name of the tallest mountain in the
given array  */

const findNameOfTallestMountain = (array: Mountain[]): string => {
    let max = array[0];
    for (let i of array) {
        if (i.height > max.height) {
            max = i;
        }
    }
    return `Tallest Mountain: ` + max.name;
}

 let tallest = (findNameOfTallestMountain(mountains));
 console.log(tallest);


/*  Call findNameOfTallestMountain, passing it your mountains array as an argument.
● Store the result of the function call (the return value) in a variable and then console.log
the variable. (Hint: It will print “Everest”.) */


 interface Product{
    name: string;
    price: number;
}

let products: Product[]= [
    {name: "basketball", price: 8},
    {name: "football", price:7},
    {name: "baseball", price:3},
    {name: "softball", price:2}   
];

//finding the average price
const calcAverageProductPrice = (array: Product[]) => {
    var sum: number = 0;
    for (var i of array) {
        sum += i.price;
    }
    return (sum / array.length);
}

let avgScore = calcAverageProductPrice(products);
console.log(`Average score:`, avgScore);
 

 interface InventoryItem extends Product{
    quantity: number;
}

let inventory: InventoryItem[]= [
    {name:"motor", price: 10.00, quantity: 10},
    {name:"sensor", price:12.50, quantity: 4},
    {name:"LED", price:1, quantity: 20}
];
const calcInventoryValue = (array: InventoryItem[]) => {
        let subtotal = 0;
        for(let i of array) {
            subtotal += i.price * i.quantity
        }
        return subtotal;
}
let value = calcInventoryValue(inventory);
console.log(value);