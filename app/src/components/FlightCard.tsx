type CardProps = {
    children: React.ReactNode;
  };

const FlightCard = (props: CardProps) => {
    return (
        <div className="flex justify-between items-center rounded-3xl shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] bg-white px-4">
            {props.children}
        </div>
    )
}

export default FlightCard;