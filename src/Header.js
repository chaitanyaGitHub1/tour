import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="w-full sm:w-auto text-white text-2xl font-bold mb-4 sm:mb-0">Dealmart</div>
                <div className="w-full sm:w-auto flex flex-wrap items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full sm:w-auto px-4 py-2 rounded-lg"
                    />
                    <a href="/account" className="w-full sm:w-auto text-center text-white">My Account</a>
                </div>
            </div>
        </header>
    );
};

export default Header;