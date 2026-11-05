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
        }
    ])

    // Clone card food 
    const clonedRecipes = [
        ...recipesData,
        recipesData[0],
        recipesData[1],
        recipesData[0]
    ]

    return (
        <main className="w-full bg-white p-4 font-main md:p-7 lg:p-10">
            <div className="flex flex-col">
                <h1 className="text-secondary font-bold text-xxs">Healthy Recipes</h1>
            </div>
            <div className="flex justify-between">
                <p className="text-primary font-semibold text-xs">with features</p>
                <button type="button" className="text-quick-silver text-sm cursor-pointer">See all</button>
            </div>

            {/* food card layout side  */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 items-stretch mt-2">
                {clonedRecipes.map((recipe, index) => (
                    <div
                        key={`${recipe.id}-${index}`}
                        className={`
                            ${index >= 2 ? "hidden md:block" : "block"}
                            ${index >= 3 ? "md:hidden lg:block" : ""}
                        `}
                    >
                        <RecipeCard
                            key={recipe.id}
                            image={recipe.image}
                            title={recipe.title}
                            category={recipe.category}
                            rating={recipe.rating}
                        />
                    </div>
                ))}
            </div>

        </main>
    )
}

export default HealthyRecipes;