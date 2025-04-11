type AbroadCardProps = {
    title: string;
    location: string;
  };

  
  export default function Abroadcards({ title, location }: AbroadCardProps) {
    return (
      <div className="flex justify-between items-center bg-white text-black p-4 rounded-xl shadow-md border w-[300px]">
        {/* Left side: Program info */}
        <div>
          <h2 className="font-semibold text-md">{title}</h2>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
  
        {/* Right side: icons (placeholders here) */}
        <div className="flex space-x-2 items-center">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <div className="w-4 h-4 bg-gray-300 rotate-45" />
          <div className="w-4 h-4 bg-gray-300" />
        </div>
      </div>
    );
  }