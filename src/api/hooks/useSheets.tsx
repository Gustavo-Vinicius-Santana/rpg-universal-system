'use client'

import { useState } from 'react';
import { getSheetByUser } from "../services/sheetService";
import { sheetEdit } from '../services/sheetService';
import { sheetDelete } from '../services/sheetService';
import { createSheet } from '../services/sheetService';

export default function useSheets() {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<string | null>(null);
    const [ data, setData ] = useState<any | null>(null);

    const handleGetSheets = async (token: string) => {
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

    const handleEditSheet = async (token: string, editedSheet: any) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await sheetEdit(token, editedSheet.id, editedSheet); 
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

    const handleDeleteSheet = async (token: string, sheetId: number) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await sheetDelete(token, sheetId); 
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