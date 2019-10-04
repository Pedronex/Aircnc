import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Dashboard(){
    // Pensar no formato que esta esperando da variavel
    const [spots, setSpots] = useState([]);

    // useEffect funciona muito bem para filtros e busca de dados por api
    useEffect(() => {
        async function loadSpots(){
            const user_id = localStorage.getItem('user');
            const response = await api.get("/dashboard",{
                headers: { user_id }
            });

            setSpots(response.data);
            console.log(response.data);
        }

        loadSpots();
    }, [])
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price? `R$${spot.price}/dia`:'GRATIS'}</span>
                    </li>
                ))}
            </ul>
            <Link to="/new">
                <button className="btn">Cadastrar novo Spot</button>
            </Link>
        </>
    );
}