import React from "react";
import MasterChefBanner from "../../assets/masterchef/mastercheff-banner.png"

function MasterCheff() {
    return (
        // master cheff background side 
        <div className="flex justify-center items-center">
            <img className="w-100" src={MasterChefBanner} alt={MasterChefBanner} />
        </div>
    )
}

export default MasterCheff;