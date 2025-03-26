'use client';

import { RegisterInterface, LoginInterface, ResetPasswordInterface, ResetEmailInterface } from "@/interfaces/apiRequest/authIterfaces";

import { useState } from 'react';
import { login } from "../services/authService";
import { register } from "../services/authService";
import { resetPassword } from "../services/authService";
import { resetEmail } from "../services/authService";

type UseLoginResponse = {
    isLoading: boolean;
    error: string | null;
    data: any | null;
    login: (email: string, password: string) => Promise<void>;
};

export default function useAuth() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any | null>(null);

    const handleLogin = async (loginData: LoginInterface) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await login(loginData); 
            console.log(response);
            if (response) {
                setData(response); 
            } else {
                setError('Falha na autenticação');
            }
        } catch (err) {
            setError('Erro ao fazer login. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async (newUser: RegisterInterface) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await register(newUser); 
            console.log(response);
            if (response) {
                setData(response); 
            } else {
                setError('Falha na autenticação');
            }
        } catch (err) {
            setError('Erro ao fazer login. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (newPassword: ResetPasswordInterface) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await resetPassword(newPassword); 
            console.log(response);
            if (response) {
                setData(response); 
            } else {
                setError('Falha na autenticação');
            }
        } catch (err) {
            setError('Erro ao fazer login. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetEmail = async (newEmail: ResetEmailInterface) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await resetEmail(newEmail); 
            console.log(response);
            if (response) {
                setData(response); 
            } else {
                setError('Falha na autenticação');
            }
        } catch (err) {
            setError('Erro ao fazer login. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    
    
    return {
        isLoading,
        error,
        data,
        login: handleLogin,
        register: handleRegister,
        resetPassword: handleResetPassword,
        resetEmail: handleResetEmail
    };
}