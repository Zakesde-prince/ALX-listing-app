import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, imageSrc, price, location }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">{location}</p>
        <p className="text-green-600 font-bold">${price}</p>
      </div>
    </div>
  );
};

export default Card;
