import React from 'react';
import LogoGenerator from '../dashboard/LogoGenerator/LogoGenerator';
import logo from '../Landing/horizontal-logo.jpg'

export default function Demo() {
    return (
        <div className="bg-white flex flex-col justify-center items-center min-h-screen text-black font-urbanist overflow-x-hidden">
            <img 
                src={logo.src} 
                alt="Adneta" 
                className="h-16 w-auto mb-4 mt-4"  // Added mt-4 for top padding
            />
            <LogoGenerator />
        </div>
    )
}
