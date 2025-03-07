import React, { useState } from "react";
import "../Styles/CreateRecipe.css"; // External CSS

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "",
        procedure: "",
        servings: "",
        time: "",
    });

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Recipe Submitted:", recipe);
    //     alert("Recipe submitted successfully!");
    //     setRecipe({ name: "", ingredients: "", procedure: "", servings: "", time: "" });
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(
                "https://recipebackend-8ipd.onrender.com/recipes",
                { ...recipe },
                {
                    headers: { authorization: cookies.access_token },
                }
            );

            alert("Recipe Created");
            navigate("/");
            setRecipe({ name: "", ingredients: "", procedure: "", servings: "", time: "" });
        } catch (error) {
            console.error(error);
        }
    };


    return (

        <div className="recipe-container">
            <h2>Create a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>Recipe Name:</label>
                <input type="text" name="name" value={recipe.name} onChange={handleChange} required />

                <label>Ingredients:</label>
                <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required placeholder="List ingredients separated by commas"></textarea>

                <label>Procedure:</label>
                <textarea name="procedure" value={recipe.procedure} onChange={handleChange} required placeholder="Step-by-step procedure"></textarea>

                <label>Servings:</label>
                <input type="number" name="servings" value={recipe.servings} onChange={handleChange} required min="1" />

                <label>Time Required (minutes):</label>
                <input type="number" name="time" value={recipe.time} onChange={handleChange} required min="1" />

                <button type="submit">Submit Recipe</button>
            </form>
        </div>
    );
};

export default CreateRecipe;