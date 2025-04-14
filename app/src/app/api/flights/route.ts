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