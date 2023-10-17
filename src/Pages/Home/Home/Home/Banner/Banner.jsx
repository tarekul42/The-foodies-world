import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.skyscanner.com.au/wp-content/uploads/2018/05/shutterstock_140873188.jpg?fit=1000,667)' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md md:max-w-lg lg:max-w-6xl">
                    <h1 className="mb-5 text-5xl md:text-7xl lg:text-9xl font-bold text-white">Wellcome</h1>
                    <h1 className="mb-5 text-3xl md:text-5xl lg:text-7xl font-bold text-amber-50">to</h1>
                    <h1 className="mb-5 text-5xl md:text-7xl lg:text-9xl font-bold text-rose-50">Foodies World</h1>
                    <p className="mb-5 text-black text-base md:text-xl lg:text-3xl backdrop-contrast-50 text-justify p-2 rounded-lg">The choices we make in what we consume have profound implications for our health and the environment. Our menu is a culinary journey through the diverse flavors of Australia, featuring mouthwatering dishes like kangaroo steaks, seafood platters, and savory meat pies. Experience the warm and welcoming atmosphere, adorned with indigenous art and a casual, friendly ambiance.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;