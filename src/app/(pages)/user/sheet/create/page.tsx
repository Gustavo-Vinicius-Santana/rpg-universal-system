import Link from "next/link";
import Button from "@/components/buttons/button";

export default function Page() {
    return (
        <div className="flex flex-col items-center min-h-screen p-6">
            <div className="w-full max-w-3xl bg-gray-900 p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-white text-center mb-6">ESCOLHA O SISTEMA</h1>

                {/* Botões */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Link href="/user/sheet/create/d&d">
                        <Button label="D&D" />
                    </Link>

                    <Link href="/user/sheet/create/gurps">
                        <Button label="Gurps" />
                    </Link>

                    <Link href="/user/sheet/create/ordem">
                        <Button label="Ordem" />
                    </Link>
                </div>
            </div>
        </div>
    );
}