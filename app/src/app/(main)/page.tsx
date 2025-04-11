"use client";

import SearchBar from "../../components/searchbar";
import Plane from "@/components/plane"
import {useState } from "react";

interface Flight {
  from: string,
  to: string,
  departure: string,
  return: string,
  traverlers: string,
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
  </div>
  )
}
