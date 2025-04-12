import Image from "next/image";
import plane from "../assets/nick-morales-BwYcH78rcpI-unsplash.jpg";

export default function Plane() {
  return (
    <div className="w-full h-[50vh] overflow-hidden relative">
      <Image
        src={plane}
        alt="Splash image"
        quality={100}
        priority
        className="xl:object-[0px_-1120px] 2xl:object-[0px_-1300px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,white_5%,transparent_40%)]" />
      <h1 className="absolute top-40 left-25 text-white text-6xl font-bold drop-shadow-lg">
        Fly Cheap
      </h1>
      <span className="absolute top-55 left-25 text-white text-xl font-bold drop-shadow-lg max-w-xl">
        NextFlight is your shortcut to finding affordable flights. Discover
        more. Spend Less. Fly cheap with NextFlight.
      </span>
    </div>
  );
}
