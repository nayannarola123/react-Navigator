import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-br from-blue-200 to-blue-400'>
            <div className='text-center space-y-6'>
                <h1 className='text-4xl font-bold text-white pb-5'>Welcome to Student Portal</h1>
                <Link
                    className="bg-white  text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                    to="/student"
                >
                    Add Student Record
                </Link>
            </div>
        </div>
    );
}

export default Home;
