import { Icon } from "@iconify/react";
import { useState } from "react";

interface SeatMenuProps {
  setSeat: (seat: string) => void;
}

const seats = ["9A", "9B", "9C"];

export default function SeatMenu(props: SeatMenuProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <Icon icon={"gridicons:dropdown"}></Icon>
      </button>
      {isVisible && (
        <div className="flex flex-col absolute bg-white drop-shadow-lg">
          {seats.map((seat) => (
            <h2
              key={seat}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                props.setSeat(seat);
                setIsVisible(false);
              }}
            >
              {seat}
            </h2>
          ))}
        </div>
      )}
    </div>
  );
}
