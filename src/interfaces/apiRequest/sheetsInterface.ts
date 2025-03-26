export interface sheetCreateInterface {
    token: string,
    modelName: string,
    model_id: number,
    data: {
        person_name?: string,
        person_level?: number
    }
}

export interface getSheetByUserInterface {
    token: string
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