"use client"

import WeatherCard from '@/Components/WeatherCard';
import React, {useState} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import useStore from '@/store/WeatherStore';
import axios from 'axios';

const HomePage = () => {

    const [city, setCity] = useState<string>('');

    const {setWeather} = useStore();

    const fetchWeather = async () => {

        try {
            const API_KEY = '8d14454c98b10cc4e938021d9d57dcb5';
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

            const weatherData = {
                city: response.data.name,
                temperature: response.data.main.temp,
                description: response.data.weather[0].description,
            };

            setWeather(weatherData);

        } catch (error) {
            console.error('Error fetching weather data:', error);
            
        }
        
    };

    return (
        <div>
            <h1>Weather App</h1>
            <Row className="justify-content-center">
                <Col>
                <Form>
                    <Form.Group controlId="cityInput">
                        <Form.Control 
                        type="text"
                        placeholder="Enter City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                    </Form.Group>
                    <Button className="fetchweather" variant="primary" onClick={fetchWeather}>Get Weather</Button>
                </Form>
                </Col>
            </Row>
            <WeatherCard />
        </div>
    )

}

export default HomePage;