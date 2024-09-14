import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Adjust path if necessary
import './Banner.css'; // Ensure the path is correct



// CSS styles written in JS object format
const styles = {
    productListContainer: {
      textAlign: "center",
      padding: "20px", // Adding padding to give space around the component
    },
    buttonContainer: {
      marginBottom: "20px",
    },
    categoryButton: {
      padding: "10px 20px",
      margin: "0 10px",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ccc",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    activeButton: {
      padding: "10px 20px",
      margin: "0 10px",
      backgroundColor: "#eae6b1",
      border: "1px solid #ccc",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "5px",
    },
    productList: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
    productCard: {
      width: "250px",
      margin: "20px",
      textAlign: "center",
      border: "1px solid #eaeaea",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    onSaleText: {
      fontSize: "12px",
      color: "#8c8c8c",
      marginBottom: "10px",
      fontFamily: "Arial, sans-serif",
    },
    productImage: {
      width: "150px",
      height: "auto",
      marginBottom: "10px",
    },
    productName: {
      fontSize: "16px",
      marginBottom: "8px",
      fontFamily: "Arial, sans-serif",
    },
    productPrice: {
      marginBottom: "12px",
    },
    salePrice: {
      color: "#d9534f",
      fontWeight: "bold",
      fontSize: "18px",
    },
    originalPrice: {
      textDecoration: "line-through",
      color: "#8c8c8c",
      marginLeft: "8px",
    },
    quantityControls: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "10px",
    },
    quantityButton: {
      padding: "6px",
      backgroundColor: "#f0f0f0",
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
    },
    addToCartButton: {
      padding: "10px 20px",
      backgroundColor: "#eae6b1",
      border: "none",
      fontSize: "14px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  }
  

const ProductList = () => {
  const dailyFruits = [
    { id: 1, name: "Indian Orange - New Season (Per 500 Grams)", originalPrice: 95, salePrice: 70 },
    { id: 2, name: "Papaya (Per Piece 1.2 KG)", originalPrice: 155, salePrice: 120 },
    // ...other daily fruits
  ];

  const exoticVeggies = [
    { id: 3, name: "Indian Pomegranate (Per 2 Pcs 450-500 Grams)", originalPrice: 265, salePrice: 240 },
    { id: 4, name: "Washington Apple (Per 4 Pieces 700-800 Grams)", originalPrice: 325, salePrice: 295 },
    // ...other exotic veggies
  ];

  const [selectedCategory, setSelectedCategory] = useState("Daily Fruits");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const displayedProducts = selectedCategory === "Daily Fruits" ? dailyFruits : exoticVeggies;

  return (
    <div style={styles.productListContainer}>
      <div style={styles.buttonContainer}>
        <button
          style={selectedCategory === "Daily Fruits" ? styles.activeButton : styles.categoryButton}
          onClick={() => handleCategoryClick("Daily Fruits")}
        >
          Daily Fruits
        </button>
        <button
          style={selectedCategory === "Exotic Veggies" ? styles.activeButton : styles.categoryButton}
          onClick={() => handleCategoryClick("Exotic Veggies")}
        >
          Exotic Veggies
        </button>
      </div>
      <div style={styles.productList}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
