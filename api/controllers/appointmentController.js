
import Appointment from '../models/appointmentModel.js';
import { errorHandler } from '../utils/error.js';
// import nodemailer from 'nodemailer';

// Configure Nodemailer
// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: process.env.EMAIL_USER, // Your email
//         pass: process.env.EMAIL_PASS  // Your email password or app password
//     }
// });

// Create Appointment
export const createAppointment = async (req, res, next) => {
    try {
        const { name, email, phone, age, service, date, time } = req.body;
        
        // Validate input
        if (!name || !email || !phone || !age || !service || !date || !time) {
            return next(errorHandler(400, 'All fields are required!'));
        }

        const newAppointment = new Appointment({ name, email, phone, age, service, date, time });
        await newAppointment.save();

        // Send confirmation email
        // await transporter.sendMail({
        //     from: process.env.EMAIL_USER,
        //     to: email,
        //     subject: 'Appointment Confirmation',
        //     text: `Hello ${name},\n\nYour appointment for ${service} is confirmed on ${date} at ${time}.\n\nThank you!`
        // });

        res.status(201).json({ message: 'Appointment booked successfully. A confirmation email has been sent!' });
    } catch (error) {
        next(error);
    }
};

// Get all appointments
export const getAppointments = async (req, res, next) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments);
    } catch (error) {
        next(error);
    }
};

// Get single appointment by ID
export const getAppointment = async (req, res, next) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        if (!appointment) {
            return next(errorHandler(404, 'Appointment not found!'));
        }
        res.status(200).json(appointment);
    } catch (error) {
        next(error);
    }
};

// Delete appointment
export const deleteAppointment = async (req, res, next) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json('Appointment has been deleted!');
    } catch (error) {
        next(error);
    }
};



