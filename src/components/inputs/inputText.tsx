"use client";

import { UseFormRegister } from "react-hook-form";

type Interface = {
    label: string, 
    placeholder: string,
    register: UseFormRegister<any>,
    name: string,
    error?: any,
    value?: string
}

export default function InputText({label, placeholder, register, name, error, value}: Interface) {
    return(
        <>
            <label htmlFor="text" className="block text-gray-300 mb-1">
                {label}
            </label>
            <input
                type="text"
                id="text"
                value={value}
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder={placeholder}
                {...register(name, { required: true })}
            />
            {error && <span className="text-red-500 text-sm">Esse campo é obrigatorio</span>}

        </>
    )
}