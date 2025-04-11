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
    <div>
      <h1 className="flex justify-evenly text-2xl font-semibold">
        Study Abroad Programs
      </h1>
      <div className="mx-auto w-[800px] grid grid-cols-2 gap-4 p-4 rounded-lg">
        {programs.map((program, index) => (
          <Abroadcards
            key={index}
            title={program.title}
            location={program.location}
          />
        ))}
      </div>
    </div>
  );
}
