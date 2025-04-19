import mongoose, { Document, Schema, Model} from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  flights: {
    from: string;
    to: string;
    departure: string;
    arrival: string;
    travelers: string;
    key: number;
  }[];
}

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  flights: {type: Array, required: true}
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;