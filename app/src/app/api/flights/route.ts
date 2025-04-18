import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import User from "@/models/userSchema";

export async function GET(request: NextRequest) {
    // Handle GET requests
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}

export async function POST(request: NextRequest) {
    // Handle POST requests 
    const { username, email, password, flights } = await request.json();
    await connectMongoDB();
    await User.create({ username, email, password, flights });
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