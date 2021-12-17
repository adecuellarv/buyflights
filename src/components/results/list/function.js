export const getSchedule = (cities, infoSearch) => {
    const filterFrom = cities.filter(city => city.id === parseInt(infoSearch.from))[0];
    if (filterFrom.flights) {
        const filterTO = filterFrom.flights.filter(item => item.idcity === parseInt(infoSearch.to))[0];
        if (filterTO) return filterTO;
    }
};