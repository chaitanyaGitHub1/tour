import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstagramLogin from './InstagramLogin';
import Dealmart from './Dealmart';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dealmart />} />
                <Route path="/instagram-login" element={<InstagramLogin />} />
            </Routes>
        </Router>
    );
};

export default App;
