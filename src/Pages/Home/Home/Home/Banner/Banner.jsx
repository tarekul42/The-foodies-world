import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen relative" style={{ backgroundImage: 'url(https://www.skyscanner.com.au/wp-content/uploads/2018/05/shutterstock_140873188.jpg?fit=1000,667)' }}>
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md md:max-w-lg lg:max-w-7xl">
                    <div className='absolute top-52 sm:top-52 md:top-40 lg:top-28 xl:top-10 inset-x-3 md:inset-x-10 mb-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white'>
                        <p>Wellcome <br /> to <br /> Foodies World </p>
                    </div>
                    <p className="mb-5 text-rose-600 text-base sm:text-lg md:text-xl lg:text-3xl backdrop-contrast-50 text-justify p-2 rounded-lg absolute bottom-10 md:bottom-24 lg:bottom-10 inset-x-4 md:inset-x-16 lg:inset-x-28 2xl:inset-x-52">The choices we make in what we consume have profound implications for our health and the environment. Our menu is a culinary journey through the diverse flavors of Australia, featuring mouthwatering dishes like kangaroo steaks, seafood platters, and savory meat pies. Experience the warm and welcoming atmosphere, adorned with indigenous art and a casual, friendly ambiance.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;