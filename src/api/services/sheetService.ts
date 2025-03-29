import { API } from "../api";

import { sheetCreateInterface, getSheetByUserInterface, getSheetByIdInterface, sheetEditInterface, sheetDeleteInterface  } from "@/interfaces/apiRequest/sheetsInterface";

export const createSheet = async (newSheet: sheetCreateInterface) => {
    try{
        const response = await fetch(`${API}/sheet`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${newSheet.token}`,
            },
            body: JSON.stringify(newSheet.data),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('erro da response do service', error);
    }
}

export const getSheetByUser = async (token: getSheetByUserInterface) => {
    try{
        const response = await fetch(`${API}/user/sheets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token.token}`,
            },
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error('erro da response do service', error);
    }
}

export const getSheetById = async (getSheetById: getSheetByIdInterface) => {
    try{
        const response = await fetch(`${API}/user/sheet/${getSheetById.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getSheetById.token}`,
            },
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error('erro da response do service', error);
    }
}

export const sheetEdit = async (editedSheet: sheetEditInterface) => {
    try{
        const response = await fetch(`${API}/sheet`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${editedSheet.token}`,
            },
            body: JSON.stringify(editedSheet.data),
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error('erro da response do service', error);
    }
}

export const sheetDelete = async (deletedSheet: sheetDeleteInterface) => {
    try{
        const response = await fetch(`${API}/sheet/${deletedSheet.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${deletedSheet.token}`,
            },
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error('erro da response do service', error);
    }
}