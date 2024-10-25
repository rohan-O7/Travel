import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
        <p className="mt-4 text-gray-600 text-lg">
          At <strong>Travel Together</strong>, we believe that exploring the world is best done with friends, new and old. Our mission is to connect like-minded travelers and make every journey an unforgettable experience.
        </p>
      </div>

      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* Our Mission */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            We aim to make travel more accessible, affordable, and enjoyable by providing a platform where individuals can find travel companions, join groups, and explore the world together. Whether you're a solo traveler or part of a group, we ensure that your adventures are seamless and filled with incredible memories.
          </p>
        </div>

        {/* Our Values */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Our Values</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Connection: Bringing people together through travel.</li>
            <li>Adventure: Encouraging exploration and curiosity.</li>
            <li>Inclusivity: Making travel accessible to everyone, regardless of background.</li>
            <li>Sustainability: Promoting eco-friendly travel practices.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-semibold text-gray-900">Join Us on This Journey</h3>
        <p className="mt-4 text-gray-600">
          Whether you’re looking to explore new destinations or meet fellow travelers, <strong>Travel Together</strong> is here to guide you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;
