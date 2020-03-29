import React from 'react'
import '@fortawesome/fontawesome-free'

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export const Logon = () => {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form>
                    <h1>Faça seu logon</h1>
                    <i class="fas fa-camera"></i>

                    <input placeholder="Sua ID" />
                    <button type="submit">Entrar</button>

                    <a href="/register">
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}