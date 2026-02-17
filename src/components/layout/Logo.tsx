import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export const Logo = ({ className = "", showTextOnMobile = false }: { className?: string, showTextOnMobile?: boolean }) => {
    return (
        <Link
            to="/"
            className={`flex items-center transition-all duration-300 hover:opacity-80 group ${className}`}
        >
            <div className="relative flex items-center justify-center">
                <img
                    src={logo}
                    alt="GotLife Logo"
                    className="w-20 h-20 md:w-28 md:h-28 object-contain transition-transform duration-500 group-hover:scale-110"
                />
            </div>
        </Link>
    );
};
