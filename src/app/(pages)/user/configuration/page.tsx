"use client";

import { useState, useEffect } from "react";

import InputText from "@/components/inputs/inputText";
import ButtonForm from "@/components/buttons/buttonForm";

import useAuthStore from "@/store/useAuthStore";
import useUser from "@/api/hooks/useUser";
import { interfaceToken, interfaceEditUser } from "@/interfaces/apiRequest/userInterfaces";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    firstName: string
    secondName: string
    email: string
}

export default function Page() {
    const tokenState = useAuthStore((state) => state.tokenState);
    const { getuser, editUser, isLoading} = useUser();

    const { register, handleSubmit, setValue, formState: { errors },  } = useForm<Inputs>({
        defaultValues: {
            firstName: "",
            secondName: "",
            email: "",
        }
    });

    const [ userData, setUserData] = useState<any>(null);

    useEffect(() => {
        if (!tokenState) return;

        const fetchUserData = async () => {
            try {
                const dataToken: interfaceToken = { token: tokenState };
                const response = await getuser(dataToken);
                setUserData(response.user);
                setValue("firstName", response.user.first_name);
                setValue("secondName", response.user.last_name);
                setValue("email", response.user.email);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }

        fetchUserData();
    }, [tokenState]);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)

        const editedUser: interfaceEditUser = { token: tokenState, first_name: data.firstName, last_name: data.secondName };
        try {
            const response = await editUser(editedUser);
            console.log(response);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    
    return (
        <div className="flex justify-center">
            <form className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl font-semibold text-white text-center mb-6">USUARIO</h1>

                <div className="flex flex-row justify-around w-full">
                    <div className="mb-4 w-1/3">
                        <InputText label="Primeiro nome" placeholder="primeiro nome" 
                        name="firstName" register={register} error={errors.firstName} />
                    </div>

                    <div className="mb-6 w-1/3">
                        <InputText label="Segundo nome" placeholder="segundo nome" 
                        name="secondName" register={register} error={errors.secondName} />
                    </div>
                </div>

                <div className="flex flex-row justify-around w-full">
                    <div className="mb-6 w-1/3">
                        <InputText label="Email" placeholder="email"
                        name="email" register={register} error={errors.email}  />
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="w-1/3">
                        <ButtonForm label="Editar" />
                    </div>
                </div>
                {isLoading && <p>Carregando...</p>}
            </form>
        </div>
    );

}