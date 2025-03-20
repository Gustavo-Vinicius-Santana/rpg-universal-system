import Link from "next/link"

export default function Header() {
    return (
        <div className="flex items-center justify-between bg-gray-800 text-white px-6 py-4 shadow-lg">
            <Link href="/">
                <h1 className="text-2xl font-bold text-center">TÍTULO</h1>
            </Link>

            <div className="space-x-4">
                <Link href="/login">
                    <button className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-gray-800 transition">
                        Entrar
                    </button>
                </Link>

                <Link href="/register">
                    <button className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-lg hover:bg-yellow-500 transition">
                        Cadastrar
                    </button>
                </Link>
            </div>
        </div>
    )
}