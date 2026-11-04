import { useState } from "react";
import RecipeCard from "./RecipeCard";

import salad1 from "../../assets/recipes/ket-salad.png"
import salad2 from "../../assets/recipes/sewers-salad.png"

function HealthyRecipes() {
    const [recipesData, setRecipesData] = useState([
        {
            id: 1,
            title: "Keto Salad",
            category: "Beans & fruits",
            image: salad1,
            rating: "4.9"
        },
        {
            id: 2,
            title: "Sewers Salad",
            category: "Chicken & dal",
            image: salad2,
            rating: "4.5"
        },
        {
            id: 3,
            title: "Sewers Salad",
            category: "Chicken & dal",
            image: salad2,
            rating: "4.4"
        }
    ])

    return (
        <main className="w-full bg-white p-4 font-main">
            <div className="flex flex-col">
                <h1 className="text-secondary font-bold text-xxs">Healthy Recipes</h1>
            </div>
            <div className="flex justify-between">
                <p className="text-primary font-semibold text-xs">with features</p>
                <button type="button" className="text-quick-silver text-sm cursor-pointer">See all</button>
            </div>

            {/* food card layout side  */}

            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {recipesData.map((recipe) => (
                    <RecipeCard 
                        key={recipe.id}
                        image={recipe.image}
                        title={recipe.title}
                        category={recipe.category}
                        rating={recipe.rating}
                    />
                ))}
            </div>

        </main>
    )
}

export default HealthyRecipes;