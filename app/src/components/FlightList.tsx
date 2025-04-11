"use client";

import { useState } from "react";
import { Flight } from "@/app/(main)/page";

const FlightList = () => {
  const [Flights, setFlights] = useState<Flight[]>([
    {
      from: "test",
      to: "Test",
      departure: "X/X/X",
      return: "X/X/X",
      travelers: "0",
    },
  ]);

  const handleClick = () => {
    const newFlight = {
      from: "test",
      to: "Test",
      departure: "X/X/X",
      return: "X/X/X",
      travelers: "0",
    };
    setFlights([newFlight, ...Flights]);
  };

  return (
    <div className="FlightList">
      <button onClick={handleClick}>TEST: Click to add flight</button>
      {Flights.map((flightInfo) => (
        <div className="FlightCard">
          <p>From: {flightInfo.from}</p>
          <p>To: {flightInfo.to}</p>
          <p>Departure: {flightInfo.departure}</p>
          <p>Return: {flightInfo.return}</p>
          <p>Travelers: {flightInfo.travelers}</p>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
