// Sum of all the dishes avaible
const allDishes = [
    { dish: 'Margherita Pizza', description: 'Classic pizza with fresh tomato sauce and mozzarella cheese.', ingredients: 'Tomato, Mozzarella, Basil, Olive Oil', price: 12.99, restaurant: 'Deli Italia' },
    { dish: 'Pasta Carbonara', description: 'Creamy pasta with pancetta, egg, and parmesan cheese.', ingredients: 'Pasta, Pancetta, Egg, Parmesan', price: 13.99, restaurant: 'Deli Italia' },
    { dish: 'Lasagna', description: 'Layered pasta with meat sauce, ricotta, and mozzarella.', ingredients: 'Pasta, Meat Sauce, Ricotta, Mozzarella', price: 14.99, restaurant: 'Deli Italia' },
    { dish: 'Risotto', description: 'Creamy rice dish with parmesan and mushrooms.', ingredients: 'Rice, Mushrooms, Parmesan, Butter', price: 11.99, restaurant: 'Deli Italia' },
    { dish: 'Tiramisu', description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.', ingredients: 'Ladyfingers, Coffee, Mascarpone, Cocoa', price: 6.99, restaurant: 'Deli Italia' },
    { dish: 'Caprese Salad', description: 'Fresh salad with tomatoes, mozzarella, and basil.', ingredients: 'Tomatoes, Mozzarella, Basil, Olive Oil', price: 8.99, restaurant: 'Deli Italia' },
    { dish: 'Bruschetta', description: 'Grilled bread with tomatoes, garlic, and olive oil.', ingredients: 'Bread, Tomatoes, Garlic, Olive Oil', price: 5.99, restaurant: 'Deli Italia' },
    { dish: 'Calzone', description: 'Folded pizza with cheese, ham, and tomato sauce.', ingredients: 'Dough, Cheese, Ham, Tomato Sauce', price: 9.99, restaurant: 'Deli Italia' },
    { dish: 'Gnocchi', description: 'Potato dumplings served with pesto sauce.', ingredients: 'Potatoes, Flour, Pesto', price: 10.99, restaurant: 'Deli Italia' },
    { dish: 'Cannoli', description: 'Crispy pastry filled with sweet ricotta cream.', ingredients: 'Pastry Shell, Ricotta, Sugar, Chocolate', price: 5.99, restaurant: 'Deli Italia' },

    { dish: 'Classic Burger', description: 'Beef patty with lettuce, tomato, and cheese.', ingredients: 'Beef, Lettuce, Tomato, Cheese, Bun', price: 10.99, restaurant: 'Burger Mansion' },
    { dish: 'Cheeseburger', description: 'Juicy burger topped with cheddar cheese.', ingredients: 'Beef, Cheddar Cheese, Lettuce, Tomato, Bun', price: 11.99, restaurant: 'Burger Mansion' },
    { dish: 'Bacon Burger', description: 'Burger with crispy bacon and BBQ sauce.', ingredients: 'Beef, Bacon, BBQ Sauce, Lettuce, Tomato, Bun', price: 12.99, restaurant: 'Burger Mansion' },
    { dish: 'Veggie Burger', description: 'Plant-based burger with avocado and spinach.', ingredients: 'Plant-Based Patty, Avocado, Spinach, Bun', price: 9.99, restaurant: 'Burger Mansion' },
    { dish: 'Chicken Sandwich', description: 'Grilled chicken with honey mustard sauce.', ingredients: 'Chicken, Honey Mustard, Lettuce, Tomato, Bun', price: 10.99, restaurant: 'Burger Mansion' },
    { dish: 'Fries', description: 'Crispy golden fries served with ketchup.', ingredients: 'Potatoes, Oil, Salt', price: 4.99, restaurant: 'Burger Mansion' },
    { dish: 'Onion Rings', description: 'Battered and fried onion rings.', ingredients: 'Onions, Batter, Oil', price: 5.99, restaurant: 'Burger Mansion' },
    { dish: 'BBQ Burger', description: 'Burger with BBQ sauce, onion rings, and cheese.', ingredients: 'Beef, BBQ Sauce, Onion Rings, Cheese, Bun', price: 13.99, restaurant: 'Burger Mansion' },
    { dish: 'Double Cheeseburger', description: 'Two beef patties with cheddar cheese.', ingredients: 'Beef, Cheddar Cheese, Lettuce, Tomato, Bun', price: 14.99, restaurant: 'Burger Mansion' },
    { dish: 'Milkshake', description: 'Creamy milkshake available in chocolate, vanilla, or strawberry.', ingredients: 'Milk, Ice Cream, Flavoring', price: 5.99, restaurant: 'Burger Mansion' },

    { dish: 'Pad Thai', description: 'Stir-fried noodles with shrimp and peanuts.', ingredients: 'Rice Noodles, Shrimp, Peanuts, Tamarind Sauce', price: 11.99, restaurant: 'Thai Boat' },
    { dish: 'Green Curry', description: 'Spicy coconut curry with chicken and vegetables.', ingredients: 'Coconut Milk, Chicken, Vegetables, Green Curry Paste', price: 12.99, restaurant: 'Thai Boat' },
    { dish: 'Tom Yum Soup', description: 'Hot and sour soup with shrimp and lemongrass.', ingredients: 'Shrimp, Lemongrass, Lime, Chili', price: 9.99, restaurant: 'Thai Boat' },
    { dish: 'Massaman Curry', description: 'Mild curry with beef, potatoes, and peanuts.', ingredients: 'Beef, Potatoes, Peanuts, Massaman Curry Paste', price: 13.99, restaurant: 'Thai Boat' },
    { dish: 'Papaya Salad', description: 'Fresh salad with shredded papaya and lime dressing.', ingredients: 'Papaya, Lime, Chili, Peanuts', price: 8.99, restaurant: 'Thai Boat' },
    { dish: 'Mango Sticky Rice', description: 'Sweet sticky rice with fresh mango slices.', ingredients: 'Sticky Rice, Mango, Coconut Milk', price: 6.99, restaurant: 'Thai Boat' },
    { dish: 'Fried Rice', description: 'Thai-style fried rice with chicken and vegetables.', ingredients: 'Rice, Chicken, Vegetables, Soy Sauce', price: 10.99, restaurant: 'Thai Boat' },
    { dish: 'Spring Rolls', description: 'Crispy rolls filled with vegetables and glass noodles.', ingredients: 'Vegetables, Glass Noodles, Wrapper', price: 5.99, restaurant: 'Thai Boat' },
    { dish: 'Thai Iced Tea', description: 'Sweetened iced tea with condensed milk.', ingredients: 'Tea, Condensed Milk, Ice', price: 4.99, restaurant: 'Thai Boat' },
    { dish: 'Chicken Satay', description: 'Grilled chicken skewers with peanut sauce.', ingredients: 'Chicken, Peanut Sauce, Spices', price: 8.99, restaurant: 'Thai Boat' },

    { dish: 'Butter Chicken', description: 'Creamy chicken curry with tomato-based sauce.', ingredients: 'Chicken, Butter, Tomato, Spices', price: 12.99, restaurant: 'Indian Garden' },
    { dish: 'Tandoori Chicken', description: 'Spicy grilled chicken marinated in yogurt and spices.', ingredients: 'Chicken, Yogurt, Spices', price: 11.99, restaurant: 'Indian Garden' },
    { dish: 'Paneer Tikka', description: 'Grilled paneer with spices and vegetables.', ingredients: 'Paneer, Vegetables, Spices', price: 10.99, restaurant: 'Indian Garden' },
    { dish: 'Chana Masala', description: 'Chickpeas cooked in a spicy tomato-based sauce.', ingredients: 'Chickpeas, Tomato, Spices', price: 9.99, restaurant: 'Indian Garden' },
    { dish: 'Biryani', description: 'Aromatic rice dish with chicken or vegetables.', ingredients: 'Rice, Chicken, Spices, Vegetables', price: 13.99, restaurant: 'Indian Garden' },
    { dish: 'Naan Bread', description: 'Soft Indian bread baked in a tandoor.', ingredients: 'Flour, Yogurt, Yeast', price: 2.99, restaurant: 'Indian Garden' },
    { dish: 'Samosas', description: 'Crispy pastries filled with potatoes and peas.', ingredients: 'Potatoes, Peas, Spices, Wrapper', price: 5.99, restaurant: 'Indian Garden' },
    { dish: 'Dal Tadka', description: 'Lentils cooked with spices and tempered with ghee.', ingredients: 'Lentils, Spices, Ghee', price: 8.99, restaurant: 'Indian Garden' },
    { dish: 'Rogan Josh', description: 'Slow-cooked lamb curry with aromatic spices.', ingredients: 'Lamb, Spices, Tomato', price: 14.99, restaurant: 'Indian Garden' },
    { dish: 'Gulab Jamun', description: 'Sweet dumplings soaked in rose syrup.', ingredients: 'Milk Solids, Sugar, Rose Water', price: 4.99, restaurant: 'Indian Garden' }
];
