"use client";

import { Flight } from "@/app/(main)/search/page";
import { Icon } from "@iconify/react";
import SeatMenu from "./seatMenu";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";

interface FlightListProps {
  flights: Flight[];
  onDeleteFlight?: (key: number) => void;
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
  user: Session | null;
}

const FlightList = (props: FlightListProps) => {
  const pathname = usePathname();

  const setSeat = (key: number, newSeat: string) => {
    props.setFlights((prevFlights) =>
      prevFlights.map((flight) =>
        flight.key === key ? { ...flight, seat: newSeat } : flight
      )
    );
  };

  return (
    <div className={`flex flex-col items-center`}>
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
              {props.user && (
                <Icon
                  icon={pathname === '/flights' ? "tabler:trash" : "tabler:plus"}
                  className="text-2xl hover:cursor-pointer"
                  onClick={() => {
                    
                  }}
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
