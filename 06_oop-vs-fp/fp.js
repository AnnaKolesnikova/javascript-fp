function addItem(list, item) {
    // return list.concat(item);
    return [...list, item];
}

function removeItems(list, ...items) {
    return list.filter(item => !items.includes(item.title));
}

const shoppingList = [
    { title: 'молоко', price: 100 },
    { title: 'яйца', price: 70 },
    { title: 'яблоки', price: 120 }
];

const newShoppingList = addItem(shoppingList, { title: 'бананы', price: 60 });

const dietList = removeItems(shoppingList, 'бананы');
const veganList = removeItems(shoppingList, 'молоко', 'яйца');

// console.log(newShoppingList);
// console.log(dietList);
// console.log(shoppingList);
// console.log(veganList);

const shoppingListDoublePrice = shoppingList.map(item => {
    //1
    // return {
    //     title: item.title,
    //     price: item.price*2
    // }

    //2
    return Object.assign({}, item, {
        price: item.price*2
    })

    //3
    // return {
    //     ...item,
    //     price: item.price*2
    // }
});

console.log(shoppingListDoublePrice);
console.log(shoppingList);

