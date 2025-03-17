import { API } from "../api";

export const userGet = async (token: string) => {
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

export const userEdit = async (token: string, editedUser: any) => {
    try{
        const response = await fetch(`${API}/user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(editedUser),
        });
        const data = await response.json();
        return data;
    }catch (error) {
        console.error(error);
    }
}

export const userDelete = async (token: string) => {
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