'use client'

import React from "react";
import { useState } from "react";
import Header from "../../Common/Header/Header";
import auto from './assets/auto.png';
import lightbulb from './assets/light_bulb_3d.png';
import palette from './assets/artist_palette_3d.png';
import photo_ad_1 from './assets/photo_ad_1.png';
import photo_ad_2 from './assets/photo_ad_2.png';
import photo_ad_3 from './assets/photo_ad_3.png';
import wizard from './assets/wizard.png';

export default function Auto() {
    return (
        <div className='auto-main font-urbanist px-4 bg-white'>

            {/* HEADER */}
            <Header />

            {/* MAIN TITLE */}
            <div className='auto-title-container bg-white text-white rounded-3xl flex flex-col items-center justify-start p-4'>
                <img className='auto w-1/3 h-1/4 mt-16' src={auto.src} alt='auto' />
                <p className="auto-title-text font-normal text-xl text-grayAccent text-center md:w-2/5 sm:w-3/5 mt-6">
                    Auto can completely run your social media channels giving you more time to focus on other things
                </p>
            </div>

            {/* FIRST CARD */}
            <div className='flex items-center justify-center'>
                <div className='first-card-container bg-gradient-to-t from-redGradientBottom to-redGradientTop text-white rounded-3xl flex flex-col items-start justify-start mt-2.5 w-2/3 p-10'>
                    <div className="first-card-title-container flex items-center text-white mb-1">
                        <img className='lightbulb w-16 h-16 mr-1' src={lightbulb.src} alt='lightbulb' />
                        <h1 className='first-card-title font-bold text-5xl'>
                            Auto is a Thinker
                        </h1>
                    </div>
                    <p className='first-card-text font-normal text-lg text-white text-left w-full mt-2 mb-2'>
                        Auto can generate a wide range of creative ad ideas. Auto uses its knowledge about your product and business to 
                        create captivating ad concepts that will capture your audience's attention.
                    </p>

                    <div className="first-card-row-container flex items-start">
                        <div className="first-card-col1 bg-white text-grayAccent rounded-lg p-2 w-48 h-40 mr-16">
                            <p className="first-card-col1-text text-sm font-normal">
                                Create an ad for a travel agency, taking viewers on a virtual tour of exotic destinations and enticing 
                                them to book their next adventure.
                            </p>
                        </div>

                        <div className="first-card-col2 bg-white text-gray-700 rounded-lg p-2 w-48 h-40 mr-16">
                            <p className="first-card-col2-text text-sm font-normal">
                                Create an ad for a sustainable fashion brand, showcasing their eco-friendly practices and stylish, 
                                environmentally conscious clothing.
                            </p>
                        </div>

                        <div className="first-card-col3 bg-white text-gray-700 rounded-lg p-2 w-48 h-40">
                            <p className="first-card-col3-text text-sm font-normal">
                                Create a cinematic ad for a blockbuster movie, building anticipation and excitement for its release 
                                through captivating visuals and intriguing snippets of the storyline.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* SECOND CARD */}
            <div className='flex items-center justify-center'>
                <div className='second-card-container bg-gradient-to-t from-purpleGradientBottom to-purpleGradientTop text-white rounded-3xl flex flex-col items-start justify-start mt-2.5 w-2/3 p-10'>
                    <div className="second-card-title-container flex items-center text-white mb-1">
                        <img className='palette w-16 h-16 mr-1' src={palette.src} alt='palette' />
                        <h1 className='second-card-title font-bold text-5xl'>
                            Auto is an Artist
                        </h1>
                    </div>
                    <p className='second-card-text font-normal text-lg text-white text-left w-full mt-2 mb-2'>
                        Auto can generate captivating and visually stunning photo ads. Auto uses AI to create the best ads for your
                        product or service. You can add your own logos or product shots to better fit your needs.
                    </p>

                    <div className="second-card-row-container flex items-start">
                        <img className='second-card-col1 w-48 h-52 rounded-lg mr-16' src={photo_ad_1.src} alt='photo_ad_1' />
                        <img className='second-card-col2 w-48 h-52 rounded-lg mr-16' src={photo_ad_2.src} alt='photo_ad_2' />
                        <img className='second-card-col3 w-48 h-52 rounded-lg' src={photo_ad_3.src} alt='photo_ad_3' />
                    </div>
                </div>
            </div>

            {/* THIRD CARD */}
            <div className='flex items-center justify-center py-4'>
                <div className='third-card-container bg-gradient-to-t from-tealGradientBottom to-tealGradientTop text-white rounded-3xl flex flex-col items-start justify-start mt-2.5 w-2/3 p-10'>
                    <div className="third-card-title-container flex items-center text-white mb-1">
                        <img className='wizard w-16 h-16 mr-1' src={wizard.src} alt='wizard' />
                        <h1 className='third-card-title font-bold text-5xl'>
                            Auto is a Wizard
                        </h1>
                    </div>
                    <p className='third-card-text font-normal text-lg text-white text-left w-full mt-2 mb-2'>
                        Auto can generate a diverse array of captivating social media post captions. Leveraging its deep understanding
                        of your content and audience. Auto crafts compelling ideas that will engage and captivate your online followers.
                    </p>

                    <div className="third-card-row-container flex items-start">
                        <div className="third-card-col1 bg-white text-grayAccent rounded-lg p-2 w-48 h-40 mr-16">
                            <p className="third-card-col1-text text-sm font-normal">
                                Explore breathtaking destinations virtually with our travel agency. Let your imagination soar as we
                                bring exotic wonders to your screen. Book your dream adventure today!
                            </p>
                        </div>

                        <div className="third-card-col2 bg-white text-grayAccent rounded-lg p-2 w-48 h-40 mr-16">
                            <p className="third-card-col2-text text-sm font-normal">
                                Embrace eco-fashion. Sustainable style that cares for the planet without compromising on trends.
                                Join the movement for a greener wardrobe!
                            </p>
                        </div>

                        <div className="third-card-col3 bg-white text-gray-700 rounded-lg p-2 w-48 h-40">
                            <p className="third-card-col3-text text-sm font-normal">
                                Prepare for the ultimate cinematic experience. Brace yourself for an adrenaline-fueled thrill
                                ride that will leave you on the edge of your seat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
