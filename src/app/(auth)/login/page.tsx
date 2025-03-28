"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import InputPassword from "@/components/inputs/inputPassword";
import InputText from "@/components/inputs/inputText";
import ButtonForm from "@/components/buttons/buttonForm";

import { useForm, SubmitHandler } from "react-hook-form";

import { LoginInterface } from "@/interfaces/apiRequest/authIterfaces";

import useAuth from "@/api/hooks/useAuth";
import { useRouter } from 'next/navigation';

type Inputs = {
    email: string
    password: string
}

export default function Page() {
    const router = useRouter();

    const{ login, isLoading } = useAuth();

    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (dataInputs) => {
        console.log(dataInputs)

        const userToLogin: LoginInterface = {
            email: dataInputs.email,
            password: dataInputs.password
        }

        const dadosResponse = await login(userToLogin);
        if (dadosResponse.error){
            console.log('erro no login:', dadosResponse.error);
        } else {
            console.log('response da api:', dadosResponse);
            router.push("/user")
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <form className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-100">Login</h1>
                
                <div className="mb-4">
                    <InputText label="Email" placeholder="Digite seu email" name="email" 
                    register={register} error={errors.email}/>
                </div>

                <div className="mb-6">
                    <InputPassword label="Senha" placeholder="Digite sua senha" name="password" 
                    register={register} error={errors.password}/>
                </div>
                
                <Link href="/recovery" className="w-full text-right text-gray-400 hover:text-gray-300">
                    <p className="mb-4">Esqueceu sua senha?</p>
                </Link>
                

                <ButtonForm label="Entrar" />
                {isLoading && <p>Carregando...</p>}
            </form>
        </div>
    );
}