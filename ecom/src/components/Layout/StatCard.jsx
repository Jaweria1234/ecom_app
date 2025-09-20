import React from 'react';

const StatCard = ({ title, value, icon, trend }) => {
  return (
    <div className="stat-card">
      <div className="card-header">
        <span className="card-icon">{icon}</span>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <p className="card-value">{value}</p>
        <p className="card-trend">{trend}</p>
      </div>
    </div>
  );
};

export default StatCard;