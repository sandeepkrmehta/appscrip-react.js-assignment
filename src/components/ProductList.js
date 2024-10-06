import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/styles.module.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/data/product.json');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
                setError('Failed to load products.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleFilterChange = (selectedOccasion) => {
        if (selectedOccasion === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product =>
                product.occasion && product.occasion.includes(selectedOccasion)
            );
            setFilteredProducts(filtered);
        }
    };

    // Function to toggle favorite status of a product
    const toggleFavorite = (productId) => {
        const updatedProducts = products.map(product => 
            product.id === productId ? { ...product, isFavorited: !product.isFavorited } : product
        );
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts.filter(product => 
            product.occasion && product.occasion.includes(selectedOccasion) // Ensure filtered state is updated
        ));
    };

    return (
        <div className={styles.container}>
            {loading ? (
                <div>Loading products...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <div className={styles.productList}>
                    {filteredProducts.length === 0 ? (
                        <div>No products found.</div>
                    ) : (
                        filteredProducts.map((product) => (
                            <ProductCard 
                                key={product.id} 
                                product={product} 
                                toggleFavorite={toggleFavorite} // Pass function to ProductCard
                            />
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductList;
