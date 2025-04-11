"use client";

import SearchBar from "../../components/searchbar";
import Plane from "@/components/plane"
import {useState } from "react";
import Studyabroad from "../../components/studyabroad";
import FlightList from "@/components/FlightList";

export interface Flight {
  from: string,
  to: string,
  departure: string,
  return: string,
  travelers: string,
}

export default function Home() {
  const [flights, setFlights] = useState<Flight[]>([]);

  const handleSubmit = (flight : Flight) => {
    setFlights([...flights, flight]);
  }

  return (
  <div>
      <Plane/>
      <SearchBar/>
      <FlightList/>
      <Studyabroad/>
  </div>
  )
}
