"use client";

import SearchBar from "../../../components/searchbar";
import Plane from "@/components/plane";
import { useState } from "react";
import StudyAbroad from "@/components/studyAbroad";
import FlightList from "@/components/FlightList";
import { POST } from "@/app/api/flights/route";

export interface Flight {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  seat: string;
  key: number;
}

export default function Search() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // manually change

  const handleSubmit = (flight: Flight) => {
    setFlights([...flights, flight]);

  };

  return (
    <div>
      <Plane />
      <SearchBar handleSubmit={handleSubmit} />
      {flights.length != 0 && <FlightList flights={flights} setFlights={setFlights} isLoggedIn={isLoggedIn} />}
      <StudyAbroad />
    </div>
  );
}
