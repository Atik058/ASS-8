import React from 'react';

const Banner = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Dependable Care, Backed by Trusted Professionals.
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Our platform connects you with verified, experienced doctors across various
                specialties — all at your convenience. Whether it's a routine checking or
                urgent consultation, book appointments in minutes and receive quality
                care you can trust.
            </p>

            <div className="border-t border-gray-200 my-8 w-16 mx-auto"></div>

            <div className="flex gap-4 items-center justify-center">
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search" />
                    
                </label>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Search Now
                </button>
            </div>
        </div>
    );
};

export default Banner;