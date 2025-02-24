import React from "react";
import RecipeCard from "../components/RecipeCard"; // Import card component
import "./Recipe.css";

const recipes = [
    {
        id: 1,
        name: "Spaghetti Carbonara",
        image: "https://source.unsplash.com/400x300/?pasta",
        description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    },
    {
        id: 2,
        name: "Chicken Biryani",
        image: "https://source.unsplash.com/400x300/?biryani",
        description: "A flavorful and aromatic rice dish made with marinated chicken and spices.",
    },
    {
        id: 3,
        name: "Chocolate Cake",
        image: "https://source.unsplash.com/400x300/?cake",
        description: "A rich and moist chocolate cake topped with creamy chocolate frosting.",
    },
];

const Recipes = () => {
    return (
        <div className="recipe-container">
            <h2>Delicious Recipes 🍽️</h2>
            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        description={recipe.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Recipes;
