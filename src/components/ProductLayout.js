import React, { useState } from "react";
import FilterSection from './FilterSection';
import ProductList from './ProductList';
import styles from "../styles/productLayout.module.css";
//  import styles from '../styles/styles.module.css';
import {  FaChevronDown } from 'react-icons/fa';


const ProductLayout = () => {
    const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Nulla volutpat felis a nibh fringilla, eu mollis eros viverra. Sed nec.";
    const [sortOption, setSortOption] = useState("NEWEST FIRST");
    const [showFilter, setShowFilter] = useState(true); // Default to true to show filters
    const [showSortOptions, setShowSortOptions] = useState(false); 

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const toggleSortOptions = () => {
        setShowSortOptions(!showSortOptions);
    };

    return (
        <div className={styles.productLayout}>
            <div className={styles.productSection}>
                <h1 className={styles.discoverOurProduct}>DISCOVER OUR PRODUCTS</h1>
                <p dangerouslySetInnerHTML={{ __html: loremText }} />
            </div>
            
            {/* Add horizontal line above productInfo */}
            <hr className={styles.thinLine} />

            <div className={styles.productInfo}>
                <div className={styles.itemsCount}>3425 ITEMS</div>
                <div className={styles.filterToggleContainer}>
                    <button className={styles.filterToggle} onClick={toggleFilter}>
                        {showFilter ? '< Hide Filter' : '< Show Filter'}
                    </button>
                </div>
                <div className={styles.recommendedContainer}>
                    {/* <button className={styles.recommendedButton} onClick={toggleSortOptions}> */}
                        Recommended
                        <FaChevronDown size={20} />
                    {/* </button> */}
                    {showSortOptions && (
                        <div className={styles.sortOptions}>
                            <select value={sortOption} onChange={handleSortChange}>
                                <option value="NEWEST FIRST">NEWEST FIRST</option>
                                <option value="POPULAR">POPULAR</option>
                                <option value="PRICE: HIGH TO LOW">PRICE: HIGH TO LOW</option>
                                <option value="PRICE: LOW TO HIGH">PRICE: LOW TO HIGH</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Add horizontal line below productInfo */}
            <hr className={styles.thinLine} />

            <div className={styles.mainContent}>
                <div className={`${styles.sidebar} ${showFilter ? styles.show : styles.hide}`}>
                    <FilterSection />
                </div>
                <div className={styles.productListWrapper}>
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default ProductLayout;
