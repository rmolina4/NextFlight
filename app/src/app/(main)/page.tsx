"use client";
import Plane from "@/components/largePlane";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Plane />
      <div className="flex justify-center items-center flex-1 mb-20 gap-4 text-xs sm:text-lg">
        <div className="flex flex-col flex-1 justify-center items-center text-center border border-black border-1 p-5 rounded-3xl mx-4 min-h-40 max-h-50">
          <div className="flex justify-center items-center">
            <Icon icon="tabler:user" className="text-2xl sm:text-3xl pb-1" />
          </div>
          <h3>
            Over 45,000 flights and roughly 2.9 million airline passengers fly
            daily.
          </h3>
        </div>
        <div className="flex flex-col flex-2 max-w-2xl text-center p-5 mx-4">
          <h1 className="font-bold text-2xl sm:text-4xl pb-2">Fly Cheap</h1>
          <h3>
            NextFlight is your shortcut to finding affordable flights. We scan
            thousands of airlines to find you the best deals possible.
          </h3>
          <h3>Discover more. Spend Less. Fly cheap with NextFlight.</h3>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center text-center border border-black border-1 p-5 rounded-3xl mx-4 min-h-40 max-h-50">
          <div className="flex justify-center items-center">
            <Icon icon="tabler:user" className="text-2xl sm:text-3xl pb-1" />
          </div>
          <h3>
            We&apos;re proud to have helped countless travelers find the most
            affordable flights.
          </h3>
        </div>
      </div>
    </div>
  );
}
