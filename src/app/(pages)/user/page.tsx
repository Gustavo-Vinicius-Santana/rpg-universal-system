import CardSheet from "@/components/cards/cardSheet";

export default function Page() {
    return (
        <div className="flex justify-center items-center flex-col w-full p-4">
            <div className="w-full max-w-6xl bg-gray-900 p-6 rounded-lg shadow-md">
                <h2 className="text-white text-xl font-semibold mb-6 text-center">Lista de Personagens</h2>

                <div className="mb-6 flex justify-center">
                    <button className="bg-blue-600 text-white px-6 py-2 font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
                        CRIAR PERSONAGEM
                    </button>
                </div>

                {/* Grid Responsivo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <CardSheet id={1} nome="Boromir" classe="guerreiro" nivel={1} sistema="D&D" />
                    <CardSheet id={2} nome="Gandalf" classe="mago" nivel={2} sistema="gurps" />
                    <CardSheet id={3} nome="Bilbo" classe="ladino" nivel={3} sistema="D&D" />
                    <CardSheet id={4} nome="Connan" classe="barbaro" nivel={4} sistema="ordem " />
                </div>
            </div>
        </div>
    );
}