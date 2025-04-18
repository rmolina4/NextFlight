"use client";
import Plane from "@/components/largePlane";
import { Icon } from '@iconify/react';
import { useEffect } from "react";
import connectMongoDB from "@/libs/mongodb";


export default function Home() {
  connectMongoDB();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return <div className="min-h-screen flex flex-col">
    <Plane/>
    <div className="flex justify-center items-center flex-1 mb-20 gap-4">
      <div className="flex-1 flex flex-col justify-center items-center text-center border border-black p-5 rounded-lg border-2 mx-4">
        <div className="flex justify-center items-center">
          <Icon icon="tabler:user" className="text-3xl pb-1"/>
        </div>
        <h3 className="text-xl">Over 45,000 flights and roughly 2.9 million airline passengers fly daily.</h3>
      </div>
      <div className="flex flex-col flex-2 max-w-2xl text-center p-5 mx-4">
        <h1 className="font-bold text-4xl pb-2">Fly Cheap</h1>
        <h3 className="text-xl">NextFlight is your shortcut to finding affordable flights.
          We scan thousands of airlines to find you the best deals possible.
        </h3>
        <h3 className="text-xl">Discover more. Spend Less. Fly cheap with NextFlight.</h3>
      </div>
      
      <div className="flex flex-col flex-1 max-w-2xl text-center border border-black border-black p-5 rounded-lg border-2 mx-4">
      <div className="flex justify-center items-center">
          <Icon icon="tabler:user" className="text-3xl pb-1"/>
        </div>
        <h3 className="text-xl">We have helped at least one person in finding the most affordable flight.</h3>
      </div>
    </div>
  </div>;
}
