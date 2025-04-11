"use client";

import { useState } from "react";
import { Flight } from "@/app/(main)/page";
import { Icon } from "@iconify/react";

interface FlightListProps {
  flights: Flight[]
}

const FlightList = (prop: FlightListProps) => {

  return (
    <div className="flex flex-col items-center">
      {prop.flights.map((flight) => (
        <div key={flight.key} className="flex flex-1 gap-2 w-5/8 rounded-xl justify-evenly items-center shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] m-2 ">
          <p className="flex-1 p-2 m-1">From: {flight.from}</p>
          <p className="flex-1 p-2 m-1">To: {flight.to}</p>
          <p className="flex-1 p-2 m-1">Departure: {flight.departure}</p>
          <p className="flex-1 p-2 m-1">Return: {flight.return}</p>
          <p className="flex-1 p- m-1">Travelers: {flight.travelers}</p>
          <Icon
            icon="tabler:plus"
            className="text-2xl hover:cursor-pointer m-1 mr-2"
            />
        </div>
      ))}
    </div>
  );
};

export default FlightList;
