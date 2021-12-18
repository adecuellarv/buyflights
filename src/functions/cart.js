import { reactLocalStorage } from 'reactjs-localstorage';

const cartName = 'cart-buyflights';

const filterBY = (type, value, array) => {
    const filter = array.filter(cat => cat[type] === value)[0];
    if (filter) {
        return filter;
    }
}

export const getCart = () => {
    return reactLocalStorage.getObject(cartName).length ? reactLocalStorage.getObject(cartName) : [];
};

export const addTOCart = (infoProduct) => {
    const cartItems = reactLocalStorage.getObject(cartName).length ? reactLocalStorage.getObject(cartName) : [];

    if (cartItems.length) {
        const productExist = filterBY('id', infoProduct.id, cartItems);
        if (productExist) {
            const position = cartItems.indexOf(productExist);
            cartItems[position] = {
                ...infoProduct,
                ...{ quantity: parseInt(cartItems[position].quantity) + 1 }
            }
        } else {
            const prd = {
                ...infoProduct,
                ...{ quantity: 1 }
            };
            cartItems.push(prd);
        }

    } else {
        const prd = {
            ...infoProduct,
            ...{ quantity: 1 }
        };
        cartItems.push(prd);
    }
    reactLocalStorage.setObject(cartName, cartItems);
};

export const deleteItemCart = (infoProduct) => {
    const cartItems = reactLocalStorage.getObject(cartName).length ? reactLocalStorage.getObject(cartName) : [];
    if (cartItems) {
        const productExist = filterBY('id', infoProduct.id, cartItems);
        const position = cartItems.indexOf(productExist);
        if (position !== '') {
            cartItems.splice(position, 1);
            reactLocalStorage.setObject(cartName, cartItems);
        }
    }
};