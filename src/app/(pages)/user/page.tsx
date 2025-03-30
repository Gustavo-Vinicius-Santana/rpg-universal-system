"use client"

import CardSheet from "@/components/cards/cardSheet";

import { useEffect, useState } from "react";

import useSheets from "@/api/hooks/useSheets";

import { getSheetByUserInterface } from "@/interfaces/apiRequest/sheetsInterface";

import useAuthStore from "@/store/useAuthStore";

export default function Page() {
    const tokenState = useAuthStore((state) => state.tokenState);
    const { handleGetSheets, isLoading } = useSheets();

    const [ sheets, setSheets ] = useState<any>([]);
    
    useEffect(() => {
        if (!tokenState) return; // Se não houver token, não faz a chamada
    
        const fetchSheets = async () => {
            try {
                const dataToken: getSheetByUserInterface = { token: tokenState };
                const response = await handleGetSheets(dataToken);
                setSheets(response.sheets);
                console.log('Retorno das fichas da API:', response);
            } catch (error) {
                console.error('Error fetching sheets:', error);
            }
        };

        fetchSheets();
    }, [tokenState]);
    
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
                    {isLoading ? (
                        <p>Carregando...</p>
                    ) : (
                        sheets.map((sheet: any) => {
                            return (
                                <div key={sheet.id}>
                                    <CardSheet id={sheet.id} nome={sheet.data.person_name} classe={'mocado'} nivel={sheet.data.person_level} sistema={sheet.model_name} />
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    );
}