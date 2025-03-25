# DashBoard Frontend

Este é um projeto de dashboard desenvolvido com **React**, **TypeScript** e **Vite**. Ele utiliza diversas bibliotecas modernas para criar uma interface de usuário responsiva e funcional, com suporte a gráficos, alternância de tema (modo claro/escuro) e componentes reutilizáveis.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida e moderna.
- **ApexCharts**: Biblioteca para criação de gráficos interativos.
- **Axios**: Cliente HTTP para comunicação com APIs.
- **Lucide-React**: Conjunto de ícones SVG para React.
- **SCSS**: Pré-processador CSS para estilização.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
├── public/
│   └── dashboard-icon.png
├── src/
│   ├── api/            # Serviços para comunicação com a API
│   ├── components/     # Componentes reutilizáveis
│   ├── hooks/          # Hooks personalizados
│   ├── styles/         # Estilos globais e específicos
│   ├── App.tsx         # Componente principal da aplicação
│   ├── main.tsx        # Ponto de entrada da aplicação
│   └── index.css       # Estilos globais
├── index.html          # Arquivo HTML principal
├── types.ts            # Tipos TypeScript utilizados no projeto
├── vite.config.ts      # Configuração do Vite
└── package.json        # Dependências e scripts do projeto
```

### Estrutura do `index.html`

O arquivo `index.html` é o ponto de entrada da aplicação e está configurado da seguinte forma:

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/dashboard-icon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DashBoard</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
```

## Funcionalidades

- **Gráficos Interativos**: Utilizando a biblioteca ApexCharts para exibir dados de vendas e pedidos.
- **Modo Escuro/Claro**: Alternância de tema com persistência no `localStorage`.
- **Responsividade**: Interface adaptada para dispositivos móveis e desktops.
- **Componentização**: Componentes reutilizáveis para facilitar a manutenção e expansão do projeto.

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- `dev`: Inicia o servidor de desenvolvimento.
- `build`: Realiza o build da aplicação para produção.
- `lint`: Executa o ESLint para verificar problemas no código.
- `preview`: Inicia um servidor para pré-visualizar o build de produção.

Para executar qualquer um desses scripts, utilize o comando:

```bash
npm run <script>
```

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd dashboard-front
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse o projeto no navegador em [http://localhost:5173](http://localhost:5173).

## Configuração de Ambiente

Certifique-se de que a API está rodando no endereço [http://localhost:3000](http://localhost:3000), conforme configurado no arquivo `apiClient.ts`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).