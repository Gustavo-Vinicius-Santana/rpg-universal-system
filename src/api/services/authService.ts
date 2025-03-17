import { API } from "../api";

export const login = async (email: string, password: string) => {
    try {
        const response = await fetch(`${API}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const register = async (first_name: string, last_name: string, email: string, password: string, type_acount: string) => {
    try {
        const response = await fetch(`${API}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ first_name, last_name, type_acount, email, password }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const resetEmail = async (email: string) => {
    try {
        const response = await fetch(`${API}/change-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const resetPassword = async (token: string, password: string) => {
    try {
        const response = await fetch(`${API}/change-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ password }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

