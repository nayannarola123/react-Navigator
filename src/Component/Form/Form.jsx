import React from 'react';

const StudentRegistrationForm = ({ handleForm, handleSubmit }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Student Registration</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            name='name'
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
                            placeholder="Enter Full Name"
                            onChange={handleForm} 
                        />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
                            placeholder="Enter Email Address"
                            onChange={handleForm} 
                        />
                    </div>

                    {/* Course Field */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Course</label>
                        <input
                            type="text"
                            name="course"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
                            placeholder="Enter Course Name"
                            onChange={handleForm} 
                        />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                        <textarea
                            name="message"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
                            rows="4"
                            placeholder="Enter Additional Information"
                            onChange={handleForm}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold rounded-xl hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentRegistrationForm;
