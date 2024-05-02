import React from 'react'

const AppointmentsList = ({ appointments, onConfirmAppointment, onEdit, onRemove }) => {

  //  En caso no se tenga items en la lista solo ejecutara esta porcion de codigo
  if (appointments.length === 0) {
    return (
      <section className="w-1/2 p-4 bg-white rounded-lg">
        <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>
        <div className="text-2xl text-center">
          No hay citas.
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="w-1/2 p-4 bg-white rounded-lg">
        <h2 className="text-2xl text-center mb-4">Listado de Citas</h2>
        {appointments.map((appointment) => {
          return (
            <div className="flex flex-col gap-3 mb-4" key={appointment.id}>
              <div className="border-2 border-sky-500 p-3 rounded-lg bg-sky-300">
                <div>
                  <h4 className="font-semibold text-xl">Mascota</h4>
                  <div>
                    <strong>Nombre: </strong> {appointment.name}
                  </div>
                  <div>
                    <strong>Edad: </strong> {appointment.petAge}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Dueño</h4>
                  <div>
                    <strong>Nombre: </strong> {appointment.ownerName}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Cita</h4>
                  <div>
                    <strong>Fecha: </strong> {appointment.appointmentsDate}
                  </div>
                  <div>
                    <strong>Hora: </strong> {appointment.appointmentsTime}
                  </div>
                  <div>
                    <strong>Sintomas: </strong> {appointment.symptoms}
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-3">
                  <button
                    className="p-2 bg-green-600 text-white rounded-lg cursor-pointer"
                    onClick={() => onConfirmAppointment(appointment)}
                  >Confirmar</button>
                  <button
                    className="p-2 bg-sky-600 text-white rounded-lg cursor-pointer"
                    onClick={() => onEdit(appointment)}
                  >Editar</button>
                  <button
                    className="p-2 bg-red-600 text-white rounded-lg cursor-pointer"
                    onClick={() => onRemove(appointment)}
                  >Eliminar</button>
                </div>

              </div>
            </div>
          )
        })}

      </section>
    </>
  )
}

export default AppointmentsList
