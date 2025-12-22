"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check local storage for persisted user
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        const user = { name: "John Doe", avatar: "https://i.pravatar.cc/150?img=12", ...userData };
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
