export interface Proprietario {
    id: number;
    cpf: string;
    nome: string;
    vencimento_cnh: string;
    categoria_cnh: string;
    veiculos: Veiculo[];
}

export interface Veiculo {
    id: number;
    placa: string;
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
    multas: Multa[];
}

export interface Multa {
    valor: number;
    data: string;
    pontos: number;
    tipo: string;
    placa_carro: string;
}


export const fulano: Proprietario = {
    id: 1,
    cpf: '12345678900',
    nome: 'Fulano',
    vencimento_cnh: '2025-12-15',
    categoria_cnh: 'AB',
    veiculos: [
        {
            id: 1,
            placa: 'ABC1234',
            marca: 'Toyota',
            modelo: 'Corolla',
            ano: 2020,
            cor: 'Preto',
            multas: [
                {
                    valor: 100.50,
                    data: '2024-07-14',
                    pontos: 5,
                    tipo: 'Leve',
                    placa_carro: 'ABC1234'
                }
            ]
        }
    ]
};
