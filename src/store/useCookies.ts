'use server'

import { cookies } from "next/headers"

export async function getCookie(name: string) {
    const cookieStore = await cookies();
    return cookieStore.get(name);
}

export async function setCookie(name: string, value: string) {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 50); 

    const cookieStore = await cookies();
    cookieStore.set(name, value,{ expires });
}

export async function deleteCookie(name: string) {
    const cookieStore = await cookies();
    cookieStore.set(name, '', { expires: new Date(0) });
}