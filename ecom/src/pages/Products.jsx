import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$120', stock: 50, image: 'https://via.placeholder.com/150/007bff/FFFFFF?text=Product+1' },
    { id: 2, name: 'Smart Watch', price: '$199', stock: 15, image: 'https://via.placeholder.com/150/28a745/FFFFFF?text=Product+2' },
    { id: 3, name: 'Portable Speaker', price: '$75', stock: 120, image: 'https://via.placeholder.com/150/dc3545/FFFFFF?text=Product+3' },
    { id: 4, name: 'Gaming Mouse', price: '$45', stock: 80, image: 'https://via.placeholder.com/150/ffc107/FFFFFF?text=Product+4' },
    { id: 5, name: 'External SSD', price: '$150', stock: 25, image: 'https://via.placeholder.com/150/6c757d/FFFFFF?text=Product+5' },
    { id: 6, name: 'Webcam 1080p', price: '$65', stock: 95, image: 'https://via.placeholder.com/150/17a2b8/FFFFFF?text=Product+6' },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Products</h1>
      <p className="page-subtitle">Manage your product catalog and inventory.</p>

      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-stock">In Stock: <span className={product.stock > 20 ? 'stock-high' : 'stock-low'}>{product.stock}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;