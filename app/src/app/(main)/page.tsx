import SearchBar from "../../components/searchbar";

import Plane from "@/components/plane"
import React from 'react';
import FlightList from "@/components/FlightList";

export default function Home() {
  return (
  <div>
      <Plane/>
      <SearchBar/>
      <FlightList></FlightList>
  </div>

  )
}