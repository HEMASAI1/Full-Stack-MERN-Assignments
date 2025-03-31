import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium sound quality',
      'Comfortable fit',
      'Voice assistant support'
    ],
    specs: {
      brand: 'TechPro',
      model: 'WH-1000',
      connectivity: 'Bluetooth 5.0',
      weight: '250g',
      warranty: '2 years'
    }
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 399.99,
    description: 'Advanced smartwatch with health monitoring features',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant',
      'Sleep tracking',
      'Smartphone notifications'
    ],
    specs: {
      brand: 'TechPro',
      model: 'SW-200',
      display: 'AMOLED',
      battery: '5 days',
      warranty: '1 year'
    }
  },
  {
    id: 3,
    name: 'Ultra HD Camera',
    price: 799.99,
    description: 'Professional-grade camera for stunning photography',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    features: [
      '48MP sensor',
      '4K video recording',
      'Image stabilization',
      'Manual controls',
      'Weather-sealed body'
    ],
    specs: {
      brand: 'TechPro',
      model: 'DC-500',
      sensor: 'Full-frame',
      weight: '750g',
      warranty: '2 years'
    }
  },
  {
    id: 4,
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    description: 'High-precision gaming mouse with customizable buttons',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',
    features: [
      '16000 DPI sensor',
      'Programmable buttons',
      'RGB lighting',
      'Ergonomic design',
      'Low latency'
    ],
    specs: {
      brand: 'TechPro',
      model: 'GM-100',
      connectivity: 'Wireless 2.4GHz',
      weight: '95g',
      warranty: '1 year'
    }
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-gray-900 mb-8">${product.price}</p>
          
          <div className="space-y-4 mb-8">
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-indigo-700">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-50">
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </button>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <dl className="grid grid-cols-1 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <dt className="font-medium text-gray-600 capitalize">{key}</dt>
                  <dd className="text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;