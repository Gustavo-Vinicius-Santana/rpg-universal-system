'use client'

import { useState } from 'react';
import { userGet } from "../services/userService";
import { userEdit } from '../services/userService';
import { userDelete } from '../services/userService';

import {  interfaceToken, interfaceEditUser } from "@/interfaces/apiRequest/userInterfaces";

export default function useUser() {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
    const [ data, setData ] = useState<any | null>(null);

    const handleGetUser = async (token: interfaceToken) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await userGet(token); 
            console.log(response);
            if (response) {
                setData(response); 
            } else {
                setError('Falha na autenticação');
            }
        } catch (err) {
            setError('Erro ao fazer login. Tente novamente');
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditUser = async (editedUser: interfaceEditUser) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await userEdit(editedUser); 
            console.log(response);
            if (response) {
                setData(response); 
            } else {
                setError('Falha na autenticação');
            }
        } catch (err) {
            setError('Erro ao fazer login. Tente novamente');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteUser = async (token: interfaceToken) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await userDelete(token); 
            console.log(response);
            if (response) {
                setData(response); 
            } else {
                setError('Falha na autenticação');
            }        
        } catch (err) {
            setError('Erro ao fazer login. Tente novamente');
        } finally {
            setIsLoading(false);
        }
    };

    return { 
        isLoading, 
        error, 
        data, 
        getuser: handleGetUser, 
        editUser: handleEditUser, 
        deleteUser: handleDeleteUser 
    };

}