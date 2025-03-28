"use client";

import InputPassword from "@/components/inputs/inputPassword";
import InputText from "@/components/inputs/inputText";
import ButtonForm from "@/components/buttons/buttonForm";

import { useRouter } from 'next/navigation'

import { RegisterInterface } from "@/interfaces/apiRequest/authIterfaces";

import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "@/api/hooks/useAuth";

type Inputs = {
    firstName: string
    secondName: string
    email: string
    password: string
}

export default function Page() {
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const { registerUser, isLoading } = useAuth()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)

        const newUser: RegisterInterface = {
            first_name: data.firstName,
            last_name: data.secondName,
            type_acount: "user",
            email: data.email,
            password: data.password,
        };
        
        const dadosResponse = await registerUser(newUser)
        if(dadosResponse.error){
            console.log('erro no login:', dadosResponse.error);
        } else 
            console.log('response da api:', dadosResponse);{
            router.push("/login")
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <form className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96"
            onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-100">Registro</h1>

                <div className="mb-4">
                    <InputText label="primeiro nome" placeholder="Digite seu nome"
                    name="firstName" register={register} error={errors.firstName} />
                </div>

                <div className="mb-4">
                    <InputText label="segundo nome" placeholder="Digite seu nome"
                    name="secondName" register={register} error={errors.secondName} />
                </div>

                <div className="mb-4">
                    <InputText label="Email" placeholder="Digite seu email" 
                    name="email" register={register} error={errors.email} />
                </div>

                <div className="mb-6">
                    <InputPassword label="Senha" placeholder="Digite sua senha" 
                    name="password" register={register} error={errors.password} />
                </div>

                <ButtonForm label="Cadastrar" />
            </form>
        </div>
    );
}