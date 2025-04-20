import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import Program from "@/models/studyAbroadSchema";
import mongoose from "mongoose";

export async function GET(request: NextRequest) {
    try{
        await connectMongoDB();
        const programs = await Program.find();
        return NextResponse.json({programs})
    } catch (error){
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}