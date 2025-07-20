import React from 'react'
import { CardProps } from '../../interfaces'

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2>{title}</h2>
    </div>
  )
}

export default Card
