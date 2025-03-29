'use client'

import { useState } from 'react';
import { userGet } from "../services/userService";
import { userEdit } from '../services/userService';
import { userDelete } from '../services/userService';

import {  interfaceToken, interfaceEditUser } from "@/interfaces/apiRequest/userInterfaces";

export default function useUser() {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const handleGetUser = async (token: interfaceToken) => {
        setIsLoading(true);
        try {
            const response = await userGet(token); 
            console.log(response);
            if (response) {
                return response; 
            } 
        } catch (erro) {
            console.log('erro da response do hook', erro);
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditUser = async (editedUser: interfaceEditUser) => {
        setIsLoading(true);

        try {
            const response = await userEdit(editedUser); 
            console.log(response);
            if (response) {
                return response;
            }
        } catch (erro) {
            console.log('erro da response do hook', erro);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteUser = async (token: interfaceToken) => {
        setIsLoading(true);
        try {
            const response = await userDelete(token); 
            console.log(response);
            if (response) {
                return response;
            }     
        } catch (erro) {
            console.log('erro da response do hook', erro);
        } finally {
            setIsLoading(false);
        }
    };

    return { 
        isLoading, 
        getuser: handleGetUser, 
        editUser: handleEditUser, 
        deleteUser: handleDeleteUser 
    };

}