import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { authApi } from "@/lib/api";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    register: (
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        password: string
    ) => Promise<{ success: boolean; message: string }>;
    login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
    verifyOtp: (email: string, otp: string) => Promise<{ success: boolean; message: string }>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(() => {
        const savedUser = localStorage.getItem("gotlife-user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("gotlife-user", JSON.stringify(user));
        } else {
            localStorage.removeItem("gotlife-user");
        }
    }, [user]);

    const register = async (
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        password: string
    ): Promise<{ success: boolean; message: string }> => {
        try {
            const res = await authApi.register({
                firstName,
                lastName,
                email,
                password,
                phoneNumber: phone,
            });
            return { success: true, message: res.data.message };
        } catch (err: any) {
            const message =
                err.response?.data?.message || "Something went wrong. Please try again.";
            return { success: false, message };
        }
    };

    const login = async (
        email: string,
        password: string
    ): Promise<{ success: boolean; message: string }> => {
        try {
            const res = await authApi.login({ email, password });
            return { success: true, message: res.data.message };
        } catch (err: any) {
            const message =
                err.response?.data?.message || "Invalid email or password.";
            return { success: false, message };
        }
    };

    const verifyOtp = async (
        email: string,
        otp: string
    ): Promise<{ success: boolean; message: string }> => {
        try {
            const res = await authApi.verify({ email, otp });
            const { token, user: userData } = res.data.data!;

            localStorage.setItem("gotlife-token", token);

            const loggedInUser: User = {
                id: userData._id,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                role: userData.role,
            };
            setUser(loggedInUser);
            return { success: true, message: "Verified successfully" };
        } catch (err: any) {
            const message =
                err.response?.data?.message || "OTP verification failed.";
            return { success: false, message };
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("gotlife-token");
        localStorage.removeItem("gotlife-user");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                register,
                login,
                verifyOtp,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
