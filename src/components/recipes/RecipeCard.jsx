import React from "react";
import { Star } from 'lucide-react';

function RecipeCard({ image, title, rating, category }) {
    return (
        <section className="bg-white font-main flex flex-col p-2 h-full shadow-lg shadow-silver-500 rounded-xl min-w-0">

            {/* card img side  */}
            <div className="relative w-full h-40 mb-3 items-end justify-center flex-shrink-0">
                    <img
                        className="h-full w-auto object-contain"
                        src={image}
                        alt={title} />
            </div>

            {/* food title  */}
            <div>
                <h3 className="font-bold">{title}</h3>
            </div>

            {/* category and rating side  */}
            <div className="flex justify-between items-center">
                <span className="whitespace-nowrap text-sm text-quick-silver">{category}</span>
                <div className="flex justify-center items-center bg-primary w-9 h-4 rounded-lg">
                    <Star className="text-white" fill="white" size={12} strokeWidth={0.3} />
                    <span className="text-sm-rating text-white">{rating}</span>
                </div>
            </div>
        </section>
    )
}

export default RecipeCard;