import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Header2 from './pages/Header2';
import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';
import Carta from './Carta';
import AboutUs from './pages/AboutUs';
import ReservaMesa from './ReservaMesa';
import MiReserva from './pages/ReservacionPag/MiReserva';
import { useAuth } from './context/auth.context';
import { useDispatch } from 'react-redux';
import { setClienteID } from './Redux/Compra/ReservaSlice';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const {user, userData } = useAuth()
    const dispatch = useDispatch();

    console.log(userData)

    useEffect(() => {
        const userLoggedIn = user=== undefined || user===null ? true : false ;
        setIsLoggedIn(userLoggedIn);
    }, []);

    try {
        if(isLoggedIn){
        dispatch(setClienteID(userData.ClientID))
    }else{
        dispatch(setClienteID(null))
    }
    } catch (error) {
        console.log(error)
    }
    

    return (
        <>
        
            {isLoggedIn ? <Header /> : <Header2 />}

            <Routes>
                
                <Route path="/reservaMesa/*" element={<ReservaMesa />} />
                
                <Route path="/contactanos" element={<ContactUs />} />
                <Route path="/carta/*" element={<Carta />} />
                <Route path="/miReserva" element={<MiReserva />} />
                <Route path="*" element={<AboutUs />} />
            </Routes>

            <Footer />
           
        </>
    );
};

export default Home;
