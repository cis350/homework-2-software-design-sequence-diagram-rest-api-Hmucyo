const axios = require('axios');
export const getCountryFromId = async (countryFromId) => {
    return await axios.get(`https://restcountries.com/v3.1/name/${countryFromId}`);
}