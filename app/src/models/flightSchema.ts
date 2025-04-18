import mongoose, { Schema, Document, Model, } from "mongoose";

interface SavedFlight extends Document {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  travelers: string;
  key: number;
}

const flightSchema = new Schema<SavedFlight>({
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

const SavedFlight: Model<SavedFlight> = mongoose.models.SavedFlight || mongoose.model<SavedFlight>("SavedFlight", flightSchema);
export default SavedFlight;