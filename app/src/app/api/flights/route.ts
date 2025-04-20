import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { auth } from "@/app/auth";
import User from "@/models/userSchema";

export async function GET(request: NextRequest) {
  // Handle GET requests
  try {
    await connectMongoDB();
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { message: "Must be logged in" },
        { status: 401 }
      );
    }
    const id = session.user?.id;
    const flights = await User.findById(id).select("flights");
    return NextResponse.json({ flights });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get flights", error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Handle POST requests
  try {
    const { origin, destination, departure, arrival, price, key, seat } =
      await request.json();
    await connectMongoDB();
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { message: "Must be logged in" },
        { status: 401 }
      );
    }
    const id = session.user?.id;
    await User.findByIdAndUpdate(id, {
      $push: {
        flights: {
          origin,
          destination,
          departure,
          arrival,
          price,
          key,
          seat,
        },
      },
    });
    return NextResponse.json(
      { message: "Item added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create flight", error },
      { status: 500 }
    );
  }
}
