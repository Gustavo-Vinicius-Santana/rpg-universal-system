import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold">Menu</h1>
            <ul className="mt-4 space-y-2">
                <Link href="/user">
                    <li className="hover:bg-gray-700 p-2 rounded">
                        seus personagens
                    </li>

                </Link>

                <Link href="/user/sheet/create">
                    <li className="hover:bg-gray-700 p-2 rounded">
                        criar personagem
                    </li>
                </Link>

                <Link href="/user/configuration">
                    <li className="hover:bg-gray-700 p-2 rounded">
                        configurações
                    </li>
                </Link>

            </ul>
        </div>
    );
}