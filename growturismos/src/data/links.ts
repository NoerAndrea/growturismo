//a lista de Links terá duas propriedades
export interface Links {
    url: string;
    text: string;
}

//precisamos tipar, neste caso não anonima: Link, porque estamos dando um nome.

export const listaLinks: Array<Links>=[
    {
        url:'https://www.growdev.com.br/programs/full-stack',
        text: '17ª Edição'
    }
]