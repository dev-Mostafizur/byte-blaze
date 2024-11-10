import React from 'react';
import Hero from '../../Componant/Hero/Hero'
import wave from '../../assets/wave.svg'

const Home = () => {
    return (
        <>
           <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
            <Hero/>
           </div>
           <img className="absolute w-full bottom-0" src={wave} alt="" />
        </>
    );
};

export default Home;