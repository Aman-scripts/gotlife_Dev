import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <Link
            to="/"
            className={`flex items-center gap-4 transition-all duration-300 hover:opacity-80 group ${className}`}
        >
            <div className="relative flex items-center justify-center">
                <img
                    src={logo}
                    alt="GotLife Logo"
                    className="w-14 h-14 md:w-24 md:h-24 object-contain transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <span className="font-serif text-lg md:text-2xl tracking-[0.3em] uppercase hidden sm:block text-foreground antialiased font-medium">
                GotLife
            </span>
        </Link>
    );
};
