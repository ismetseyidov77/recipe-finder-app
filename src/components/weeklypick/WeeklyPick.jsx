import React from "react";
import { Heart } from "lucide-react";
import weeklyBg from '../../assets/weeklypick/weeklypick.png'

function WeeklyPick() {
    return (
        // background image side 
        <div className="w-full px-4">
            <div style={{ backgroundImage: `url(${weeklyBg})` }} className="bg-cover bg-center w-full h-93 relative p-10 rounded-2xl">
                <div className="flex justify-between items-center">
                    <button className="cursor-pointer"><Heart size={20} strokeWidth={1.5} className="text-white bg-secondary w-6 h-6" /></button>
                    <button className="bg-primary px-3 py-1 rounded-lg font-main text-white text-sm-spaced font-bold cursor-pointer">Start cook</button>
                </div>
                {/* text inform side  */}
                <div className="flex flex-col absolute top-54 gap-2">
                    <h3 className="text-3xl text-white font-semibold">Weekly pick</h3>
                    <p className="max-w-2xs text-white text-base font-light">This pumpkin cream soup
                        will warm up the feintest of hearts.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WeeklyPick;