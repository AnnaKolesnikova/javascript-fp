function add(x, y) {
    return x + y;
}

//not pure function
function random(x) {
    return Math.random() * x;
}

//not pure function
function getDate() {
    return Date.now();
}

//not pure function
function save(data) {
    localStorage.set('data', data);
}

{
    let cart = {
        items: [],

        add(item) {
            this.items.push(items); //changes state
        }
    };
    
    cart.add('apple');
}

//more pure, but not pure
{
    let cart = {
        items: [],

        add(item) {
            this.items = this.items.concat(items); //changes state but in other way
            return items;
        }
    };
    
    let items = cart.add('apple');
}