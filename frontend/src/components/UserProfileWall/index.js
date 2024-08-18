import React, { useEffect, useState } from 'react';
import Header from '../Home/Header';

const UserProfileWall = () => {
  const colors = [
    'bg-red-300',
    'bg-green-300',
    'bg-purple-300',
    'bg-blue-300',
    'bg-yellow-300',
  ];
  const [profiles, setProfiles] = useState([]);
  const [profilesReady, setProfileReady] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(4);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('http://localhost:1024/api/user/getprofiles');
        const data = await response.json();
        setProfiles(data);
        setProfileReady(true);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };
    fetchProfiles();
  }, []);

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profilesReady && profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <Header />
      <div className="relative h-screen w-full">
        <div className="w-full mt-[-1%] sm:mt-[2em]">
          <div className="overflow-x-auto">
            <div className="w-full flex flex-col items-center">
              {profilesReady &&
                currentProfiles.map((profile, index) => (
                  <div
                    key={profile._id}
                    className={`lg:w-[70vw] md:w-[60vw] sm:w-[80%] px-2 py-2 rounded-md ${
                      colors[index % colors.length]
                    } my-4`}
                  >
                    <h3 className="text-xl font-semibold text-blue-600 mb-1">{profile.name}</h3>
                    <p className="text-gray-700 mb-[0.5]">
                      Age: <span className="font-medium">{profile.age}</span>
                    </p>
                    <p className="text-gray-700 mb-[0.5]">
                      Location: <span className="font-medium">{profile.location}</span>
                    </p>
                    <p className="text-gray-700">
                      Profession: <span className="font-medium">{profile.profession}</span>
                    </p>
                  </div>
                ))}
              {profilesReady && profiles.length === 0 && (
                <p>No profiles found</p>
              )}
            </div>
            <div className="relative flex justify-center mt-4 mb-6">
              <button
                className={`bg-blue-500 text-white px-4 py-2 mx-2 rounded-md ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <button
                className={`bg-blue-500 text-white px-4 py-2 mx-2 rounded-md ${
                  indexOfLastProfile >= profiles.length
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastProfile >= profiles.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileWall;
