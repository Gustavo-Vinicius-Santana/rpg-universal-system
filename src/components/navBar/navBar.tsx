import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-lg font-bold">Menu</h1>
            <ul className="mt-4 space-y-2">
                <li className="hover:bg-gray-700 p-2 rounded">
                    <Link href="/user">seus personagens</Link>
                </li>
                <li className="hover:bg-gray-700 p-2 rounded">
                    <Link href="/user/sheet/create">criar personagem</Link>
                </li>
                <li className="hover:bg-gray-700 p-2 rounded">
                    <Link href="/user/configuration">configurações</Link>
                </li>
            </ul>
        </div>
    );
}