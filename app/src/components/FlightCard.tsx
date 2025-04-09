interface FlightProps {
    From: string;
    To: string;
    Departure: string; // Departure date
    Return: string; // Return date
    Travelers: number;
}

const FlightCard = ({From, To, Departure, Return = "", Travelers = 0}: FlightProps) => {
    return(
        <div className="FlightCard">
            <p>From: {From}</p>
            <p>To: {To}</p>
            <p>Departure: {Departure}</p>
            <p>Return: {Return}</p>
            <p>Travelers: {Travelers}</p>
        </div>
    )
}

export default FlightCard;