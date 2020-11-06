// interface utilizada em produtos

export interface Produtos{
    idProd: number;
    titulo: string;
    subTitulo: string;
    descricao: string;
    preco: number;
    tipoProduto: string;
    img: Blob;
}
