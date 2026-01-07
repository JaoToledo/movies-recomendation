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

## Componentização

A componentização do projeto aborda boas práticas, como obter a propriedade className em todos os componentes para serem flexíveis à estilizações.

```
import { Filter } from "lucide-react";
import { FilterMoviesProps } from "./types";
import clsx from "clsx";


export function FilterMovies({className = ""}: FilterMoviesProps) {
  return (
    <div className={clsx("",className)}>
      
      <button className="flex cursor-pointer">
        <Filter color="white" />
      </button>
    </div>
  )
}
```

Também é utilizado o método composite pattern, que é a forma como os componentes são estruturados.

### Como criar um componente

```
├───components
│   ├───HeaderComposition
│   │   ├───filter
│   │   ├───input
│   │   ├───root
│   │   └───searchInput
|   ├───index.tsx   
```

O componente é formado de forma separada, e cada parte atua de maneira independente. 

```
import { Search } from "lucide-react"

/**
 * Botão de pesquisa do header.
 * @returns {JSX.Element} Botão de pesquisa clicável.
 */

export function SearchInputButton() {
  return (
      <button
      onSubmit={() => {}}
      className="
    bg-light-gray 
      h-8 cursor-pointer px-4 rounded-r-[20px] flex justify-center items-center  " 
      >  
        <Search color="white" size={28} className="" />
      </button>
  )
}
```

E por fim, exportado para dentro do index da pasta do componente.

```
"use client"

import { Root } from './root/root'
import { Input } from './input/input'
import { SearchInputButton } from './searchInput/searchInputButton'
import { FilterMovies } from './filter/filterMovies'

  export const Header = {
  Root,
  Input,
  FilterMovies,
  SearchInputButton
  }
```

E por fim, montando o componente por partes

```
import { Container } from "@/shared/components/Container/Container";
import { AlertBadge } from "./components/AlertBadge/AlertBadge";

export default function HomePage(){
  return(
    <div className="min-h-screen bg-linear-to-b from-linear-black to-linear-gray from-10%">

      <div className="flex justify-center py-16">
        <AlertBadge />
      </div>

      <div className="flex justify-center">
        <Container className="p-[75px]">
          <div></div>
        </Container>
      </div>

    </div>
  );
}
``` 


## ✨ Roadmap (Próximas Etapas - V2)
- Após a conclusão do MVP, o projeto será expandido com as seguintes funcionalidades:

- Autenticação e Login Social (OAuth): Sistema de login e cadastro.

- Listas Pessoais: Favoritos e Watchlist.

- Filtros Avançados: Adição de filtros por ano, duração e notas mínimas.

- Recomendação Personalizada: Algoritmos de recomendação mais complexos.