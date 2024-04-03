import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import ImageUpload from './ImageUpload/ImageUpload';
import LogoGenerator from './LogoGenerator/LogoGenerator';

export default function Dashboard() {
    return (
        <div className="bg-white flex">
            <Sidebar />
            <div className="text-black font-urbanist flex-1 p-6">
                <ImageUpload />
                <LogoGenerator />
            </div>
        </div>
    )
}
