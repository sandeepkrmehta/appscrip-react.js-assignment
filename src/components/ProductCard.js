import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import styles from '../styles/productLayout.module.css';
// import styles from '../styles/styles.module.css';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={200} 
                    height={200} 
                />
            </div>
            <div className={styles.titleWithIcon}>
                <h3 className={styles.productTitle}>{product.name}</h3>
            </div>
            <div className={styles.descriptionWithIcon}>
                <p className={styles.productDescription}>{product.description}</p>
                <FontAwesomeIcon 
                    icon={product.isFavorited ? solidHeart : regularHeart} 
                    className={product.isFavorited ? styles.favorited : styles.notFavorited}
                />
            </div>
        </div>
    );
};

export default ProductCard;
