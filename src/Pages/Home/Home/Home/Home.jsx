import React, { useContext } from 'react';
import Banner from './Banner/Banner';
import HomeCarusel from './HomeCarusel/HomeCarusel';
import { ChefContext } from '../../../../Providers/ChefProvider';

const Home = () => {
    const chefs = useContext(ChefContext);
    return (
        <>
            <Banner/>
            <HomeCarusel chefs={chefs} />
        </>
    );
};

export default Home;