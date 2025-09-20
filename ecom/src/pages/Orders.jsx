import React from 'react';

const Orders = () => {
  const orders = [
    { id: '#O-001', customer: 'Alice Johnson', date: '2024-09-18', status: 'Shipped', total: '$120.00' },
    { id: '#O-002', customer: 'Bob Williams', date: '2024-09-17', status: 'Processing', total: '$250.50' },
    { id: '#O-003', customer: 'Charlie Davis', date: '2024-09-16', status: 'Delivered', total: '$75.20' },
    { id: '#O-004', customer: 'Diana Evans', date: '2024-09-15', status: 'Shipped', total: '$45.00' },
    { id: '#O-005', customer: 'Frank Miller', date: '2024-09-14', status: 'Delivered', total: '$300.99' },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Orders</h1>
      <p className="page-subtitle">Manage and track your customer orders.</p>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td><span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;