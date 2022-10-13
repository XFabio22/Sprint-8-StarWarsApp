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