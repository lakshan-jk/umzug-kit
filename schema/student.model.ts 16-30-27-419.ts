
import mongoose, { Document, Schema } from 'mongoose';

export interface IStudent extends Document {
  name: String;
  age: Number;
  grade: String;
}

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true, },
  age: { type: Number, required: true, },
  grade: { type: String, required: true, },
});

export const StudentModel = mongoose.model<IStudent>('Student', studentSchema);
