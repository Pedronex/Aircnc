import React, { useEffect, useState, useMemo } from 'react';
import api from '../../service/api';
import socketio from 'socket.io-client';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Dashboard(){
    // Pensar no formato que esta esperando da variavel
    const [spots, setSpots] = useState([]);
    const [requests, setRequest] = useState([]);

    const user_id = localStorage.getItem('user');
    const socket = useMemo(() => socketio('http://localhost:3333',{
        query: { user_id }
    }),[user_id]);
    useEffect(() => {
        socket.on('booking_request', data => {
            setRequest([...requests,data]);
        })
    },[requests, socket])

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
    }, []);
    async function handleAccept(id){
        await api.post(`/booking/${id}/approvals`);

        setRequest(requests.filter(request => request._id !== id));
    }
    async function handleReject(id){
        await api.post(`/booking/${id}/rejections`);

        setRequest(requests.filter(request => request._id !== id));
    }
    return (
        <>
            <ul className="notifications">
                {requests.map(request => (
                    <li key={request._id}>
                        <p>
                            <strong>{request.user.email}</strong> está solicitando uma reserva em <strong>{request.spot.company}</strong> para a data: <strong>{request.date}</strong>
                        </p>
                        <button className="accept" onClick={() => handleAccept(request._id)}>Aceitar</button>
                        <button className="reject" onClick={() => handleReject(request._id)}>Rejeitar</button>
                    </li>
                ))}
            </ul>
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