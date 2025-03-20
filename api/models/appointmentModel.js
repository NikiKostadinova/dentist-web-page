import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  service: {
    type: String,
    required: true,
    enum: [
      "Teeth Cleaning",
      "Cavity Filling",
      "Teeth Whitening",
      "Braces Consultation",
      "Root Canal",
    ], // Dropdown options
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String, // Store time separately (e.g., "14:30")
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;
