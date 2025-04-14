import mongoose, { Schema, Document, Model, mongo, SaveOptions } from "mongoose";

interface savedFlight extends Document {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  travelers: string;
  key: number;
}

const flightSchema = new Schema<savedFlight>({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    departure: {
        type: String,
        required: true,
    },
    arrival: {
        type: String,
        required: true,
    },
    travelers: {
        type: String,
        required: true,
    },
    key: {
        type: Number,
    },
});

const SavedFlight: Model<savedFlight> = mongoose.models.savedFlight || mongoose.model<savedFlight>("SavedFlight", flightSchema);
export default SavedFlight;