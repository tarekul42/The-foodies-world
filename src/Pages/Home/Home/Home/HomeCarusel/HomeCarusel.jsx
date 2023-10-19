import React, { useEffect, useState } from 'react';

const HomeCarusel = ({ chefs }) => {
    const allChefsData = chefs;
    const [chefData, setChefData] = useState('');

    useEffect(() => {
        const processedChefData = allChefsData.map(chef => {
            return chef;
        });
        setChefData(processedChefData);
    }, [allChefsData]);



    return (
        <div className="carousel w-full">
            {
                allChefsData.map(chef => {
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={`${chef.chef_picture}`} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default HomeCarusel;