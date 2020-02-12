export interface Filme {
    idFilme: number;
    titulo: string;
    ano: string;
    censura: string;
    duracao: string;
    genero: string[];
    trilha?:number[];
    diretor: string;
    elenco: string;
    sinopse: string;
    imagem: string;
}