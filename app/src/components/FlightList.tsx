"use client";

import { useState } from "react";
import { Flight } from "@/app/(main)/search/page";
import { Icon } from "@iconify/react";
import SeatMenu from "./seatMenu";
import { POSTFromPage } from "@/app/api/flights/route"
import { deprecate } from "util";

interface FlightListProps {
  flights: Flight[];
  className?: string;
  flightsPage?: boolean;
  onDeleteFlight?: (key: number) => void;
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
  isLoggedIn: boolean;
}

const FlightList = (props: FlightListProps) => {
  const setSeat = (key: number, newSeat: string) => {
    props.setFlights((prevFlights) =>
      prevFlights.map((flight) =>
        flight.key === key ? { ...flight, seat: newSeat } : flight
      )
    );
  };

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
            <p className="grow p-2 m-1">From: {flight.origin}</p>
            <p className="grow p-2 m-1">To: {flight.destination}</p>
            <p className="grow p-2 m-1">Departure: {flight.departure}</p>
            <p className="grow p-2 m-1">Arrival: {flight.arrival}</p>
            <p className="grow p-2 m-1">Price: {flight.price}</p>
            <div className="grow p-2 m-1">
              <div className="flex items-center justify-center gap-2">
                <p>Seat: {flight.seat}</p>
                <SeatMenu
                  setSeat={(seat: string) => setSeat(flight.key, seat)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center pr-4">
              {props.isLoggedIn &&  (
                <Icon
                  icon={props.flightsPage ? "tabler:trash" : "tabler:plus"}
                  className="text-2xl hover:cursor-pointer"
                  onClick={() => {
                    // const FlightProps = {
                    //   from: flight.from,
                    //   to: flight.to,
                    //   departure: flight.departure,
                    //   arrival: flight.arrival,
                    //   seat: "1",
                    //   key: flight.key,
                    // }
                    //POSTFromPage(FlightProps); // Uncommenting this breaks page. Need to figure out how to fix this
                  }
                    //props.onDeleteFlight && props.onDeleteFlight(flight.key)
                  }
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;
