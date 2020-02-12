export interface Usuario {
    idUsuario:number,
    email:string,
    nome:string,
    sobrenome:string,
    senha:string,
    imagem:string,
    favoritos:number[],
    administrador:boolean,    
    token?: string;
}
