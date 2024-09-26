"use client"

import React from "react";
import useStore from "@/store/WeatherStore";
import { Card } from "react-bootstrap";


const WeatherCard = () => {
    const { weather } = useStore();

     if (!weather) {
        return null
     };

    return (
        <Card className="my-4">
            <Card.Body>
                    <Card.Title className="text-2xl">{weather.city}</Card.Title>
                    <Card.Text>
                        <span className="text-lg">Temperature: {weather.temperature}°C</span>
                        <br />
                        <span className="text-lg">Description: {weather.description}</span>
                    </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default WeatherCard;