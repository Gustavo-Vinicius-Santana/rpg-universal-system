'use client';

import { RegisterInterface, LoginInterface, ResetPasswordInterface, ResetEmailInterface } from "@/interfaces/apiRequest/authIterfaces";

import { useState } from 'react';
import { login, register, resetPassword, resetEmail } from "../services/authService";

type UseLoginResponse = {
    isLoading: boolean;
    error: string | null;
    data: any | null;
    login: (email: string, password: string) => Promise<void>;
};

export default function useAuth() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = async (loginData: LoginInterface) => {
        setIsLoading(true);
        try {
            const response = await login(loginData); 
            if (response) {
                return response;
            } 
        } catch (error) {
            console.log('erro da response do hook', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async (newUser: RegisterInterface) => {
        setIsLoading(true);
        try {
            const response = await register(newUser); 
            if (response) {
                return response
            }
        } catch (error) {
            console.log('erro da response do hook', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (newPassword: ResetPasswordInterface) => {
        setIsLoading(true);
        try {
            const response = await resetPassword(newPassword); 
            if (response) {
                return response
            }
        } catch (error) {
            console.log('erro da response do hook', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetEmail = async (newEmail: ResetEmailInterface) => {
        setIsLoading(true);
        try {
            const response = await resetEmail(newEmail); 
            if (response) {
                return response
            }
        } catch (error) {
            console.log('erro da response do hook', error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        login: handleLogin,
        registerUser: handleRegister,
        resetPassword: handleResetPassword,
        resetEmail: handleResetEmail
    };
}