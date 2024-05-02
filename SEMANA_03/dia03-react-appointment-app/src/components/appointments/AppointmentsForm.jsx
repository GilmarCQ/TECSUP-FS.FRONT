import React, {useState} from 'react'

const AppointmentsForm = ({onSaveAppointment}) => {

  const INITIAL_FORM_STATE = {
    id: '',
    petName: '',
    petAge: '',
    ownerName: '',
    appointmentsDate: '',
    appointmentsTime: '',
    symptoms: 'RESERVADO'
  }
  const [form, setForm] = useState(INITIAL_FORM_STATE)
  const handleChange = (event) => {
    const { name, value } =  event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }
  const handleSaveAppointment = (event) => {
    event.preventDefault()

    const newAppointment = {
      ...form,
      id: crypto.randomUUID()
    }
    onSaveAppointment(newAppointment)
    setForm(INITIAL_FORM_STATE)
  }

  return (
    <section className='w-96 p-4'>
      <h2 className="text-2xl text-center mb-4">Nuevo Paciente</h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSaveAppointment}
      >
        <input
          type="text"
          name="petName"
          placeholder="Nombre de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.petName}
        />
        <input
          type="number"
          name="petAge"
          placeholder="Edad de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.petAge}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Dueño de la mascota"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.ownerName}
        />
        <input
          type="date"
          name="appointmentDate"
          placeholder="Fecha de la cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.appointmentsDate}
        />
        <input
          type="time"
          name="appointmentTime"
          placeholder="Hora de la cita"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.appointmentsTime}
        />
        <textarea
          name="symptoms"
          placeholder="Sintomas"
          className="border p-3 shadow-md rounded-md"
          onChange={handleChange}
          value={form.symptoms}
          cols="30" rows="5"
        ></textarea>
        <input
          type="submit"
          className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
          value="Guardar"
        />
      </form>
    </section>
  )
}

export default AppointmentsForm