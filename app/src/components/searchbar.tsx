"use client";
import { Icon } from "@iconify/react";
import { Search } from "@/app/(main)/search/page";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SearchBarProps {
  handleSubmit: (user: Search) => void;
  toInput: string;
  fromInput: string;
  dateInput: Date | null;
  setFromInput: (from: string) => void;
  setToInput: (to: string) => void;
  setDateInput: (date: Date | null) => void;
  setIsVisible: (isVisible: boolean) => void;
}

export default function SearchBar(props: SearchBarProps) {
  const [flipped, setFlipped] = useState(false);
  const [error, setError] = useState<String | null>(null);

  function handleFromChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setFromInput(e.target.value);
  }

  function handleToChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setToInput(e.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center w-3/4 max-w-3xl mx-auto">
      <div className="w-full">
        <h1 className="font-bold text-xl pt-5">Find Cheap Flights</h1>
      </div>
      <form className="flex gap-2 rounded-xl flex shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] w-full">
        <input
          type="text"
          placeholder="From"
          className="p-2 ml-0 flex-1 min-w-0"
          onChange={handleFromChange}
          value={props.fromInput}
        />
        <Icon
          icon="proicons:arrow-swap"
          className={`text-2xl mt-4 hover:cursor-pointer  transition-transform duration-300 ${
            flipped ? "rotate-y-180" : ""
          }`}
          onClick={(e: React.MouseEvent<SVGSVGElement>) => {
            setFlipped(!flipped);
            const temp = props.fromInput;
            props.setFromInput(props.toInput);
            props.setToInput(props.fromInput);
          }}
        />
        <input
          type="text"
          placeholder="To"
          className="p-2 flex-1 min-w-0"
          onChange={handleToChange}
          value={props.toInput}
        />
        <DatePicker
          selected={props.dateInput}
          onChange={(dateInput) => props.setDateInput(dateInput as Date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="Departure"
          className="w-[100px] mt-5 h-full text-center flex-1 min-w-0"
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600 hover:cursor-pointer w-20"
          type="submit"
          onClick={async (e: React.FormEvent) => {
            e.preventDefault();
            if (
              props.fromInput == "" ||
              props.toInput == "" ||
              props.dateInput == null
            ) {
              setError("All fields are required");
              return;
            }
            const newSearch = {
              from: props.fromInput,
              to: props.toInput,
              date: props.dateInput
                ? props.dateInput.toISOString().split("T")[0]
                : "",
            };
            await props.handleSubmit(newSearch);
            props.setFromInput("");
            props.setToInput("");
            props.setDateInput(null);
            setError(null);
            props.setIsVisible(true);
          }}
        >
          Search
        </button>
      </form>
      <div className="w-full">
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
}
