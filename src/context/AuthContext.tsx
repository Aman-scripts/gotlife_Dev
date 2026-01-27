import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
    id: string;
    name: string;
    email: string;
    phone?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
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

    const login = async (email: string, _password: string): Promise<boolean> => {
        // Simulate login - in production, this would call an API
        // For demo purposes, we'll just create a user with the email
        const mockUser: User = {
            id: Date.now().toString(),
            name: email.split("@")[0],
            email,
        };
        setUser(mockUser);
        return true;
    };

    const register = async (
        name: string,
        email: string,
        phone: string,
        _password: string
    ): Promise<boolean> => {
        // Simulate registration - in production, this would call an API
        const newUser: User = {
            id: Date.now().toString(),
            name,
            email,
            phone,
        };
        setUser(newUser);
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
