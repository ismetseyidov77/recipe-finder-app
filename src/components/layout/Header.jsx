import { Menu, Search, Heart, User } from "lucide-react";

function Header() {
    return (
        <header className="w-full bg-primary font-main p-4 flex flex-col md:p-7 md:flex-row md:justify-between md:items-center lg:p-10">
            <div className="flex justify-center items-center">
                {/* burger icon side  */}
                <button className="md:hidden">
                    <Menu className="cursor-pointer" />
                </button>
                {/* title  */}
                <div className="title text-center w-full">
                    <p className="text-xxs md:text-3xl"><span className="font-bold">Recipe</span> finder</p>
                </div>
            </div>

            {/* mobile responsive  */}
            <div className="mt-3 flex justify-center items-center md:hidden">
                <input type="search" className="w-full bg-white pl-8 placeholder-quick-silver text-sm font-main tracking-wider p-2 rounded-sm focus:outline-none" placeholder="Search recipes" />
                <div className="absolute left-6">
                    <Search className="w-5 h-5 text-quick-silver cursor-pointer" />
                </div>
            </div>

            {/* Tablet and Desktop responsive */}

            {/* icon side  */}
            <div className="hidden md:flex md:gap-8">
                <button className="text-white cursor-pointer">
                    <Search className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button className="text-white cursor-pointer">
                    <Heart className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button className="text-white cursor-pointer">
                    <User className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>

        </header>
    )
}

export default Header;