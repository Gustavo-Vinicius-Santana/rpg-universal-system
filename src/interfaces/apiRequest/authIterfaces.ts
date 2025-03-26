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
    newEmail: string;
}

export interface ResetPasswordInterface {
    token: string;
    password: string;
}