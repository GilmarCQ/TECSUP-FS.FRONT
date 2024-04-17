import {useState} from "react";

function App() {

    const [weight, setWeight] = useState(50)
    const [height, setHeight] = useState(0)
    const [imc, setImc] = useState(0)
    const [result, setResult] = useState('')

    const handleWeight = (event) => {
        const value = event.target.value
        setWeight(value)
        bodyMassIndex()
        bodyMassIndexResult()
    }
    const handleHeight = (event) => {
        const value = event.target.value
        setHeight(value)
        bodyMassIndex()
        bodyMassIndexResult()
    }
    const bodyMassIndex = () => {
        setImc(parseInt(weight) / ((parseInt(height) / 100) ** 2))
    }
    const bodyMassIndexResult = () => {
        console.log(imc)
        let res = ''
        if (imc < 18.5) {
            res = 'Baja'
        } else if (imc < 25) {
            res = 'Normal'
        } else if (imc < 30) {
            res = 'Sobrepeso'
        } else if (imc > 30) {
            res = 'Obeso'
        }
        setResult(res)
    }

    return (
        <section>
            <h1 className="text-3xl text-red-600 font-bold text-center"
            >IMC Calculator</h1>
            <div>
                <p>Peso: {weight} Kg</p>
                <input
                    type="range"
                    min="50"
                    max="200"
                    value={weight}
                    onChange={handleWeight}
                />
            </div>
            <div>
                <p>Altura: {height} cm</p>
                <input
                    type="range"
                    min="50"
                    max="200"
                    value={height}
                    onChange={handleHeight}/>
            </div>
            <p>
                Tu IMC es: {imc.toFixed(2)}
            </p>
            <p>
                Estado de IMC: {result}
            </p>
        </section>
    )
}

export default App;