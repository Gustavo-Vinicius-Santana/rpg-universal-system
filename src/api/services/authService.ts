import { API } from "../api";

import { RegisterInterface, LoginInterface, ResetPasswordInterface, ResetEmailInterface } from "@/interfaces/apiRequest/authIterfaces";

export const login = async (loginData: LoginInterface) => {
    try {
        const response = await fetch(`${API}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const register = async (newUser: RegisterInterface) => {
    try {
        const response = await fetch(`${API}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const resetEmail = async (newEmail: ResetEmailInterface) => {
    try {
        const response = await fetch(`${API}/change-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEmail),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const resetPassword = async (newPassword: ResetPasswordInterface) => {
    try {
        const response = await fetch(`${API}/change-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newPassword.token}`,
            },
            body: JSON.stringify(newPassword),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

