import React, { useState } from 'react';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const customers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', joined: '2023-01-15', orders: 5, totalSpent: '$520.00' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', joined: '2023-02-20', orders: 12, totalSpent: '$1,200.50' },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', joined: '2023-03-10', orders: 3, totalSpent: '$150.75' },
    { id: 4, name: 'Emily White', email: 'emily.white@example.com', joined: '2023-04-05', orders: 8, totalSpent: '$850.00' },
    { id: 5, name: 'David Lee', email: 'david.lee@example.com', joined: '2023-05-22', orders: 2, totalSpent: '$90.00' },
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1 className="page-title">Customers</h1>
      <p className="page-subtitle">View and manage your customer base.</p>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Joined Date</th>
              <th>Orders</th>
              <th>Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.joined}</td>
                <td>{customer.orders}</td>
                <td>{customer.totalSpent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;