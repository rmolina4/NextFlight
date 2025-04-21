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

export default function Search() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = async (search: Search) => {
    const ac_url = "https://skyscanner89.p.rapidapi.com/flights/auto-complete";
    const ow_url = "https://skyscanner89.p.rapidapi.com/flights/one-way/list";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
        "x-rapidapi-host": `${process.env.NEXT_PUBLIC_HOST}`,
      },
    };

    let params = new URLSearchParams({
      query: `${search.from}`,
    });
    let url = `${ac_url}?${params.toString()}`;
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
    const relevantFlightParamsFrom =
      data.inputSuggest[0].navigation.relevantFlightParams;

    params = new URLSearchParams({
      query: `${search.to}`,
    });
    url = `${ac_url}?${params.toString()}`;
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
    const relevantFlightParamsTo =
      data.inputSuggest[0].navigation.relevantFlightParams;

    params = new URLSearchParams({
      date: `${search.date}`,
      origin: `${relevantFlightParamsFrom.skyId}`,
      originId: `${relevantFlightParamsFrom.entityId}`,
      destination: `${relevantFlightParamsTo.skyId}`,
      destinationId: `${relevantFlightParamsTo.entityId}`,
    });
    url = `${ow_url}?${params.toString()}`;
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
    const items = [
      ...data.data.itineraries.buckets[0].items,
      ...data.data.itineraries.buckets[1].items,
    ];

    setFlights(
      items.map((item: any, index: number) => ({
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
      <SearchBar handleSubmit={handleSubmit} />
      {flights.length != 0 && (
        <FlightList
          flights={flights}
          setFlights={setFlights}
          user={session}
        />
      )}
      <StudyAbroad />
    </div>
  );
}
