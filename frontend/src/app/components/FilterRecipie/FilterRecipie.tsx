"use client";
import React, { useState } from "react";
import {recipesData} from "./data/recipesData"

const FilterRecipe = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleSelectChange = (e) => {
    setSelectedItem(parseFloat(e.target.value));
  };

  const filteredData = recipesData.filter(
    (recipe) => recipe.rating >= selectedItem
  );

  const handleCartClick = () => {
    setCartCount((prev) => prev + 1);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          🍽️ <span>Recipe Explorer</span>
        </h1>

        {/* FILTER BAR */}
        <div className="flex items-center justify-between mb-6 mt-4">
          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium ">
              Filter by Rating:
            </label>
            <select
              value={selectedItem}
              onChange={handleSelectChange}
              className="border border-gray-300 rounded px-2 py-1 bg-white shadow-sm"
            >
              <option value={0}>All</option>
              <option value={4.1}>4.1+</option>
              <option value={4.3}>4.3+</option>
              <option value={4.5}>4.5+</option>
              <option value={4.7}>4.7+</option>
            </select>
          </div>

          {/* CART */}
          <div className="flex items-center gap-2">
            <span>🛒</span>
            <p>Cart Items: {cartCount}</p>
          </div>
        </div>

        {/* RECIPES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((data) => (
            <div
              key={data.id}
              className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <h2 className="text-sm font-medium bg-amber-200 px-3 py-1 rounded-full mb-2">
                {data.cuisine}
              </h2>
              <img
                src={data.image}
                alt={data.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {data.name}
              </h3>
              <p className="text-gray-600">
                ⭐ {data.rating} ({data.reviewCount} reviews)
              </p>
              <button
                onClick={handleCartClick}
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 mt-2 rounded-md"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No recipes found with the selected rating.
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterRecipe;
