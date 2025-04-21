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
    const data = await res.json();
    setFlights(data.flights.flights);
  };

  useEffect(() => {
    if (session === null) {
      router.push("/login");
    } else {
      fetchFlights();
    }
  }, [session]);

  return (
    <div className="relative h-screen overflow-hidden">
      <Plane />
      <div className="absolute top-0 w-full h-full overflow-y-auto flex justify-center items-center">
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
