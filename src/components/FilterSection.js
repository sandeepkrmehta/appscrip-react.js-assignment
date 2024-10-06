import React, { useState } from "react";
import styles from "../styles/productLayout.module.css";

const FilterSection = () => {
  const [showIdealForOptions, setShowIdealForOptions] = useState(false);

  const toggleIdealForOptions = () => setShowIdealForOptions(!showIdealForOptions);

  return (
    <div className={styles.container}>
      <div className={styles.filterSection}>

      <div>
        <label>
          <input type="checkbox" /> Customize
        </label>
      </div>

      <hr className={styles.thinLine} />
      
        <div className={styles.filterGroup}>
          <div className={styles.filterHeader}>
            <strong>Ideal For</strong>
            <span onClick={toggleIdealForOptions} className={styles.dropdownIcon}>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <p>All</p>
          {showIdealForOptions && (
            <div className={styles.dropdownOptions}>
              <p>Unselect All</p>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          )}
        </div>
        <hr className={styles.thinLine} />

        <div className={styles.filterGroup}>
          <div className={styles.filterHeader}>
            <strong>Ideal For</strong>
            <span onClick={toggleIdealForOptions} className={styles.dropdownIcon}>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <p>All</p>
          {showIdealForOptions && (
            <div className={styles.dropdownOptions}>
              <p>Unselect All</p>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          )}
        </div>
        <hr className={styles.thinLine} />

        <div className={styles.filterGroup}>
          <div className={styles.filterHeader}>
            <strong>Ideal For</strong>
            <span onClick={toggleIdealForOptions} className={styles.dropdownIcon}>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <p>All</p>
          {showIdealForOptions && (
            <div className={styles.dropdownOptions}>
              <p>Unselect All</p>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          )}
        </div>
        <hr className={styles.thinLine} />

        <div className={styles.filterGroup}>
          <div className={styles.filterHeader}>
            <strong>Ideal For</strong>
            <span onClick={toggleIdealForOptions} className={styles.dropdownIcon}>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <p>All</p>
          {showIdealForOptions && (
            <div className={styles.dropdownOptions}>
              <p>Unselect All</p>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          )}
        </div>
        <hr className={styles.thinLine} />

        <div className={styles.filterGroup}>
          <div className={styles.filterHeader}>
            <strong>Ideal For</strong>
            <span onClick={toggleIdealForOptions} className={styles.dropdownIcon}>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <p>All</p>
          {showIdealForOptions && (
            <div className={styles.dropdownOptions}>
              <p>Unselect All</p>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          )}
        </div>
        <hr className={styles.thinLine} />


        <div className={styles.filterGroup}>
          <div className={styles.filterHeader}>
            <strong>Ideal For</strong>
            <span onClick={toggleIdealForOptions} className={styles.dropdownIcon}>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <p>All</p>
          {showIdealForOptions && (
            <div className={styles.dropdownOptions}>
              <p>Unselect All</p>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          )}
        </div>
        <hr className={styles.thinLine} />


        <div className={styles.filterGroup}>
          <div className={styles.filterHeader}>
            <strong>Ideal For</strong>
            <span onClick={toggleIdealForOptions} className={styles.dropdownIcon}>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <p>All</p>
          {showIdealForOptions && (
            <div className={styles.dropdownOptions}>
              <p>Unselect All</p>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          )}
        </div>
        <hr className={styles.thinLine} />

        <div className={styles.filterGroup}>
          <div className={styles.filterHeader}>
            <strong>Ideal For</strong>
            <span onClick={toggleIdealForOptions} className={styles.dropdownIcon}>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <p>All</p>
          {showIdealForOptions && (
            <div className={styles.dropdownOptions}>
              <p>Unselect All</p>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          )}
        </div>
        {/* Add other filter options here */}
      </div>
      
      
    </div>
  );
};

export default FilterSection;
