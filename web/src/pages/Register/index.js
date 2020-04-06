import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../services/api'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    const handleRegister = async (event) => {
        event.preventDefault()

        const data = { name, email, whatsapp, city, uf }

        try {
            const response = await api.post('ongs', data)
            alert(`ID de cadastro: ${response.data.id}`)

            history.push('/')
        } catch (error) {
            alert(`Erro: ${error}`)
        }
    }

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

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={event => setName(event.target.value)} />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={event => setEmail(event.target.value)} />
                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)} />

                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange={event => setCity(event.target.value)} />
                        <input
                            placeholder="UF"
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                            style={{ width: 80 }} />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}