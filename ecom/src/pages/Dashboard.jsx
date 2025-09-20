import React from 'react';
import StatCard from '../components/Layout/StatCard'; // We'll create this

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1 className="page-title">Dashboard Overview</h1>
      <p className="page-subtitle">Here's a quick look at your business performance.</p>

      <div className="stats-grid">
        <StatCard title="Total Sales" value="$12,500" icon="💰" trend="+15% since last week" />
        <StatCard title="New Orders" value="350" icon="📦" trend="+8% since last week" />
        <StatCard title="Active Users" value="1,200" icon="🧑‍🤝‍🧑" trend="+20% since last week" />
        <StatCard title="Conversion Rate" value="3.2%" icon="📈" trend="-2% since last week" />
      </div>
      {/* You can add charts, recent orders table, etc. here */}
    </div>
  );
};

export default Dashboard;