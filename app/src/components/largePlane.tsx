import Image from "next/image";
import plane from "../assets/nick-morales-BwYcH78rcpI-unsplash.jpg";

export default function Plane() {
  return (
    <div className="w-full h-[60vh] overflow-hidden relative">
      <Image
        src={plane}
        alt="Splash image"
        quality={100}
        priority
        fill
        className="object-cover xl:object-[0px_-230px] 2xl:object-[0px_-250px]"
      />
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold drop-shadow-lg text-white text-center">
        About Us
      </h1>
    </div>
  );
}
