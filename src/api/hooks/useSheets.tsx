'use client'

import { useState } from 'react';
import { getSheetByUser } from "../services/sheetService";
import { sheetEdit } from '../services/sheetService';
import { sheetDelete } from '../services/sheetService';
import { createSheet } from '../services/sheetService';

import { sheetCreateInterface, getSheetByUserInterface, getSheetByIdInterface, sheetEditInterface, sheetDeleteInterface  } from "@/interfaces/apiRequest/sheetsInterface";

export default function useSheets() {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);

    const handleGetSheets = async (token: getSheetByUserInterface) => {
        setIsLoading(true);
        try {
            const response = await getSheetByUser(token); 
            if (response) {
                return response;
            } 
        } catch (error) {
            console.log('erro da response do hook', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleGetSheet = async (token: getSheetByIdInterface) => {
        setIsLoading(true);
        try {
            const response = await getSheetByUser(token); 
            if (response) {
                return response;
            } 
        } catch (error) {
            console.log('erro da response do hook', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleCreateSheet = async (newSheet: sheetCreateInterface) => {
        setIsLoading(true);
        try {
            const response = await createSheet(newSheet); 
            if (response) {
                return response;
            }
        } catch (error) {
            console.log('erro da response do hook', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleEditSheet = async (editedSheet: sheetEditInterface) => {
        setIsLoading(true);
        try {
            const response = await sheetEdit(editedSheet); 
            if (response) {
                return response;
            }
        } catch (error) {
            console.log('erro da response do hook', error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleDeleteSheet = async (deletedSheet: sheetDeleteInterface) => {
        setIsLoading(true);
        try {
            const response = await sheetDelete(deletedSheet); 
            if (response) {
                return response
            }
        } catch (error) {
            console.log('erro da response do hook', error);
        } finally {
            setIsLoading(false);
        }
    }

    return { 
        isLoading,
        handleGetSheets,
        handleEditSheet, 
        handleDeleteSheet,
        handleCreateSheet,
        handleGetSheet
    }
}