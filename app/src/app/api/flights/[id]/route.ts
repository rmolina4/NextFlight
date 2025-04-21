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
  // Handle PUT requests
  try {
    const { id: flightId } = await params;
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
      userId,
      {
        $set: { "flights.$[elem].seat": seat },
      },
      { arrayFilters: [{ "elem.key": flightId }] }
    );
    return NextResponse.json(
      { message: "Item updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to update", error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Handle POST requests
  try {
    const { id: flightId } = await params;
    await connectMongoDB();
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { message: "Must be logged in" },
        { status: 401 }
      );
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
    return NextResponse.json(
      { message: "Failed to delete", error },
      { status: 500 }
    );
  }
}
