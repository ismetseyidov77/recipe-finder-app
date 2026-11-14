import React from "react"
import Button from "../ui/Button"
import Description from "../ui/Description"
import BenefitsCard from "./BenefitsCard"

// import salad image 
import salad1 from "../../assets/benefits/mung-bean-salad.png"
import salad2 from "../../assets/benefits/pasta-salad.png"
import salad3 from "../../assets/benefits/tuna-salad.png"
import salad4 from "../../assets/benefits/caesar-salad.png"

const benefitsData = [{
    id: 1,
    image: salad1,
    title: "Mung bean Salad",
    description: "Reduce Chronic Disease Risk"
}, {
    id: 2,
    image: salad2,
    title: "Pasta Salad",
    description: "Protects against cancer"
}, {
    id: 3,
    image: salad3,
    title: "Tuna Salad",
    description: "Helps with Blood Pressure"
}, {
    id: 4,
    image: salad4,
    title: "Caesar Salad",
    description: "Boosts Immunity System"
}]

function Benefits() {
    return (
        // Benefits side 
        <article className="w-full bg-white-smoke p-4 md:p-7 lg:p-10">
            <div className="flex justify-between">
                <Description text="with benefits" />
                <Button text="See all" />
            </div>
            {/* benefits card side  */}
            <div className="grid grid-cols-1 mt-2 gap-4">
                {benefitsData.map((item) => (
                    <BenefitsCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </article>
    )
}

export default Benefits;