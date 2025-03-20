import express from 'express';
import { createAppointment, getAppointments, getAppointment, deleteAppointment } from '../controllers/appointmentController.js';

const router = express.Router();

router.post('/add', createAppointment);
router.get('/getappointments', getAppointments);
router.get('/getappointment/:id', getAppointment);
router.delete('/deleteappointment/:id', deleteAppointment);

export default router;