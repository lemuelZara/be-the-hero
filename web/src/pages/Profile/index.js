import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../services/api'

import logoImg from '../../assets/logo.svg'
import './style.css'

export const Profile = () => {
    const [incidents, setIncidents] = useState([])

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    useEffect(() => {
        async function fetchData() {
            const response = await api.get('/profile', {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(response.data)
        }

        fetchData()
    }, [ongId])

    const handleDeleteIncident = async (id) => {
        try {
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (error) {
            alert(`Erro: ${error}`)
        }
    }

    const handleLogout = () => {
        localStorage.clear()

        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link to="/incidents/new" className="button">Cadastrar um novo caso</Link>
                <button type="button" onClick={() => handleLogout()}>
                    <FontAwesomeIcon icon={faPowerOff} style={{ fontSize: 18 }} color="#E02043" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Caso: </strong>
                        <p>{incident.title}</p>

                        <strong>Descrição: </strong>
                        <p>{incident.description}</p>

                        <strong>Valor: </strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: 20 }} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}