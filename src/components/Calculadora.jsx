import React from 'react'
import '../App.css'
import calcular from '../scripts/calcula'

export default (acao, valor) =>
    <>
        <div>
            <div>
                <div className="calculadora">
                    <input type="text" id="resultado" className="resultado" placeholder="0" />
                    <div>
                        <button onClick={calcular(acao, 'c')} type="button" className="btn clear">C</button>
                        <button onClick={calcular(acao, '/')} type="button" className="btn">/</button>
                        <button onClick={calcular(acao, '*')} type="button" className="btn">x</button>
                        <button onClick={calcular(acao, '.')} type="button" className="btn">.</button>
                    </div>
                    <div>
                        <button onClick={calcular(valor, 7)} type="button" className="btn">7</button>
                        <button onClick={calcular(valor, 8)} type="button" className="btn">8</button>
                        <button onClick={calcular(valor, 9)} type="button" className="btn">9</button>
                        <button onClick={calcular(acao, '-')} type="button" className="btn">-</button>
                    </div>

                    <div>
                        <button onClick={calcular(valor, 4)} type="button" className="btn">4</button>
                        <button onClick={calcular(valor, 5)} type="button" className="btn">5</button>
                        <button onClick={calcular(valor, 6)} type="button" className="btn">6</button>
                        <button onClick={calcular(acao, '+')} type="button" className="btn">+</button>
                    </div>

                    <div>
                        <button onClick={calcular(valor, 1)} type="button" className="btn">1</button>
                        <button onClick={calcular(valor, 2)} type="button" className="btn">2</button>
                        <button onClick={calcular(valor, 3)} type="button" className="btn">3</button>
                        <button onClick={calcular(acao, '=')} type="button" className="btn enter">=</button>
                    </div>

                    <div>
                        <button onClick={calcular(valor, 0)} type="button" className="btn zero">0</button>
                    </div>
                </div>
            </div>
        </div>
    </>