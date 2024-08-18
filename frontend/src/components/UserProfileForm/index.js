import React, { useState } from 'react';
import Header from '../Home/Header';

const UserProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        location: '',
        profession: '',
    });
    const { name, age, location, profession } = formData;
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name,age,location,profession)
        if (!name || !age || !location || !profession) {
            alert('Please fill out all fields');
            return;
        }
        if (isNaN(age)) {
            alert('Age must be a number');
            return;
        }
        try {
            const response = await fetch('http://localhost:1024/api/user/createnewprofile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Profile created successfully!');
                setFormData({ name: '', age: '', location: '', profession: '' });
            } else {
                alert('Failed to create profile');
            }
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    };

    return (
        <>
        <Header />
        <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
            <div className="sm:mt-[10rem] w-full max-w-xs md:max-w-2xl px-4 py-2 lg:max-w-3xl bg-white rounded-lg  flex flex-col md:flex-row items-center sm:mb-[5%]  md:mt-[0%]">
                <div className="flex justify-center mb-4 md:mb-0 md:mr-4">
                    <div className="h-fit w-full flex items-center justify-center">
                        <img
                            src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-system-update_516790-1241.jpg?w=740"
                            alt="this is login page logo"
                            className="w-[120%] h-[100%] sm:w-[120%] sm:h-[80%] sm:mt-[15%] "
                        />
                    </div>
                </div>
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Create Your Profile
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                            <input
                                type="text"
                                    name="name"
                                     placeholder='Enter your name'
                                value={name}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
                            <input
                                type="text"
                                    name="age"
                                     placeholder='Enter your age'
                                value={age}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                            <input
                                type="text"
                                name="location"
                                    value={location}
                                     placeholder='Enter your location'
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Profession:</label>
                            <input
                                type="text"
                                    name="profession"
                                placeholder='Enter your profession'    
                                value={profession}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                            Create Profile
                        </button>
                    </form>
            </div>
            </div>
        </div>
      </> 
    );
};

export default UserProfileForm;