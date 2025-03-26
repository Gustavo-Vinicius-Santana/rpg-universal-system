"use client";

import ButtonForm from "@/components/buttons/buttonForm";
import InputText from "@/components/inputs/inputText";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string
    level: string
    class: string
}


export default function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return(
        <div className="flex flex-col items-center p-6">
            <form className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl font-semibold text-white text-center mb-6"> Criação de ficha do D&D</h1>

                <div className="flex flex-row w-full justify-around mb-6">
                    <div className="w-1/5">
                        <InputText label="nome" placeholder="nomde do personagem" 
                        name="name" register={register} error={errors.name} />
                    </div>

                    <div className="w-1/5">
                        <InputText label="nivel" placeholder="nivel do personagem" 
                        name="level" register={register} error={errors.level} />
                    </div>

                    <div className="w-1/5">
                        <InputText label="classe" placeholder="classe do personagem" 
                        name="class" register={register} error={errors.class} />
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-1/5">
                        <ButtonForm label="Salvar" />
                    </div>
                </div>
            </form>
        </div>
    )
}