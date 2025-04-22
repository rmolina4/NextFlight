import Image from "next/image";

type AbroadCardProps = {
  title: string;
  location: string;
  url: string;
  website: string;
};

export default function AbroadCards({
  title,
  location,
  url,
  website,
}: AbroadCardProps) {
  return (
    <div className="flex justify-between items-center bg-white text-black p-2 rounded-xl shadow-md border w-[380px]">
      <div>
        <button
          className="font-semibold text-md text-left hover:cursor-pointer hover:text-blue-500"
          onClick={() => {
            window.open(website, "_blank", "noopener,noreferrer");
          }}
        >
          {title}
        </button>
        <p className="text-sm text-gray-600">{location}</p>
      </div>

      <div className="flex space-x-2 items-center bg-[#F9EEEE]">
        <Image
          src={url}
          alt={"Content Image"}
          unoptimized
          width={75}
          height={75}
          className="rounded-xl min-w-[75px] min-h-[75px]"
        />
      </div>
    </div>
  );
}
