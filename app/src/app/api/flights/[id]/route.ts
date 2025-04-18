import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import User from "@/models/userSchema";

interface RouteParams {
    params: { id: string };
}

export async function GET(request:NextRequest, { params }:RouteParams) {
    // Handle GET requests. Gets user of a specified ID.
    const { id } = await params;
    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
}

export async function PUT(request:NextRequest, { params }:RouteParams) {
    // Handle PUT requests
    const { id } = await params;
    const { username: username, email: email, password: password, flights: flights } = await request.json();
    await connectMongoDB();
    await User.findByIdAndUpdate(id, { username, email, password, flights });
    return NextResponse.json({ message: "Item updated" }, { status: 200 });
}