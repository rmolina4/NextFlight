import Abroadcards from "./abroadCards";

export default function StudyAbroad() {
  const programs = [
    { title: "Study Abroad Program 1", location: "Venice, Italy" },
    { title: "Study Abroad Program 2", location: "London, England" },
    { title: "Study Abroad Program 3", location: "Tokyo, Japan" },
    { title: "Study Abroad Program 4", location: "Barcelona, Spain" },
    { title: "Study Abroad Program 5", location: "Paris, France" },
    { title: "Study Abroad Program 6", location: "Berlin, Germany" },
  ];

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
          />
        ))}
      </div>
    </div>
  );
}
