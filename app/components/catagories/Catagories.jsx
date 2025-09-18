import React from 'react';

export default function Categories() {
  const categories = [
    { name: 'Gaming Console', icon: '🎮' },
    { name: 'Mobile...', icon: '📱' },
    { name: 'Earbuds', icon: '🎧' },
    { name: 'Portable SSD', icon: '💾' },
    { name: 'Earpphone', icon: '🔊' },
    { name: 'Mobile Phone', icon: '📞' },
    { name: 'Action Camera', icon: '📷' },
    { name: 'Portable Camera', icon: '🌄' },
    { name: 'Charger Fan', icon: '🔋' },
    { name: 'Refrigerator', icon: '❄️' },
    { name: 'TV', icon: '📺' },
    { name: 'Smart Watch', icon: '⌚' },
    { name: 'Trimmer', icon: '✂️' },
    { name: 'Drone', icon: '🚁' },
    { name: 'Bluetooth...', icon: '🔗' },
    { name: 'Others', icon: '🌐' },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Featured Categories</h2>
      <p className="text-center text-gray-600 mb-6">Get Your Desired Product from Featured Category!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <span className="text-3xl mb-2">{category.icon}</span>
            <p className="text-sm text-gray-700 text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}