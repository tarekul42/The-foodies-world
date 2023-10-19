import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';


const MainLayout = () => {
    
    const [chef, setChef] = useState([]);
    
    // const chefs = useLoaderData();
    // chefs.map(chef => setChef(chef));
    // console.log(chef);


    // Fetch data using useEffect
    useEffect(() => {
        const fetchChefs = async () => {
            const chefsData = await useLoaderData();
            setChef(chefsData);
        };

        return fetchChefs();
    }, []);

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;