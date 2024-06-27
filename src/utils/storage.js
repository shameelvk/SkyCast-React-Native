import AsyncStorage from '@react-native-async-storage/async-storage';

const WEATHER_DATA_KEY = 'WEATHER_DATA';

export const setWeather = async (data) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(WEATHER_DATA_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving weather data to storage', e);
  }
};

export const getWeatherData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(WEATHER_DATA_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving weather data from storage', e);
    return null;
  }
};
