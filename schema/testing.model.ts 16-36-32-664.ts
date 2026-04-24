
import mongoose, { Document, Schema } from 'mongoose';

export interface Itesting extends Document {
  name: String;
  age: Number;
  grade: String;
}

const testingSchema = new Schema<Itesting>({
  name: { type: String, required: true, },
  age: { type: Number, required: true, },
  grade: { type: String, required: true, },
});

export const testingModel = mongoose.model<Itesting>('testing', testingSchema);
