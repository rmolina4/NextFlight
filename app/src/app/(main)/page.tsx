import Image from 'next/image';
import plane from '@/../public/images/plane.jpg';

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={plane}
        alt="Plane"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-white/90 to-transparent" />
    </div>
  );
}