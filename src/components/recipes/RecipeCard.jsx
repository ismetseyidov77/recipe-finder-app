import React from "react";
import { Star } from 'lucide-react';

function RecipeCard({ image, title, rating, category }) {
    return (
        <div className="bg-white font-main flex flex-col justify-center p-2">

            {/* card img side  */}
            <div className="relative w-full">
                <img
                    className="w-full h-52"
                    src={image}
                    alt={title} />
            </div>

            {/* food title  */}
            <div>
                <h3 className="font-bold">{title}</h3>
            </div>

            {/* category and rating side  */}
            <div className="flex gap-8 items-center"> 
                <span>{category}</span>
                <div className="flex gap-0.5 justify-center items-center bg-primary w-9 h-4 rounded-lg">
                    <Star className="text-white" fill="white" size={12} strokeWidth={0.3} />
                    <span className="text-sm-rating text-white">{rating}</span>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard;