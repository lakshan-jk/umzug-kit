
import mongoose, { Document, Schema } from 'mongoose';

export interface Ietstin extends Document {
  name: String;
  age: Number;
  grade: String;
}

const etstinSchema = new Schema<Ietstin>({
  name: { type: String,required: false, },
  age: { type: Number, required: true, },
  grade: { type: String, required: true, },
});

export const etstinModel = mongoose.model<Ietstin>('etstin', etstinSchema);
