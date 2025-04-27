"use client";
import SearchBar from "../../../components/searchbar";
import Plane from "@/components/plane";
import { useState } from "react";
import StudyAbroad from "@/components/studyabroad";
import FlightList from "@/components/FlightList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export interface Flight {
  origin: string;
  destination: string;
  departure: string;
  arrival: string;
  price: string;
  key: string;
  seat: string;
}

export interface Search {
  from: string;
  to: string;
  date: string;
}

interface FlightLeg {
  origin: {
    name: string;
    city: string;
  };
  destination: {
    name: string;
    city: string;
  };
  departure: string;
  arrival: string;
}

interface FlightItem {
  legs: FlightLeg[];
  price: { formatted: string };
}

export default function Search() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [dateInput, setDateInput] = useState<Date | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleSubmit = async (search: Search) => {
    const airport_url = "https://www.goflightlabs.com/retrieveAirport";
    const flight_url = "https://www.goflightlabs.com/retrieveFlights";
    const options = {
      method: "GET",
    };

    let params = new URLSearchParams({
      access_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
      query: `${search.from}`,
    });
    let url = `${airport_url}?${params.toString()}`;
    let res = await fetch(url, options);
    if (!res.ok) {
      router.push("/500");
      return;
    }
    let data = await res.json();
    if (!data) {
      router.push("/500");
      return;
    }
    console.log(data);
    const relevantFlightParamsFrom = data[0];

    params = new URLSearchParams({
      access_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
      query: `${search.to}`,
    });
    url = `${airport_url}?${params.toString()}`;
    res = await fetch(url, options);
    if (!res.ok) {
      router.push("/500");
      return;
    }
    data = await res.json();
    if (!data) {
      router.push("/500");
      return;
    }
    console.log(data);
    const relevantFlightParamsTo = data[0];

    params = new URLSearchParams({
      access_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
      originSkyId: `${relevantFlightParamsFrom.skyId}`,
      destinationSkyId: `${relevantFlightParamsTo.skyId}`,
      originEntityId: `${relevantFlightParamsFrom.entityId}`,
      destinationEntityId: `${relevantFlightParamsTo.entityId}`,
      date: `${search.date}`,
    });
    url = `${flight_url}?${params.toString()}`;
    res = await fetch(url, options);
    if (!res.ok) {
      router.push("/500");
      return;
    }
    data = await res.json();
    if (!data) {
      router.push("/500");
      return;
    }
    if(!data.itineraries) {
      setFlights([]);
      return;
    }
    const items = data.itineraries;
    if (items.length === 0) {
      setFlights([]);
      return;
    }

    setFlights(
      items.map((item: FlightItem, index: number) => ({
        origin: `${item.legs[0].origin.name}, ${item.legs[0].origin.city}`,
        destination: `${item.legs[0].destination.name}, ${item.legs[0].destination.city}`,
        departure: `${item.legs[0].departure}`,
        arrival: `${item.legs[item.legs.length - 1].arrival}`,
        price: `${item.price.formatted}`,
        key: `${index}`,
        seat: "9A",
      }))
    );
  };

  return (
    <div>
      <Plane />
      <SearchBar
        toInput={toInput}
        fromInput={fromInput}
        dateInput={dateInput}
        setFromInput={setFromInput}
        setToInput={setToInput}
        setDateInput={setDateInput}
        handleSubmit={handleSubmit}
        setIsVisible={setIsVisible}
      />
      {isVisible && (
        <FlightList
          flights={flights}
          setFlights={setFlights}
          user={session}
          className={"min-h-100 max-h-100 overflow-y-auto overscroll-contain"}
        />
      )}
      <StudyAbroad
        setToInput={setToInput}
        setFromInput={setFromInput}
        setDateInput={setDateInput}
      />
    </div>
  );
}
