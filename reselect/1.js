const reselect = require('reselect');

var data = {
    shoppingCart: [1, 2],
    products: [
        {id: 1, name: 'shoes', price: 80},
        {id: 2, name: 'boots', price: 120},        
    ]
}

//Use reselect to compute the shoppingCartTotal
var shoppingCartTotalSelector = reselect.createSelector( /* your code here */);


//Expected to output 200
console.log(shoppingCartTotalSelector(data));

/*
//should not recalc and expected to output 200
console.log(shoppingCartTotalSelector(data));

data = Object.assign({}, data, { shoppingCart: [...data.shoppingCart, 1]});
//should recalc since we modified the data.  Expected to output 280
console.log(shoppingCartTotalSelector(data));
*/
