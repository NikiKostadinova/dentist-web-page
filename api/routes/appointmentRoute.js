import express from 'express';
import { createAppointment, getAppointments, deleteAppointment, getAppointmentsByRange } from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/add', createAppointment);
router.get('/getappointments', getAppointments);
// router.get('/getappointment/:id', getAppointment);
// router.get('/date', getAppointmentsByDate);
router.get("/appointments/range", getAppointmentsByRange);
router.delete('/deleteappointment/:id', deleteAppointment);

export default router;