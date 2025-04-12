"use client";

import FlightList from "@/components/flightList";
import Plane from "@/components/planeBG";
import { useState } from "react";
import { Flight } from "../page";

const initialArray = [
  {
    from: "USA",
    to: "Spain",
    departure: "5/5/2025",
    return: "6/5/2025",
    travelers: "1",
    key: 0,
  },
  {
    from: "Canada",
    to: "France",
    departure: "7/7/2025",
    return: "8/7/2025",
    travelers: "2",
    key: 1,
  },
  {
    from: "UK",
    to: "Germany",
    departure: "9/9/2025",
    return: "10/9/2025",
    travelers: "3",
    key: 2,
  },
];

export default function Flights() {
  const [flights, setFlights] = useState<Flight[]>(initialArray);

  return (
    <div className="relative">
      <Plane />
      <div className="absolute top-0 w-full flex justify-center items-center">
        <FlightList flights={flights} />
      </div>
    </div>
  );
}
