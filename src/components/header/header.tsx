import Link from "next/link"
import Button from "../buttons/button"

export default function Header() {
    return (
        <div className="flex items-center justify-between bg-gray-900 text-white px-6 py-4 shadow-lg">
            <Link href="/">
                <h1 className="text-2xl font-bold text-center">TÍTULO</h1>
            </Link>

            <div className="space-x-4 flex">
                <Link href="/login">
                    <Button label="Entrar" />
                </Link>

                <Link href="/register">
                    <Button label="Cadastrar" />
                </Link>
            </div>
        </div>
    )
}