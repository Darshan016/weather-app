#!/usr/bin/env node
const inquirer = require('inquirer');
require('dotenv').config();


async function getWeatherInfo() {
    const { default: fetch } = await import('node-fetch');
  try {
    const { cityName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'cityName',
        message: 'Enter the name of the city:',
      },
    ]);

    const apiKey = process.env.API_KEY; 
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const weather = {
        temperature: data.current.temp_c,
        region:data.location.region,
        wind:data.current.wind_kph,
        currentTime: data.location.localtime,
        country: data.location.country,
      };

      console.log('Weather Information:');
      console.log('---------------------');
      console.log('Temperature (°C):', weather.temperature);
      console.log(`Region:`,weather.region)
      console.log(`wind speed in kmph: `,weather.wind)
      console.log('Current Time:', weather.currentTime);
      console.log('Country:', weather.country);
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.error('Failed to fetch weather data:', error.message);
  }
}


getWeatherInfo();
