# Projeto Blog em Angular

Um blog simples feito com **Angular**, focado em **componentização**, **roteamento**, **responsividade** e **renderização dinâmica** de conteúdo.

---

## ✨ Principais recursos

- **Componentes reutilizáveis**: `BigCard` e `SmallCard` para destaques e listagens. Layout e estilos ajustados para leitura agradável.  
- **Menu com título e barra de navegação**: título central “TULIO'S BLOG” e **links para LinkedIn, GitHub e YouTube** na barra superior.  
- **Responsividade**: CSS “mobile” dedicado para `Home` e `MenuTitle`, com media queries específicas.  
- **Roteamento**: página de **Conteúdo** e links dinâmicos a partir dos cards (navegam para a rota com `id`).  
- **Dados tipados e dinâmicos**: conteúdo dos cards centralizado em `dataFake.ts` com interface `CardData`, permitindo renderizar a Home via `*ngFor` e preencher a página de conteúdo por **param de rota**.  
- **Ajustes de ambiente**: correções de pareamento de versões e tipagens para facilitar build e DX.  

---

## 🧱 Arquitetura (pastas principais)

```
angular-blog/
└─ src/
   └─ app/
      ├─ components/
      │  ├─ big-card/
      │  ├─ small-card/
      │  ├─ menu-bar/
      │  └─ menu-title/
      ├─ pages/
      │  ├─ home/
      │  └─ content/
      └─ data/
         ├─ dataFake.ts
         └─ dataModel.ts
```

- `components/`: componentes visuais reutilizáveis (cards, menu).
- `pages/`: páginas de alto nível (`home`, `content`).
- `data/`: fonte de dados de exemplo (`dataFake`) e tipagem (`CardData`).

---

## 🚀 Como rodar

> Os arquivos do Angular ficam na pasta `angular-blog/`. Se estiver na raiz do repositório, entre nela antes dos comandos abaixo.

```bash
cd angular-blog
npm install
npm start           # ou: ng serve
# Acesse http://localhost:4200/
```

> Se você estiver usando um `launch.json`, configure para abrir `http://localhost:4200/` com `ng serve`.

---

## 🔗 Rotas

- `/` → Home (lista artigos via `BigCard` + `SmallCard`)
- `/content/:id` → Página de conteúdo (carrega dados pelo `id` da rota)

---

## 🧩 Componentes & dados

- **BigCard / SmallCard**  
  Recebem propriedades via `@Input` (imagem, título, etc.) e podem usar `[routerLink]` para navegar até `/content/:id`.

- **dataFake.ts (mock)**  
  Estrutura base (resumo):

  ```ts
  interface CardData {
    id: string;
    image: string;
    title: string;
    description: string;
  }
  // dataFake: CardData[]
  ```

  Para adicionar um novo post, inclua um objeto em `dataFake` com `id` único e as demais propriedades.

---

## 🖼️ Responsividade

- `Home` e `MenuTitle` possuem arquivos `*.mobile.component.css` com media queries para telas menores, ajustando grid/colunas e tamanhos de fonte.  

---

## ⚙️ Scripts úteis

- `npm start` → `ng serve` (desenvolvimento)
- `ng build` → build de produção em `dist/`

> O projeto foi ajustado para melhorar a DX em tooling e builds.  

---

## 🙌 Créditos

Desenvolvido por [**Tulio Perdigão**](https://www.linkedin.com/in/tulio-perdigao/) — com Angular e muito carinho pelo front-end.
