import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import logoImg from '../../assets/logo.svg'
import './style.css'

export const Profile = () => {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, user847f3</span>

                <Link to="/incidents/new" className="button">Cadastrar um novo caso</Link>
                <button type="button">
                    <FontAwesomeIcon icon={faPowerOff} style={{ fontSize: 18 }} color="#E02043" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso: </strong>
                    <p>Caso a7d23</p>

                    <strong>Descrição: </strong>
                    <p>Descrição d872d2</p>

                    <strong>Valor: </strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: 20 }} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso: </strong>
                    <p>Caso a7d23</p>

                    <strong>Descrição: </strong>
                    <p>Descrição d872d2</p>

                    <strong>Valor: </strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: 20 }} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>Caso: </strong>
                    <p>Caso a7d23</p>

                    <strong>Descrição: </strong>
                    <p>Descrição d872d2</p>

                    <strong>Valor: </strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: 20 }} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}