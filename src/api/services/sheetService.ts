import { API } from "../api";

export const createSheet = async (token: string, newSheet: any) => {
    try{
        const response = await fetch(`${API}/sheet`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({newSheet}),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getSheetByUser = async (token: string) => {
    try{
        const response = await fetch(`${API}/user/sheet`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error(error);
    }
}

export const getSheetById = async (token:string, id: number) => {
    try{
        const response = await fetch(`${API}/user/sheet/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error(error);
    }
}

export const sheetEdit = async (token: string, id: number, editedSheet: any) => {
    try{
        const response = await fetch(`${API}/sheet`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(editedSheet),
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error(error);
    }
}

export const sheetDelete = async (token: string, id: number) => {
    try{
        const response = await fetch(`${API}/sheet/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error(error);
    }
}