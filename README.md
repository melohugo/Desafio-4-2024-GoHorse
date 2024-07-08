# Desafio 4 - Projeto final da capacitação

Vocês agora formarão um grupo com todos os membros do seu squad, e a partir de agora vocês irão trabalhar em equipe para a realização da última entrega. Será um projeto que precisará tanto de back-end quanto de front-end.

O Detran é um órgão do governo responsável por gerenciar os dados dos motoristas e veículos de um estado. Vocês foram contratados para desenvolver o backend e frontend de um sistema de controle de multas para o Detran. O sistema deve permitir o cadastro de motoristas e veículos, além de permitir o registro de multas para os veículos cadastrados. O sistema também deve permitir a consulta de motoristas, seus veículos e multas. O desenvolvedor frontend deve criar as páginas de solução do sistema [link](https://www.figma.com/design/x9Ps7EXhCDrlZ6iTm1wlfx/detran?node-id=0-1&m=dev), seguindo a API que será utilizada. Você deve implementar a API de acordo com a [documentação fornecida](./assets/documentação-api.md).

A arquitetura desse sistema deve ser baseada na arquitetura apresentada no curso. Caso você precise de mais informações das ferramentas utilizadas, você pode consultar a [documentação do Express](https://expressjs.com/), a [documentação do Zod](https://zod.dev/), a [documentação do Typescript](https://www.typescriptlang.org/docs/) e a [documentação do prisma](https://www.prisma.io/docs),

Caso surjam dúvidas, você pode utilizar o canal da capacitação no Slack, contatar algum membro do seu squad ou pedir ajuda.

Vocês irão escolher um membro do squad para realizar um fork deste repositório para a sua conta pessoal no GitHub e depois irão adicionar os membros do squad no projeto. A entrega só será considerada válida se estiver incluída em uma release no GitHub e também com versionamento de código do squad, onde todos os membros deverão realizar commits. Caso você ou qualquer membro do squad não saiba como realizar um fork, commit, push, branch e criar uma release no GitHub, será necessário pesquisar ou pedir ajuda. Além disso, vocês também poderão ver um tutorial de GitHub no YouTube da EngNet. A autonomia também será avaliada neste desafio.

## Requisitos Funcionais

- O Sistema deve ter as paginas de cadastro seguindo o exemplo do figma.
    - Uma página de cadastro do proprietário.
    - Uma pagina de cadastro do Veículo.
    - Uma página de cadastro da Multas.
    - Todas as paginas devem ter o formulário de cadastramento

- O sistema deve permitir o cadastro de motoristas.

  - Cada motorista deve ter:
    - CPF
    - nome
    - vencimento da CNH
    - categoria da CNH (A, B, AB)

- O sistema deve permitir o cadastro de veículos.

  - Cada veículo deve ter:
    - placa
    - marca
    - modelo
    - ano
    - cor
  - Cada veículo deve estar associado a um motorista.
  - Um motorista pode ter vários veículos, mas um veículo só pode estar associado a um motorista.

- O sistema deve permitir o cadastro de multas.

  - Cada multa deve ter:
    - valor
    - data
    - pontos de penalidade
    - tipo da infração
      - Velocidade acima da máxima permitida
      - Estacionar em local proibido
      - Dirigir utilizando o celular
      - Dirigir sob efeito de álcool
      - Não utilizar cinto de segurança
      - Avançar o sinal vermelho
  - Cada multa deve estar associada a um veículo.
  - Um veículo pode ter várias multas, mas uma multa só pode estar associada a um veículo.

- O sistema deve permitir a consulta de todos os motoristas cadastrados.

  - A consulta deve retornar uma lista de motoristas com todos os seus dados.

- O sistema deve permitir a consulta de todos os veículos de um motorista.

  - A consulta deve retornar uma lista de veículos com todos os seus dados.
  - Claro que o motorista deve ser informado na consulta.

- O sistema deve permitir a consulta de todas as multas atreladas a um motorista.

  - A consulta deve retornar uma lista de multas com todos os seus dados.
  - As multas devem estar associadas aos veículos dos motoristas, mas os dados dos veículos não precisam ser retornados na consulta.

- O sistema deve permitir a consulta da pontuação de um motorista quando este tiver 10 pontos ou mais.
  - A consulta deve retornar a quantidade de pontos de penalidade de um motorista.
  - Duas colunas devem ser retornadas: "motorista" e "pontos".
  - Os motoristas que não tiverem 10 pontos ou mais não devem ser retornados na consulta.

  - No final de tudo vocês deverão fazer uma integração do back-end e front-end do projeto.

## Requisitos Não-Funcionais

- **(Importante)** Uma foto do diagrama de entidade e relacionamento `DE-R` e do diagrama lógico de dados `DLD` deve ser incluída na pasta `docs` do repositório.
- O projeto deve ser implementado utilizando a arquitetura apresentada no curso.
- O banco de dados deve ser implementado utilizando o MySQL.
- O uso de bibliotecas externas, além das já incluídas neste repositório, não é permitido.
- Os arquivos fora das pastas `prisma`, `repositories`, `routes` e `schemas` não devem ser modificados, com exceção do arquivo `routing.ts` da pasta `src`.

## Entrega

- A entrega do desafio deve ser feita por meio de uma Release no GitHub.
  - Crie a release no seu repositório pessoal e envie o arquivo ZIP pelo Google Classroom.
  - Não inclua a pasta `node_modules` no arquivo ZIP, mas envie todos os outros arquivos, incluindo o `package.json`.
- O trainee não deve excluir o repositório nem a release após a entrega, pois a utilização do GitHub será avaliada.

 - A data de entrega será para o dia 14/07/2024 as 23:59.