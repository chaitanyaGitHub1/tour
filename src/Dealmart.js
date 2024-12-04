import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dealmart = () => {
    const navigate = useNavigate();
    const [offers, setOffers] = useState([
        { id: 1, title: '65% OFF on Electronics', description: 'Get 50% off on all electronics items.', discount: '65%' },
        { id: 2, title: 'Buy 1 Get 1 Free', description: 'Buy one get one free on selected items.', discount: 'BOGO' },
        { id: 3, title: '30% OFF on Groceries', description: 'Save 20% on your grocery shopping.', discount: '30%' },
        // Add more offers as needed
    ]);
    const [images, setImages] = useState([
        'https://i5.walmartimages.com/dfw/8822aef6-c0af/k2-_130d4f40-2d96-40b6-b84d-b12aa43b48b5.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF',
        'https://i5.walmartimages.com/dfw/8822aef6-7a12/k2-_41552b84-26aa-43f1-825a-c91e64ba312e.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF 1x,',
        'https://i5.walmartimages.com/dfw/8822aef6-897a/k2-_fb2dd395-8fb8-4729-b05f-2d3695e0fb0e.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF',
        'https://i5.walmartimages.com/dfw/8822aef6-bc9e/k2-_df0d88b6-c549-42f3-8cd3-362ebfbc2a15.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF 1x,',
        // Add more image paths as needed
    ]);

    const handleOfferClick = () => {
        navigate('/instagram-login');
    };
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold text-center mb-8">Dealmart Offers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                    <div key={offer.id} className="p-5 bg-white rounded-lg shadow-md cursor-pointer" onClick={handleOfferClick}>
                        <h2 className="text-xl font-bold text-blue-600 mb-2">{offer.title}</h2>
                        <p className="text-gray-700 mb-4">{offer.description}</p>
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-green-500 rounded-full">
                            {offer.discount}
                        </span>
                    </div>
                ))}
            </div>
            {/* Add images section */}
            <div className="flex flex-wrap justify-center items-center mt-8 space-x-0 space-y-4 md:space-x-4 md:space-y-0">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Offer ${index + 1}`}
                        className="w-full sm:w-1/2 md:w-1/4 h-auto rounded-lg shadow-md cursor-pointer"
                        onClick={handleOfferClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Dealmart;