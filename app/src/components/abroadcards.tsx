export default function Abroadcards() {
    return (
        // Container for separate cards, with title, location, and image  
      <div className="flex m-5 bg-[#333] p-5 rounded-[10px] text-white items-center justify-between max-h-[65px] max-w-[300px] font-sans">
        <h1 className="text-lg font-bold">Program #</h1>
        <p className="text-sm text-gray-300">Location</p>
        <a href="https://google.com" className="underline text-blue-400">Image</a>
      </div>
    );
  }