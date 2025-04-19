import mongoose, { Document, Schema, Model} from "mongoose";
import { Flight } from "@/app/(main)/search/page";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  flights?: Flight[];
}

const flightSchema: Schema = new Schema({
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  price: { type: String, required: true },
  key: { type: Number, required: true },
  seat: { type: String, required: true },
});

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  flights: [flightSchema],
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;