import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
    <div className="home-container bg-black">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Explore the World with Us</h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4">
            Join travel groups, discover new destinations, and make lifelong memories.
          </p>
          <a href="#trips" className="mt-6 inline-block px-8 py-3 bg-orange-500 text-white font-medium text-lg rounded-lg hover:bg-orange-600 transition duration-300">
            Start Your Journey
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 text-center bg-slate-600">
        <h2 className="text-3xl font-bold">Why Travel with Us?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">
          We connect travelers from around the world to create unforgettable adventures together.
          Whether you're traveling solo or with friends, find the perfect travel companions and explore amazing destinations.
        </p>
      </section>

      {/* Featured Trips */}
      <section id="trips" className="py-16">
        <h2 className="text-3xl font-bold text-center">Featured Trips</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center appear">
            <h3 className="text-2xl font-semibold mb-3 appear">Bali Adventure</h3>
            <p className="text-gray-600 mb-4">Discover the tropical paradise of Bali with a group of like-minded travelers.</p>
            <a href="/bali-trip" className="inline-block px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
              Learn More
            </a>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center appear ">
            <h3 className="text-2xl font-semibold mb-3 appear">European Escape</h3>
            <p className="text-gray-600 mb-4">Explore Europe’s iconic cities with a group of explorers from across the globe.</p>
            <a href="/europe-trip" className="inline-block px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
              Learn More
            </a>
          </div>
          {/* Add more trip cards as needed */}
        </div>
      </section>
      {/* <Outlet/> used to render children components */}
    </div>
  );
};

export default Home;
