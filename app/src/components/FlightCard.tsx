interface FlightProps {
    From: string;
    To: string;
    Departure: string; // Departure date
    Return: string; // Return date
    Travelers: number;
}

const Flight = ({From, To, Departure, Return = "", Travelers = 0}: FlightProps) => {
    return(
        <div className={"Card"}>
            From: {From}
            To: {To}
            Travelers: {Travelers}
            Departure: {Departure}
            Return: {Return}
        </div>
    )
}

export default Flight;