// pages/products.js
import React from 'react';
import styles from '../styles/products.module.css';

const Products = () => {
    const productList = [
        { id: 1, name: 'Product 1', description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', description: 'Description of Product 3' },
    ];

    return (
        <div className={styles.productContainer}>
            <h1>Our Products</h1>
            <div className={styles.productList}>
                {productList.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
