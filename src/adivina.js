import { useState, useEffect } from "react";
function Adivina() {
    const [intentos, setIntento] = useState(0);
    const [numeroRandom, setNumeroRandom] = useState(getRandomNumero());
    const [texto, setTexto] = useState("Empieza")
    const [numUsuario, setNumUsuario] = useState("");

    function getRandomNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }
    const handleGuess = () => {
        const ingresoDeNumero = parseInt(numUsuario)
        setIntento(intentos + 1)

        if (ingresoDeNumero === numeroRandom) {
            setTimeout(() => {
                resetGame();
              }, 5000);
            setTexto(`¡Felicitaciones! Adivinaste el número ${numeroRandom} en ${intentos} intentos.`);
            
          } else if (ingresoDeNumero < numeroRandom) {
            setTexto("El número es mayor.");
            setTimeout(() => {
              setTexto("Intente de Nuevo");
            }, 2000);
          } else {
            setTexto("El número es menor.");
            setTimeout(() => {
              setTexto("Intente de Nuevo");
            }, 2000);
          }
        };
    const resetGame = () => {
        const nuevoRandomNumero = getRandomNumero();
        setNumeroRandom(nuevoRandomNumero);
        setNumUsuario('');
        setIntento(0);
        setTexto("Empieza");
    };
    useEffect(() => {
        resetGame();
    }, []);


    return (
        <div>
            <input type="text" value={numUsuario} onChange={(e) => setNumUsuario(e.target.value)}>
            </input>
            <button id="btAdivinar" onClick={handleGuess}>Adivinar</button>
            <p>{texto}</p>
        </div>
    )
}
export default Adivina;
