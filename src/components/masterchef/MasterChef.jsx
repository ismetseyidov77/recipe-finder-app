import React from "react";
import masterChefBanner from "../../assets/masterchef/mastercheff-banner.png"

function MasterCheff() {
    return (
        // master cheff background side 
        <div className="w-full px-4">
            <div style={{backgroundImage: `url(${masterChefBanner})`}} className="w-full h-32 bg-cover bg-center"></div>
        </div>
    )
}

export default MasterCheff;