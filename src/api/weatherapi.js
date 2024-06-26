import axios from "axios";
import { apikey } from "../constants";

export const fetchForecast = async (location, days) => {
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${location}&days=${days}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather forecast:", error);
        throw error;
    }
};

export const searchLocation=async(location)=>{
    try {
        const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=${apikey}&q=${location}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather location:", error);
        throw error;
    }
}