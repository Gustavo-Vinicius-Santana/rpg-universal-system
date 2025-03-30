export interface sheetCreateInterface {
    token: string | null,
    editedSheet: {
        model_name: string,
        model_id: number,
        data: {
            person_name?: string,
            person_level?: number,
            person_class?: string
        }
    }
}

export interface getSheetByUserInterface {
    token: string | null
}

export interface getSheetByIdInterface {
    token: string,
    id: number
}

export interface sheetEditInterface {
    token: string,
    id: number,
    data: {
        person_name?: string,
        person_level?: number
    }
}

export interface sheetDeleteInterface {
    token: string,
    id: number
}