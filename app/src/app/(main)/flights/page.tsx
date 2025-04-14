"use client";

import FlightList from "@/components/FlightList";
import Plane from "@/components/planeBG";
import { useState } from "react";
import { Flight } from "../search/page";
import { redirect } from "next/navigation";

const initialArray = [
  {
    from: "USA",
    to: "Spain",
    departure: "5/5/2025",
    arrival: "6/5/2025",
    seat: "1",
    key: 0,
  },
  {
    from: "Canada",
    to: "France",
    departure: "7/7/2025",
    arrival: "8/7/2025",
    seat: "2",
    key: 1,
  },
  {
    from: "UK",
    to: "Germany",
    departure: "9/9/2025",
    arrival: "10/9/2025",
    seat: "3",
    key: 2,
  },
];

export default function Flights() {
  const [flights, setFlights] = useState<Flight[]>(initialArray);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // manually change

  if(!isLoggedIn) {
    redirect('/login');
  }

  const onDeleteFlight = (key: number) => {
    setFlights(flights.filter((flight) => flight.key !== key));
  };

  return (
    <div className="relative">
      <Plane />
      <div className="absolute top-0 w-full flex justify-center items-center">
        <FlightList setFlights={setFlights} flights={flights} flightsPage={true} onDeleteFlight={onDeleteFlight} isLoggedIn={true} />
      </div>
    </div>
  );
}
