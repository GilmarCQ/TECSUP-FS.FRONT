import './App.css'
import Header from "./components/Header.jsx";
import Appointments from "./pages/Appointments.jsx";

function App() {

  return (
    <>
      <Header title="Citas Médicas para mascotas" />
      <main className="container m-auto flex gap-12 py-5">
        <Appointments />
      </main>
    </>
  )
}

export default App
