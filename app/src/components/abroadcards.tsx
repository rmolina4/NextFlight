import Image from "next/image";

type AbroadCardProps = {
  title: string;
  location: string;
  url: string;
  website: string;
  setFromInput: (from: string) => void;
  setToInput: (to: string) => void;
  setDateInput: (date: Date | null) => void;
};

export default function AbroadCards(props: AbroadCardProps) {
  return (
    <div className="flex justify-between items-center bg-white text-black p-2 rounded-xl shadow-md border w-full max-w-full">
      <div className="flex flex-grow flex-col">
        <button
          className="font-semibold text-md text-left hover:cursor-pointer hover:text-blue-500"
          onClick={() => {
            window.open(props.website, "_blank", "noopener,noreferrer");
          }}
        >
          {props.title}
        </button>
        <a
          className="text-sm text-gray-600 hover:cursor-pointer hover:text-blue-500"
          onClick={() => {
            const date = new Date();
            date.setDate(date.getDate() + 1);
            props.setDateInput(date);
            props.setToInput(props.location);
          }}
        >
          {props.location}
        </a>
      </div>

      <div className="flex space-x-2 items-center">
        <Image
          src={props.url}
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
