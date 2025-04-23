import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Program from "@/models/studyAbroadSchema";

export async function GET() {
    try{
        await connectMongoDB();
        const programs = await Program.find();
        return NextResponse.json({programs})
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}