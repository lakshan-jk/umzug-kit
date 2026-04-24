
import mongoose, { Document, Schema } from 'mongoose';

export interface Ietssstin extends Document {
  name: String;
  age: Number;
  grade: String;
}

const etssstinSchema = new Schema<Ietssstin>({
  name: { type: String,required: false, },
  age: { type: Number, required: true, },
  grade: { type: String, required: true, },
});

export const etssstinModel = mongoose.model<Ietssstin>('etssstin', etssstinSchema);
