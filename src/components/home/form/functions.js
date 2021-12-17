export const searchCompatibleCities = (cities, id) => {
    const filter = cities.filter(city => city.id === parseInt(id))[0];
    if (filter) {
        const resp = createArrayCities(cities, filter.flights);
        if(resp.length)
            return resp;
    }
};

const createArrayCities = (cities, flights) => {
    const array = [];
    flights.map(item => {
        const filter = cities.filter(city => city.id === item.idcity)[0];
        array.push(filter);
    });

    return array;
};