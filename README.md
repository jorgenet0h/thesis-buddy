# 🎓 Thesis Buddy

O **Thesis Buddy** é um organizador de fichamentos e citações acadêmicas desenvolvido para resolver o problema de perda de contexto e desorganização durante a pesquisa e escrita de trabalhos longos (como TCCs, dissertações e artigos).

## 📋 Mini PRD (Product Requirements Document)

**1. O Problema**
Estudantes frequentemente anotam citações importantes de livros e PDFs, mas perdem a referência (página, autor) ou esquecem por que aquela citação era relevante. Ferramentas tradicionais são pesadas para o registro rápido de ideias em tempo real.

**2. O Usuário**
Estudantes universitários, mestrandos e pesquisadores acadêmicos que lidam com alto volume de leitura analítica.

**3. A Solução (Funcionalidades Essenciais)**
* **Cadastro:** Formulário ágil para salvar citação, fonte, página e insights.
* **Busca:** Filtragem instantânea de fichamentos por palavras-chave.
* **Exclusão:** Remoção de citações descartadas da pesquisa.

**4. Decisões Técnicas**
* **Front-end:** React + TypeScript + Vite.
* **Estilização:** Tailwind CSS (Glassmorphism design).
* **Ícones:** Lucide React.
* **API:** json-server simulando um banco de dados RESTful.
* **Hooks Avançados:** Uso de `useMemo` para busca instantânea sem requisições excessivas e Custom Hook (`useCitations`) para isolamento de regras de negócio.

## 🚀 Como rodar localmente

1. Clone este repositório.
2. Instale as dependências:
   ```bash
   npm install