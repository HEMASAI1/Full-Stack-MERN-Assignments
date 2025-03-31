import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 399.99,
    description: 'Advanced smartwatch with health monitoring features',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Ultra HD Camera',
    price: 799.99,
    description: 'Professional-grade camera for stunning photography',
    image: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    description: 'High-precision gaming mouse with customizable buttons',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80'
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
            alt="Tech background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Latest Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            We've got everything you need.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="flex items-center text-indigo-600 hover:text-indigo-800"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;