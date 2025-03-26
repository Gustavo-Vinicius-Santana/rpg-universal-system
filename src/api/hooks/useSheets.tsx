'use client'

import { useState } from 'react';
import { getSheetByUser } from "../services/sheetService";
import { sheetEdit } from '../services/sheetService';
import { sheetDelete } from '../services/sheetService';
import { createSheet } from '../services/sheetService';

import { sheetCreateInterface, getSheetByUserInterface, getSheetByIdInterface, sheetEditInterface, sheetDeleteInterface  } from "@/interfaces/apiRequest/sheetsInterface";

export default function useSheets() {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
    const [ data, setData ] = useState<any | null>(null);

    const handleGetSheets = async (token: getSheetByUserInterface) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await getSheetByUser(token); 
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
    }

    const handleEditSheet = async (editedSheet: sheetEditInterface) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await sheetEdit(editedSheet); 
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
    }

    const handleDeleteSheet = async (deletedSheet: sheetDeleteInterface) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await sheetDelete(deletedSheet); 
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
    }

    return { 
        isLoading, 
        error, 
        data, 
        handleGetSheets,
        handleEditSheet, 
        handleDeleteSheet 
    }
}