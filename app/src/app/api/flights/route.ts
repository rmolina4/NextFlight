import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import SavedFlight from "@/models/flightSchema";

export async function GET(request: NextRequest) {
    // Handle GET requests
    await connectMongoDB();
    const flights = await SavedFlight.find();
    return NextResponse.json({ flights });
}

export async function POST(request: NextRequest) {
    // Handle POST requests 
    const { from, to, departure, arrival, travelers, key } = await request.json();
    await connectMongoDB();
    await SavedFlight.create({ from, to, departure, arrival, travelers, key });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}

interface FlightProps {
    from: string;
    to: string;
    departure: string;
    arrival: string;
    seat: string;
    key: number;
}

export async function POSTFromPage(props: FlightProps) {
    // Handle POST requests
    const from = props.from;
    const to = props.to;
    const departure = props.departure;
    const arrival = props.arrival;
    const travelers = "N/A";
    const key = props.key;
    await connectMongoDB();
    await SavedFlight.create({ from, to, departure, arrival, travelers, key });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 });
}