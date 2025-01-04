import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dealmart = () => {
    const navigate = useNavigate();

    const handleOfferClick = () => {
        navigate('/instagram-login');
    };

    return (
        <div
            className="min-h-screen bg-black flex justify-center items-center"
            onClick={handleOfferClick}
            style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickability
        >
            <div className="bg-black text-white w-full max-w-3xl p-4">
                {/* Post Header */}
                <div className="flex items-center mb-4">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                        <p className="font-semibold">ima_chithra_official</p>
                        <p className="text-sm text-gray-400">Ernakulam</p>
                    </div>
                </div>

                {/* Post Image */}
                <div className="mb-4">
                    <img
                        src="/image.png" // Replace with your post image URL
                        alt="Post"
                        className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto rounded"
                    />
                </div>

                {/* Post Description */}
                <div className="mb-4">
                    <p>
                        <span className="font-semibold">ima_chithra_official </span>
                        🎄✨ #christmastime 🎄 #christmasdecor #christmastree
                        #christmas #christmasdecorations #modeling #modelife
                        #model #explorepage #photooftheday #picoftheday
                    </p>
                </div>

                {/* Post Engagement (Like, Comment, Share) */}
                <div className="flex items-center space-x-4 mb-4">
                    <button className="focus:outline-none">
                        <img
                            src="https://via.placeholder.com/24x24" // Replace with heart icon URL
                            alt="Like"
                        />
                    </button>
                    <button className="focus:outline-none">
                        <img
                            src="https://via.placeholder.com/24x24" // Replace with comment icon URL
                            alt="Comment"
                        />
                    </button>
                    <button className="focus:outline-none">
                        <img
                            src="https://via.placeholder.com/24x24" // Replace with share icon URL
                            alt="Share"
                        />
                    </button>
                </div>

                {/* Post Timestamp */}
                <p className="text-gray-500 text-sm">1 week ago</p>
            </div>
        </div>
    );
};

export default Dealmart;
