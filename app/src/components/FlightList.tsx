"use client";

import { useState } from "react";
import { Flight } from "@/app/(main)/page";
import { Icon } from "@iconify/react";



const FlightList = () => {
  // dummy array
  const initialArray = [    {
    from: "USA",
    to: "Spain",
    departure: "5/5/2025",
    return: "6/5/2025",
    travelers: "1",
    key: 0,
  }, {
    from: "Canada",
    to: "France",
    departure: "7/7/2025",
    return: "8/7/2025",
    travelers: "2",
    key: 1,
  }, {
    from: "UK",
    to: "Germany",
    departure: "9/9/2025",
    return: "10/9/2025",
    travelers: "3",
    key: 2,
  }];
  const [count, setCount] = useState<number>(3);
  const [Flights, setFlights] = useState<Flight[]>(initialArray);

  const handleClick = () => {
    const newFlight = {
      from: "test",
      to: "Test",
      departure: "X/X/X",
      return: "X/X/X",
      travelers: "0",
      key: count,
    };
    setFlights([newFlight, ...Flights]);
    setCount(count + 1);
  };

  const handleDelete = (key: number) => {
    const updatedFlights = Flights.filter(flight => flight.key !== key);
    setFlights(updatedFlights);
  };

  return (
    <div className="flex flex-col items-center">
      <button className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600 hover:cursor-pointer" onClick={handleClick}>TEST: Click to add flight</button>
      {Flights.map((flightInfo) => (
        <div key={flightInfo.key} className="flex flex-1 gap-2 w-5/8 rounded-xl justify-evenly items-center shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] m-2 ">
          <p className="flex-1 p-2 m-1">From: {flightInfo.from}</p>
          <p className="flex-1 p-2 m-1">To: {flightInfo.to}</p>
          <p className="flex-1 p-2 m-1">Departure: {flightInfo.departure}</p>
          <p className="flex-1 p-2 m-1">Return: {flightInfo.return}</p>
          <p className="flex-1 p- m-1">Travelers: {flightInfo.travelers}</p>
          <Icon
            icon="tabler:trash"
            className="text-2xl hover:cursor-pointer m-1 mr-2"
            onClick={() => handleDelete(flightInfo.key)}/>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
