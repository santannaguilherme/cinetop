export interface Usuario {
    id:number,
    email:string,
    nome:string,
    sobrenome:string,
    senha:string,
    foto:string,
    favoritos:number[],
    administrador:boolean,
}
