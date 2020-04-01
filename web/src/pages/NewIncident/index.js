import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logoImg from '../../assets/logo.svg'
import './styles.css'

export const NewIncident = () => {
    return (
        <div className="incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>

                    <p>Descreva o caso detalhadamente para encontrar um herói que resolva isso</p>

                    <Link className="back-link" to="/profile">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 18 }} color="#E02043" />
                        Voltar para home
                    </Link>
                </section>

                <form action="">
                    <input type="text" placeholder="Título do caso" />
                    <textarea placeholder="Descrição"/>
                    <input type="text" placeholder="Valor em reais" />
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}