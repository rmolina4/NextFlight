import mongoose, { Document, Schema, Model } from "mongoose";

export interface IProgram extends Document {
  title: string;
  location: string;
  url: string;
}

const programSchema: Schema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  url: { type: String, required: true },
});

const Program: Model<IProgram> =
  mongoose.models.Program || mongoose.model<IProgram>("Program", programSchema);
export default Program;
