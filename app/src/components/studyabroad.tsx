"use client";
import { useRouter } from "next/navigation";
import Abroadcards from "./abroadcards";
import { useEffect } from "react";
import { useState } from "react";

export default function StudyAbroad() {
  const [programs, setPrograms] = useState<{ title: string; location: string; url: string; website: string}[]>([]);
    const router = useRouter();

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/study-abroad");
        const data = await res.json();
        setPrograms(data.programs);
      } catch (error) {
        router.push("/500");
      }
    };

    fetchPrograms();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-3/4 max-w-3xl mx-auto">
      <div className="w-full">
      <h1 className="text-xl font-bold pt-5">Study Abroad Programs</h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 p-2">
        {programs.map((program) => (
          <Abroadcards
            key={program.title}
            title={program.title}
            location={program.location}
            url={program.url}
            website={program.website}
          />
        ))}
      </div>
    </div>
  );
}
