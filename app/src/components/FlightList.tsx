"use client"

import FlightCard from "./FlightCard";
import { useState } from "react";


type FlightProps = {
    From: string;
    To: string;
    Departure: string; // Departure date
    Return: string; // Return date
    Travelers: number;
}

const FlightList = () => {
    const [Flights, setFlights] = useState<FlightProps[]>(
        [
            {
                From: "test",
                To: "Test",
                Departure: "X/X/X",
                Return: "X/X/X",
                Travelers: 0,
            }
        ]
    );

    const handleClick = () => {
        const newFlight = {
            From: "test",
            To: "Test",
            Departure: "X/X/X",
            Return: "X/X/X",
            Travelers: 0,
        }
        setFlights((flight: FlightProps) => {
            return [flight, ...Flights]
        });
    }

    return(
        <div>
            <button onClick={handleClick}>Test</button>
            {
                Flights.map((flightInfo)=>
                    <FlightCard
                    From={flightInfo.From}
                    To={flightInfo.To}
                    Departure={flightInfo.Departure}
                    Return={flightInfo.Departure}
                    Travelers={flightInfo.Travelers}
                    ></FlightCard>
                )
            }
        </div>
    )
}

export default FlightList