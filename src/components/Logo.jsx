import React from 'react';

const Logo = () => (
    <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M85 60C85 50 90 45 95 40" stroke="#4A2A1A" strokeWidth="3" strokeLinecap="round" style={{ animation: 'steam 2s infinite' }}/>
                <path d="M105 65C105 55 110 50 115 45" stroke="#4A2A1A" strokeWidth="3" strokeLinecap="round" style={{ animation: 'steam 2s infinite 0.5s' }}/>
                <path d="M95 70C95 60 100 55 105 50" stroke="#4A2A1A" strokeWidth="3" strokeLinecap="round" style={{ animation: 'steam 2s infinite 1s' }}/>
                <path d="M60 150 C 60 165, 140 165, 140 150 L 125 80 H 75 L 60 150 Z" stroke="#4A2A1A" strokeWidth="4" fill="#FDFBF5"/>
                <path d="M70 115 L 130 115" stroke="#BFA181" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M75 100 L 125 100" stroke="#BFA181" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M80 130 L 120 130" stroke="#BFA181" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            <style jsx>{`
                @keyframes steam {
                    0% { transform: translateY(0); opacity: 1; }
                    50% { transform: translateY(-10px); opacity: 0.5; }
                    100% { transform: translateY(-20px); opacity: 0; }
                }
            `}</style>
        </div>
        <h2 className="font-serif text-3xl font-bold text-brand-brown mt-2">
            Chai Culture
        </h2>
    </div>
);

export default Logo;
