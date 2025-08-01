import React from 'react';

function Card({ title, subtitle, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Card;
