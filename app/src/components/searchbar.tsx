"use client";
import { Icon } from "@iconify/react";
import { Search } from "@/app/(main)/search/page";
import { useState } from "react";

interface SearchBarProps {
  handleSubmit: (user: Search) => void;
}

export default function SearchBar(prop: SearchBarProps) {
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");
  const [dateInput, setdateInput] = useState("");

  function handleFromChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFromInput(e.target.value);
  }

  function handleToChange(e: React.ChangeEvent<HTMLInputElement>) {
    setToInput(e.target.value);
  }

  function handleDepartureChange(e: React.ChangeEvent<HTMLInputElement>) {
    setdateInput(e.target.value);
  }

  return (
    <div className="grid grid-rows-2 justify-center">
      <h1 className="font-bold text-xl pt-5">Find Cheap Flights</h1>
      <form className="flex gap-2 rounded-xl flex shadow-[0_0_10px_0px_rgba(0,0,0,0.1)]">
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
          value={dateInput}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600 hover:cursor-pointer"
          type="submit"
          onClick={(e: React.FormEvent) => {
            e.preventDefault();
            const newSearch = {
              from: fromInput,
              to: toInput,
              date: dateInput,
            };
            setFromInput('');
            setToInput('');
            setdateInput('');
            prop.handleSubmit(newSearch);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
