"use client";

import SearchBar from "../../../components/searchbar";
import Plane from "@/components/plane";
import { useState } from "react";
import StudyAbroad from "@/components/studyAbroad";
import FlightList from "@/components/FlightList";
import { useSession } from "next-auth/react";

export interface Flight {
  type: string;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  price: {
    total: string;
  };
  key: number;
  seat: string;
}

export interface Search {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
}

export default function Search() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;
  
  const handleSubmit = (flight: Flight) => {
    setFlights([...flights, flight]);
  };

  return (
    <div>
      <Plane />
      <SearchBar handleSubmit={handleSubmit} />
      {flights.length != 0 && (
        <FlightList
          flights={flights}
          setFlights={setFlights}
          isLoggedIn={isLoggedIn}
        />
      )}
      <StudyAbroad />
    </div>
  );
}
