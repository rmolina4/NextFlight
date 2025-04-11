"use client";
import { Icon } from "@iconify/react";

export default function SearchBar() {
  return (
    <div className="grid grid-rows-2 justify-center">
      <h1 className="font-bold text-xl pt-5">Find Cheap Flights</h1>
      <div className="flex gap-2 rounded-xl flex shadow-[0_0_10px_0px_rgba(0,0,0,0.1)]">
        <input type="text" placeholder="From" className="p-2 ml-0" />
        <Icon
          icon="proicons:arrow-swap"
          className="text-2xl mt-4 hover:cursor-pointer"
        />
        <input type="text" placeholder="To" className="p-2" />
        <input type="text" placeholder="Departure" className="p-2 w-24" />
        <input type="text" placeholder="Return" className="p-2 w-20" />
        <input type="text" placeholder="Travelers" className="p-2 w-24" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded m-2 hover:bg-blue-600 hover:cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
}
