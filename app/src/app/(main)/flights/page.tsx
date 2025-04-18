"use client";

import FlightList from "@/components/FlightList";
import Plane from "@/components/planeBG";
import { useState } from "react";
import { Flight } from "../search/page";
import { redirect } from "next/navigation";

export default function Flights() {
  const [flights, setFlights] = useState<Flight[]>();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // manually change

  if(!isLoggedIn) {
    redirect('/login');
  }

  const onDeleteFlight = (key: number) => {
    // setFlights(flights.filter((flight) => flight.key !== key));
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
