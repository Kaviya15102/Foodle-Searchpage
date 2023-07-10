import React, { useState } from "react";

const RestaurantSearch = () => {
  const [restaurantFilter, setRestaurantFilter] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Sample restaurant data
  const restaurants = [
    {
      name: "Restaurant A",
      location: "Location 1",
      menuItems: ["Item 1A", "Item 2A", "Item 3A"]
    },
    {
      name: "Restaurant B",
      location: "Location 2",
      menuItems: ["Item 1B", "Item 2B", "Item 3B"]
    },
    {
      name: "Restaurant C",
      location: "Location 1",
      menuItems: ["Item 1C", "Item 2C", "Item 3C"]
    },
  ];

  // Handle restaurant filter change
  const handleRestaurantFilterChange = (event) => {
    setRestaurantFilter(event.target.value);
  };

  // Handle restaurant selection
  const handleRestaurantSelection = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div>
      <h2>Restaurant Search</h2>

      {/* Restaurant filter */}
      <label>
        Restaurant:
        <input type="text" value={restaurantFilter} onChange={handleRestaurantFilterChange} />
      </label>

      {/* Display selected restaurant items */}
      {selectedRestaurant ? (
        <div>
          <h3>Selected Restaurant: {selectedRestaurant.name}</h3>
          <h4>Menu Items</h4>
          {selectedRestaurant.menuItems.length === 0 ? (
            <p>No menu items found.</p>
          ) : (
            <ul>
              {selectedRestaurant.menuItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>
          {/* Display filtered restaurants */}
          {restaurants
            .filter((restaurant) =>
              restaurant.name.toLowerCase().includes(restaurantFilter.toLowerCase())
            )
            .map((restaurant) => (
              <div key={restaurant.name} onClick={() => handleRestaurantSelection(restaurant)}>
                {restaurant.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantSearch;
