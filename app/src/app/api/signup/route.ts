import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import bcrypt from "bcryptjs";
import User from "@/models/userSchema";

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();

    await connectMongoDB();
    const hashedPassword = await bcrypt.hash(password, 5);

    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
