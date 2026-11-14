import React from "react";
import {Check} from "lucide-react"

function BenefitsCard(props) {
    return (
        // BenefitsCard side 
        <article className="w-full bg-white flex p-2 rounded-lg gap-3 shadow-lg">
            <div>
                <img src={props.image} alt={props.title} />
            </div>
            {/* card about side  */}
            <div className="flex flex-col justify-center items-start gap-1">
                <h3 className="text-secondary font-bold text-xs">{props.title}</h3>
                <p className="flex items-center gap-1 text-primary text-sm"><span className="w-3 h-3 inline-flex justify-center items-center border-1 border-primary rounded-full flex-0"><Check size={12} className="text-primary"/></span>{props.description}</p>
            </div>
        </article>
    )
}

export default BenefitsCard;