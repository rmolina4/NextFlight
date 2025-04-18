import Image from "next/image";

type AbroadCardProps = {
  title: string;
  location: string;
};

export default function AbroadCards({ title, location }: AbroadCardProps) {
  return (
    <div className="flex justify-between items-center bg-white text-black p-2 rounded-xl shadow-md border w-[380px]">
      <div>
        <h2 className="font-semibold text-md">{title}</h2>
        <p className="text-sm text-gray-600">{location}</p>
      </div>

      <div className="flex space-x-2 items-center bg-[#F9EEEE];">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREO3tkIJnmJZcWmgLLR-z973QVHQ8zbwDGnw&s"
          alt={"Content Image"}
          unoptimized
          width={100}
          height={100}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
