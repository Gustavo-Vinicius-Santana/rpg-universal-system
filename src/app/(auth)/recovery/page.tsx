import Link from "next/link";
import InputText from "@/components/inputs/inputText";
import ButtonForm from "@/components/buttons/buttonForm";

export default function Page() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-96">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-100">Recuperar a senha</h1>

                <div className="mb-4">
                    <InputText label="Email" placeholder="Digite seu email" />
                </div>

                <Link href="/login">
                    <ButtonForm label="recuperar senha" />
                </Link>
            </div>
        </div>
    );
}