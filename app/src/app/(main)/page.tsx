"use client";

import SearchBar from "../../components/searchbar";
import Plane from "@/components/plane";
import { useState } from "react";
import StudyAbroad from "@/components/studyabroad";
import FlightList from "@/components/FlightList";

export interface Flight {
  from: string,
  to: string,
  departure: string,
  return: string,
  travelers: string,
  key: number,
}

const initialArray = [    {
  from: "USA",
  to: "Spain",
  departure: "5/5/2025",
  return: "6/5/2025",
  travelers: "1",
  key: 0,
}, {
  from: "Canada",
  to: "France",
  departure: "7/7/2025",
  return: "8/7/2025",
  travelers: "2",
  key: 1,
}, {
  from: "UK",
  to: "Germany",
  departure: "9/9/2025",
  return: "10/9/2025",
  travelers: "3",
  key: 2,
}];

export default function Home() {
  const [flights, setFlights] = useState<Flight[]>(initialArray);

  const handleSubmit = (flight: Flight) => {
    setFlights([...flights, flight]);
  };

  return (
  <div>
      <Plane/>
      <SearchBar handleSubmit={handleSubmit}/>
      <FlightList flights={initialArray}/>
      <StudyAbroad/>
  </div>
  )
}
