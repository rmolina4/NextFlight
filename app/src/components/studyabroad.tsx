import Abroadcards from "./abroadcards";
import { useEffect } from "react";
import { useState } from "react";

export default function StudyAbroad() {
  const [programs, setPrograms] = useState<{ title: string; location: string; url: string }[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/study-abroad");
        const data = await res.json();
        setPrograms(data.programs);
      } catch (error) {
        console.error("Failed to fetch programs:", error);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[800px]">
      <h1 className="text-xl font-bold pt-5">Study Abroad Programs</h1>
      </div>
      <div className="w-[800px] grid grid-cols-2 gap-8 p-2">
        {programs.map((program) => (
          <Abroadcards
            key={program.title}
            title={program.title}
            location={program.location}
            url={program.url}
          />
        ))}
      </div>
    </div>
  );
}
