import React from "react"
import { useState } from "react";
export default function Adivina() {
    const [intentos, setIntento] = useState(0);
    const [numeroRandom, setRNum] = useState(0);
    const [texto, setTexto] = useState("Empieza")
    const [numeroUsuario, setUnum] = useState();
    function getRandomNumero() {
        let numeroRandom = Math.floor(Math.random() * 10) + 1;
        return numeroRandom
    }
    function manejarClick() {
        const numeroRandom = getRandomNumero()
        if (numeroUsuario === numeroRandom) {
            if (numeroUsuario === numeroRandom) {
                texto.textContent = `¡Felicitaciones! Adivinaste el número ${numeroRandom} en ${intentos} intentos.`;
                setTimeout(() => {
                }, 5000)
            } else if (numeroUsuario < numeroRandom) {
                texto.textContent = "El número es mayor.";
                setTimeout(() => {
                    texto.textContent = "Intente de Nuevo";
                }, 2000)
            } else {
                texto.textContent = "El número es menor.";
                setTimeout(() => {
                    texto.textContent = "Intente de Nuevo";
                }, 2000)
            }
        }
    }
    return (
        <div>
            <input type="number" value={numeroUsuario}>
            </input>
            <button onClick={manejarClick}>Adivinar</button>
            <p>{texto}</p>
        </div>
    )
}