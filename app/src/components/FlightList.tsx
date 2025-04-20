"use client";

import { Flight } from "@/app/(main)/search/page";
import SeatMenu from "./seatMenu";
import { Session } from "next-auth";
import { redirect, usePathname } from "next/navigation";
import FlightIcon from "./FlightIcon";

interface FlightListProps {
  flights: Flight[];
  onDeleteFlight?: (key: string) => void;
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
  user: Session | null;
}

const FlightList = (props: FlightListProps) => {
  const pathname = usePathname();

  const setSeat = async (key: string, newSeat: string) => {
    props.setFlights((prevFlights) =>
      prevFlights.map((flight) =>
        flight.key === key ? { ...flight, seat: newSeat } : flight
      )
    );
    if(pathname === "/flights") {
      const res = await fetch(`/api/flights/${key}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ seat: newSeat }),
      });
      if (!res.ok) {
        redirect("/500");
      }
    }
  };

  return (
    <div className={`flex flex-col items-center`}>
      <div className="w-[800px]">
        <h1 className="text-xl font-bold pt-5">Results</h1>
      </div>
      <div className="flex flex-col w-[820px] gap-8 p-2">
        {!props.flights || props.flights.length === 0 ? (
          <p className="text-white">No flights found.</p>
        ) : (
          props.flights.flights.map((flight) => (
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
                  <FlightIcon flight={flight} onDeleteFlight={props.onDeleteFlight}/>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FlightList;
