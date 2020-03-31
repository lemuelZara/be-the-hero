import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export const Register = () => {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>

                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

                    <Link className="back-link" to="/">
                        <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 18 }} color="#E02043" />
                        Voltar para página inicial
                    </Link>
                </section>

                <form action="">
                    <input type="text" placeholder="Nome da ONG" />
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Whatsapp" />

                    <div className="input-group">
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}