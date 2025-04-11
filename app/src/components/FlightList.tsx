"use client";

import { useState } from "react";
import { Flight } from "@/app/(main)/page";
import { Icon } from "@iconify/react";

interface FlightListProps {
  flights: Flight[];
}

const FlightList = (prop: FlightListProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[800px]">
        <h1 className="text-xl font-bold pt-5">Results</h1>
      </div>
      <div className="flex flex-col w-[820px] gap-8 p-2">
        {prop.flights.map((flight) => (
          <div
            key={flight.key}
            className="flex gap-2 rounded-xl flex shadow-[0_0_10px_0px_rgba(0,0,0,0.1)]"
          >
            <p className="flex-1 p-2 m-1">From: {flight.from}</p>
            <p className="flex-1 p-2 m-1">To: {flight.to}</p>
            <p className="flex-1 p-2 m-1">Departure: {flight.departure}</p>
            <p className="flex-1 p-2 m-1">Return: {flight.return}</p>
            <p className="flex-1 p-2 m-1">Travelers: {flight.travelers}</p>
            <div className="flex items-center justify-center pr-4">
              <Icon
                icon="tabler:plus"
                className="text-2xl hover:cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
