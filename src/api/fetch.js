import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '93a395fcf95a67d6da1427df4be522c7';


export const fetch = async (query) =>{
    const {data} = await axios.get(URL,{
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}