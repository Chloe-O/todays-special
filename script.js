const menuItem = document.getElementById('menuItem').value;
const menuPrice = document.getElementById('menuPrice').value;
let setTheMenu = document.getElementById('setTheMenu');

const menu = {
    _meal: '',
    _price: 0,

    set meal(menuItem) {
        if (typeof menuItem === 'string') {
            return this._meal = menuItem;
        }
    },
    set price(menuPrice) {
        if (typeof menuPrice === 'number') {
            return this._price = menuPrice;
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

setTheMenu.addEventListener('click', () => {
console.log(menuItem);
console.log(menuPrice);
});
