import InputText from "@/components/inputs/inputText";

export default function Page() {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-white text-center mb-6">USUARIO</h1>

                <div className="flex flex-row justify-around w-full">
                    <div className="mb-4 w-1/3">
                        <InputText label="Primeiro nome" placeholder="primeiro nome" />
                    </div>

                    <div className="mb-6 w-1/3">
                        <InputText label="Segundo nome" placeholder="segundo nome" />
                    </div>
                </div>

                <div className="flex flex-row justify-around w-full">
                    <div className="mb-6 w-1/3">
                        <InputText label="Email" placeholder="email" />
                    </div>
                </div>
                
            </div>
        </div>
    );

}