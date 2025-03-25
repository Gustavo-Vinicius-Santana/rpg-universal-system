import Button from "@/components/buttons/button";
import InputText from "@/components/inputs/inputText";


export default function Page() {

    return(
        <div className="flex flex-col items-center p-6">
            <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-white text-center mb-6"> Criação de ficha do D&D</h1>

                <div className="flex flex-row w-full justify-around mb-6">
                    <div className="w-1/5">
                        <InputText label="nome" placeholder="nomde do personagem" />
                    </div>

                    <div className="w-1/5">
                        <InputText label="nivel" placeholder="nivel do personagem" />
                    </div>

                    <div className="w-1/5">
                        <InputText label="classe" placeholder="classe do personagem" />
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-1/5">
                        <Button label="Salvar" />
                    </div>
                </div>
            </div>
        </div>
    )
}