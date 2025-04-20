import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

export async function GET(request: NextRequest) {
    // Handle GET requests
    try{
        await connectMongoDB();
    } catch
}