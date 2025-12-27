# 🎬 Movie Recommendation 
Um projeto focado em resolver um problema comum: escolher um filme para assistir.
A aplicação entrega recomendações simples e rápidas, permite busca eficiente e usa dados atualizados da API pública do TMDB.

## 🚀 MVP Atual 
O MVP terá as seguintes funcionalidades essenciais:

- Recomendação de Filmes: Tela inicial simples exibindo filmes baseados em popularidade (o que está em alta no momento).
  
- Barra de Busca: Pesquisa eficiente por títulos de filmes.
  
- Filtro Essencial: Filtragem de filmes por Gênero.
  
- Integração com TMDB: Uso da API pública do The Movie Database (TMDB) para dados de filmes.
  
- Detalhes Básicos: Exibição do título, sinopse, e nota/avaliação do filme.

## 🛠️ Tecnologias Utilizadas
- Frontend: NextJS
  
- Linguagem: JavaScript/TypeScript
  
- Estilização: TailwindCSS
  
- Testes: Vitest

## 🏗️ Estrutura do projeto

### Estrutura baseada em features
O projeto adota uma arquitetura orientada a features, estruturando cada funcionalidade de maneira autônoma e bem definida. Esse modelo proporciona:

- Maior modularidade e isolamento de código
- Facilidade para escalar e realizar a manutenção
- Organização clara
- Melhor reutilização de componentes e lógica dentro de cada feature

### 📁 Estrutura de diretórios

```
├───app/                       # App router
|
├───features/                  # Features da aplicação
│   └───[Feature name]/
│       ├───components/        # Componentes da feature
│       ├───hooks/             # Hooks personalizados da feature           
│       ├───services/          # Serviços/Regras de negócio da feature
│       └───__tests__/         # Testes da feature
|
└───shared/
    ├───components/     
    └───utils/
    ```

## 📌 Progresso do Projeto
✔️ Configuração inicial do ambiente de frontend (Estrutura de Pastas e Componentes Base).

✔️ Configuração de Vitest para testes unitários.

✔️ Configuração e integração do TailwindCSS para estilização rápida e responsiva.

✔️ Criação do componente base Typography e teste unitário.

## ✨ Roadmap (Próximas Etapas - V2)
- Após a conclusão do MVP, o projeto será expandido com as seguintes funcionalidades:

- Autenticação e Login Social (OAuth): Sistema de login e cadastro.

- Listas Pessoais: Favoritos e Watchlist.

- Filtros Avançados: Adição de filtros por ano, duração e notas mínimas.

- Recomendação Personalizada: Algoritmos de recomendação mais complexos.
