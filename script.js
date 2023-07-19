const menu = {
    _meal: '',
    _price: 0,

    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            return this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            return this._price = priceToCheck;
        }
    },

    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's special is ${this._meal} for £${this._price.toFixed(2)}`
        } else {
            return `Error! Please make sure the meal and price for today's special has been set.`
        }
    }
};


menu.meal = 'Lasagne';
menu.price = 7.50;

console.log(menu._price);
console.log(menu._meal);

console.log(menu.todaysSpecial);