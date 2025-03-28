"use client"

import CardSheet from "@/components/cards/cardSheet";

import { use } from "react";

import { getSheetByUser } from "@/api/services/sheetService";

import { getSheetByUserInterface } from "@/interfaces/apiRequest/sheetsInterface";

export default function Page() {
    const token: string = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjMwYjIyMWFiNjU2MTdiY2Y4N2VlMGY4NDYyZjc0ZTM2NTIyY2EyZTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcnBnLXVuaXZlcnNhbC1zaGVldCIsImF1ZCI6InJwZy11bml2ZXJzYWwtc2hlZXQiLCJhdXRoX3RpbWUiOjE3NDMxMDQwMzksInVzZXJfaWQiOiI4d0U3Qm41ZzZSWkdzTEl5aGVlcHVLVEp2VEgyIiwic3ViIjoiOHdFN0JuNWc2UlpHc0xJeWhlZXB1S1RKdlRIMiIsImlhdCI6MTc0MzEwNDAzOSwiZXhwIjoxNzQzMTA3NjM5LCJlbWFpbCI6Imd1Z3V0dXJpc21vODc4NEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZ3VndXR1cmlzbW84Nzg0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.EUJK_UhdBr8-LBhaky5QNYNvNcuv8d70GbTzXeSu5P8wfIVVw9xXzfEpMdyEqc-pv3jUHzi6FeEL9dPzmqnFvLa7Oc7i-gQK4dywk7T9MhAUWun7kDsIMn96qN_edDzLjfTrdD_eVe-0KoLimWpoUse9qj9-SyxkGNOQxlR5CqEHdI8VGLmjp31yjEEY2ba45UQhHqpQK3_J_IodzFPgAevLzQkk8UCbU_KDKZ9_7MKLMgtmQKduMu0X5xlpAIpFAvyT7kcienjvYyMleoidSCJDKT_7FmopOXMXnBIaaRZv8yTXeCkF5dabcs91O0-UhMzrvK7HGdh00BrsCxhX5w";

    const dataToken: getSheetByUserInterface = {token: token};
    // const fichas = use(getSheetByUser(dataToken));
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