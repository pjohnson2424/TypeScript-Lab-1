"use strict";
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
var findNameOfTallestMountain = function (array) {
    var max = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        if (i.height > max.height) {
            max = i;
        }
    }
    return "Tallest Mountain: " + max.name;
};
var tallest = findNameOfTallestMountain(mountains);
console.log(tallest);
var products = [
    { name: "basketball", price: 8 },
    { name: "football", price: 7 },
    { name: "baseball", price: 3 },
    { name: "softball", price: 2 },
];
var calcAverageProductPrice = function (array) {
    var sum = 0;
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var i = array_2[_i];
        sum += i.price;
    }
    return sum / array.length;
};
var avgScore = calcAverageProductPrice(products);
console.log("Average score:", avgScore);
var inventory = [
    { name: "motor", price: 10.0, quantity: 10 },
    { name: "sensor", price: 12.5, quantity: 4 },
    { name: "LED", price: 1, quantity: 20 },
];
var calcInventoryValue = function (array) {
    var subtotal = 0;
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var i = array_3[_i];
        subtotal += i.price * i.quantity;
    }
    return subtotal;
};
var value = calcInventoryValue(inventory);
console.log(value);
