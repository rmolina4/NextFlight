"use client";

export default function SearchBar() {

  return (
   <div className="grid grid-rows-2 justify-center">
    <h1 className="font-bold text-xl">Find Cheap Flights</h1>
    <div className="border-2 border-gray-300 rounded flex">
        <input
            type="text"
            placeholder="From"
            className="p-2 ml-0 m-2"
        />
        <input
            type="text"
            placeholder="To"
            className="p-2 m-2"
        />
        <input
            type="text"
            placeholder="Departure"
            className="p-2 m-2 w-24"
        />
        <input
            type="text"
            placeholder="Return"
            className="p-2 m-2 w-20"
        />
        <input
            type="text"
            placeholder="Travelers"
            className="p-2 m-2 w-24"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded m-2">
            Search
        </button>
    </div>
   </div>
  );
}
