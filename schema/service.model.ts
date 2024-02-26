
import mongoose from 'mongoose';

export interface Iservice extends Document {
  name: String;
  price: Number;
  id: String;
}

const serviceSchema = new mongoose.Schema<Iservice>({
  name: { type: String, required: true, },
  price: { type: Number, required: true, },
  id: { type: String, required: true, },
});

export const serviceModel = mongoose.model<Iservice>('service', serviceSchema);
