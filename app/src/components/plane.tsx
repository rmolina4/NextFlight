import Image from "next/image";
import plane from "../assets/nick-morales-BwYcH78rcpI-unsplash.jpg";

export default function Plane() {
  return (
  <div className="w-full h-[50vh] overflow-hidden">
    <Image
      src={plane}
      alt="Splash image"
      quality={100}
      priority
      className="object-[0px_-1300px] bg-gradient-to-t from-white to-transparent"
    />
    <div className="absolute top-0 left-0 w-full h-[57vh] bg-gradient-to-t from-white to-transparent" />
  </div>
  )
}