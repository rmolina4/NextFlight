"use client";
import { Flight } from "@/app/(main)/search/page";
import SeatMenu from "./seatMenu";
import { Session } from "next-auth";
import { redirect, usePathname } from "next/navigation";
import FlightIcon from "./FlightIcon";
import FlightCard from "./FlightCard";

interface FlightListProps {
  flights: Flight[];
  onDeleteFlight?: (key: string) => void;
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
  user: Session | null;
  className?: string;
}

const FlightList = (props: FlightListProps) => {
  const pathname = usePathname();

  const setSeat = async (key: string, newSeat: string) => {
    props.setFlights((prevFlights) =>
      prevFlights.map((flight) =>
        flight.key === key ? { ...flight, seat: newSeat } : flight
      )
    );
    if (pathname === "/flights") {
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
    <div className={`flex flex-col items-center text-sm ${props.className}`}>
      <div className="w-full max-w-screen-md px-2">
        <h1 className="text-xl font-bold pt-5">Results</h1>
      </div>
      <div className="flex flex-col w-full max-w-[48rem] gap-8 px-2">
        {!props.flights || props.flights.length === 0 ? (
          <p className="text-black">No flights found.</p>
        ) : (
          props.flights.map((flight) => (
            <FlightCard
              key={flight.key}
            >
              <div className="flex flex-wrap">
                <p className="p-2 m-1"><strong>From:</strong> {flight.origin}</p>
                <p className="p-2 m-1"><strong>To:</strong> {flight.destination}</p>
                <p className="p-2 m-1"><strong>Departure:</strong> {flight.departure}</p>
                <p className="p-2 m-1"><strong>Arrival:</strong> {flight.arrival}</p>
                <p className="p-2 m-1"><strong>Price:</strong> {flight.price}</p>
                <div className="p-2 m-1">
                  <div className="flex items-center gap-2">
                    <p><strong>Seat:</strong> {flight.seat}</p>
                    <SeatMenu
                      setSeat={(seat: string) => setSeat(flight.key, seat)}
                    />
                  </div>
                </div>
              </div>
              {props.user && (
                <div className="flex items-center ml-4">
                  <FlightIcon
                    flight={flight}
                    onDeleteFlight={props.onDeleteFlight}
                  />
                </div>
              )}
            </FlightCard>
          ))
        )}
      </div>
    </div>
  );
};

export default FlightList;
