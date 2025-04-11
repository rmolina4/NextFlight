"use client";
import { Icon } from "@iconify/react";
import { Flight } from "@/app/(main)/page";
import { useState } from "react";

interface SearchBarProps {
  handleSubmit: (user: Flight) => void;
}

export default function SearchBar(prop: SearchBarProps) {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [departureInput, setDepartureInput] = useState("");
  const [returnInput, setReturnInput] = useState("");
  const [travelerInput, setTravelerInput] = useState("");
  const [count, setCount] = useState(3);

  function handleFromChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFromInput(e.target.value);
  }

  function handleToChange(e: React.ChangeEvent<HTMLInputElement>) {
    setToInput(e.target.value);
  }

  function handleDepartureChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDepartureInput(e.target.value);
  }

  function handleReturnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setReturnInput(e.target.value);
  }

  function handleTravelerChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTravelerInput(e.target.value);
  }

  return (
    <div className="grid grid-rows-2 justify-center">
      <h1 className="font-bold text-xl pt-5">Find Cheap Flights</h1>
      <div className="flex gap-2 rounded-xl flex shadow-[0_0_10px_0px_rgba(0,0,0,0.1)]">
        <input
          type="text"
          placeholder="From"
          className="p-2 ml-0"
          onChange={handleFromChange}
          value={fromInput}
        />
        <Icon
          icon="proicons:arrow-swap"
          className="text-2xl mt-4 hover:cursor-pointer"
        />
        <input
          type="text"
          placeholder="To"
          className="p-2"
          onChange={handleToChange}
          value={toInput}
        />
        <input
          type="text"
          placeholder="Departure"
          className="p-2 w-24"
          onChange={handleDepartureChange}
          value={departureInput}
        />
        <input
          type="text"
          placeholder="Return"
          className="p-2 w-20"
          onChange={handleReturnChange}
          value={returnInput}
        />
        <input
          type="text"
          placeholder="Travelers"
          className="p-2 w-24"
          onChange={handleTravelerChange}
          value={travelerInput}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600 hover:cursor-pointer"
          onClick={(e: any) => {
            e.preventDefault();
            const newFlight = {
              from: fromInput,
              to: toInput,
              departure: departureInput,
              return: returnInput,
              travelers: travelerInput,
              key: count,
            };
            setCount(count + 1);
            prop.handleSubmit(newFlight);
          }}
        >Search</button>
      </div>
    </div>
  );
}
