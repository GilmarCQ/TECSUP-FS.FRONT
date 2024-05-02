import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"
import {useState} from "react";
import app from "../App.jsx";

const Appointments = () => {

  const INITIAL_APPOINTMENTS = [
    {
      id: '1',
      petName: 'Pollo',
      petAge: '3',
      ownerName: 'Gilmar',
      appointmentsDate: '',
      appointmentsTime: '',
      symptoms: 'Duerme mucho',
      estado: 'RESERVADO'
    }
  ]

  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS)
  const handleSaveAppointment = (form) => {
    setAppointments([...appointments, form])
  }
  const handleRemove = (appointment) => {
    const id = appointment.id

    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    setAppointments(newAppointments)
  }
  const handleConfirm = (appointment) => {

  }
  const handleEdit = (appointment) => {

  }

  return (
    <>
      <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
      />
      <AppointmentsList
        appointments={appointments}
        onRemove={handleRemove}
        onEdit={handleEdit}
        onConfirm={handleConfirm}
      />
    </>
  )
}
export default Appointments