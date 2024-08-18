import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen mb-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <section
          className="bg-cover bg-center text-black"
          style={{
            backgroundImage: 'url(https://www.webdesignsource.org/wp-content/uploads/2013/01/frontpage.jpg)',
          }}
        >
          <div className="bg-white bg-opacity-80 container mx-auto text-center p-10 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Profiles Application</h1>
            <p className="text-lg mb-6">
              Create your profile and explore others in our community.
            </p>
            <div className="mx-auto w-fit flex items-center justify-center md:space-x-4 flex-col md:flex-row">
              <p className="bg-yellow-500 text-black px-6 py-3 sm:mb-3 md:mb-0 rounded hover:bg-yellow-400 transition duration-300 hover:cursor-pointer">
                <Link to="/create-profile">Create Your Profile</Link>
              </p>
              <p className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 transition duration-300 hover:cursor-pointer">
                <Link to="/viewprofiles">View Profiles</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="py-2">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Why Join Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Connect with Others</h3>
                <p>
                  Create a profile to share your background and connect with like-minded professionals in your location.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Discover Opportunities</h3>
                <p>
                  Browse profiles to find potential collaborators, mentors, or simply expand your network.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                <p>
                  Stay informed about the latest updates from our community by exploring the profiles and activities of others.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 fixed bottom-0 right-0 left-0 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Profiles Application. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
