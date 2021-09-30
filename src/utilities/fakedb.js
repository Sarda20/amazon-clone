// const addDb = key => {
//     const exists = localStorage.getItem(key);
//     if (!exists) {
//         localStorage.setItem(key, 1);
//     }
//     else {
//         const newcount = parseInt(exists) + 1;
//         localStorage.setItem(key, newcount);
//     }
// }

const addDb = key => {
    const exists = localStorage.getItem('cart');
    let cart = {};
    if (!exists) {
        cart[key] = 1;
    }
    else {
        cart = JSON.parse(exists);
        if (cart[key]) {
            const newcount = cart[key] + 1;
            cart[key] = newcount;
        }
        else {
            cart[key] = 1;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

const removeDB = (key) => {
    const exists = localStorage.getItem('cart');
    if (exists) {
        const cart = JSON.parse(exists);
        delete cart[key];
        localStorage.setItem('cart', JSON.stringify(cart));
    }

}

const getStoredCart = () => {
    const exists = localStorage.getItem('cart');
    return exists ? JSON.parse(exists) : {};
}
export { addDb, removeDB, getStoredCart };