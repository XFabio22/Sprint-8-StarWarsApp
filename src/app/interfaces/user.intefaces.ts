<<<<<<< HEAD
export interface Usuario{
    uid:string;
    name:string;
    // ok: boolean; 
    // email:        string;
    // password:     string;
    // first_name?:   string;
    // last_name?:    string;

}
export interface AuthResponse {
    ok:boolean;
    uid?: string;
    name?: string;
    token?: string;
    msg?:string
}
=======
export interface UsersLog{
    
    email:string;
    password:string;

}
export interface User {
    id?:          string;
    first_name?:   string;
    last_name?:    string;
    email:        string;
    password:     string;
}
>>>>>>> 5217c9885571325530ec8ce6a1401e720c44fac6
