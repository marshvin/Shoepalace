import React from 'react';
import { useState } from 'react';

const FilterSidebar = ({ 
  categories, 
  brands, 
  selectedCategories, 
  selectedBrands, 
  selectedPriceRange,
  onCategoryChange, 
  onBrandChange,
  onPriceChange 
}) => {
  const priceRanges = [
    { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-100', label: '$50 - $100', min: 50, max: 100 },
    { id: '100-200', label: '$100 - $200', min: 100, max: 200 },
    { id: 'over-200', label: 'Over $200', min: 200, max: Infinity }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-6">
      {/* Categories Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                id={`category-${category}`}
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`category-${category}`} className="ml-2 text-gray-700">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Brands Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <input
                type="checkbox"
                id={`brand-${brand}`}
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={(e) => onBrandChange(e.target.value)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`brand-${brand}`} className="ml-2 text-gray-700">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center">
              <input
                type="radio"
                id={range.id}
                name="price-range"
                checked={selectedPriceRange.min === range.min && selectedPriceRange.max === range.max}
                onChange={() => onPriceChange({ min: range.min, max: range.max })}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={range.id} className="ml-2 text-gray-700">
                {range.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => {
          onCategoryChange([]);
          onBrandChange([]);
          onPriceChange({ min: 0, max: Infinity });
        }}
        className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
