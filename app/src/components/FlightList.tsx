"use client";

import { useState } from "react";
import { Flight } from "@/app/(main)/page";
import { Icon } from "@iconify/react";
import { POST } from "@/app/api/flights/route"

interface FlightListProps {
  flights: Flight[];
  className?: string,
  flightsPage?: boolean
  onDeleteFlight?: (key: number) => void;
}

const FlightList = ( props: FlightListProps) => {
  
  return (
    <div className={`flex flex-col items-center ${props.className}`}>
      <div className="w-[800px]">
        <h1 className="text-xl font-bold pt-5">Results</h1>
      </div>
      <div className="flex flex-col w-[820px] gap-8 p-2">
        {props.flights.map((flight) => (
          <div
            key={flight.key}
            className="flex gap-2 rounded-xl flex shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] bg-white"
          >
            <p className="flex-1 p-2 m-1">From: {flight.from}</p>
            <p className="flex-1 p-2 m-1">To: {flight.to}</p>
            <p className="flex-1 p-2 m-1">Departure: {flight.departure}</p>
            <p className="flex-1 p-2 m-1">Return: {flight.return}</p>
            <p className="flex-1 p-2 m-1">Travelers: {flight.travelers}</p>
            <div className="flex items-center justify-center pr-4">
              <Icon
                icon={props.flightsPage ? "tabler:trash" : "tabler:plus"}
                className="text-2xl hover:cursor-pointer"
                onClick={() => props.onDeleteFlight && props.onDeleteFlight(flight.key)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
