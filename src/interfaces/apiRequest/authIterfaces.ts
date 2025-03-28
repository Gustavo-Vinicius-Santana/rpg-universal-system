export interface RegisterInterface {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    type_acount: string;
}

export interface LoginInterface {
    email: string;
    password: string;
}

export interface ResetEmailInterface {
    token: string;
    newEmail: string;
}

export interface ResetPasswordInterface {
    email: string;
}