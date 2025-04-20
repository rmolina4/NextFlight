import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import User from "@/models/userSchema";
import mongoose from "mongoose";
import { auth } from "@/app/auth";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Handle POST requests
  try {
    const flightId = params.id;
    const { seat } = await request.json();
    await connectMongoDB();
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { message: "Must be logged in" },
        { status: 401 }
      );
    }
    const userId = session.user?.id;
    await User.findByIdAndUpdate(
      { _id: userId, "flights.key": flightId },
      { $set: { "flights.seat": seat } },
      { new: true }
    );
    return NextResponse.json(
      { message: "Item updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Failed to update", error }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Handle POST requests
  try {
    const flightId = params.id;
    await connectMongoDB();
    const session = await auth();
    if (!session) {
      return NextResponse.json({ message: "Must be logged in" }, { status: 401 });
    }
    const userId = session.user?.id;
    await User.findByIdAndUpdate(userId, {
      $pull: { flights: { key: flightId } },
    });
    return NextResponse.json(
      { message: "Item deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete", error }, { status: 500 });
  }
}
