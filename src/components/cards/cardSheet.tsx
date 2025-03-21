
type Interface = {
    id : number,
    nome : string,
    classe : string,
    nivel : number,
    sistema : string,
}

export default function CardSheet({id, nome, classe, nivel, sistema}: Interface) {

    return(
        <div className="flex flex-col w-64 h-40 bg-gray-800 p-4 border-white border border-b-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            {/* Cabeçalho com nome e botão de edição */}
            <div className="flex flex-row justify-between items-center w-full mb-4 border-b border-gray-600 pb-2">
                <p className="flex-1 text-center text-white text-lg font-semibold">{nome}</p>
                <p>:</p>
            </div>

            {/* Informações do personagem */}
            <div className="flex flex-row justify-between w-full text-white">
                <div className="flex flex-col items-center flex-1">
                    <p className="text-gray-400 text-sm">CLASSE</p>
                    <p className="text-lg font-medium">{classe}</p>
                </div>

                <div className="flex flex-col items-center flex-1">
                    <p className="text-gray-400 text-sm">NÍVEL</p>
                    <p className="text-lg font-medium">{nivel}</p>
                </div>

                <div className="flex flex-col items-center flex-1">
                    <p className="text-gray-400 text-sm">SISTEMA</p>
                    <p className="text-lg font-medium">{sistema}</p>
                </div>
            </div>
        </div>
    )
}