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
      className="object-[0px_-1300px]"
    />
  <div className="absolute inset-0 bg-[linear-gradient(to_top,white_5%,transparent_40%)]" />
</div>
  )
}
