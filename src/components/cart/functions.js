export const getCity = (cities, id) => {
    if (cities.length) {
        const filter = cities.filter(city => city.id === parseInt(id))[0];
        return filter;
    }
}

export const getTotal = (infoCart) => {
    let total = 0;
    infoCart.map(item => {
        total = total + parseInt(item.price);
    });
    return total;
};