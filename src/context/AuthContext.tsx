import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        password: string
    ) => Promise<boolean>;
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

        const mockUser: User = {
            id: Date.now().toString(),
            firstName: email.split("@")[0],
            lastName: "",
            email,
        };
        setUser(mockUser);
        return true;
    };

    const register = async (
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        _password: string
    ): Promise<boolean> => {
        const newUser: User = {
            id: Date.now().toString(),
            firstName,
            lastName,
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
