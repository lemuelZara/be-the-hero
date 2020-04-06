import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../services/api'

import logoImg from '../../assets/logo.svg'
import './styles.css'

export const NewIncident = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    const handleNewIncident = async (event) => {
        event.preventDefault()

        const data = { title, description, value }

        try {
            await api.post('/incidents', data, {
                headers: { Authorization: ongId }
            })

            history.push('/profile')
        } catch (error) {
            alert(`Erro: ${error}`)
        }
    }

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

                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={event => setTitle(event.target.value)} />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={event => setDescription(event.target.value)} />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={event => setValue(event.target.value)} />
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}