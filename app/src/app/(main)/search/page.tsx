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

  const handleSubmit = async (search: Search) => {
    const token = process.env.NEXT_PUBLIC_TOKEN;
    const res = await fetch(
      `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${search.origin}&maxPrice=200`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) {
      console.error("API request failed");
    }

    const { data } = await res.json();

    setFlights(
      data.map((item: any, index: number) => ({
        ...item,
        key: index,
        seat: "9A",
      }))
    );
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
