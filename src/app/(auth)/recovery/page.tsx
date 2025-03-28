"use client";

import Link from "next/link";
import InputText from "@/components/inputs/inputText";
import ButtonForm from "@/components/buttons/buttonForm";

import { useForm, SubmitHandler } from "react-hook-form";

import { ResetPasswordInterface } from "@/interfaces/apiRequest/authIterfaces";
import useAuth from "@/api/hooks/useAuth";

type Inputs = {
    email: string
}

export default function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const { resetPassword } = useAuth();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)

        const emailToReset: ResetPasswordInterface = {
            email: data.email
        }

        const dadosResponse = await resetPassword(emailToReset);
        if (dadosResponse.error) {
            console.log('erro no login:', dadosResponse.error);
        } else{
            console.log('response da api:', dadosResponse);
        }

    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <form className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96" 
            onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-100">Recuperar a senha</h1>

                <div className="mb-4">
                    <InputText label="Email" placeholder="Digite seu email" 
                    name="email" register={register} error={errors.email}/>
                </div>

                <ButtonForm label="recuperar senha" />

            </form>
        </div>
    );
}