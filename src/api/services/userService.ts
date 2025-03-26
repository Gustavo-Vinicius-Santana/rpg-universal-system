import { API } from "../api";

import {  interfaceToken, interfaceEditUser } from "@/interfaces/apiRequest/userInterfaces";

export const userGet = async (token: interfaceToken) => {
    try{
        const response = await fetch(`${API}/user`, {
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

export const userEdit = async (userEdit: interfaceEditUser) => {
    try{
        const response = await fetch(`${API}/user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userEdit.token}`,
            },
            body: JSON.stringify(userEdit),
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error(error);
    }
}

export const userDelete = async (token: interfaceToken) => {
    try{
        const response = await fetch(`${API}/user`, {
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