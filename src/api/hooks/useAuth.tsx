'use client';

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

    const handleLogin = async (email: string, password: string) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await login(email, password); 
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

    const handleRegister = async (email: string, password: string, type_acount: string, first_name: string, last_name: string) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await register(first_name, last_name, email, password, type_acount); 
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

    const handleResetPassword = async (token: string, password: string) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await resetPassword(token, password); 
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

    const handleResetEmail = async (email: string) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await resetEmail(email); 
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