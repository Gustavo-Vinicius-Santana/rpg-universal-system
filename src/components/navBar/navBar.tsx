import Link from "next/link";
import { BiSpreadsheet } from "react-icons/bi";
import { CiBoxList } from "react-icons/ci";
import { AiOutlineSetting } from "react-icons/ai";

export default function NavBar() {
    return (
        <div className="flex flex-col items-center">
            <ul className="mt-4 space-y-2">
                <Link href="/user" className="flex row items-center hover:bg-gray-700 p-2 rounded gap-2">
                    <CiBoxList  size={26}/>
                    <li>
                        seus personagens
                    </li>

                </Link>

                <Link href="/user/sheet/create" className="flex row items-center hover:bg-gray-700 p-2 rounded gap-2">
                    <BiSpreadsheet size={26} />
                    <li>
                        criar personagem
                    </li>
                </Link>

                <Link href="/user/configuration" className="flex row items-center hover:bg-gray-700 p-2 rounded gap-2">
                    <AiOutlineSetting size={26} />
                    <li>
                        configurações
                    </li>
                </Link>

            </ul>
        </div>
    );
}