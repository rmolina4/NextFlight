"use client";

import { Flight } from "@/app/(main)/search/page";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useState } from "react";

interface FlightIconProps {
  flight: Flight;
  onDeleteFlight?: (key: number) => void;
}

const FlightIcon = (props: FlightIconProps) => {
  const pathname = usePathname();
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <Icon
      icon={pathname === "/flights" ? "tabler:trash" : isClicked ? "tabler:check" : "tabler:plus"}
      className="text-2xl hover:cursor-pointer"
      onClick={async () => {
        if (pathname === "/flights") {
          // delete flight
          const res = await fetch(`/api/flights/${props.flight.key}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
          props.onDeleteFlight && props.onDeleteFlight(props.flight.key);
        } else if (!isClicked){
          // add new flight
          const res = await fetch(`/api/flights`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              origin: props.flight.origin,
              destination: props.flight.destination,
              departure: props.flight.departure,
              arrival: props.flight.arrival,
              price: props.flight.price,
              seat: props.flight.seat,
            }),
          });
          setIsClicked(true);
        }
      }}
    />
  );
};

export default FlightIcon;