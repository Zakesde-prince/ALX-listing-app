import React from 'react';
import Card from '../components/common/Card';

const properties = [
  {
    title: 'Cozy Apartment',
    imageSrc: '/assets/property1.jpg',
    price: 120,
    location: 'New York, NY',
  },
  {
    title: 'Modern House',
    imageSrc: '/assets/property2.jpg',
    price: 250,
    location: 'San Francisco, CA',
  },
];

const HomePage: React.FC = () => {
  return (
    <main className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {properties.map((property, idx) => (
        <Card key={idx} {...property} />
      ))}
    </main>
  );
};

export default HomePage;
