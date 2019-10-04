import React, { useState } from 'react';
import api from '../../service/api';

export default function Login({ history }){

    const [email,setEmail] = useState('');

    async function handleSubmit(event){
        // Previnir o funcionamento padrão
        event.preventDefault()

        const response = await api.post('/sessions',{ email });
        
        const { _id } = response.data;

        localStorage.setItem('user', _id);

        history.push('/dashboard');
    }

    return (
        <>
            <p>
            Ofereça <strong>Spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    );
}