import Abroadcards from "./abroadcards";

export default function Studyabroad() {
    return (
        // Title of the study abroad program portion and its container
        <div>
            <h1 className="flex justify-evenly text-2xl font-semibold">
                Study Abroad Programs
            </h1>
            <div className="mx-auto w-[800px] h-[350px] bg-[#c6c6c1] grid grid-cols-2">
                <Abroadcards />
                <Abroadcards />
                <Abroadcards />
                <Abroadcards />
                <Abroadcards />
                <Abroadcards />
            </div>
        </div>
    );
}