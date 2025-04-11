import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import SavedFlight from "@/models/flightSchema";

export async function GET(request: NextRequest) {
    await connectMongoDB();
    const flights = await SavedFlight.find();
    return NextResponse.json({ flights });
}

export async function POST(request: NextRequest) {
    // Handle POST requests
}