import React from 'react';
import './SpeakerCard.css';

export default function SpeakerCard({ name, img, children, ...rest }) {
  return (
    <div className="speaker-card" {...rest}>
      <div className="speaker-card-img-wrapper">
        <img src={img} alt={name} className="speaker-card-img" />
      </div>
      <div className="speaker-card-info">
        <div className="speaker-card-name">{name}</div>
        {children}
      </div>
    </div>
  );
} 