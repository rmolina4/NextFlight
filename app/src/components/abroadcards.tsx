type AbroadCardProps = {
  title: string;
  location: string;
};

export default function AbroadCards({ title, location }: AbroadCardProps) {
  return (
    <div className="flex justify-between items-center bg-white text-black p-4 rounded-xl shadow-md border w-[350px]">
      {/* Left side: Program info */}
      <div>
        <h2 className="font-semibold text-md">{title}</h2>
        <p className="text-sm text-gray-600">{location}</p>
      </div>

      {/* Right side: icons (placeholders here) */}
      <div className="flex space-x-2 items-center bg-[#F9EEEE];">
        <div className="w-20 h-20 bg-gray-300">
          <a href="Google.com"> IMAGE HERE</a>
        </div>
      </div>
    </div>
  );
}
