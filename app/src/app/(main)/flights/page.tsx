"use client";

import FlightList from "@/components/FlightList";
import Plane from "@/components/planeBG";
import { useState } from "react";
import { Flight } from "../search/page";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Flights() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  const fetchFlights = async () => {
    const res = await fetch("/api/flights");
    const { flights } = await res.json();
    setFlights(flights);
  };

  useEffect(() => {
    if (session === null) {
      router.push("/login");
    } else {
      fetchFlights();
    }
  }, [session]);

  return (
    <div className="relative">
      <Plane />
      <div className="absolute top-0 w-full flex justify-center items-center">
        <FlightList
          setFlights={setFlights}
          flights={flights}
          onDeleteFlight={(key: string) => {
            setFlights(flights.filter((flight) => flight.key !== key));
          }}
          user={session}
        />
      </div>
    </div>
  );
}
