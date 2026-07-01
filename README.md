# Sistema de Registro de Ponto de Ônibus

## 👥 Integrantes do Grupo
* Kauã Zanela
* Rafael Pereira da Silva

## 📝 Descrição Resumida do Sistema
O sistema é uma aplicação web interativa desenvolvida para gerenciar e contabilizar a presença de estudantes universitários no ponto de ônibus da faculdade. Através de um painel de controle intuitivo (Dashboard), o operador pode registrar alunos, visualizar estatísticas em tempo real e alterar o status de retorno de cada estudante utilizando um sistema visual de cores, evitando atrasos e desorganização no transporte.

## 🛠️ Tecnologias Utilizadas
* Front-end: React.js com TypeScript
* Build Tool: Vite
* Estilização: CSS3 (Grid, Flexbox e Variáveis)
* Ícones: Lucide React
* Controle de Versão: Git e GitHub

## ⚙️ Instruções para Execução
1. Certifique-se de ter o Node.js instalado na máquina.
2. Extraia a pasta do projeto e abra o terminal dentro da pasta `codigo-fonte` (ou `frontend`).
3. Execute o comando `npm install` para instalar as dependências.
4. Execute o comando `npm run dev` para iniciar o servidor local.
5. Acesse o link gerado no terminal (ex: http://localhost:5173/).

## ✨ Funcionalidades Implementadas
* Cadastro de estudantes com validação de campo vazio e limite de 60 vagas.
* Grade interativa com alternância de status por clique (Pendente -> Volta -> Não Volta).
* Cartões de estatísticas calculados em tempo real.
* Exclusão de registros protegida por senha de administrador ("281022").
* Função de reset automático simulada para zerar o status de todos à meia-noite.

## 🔗 Links Importantes
* Repositório Git:https://github.com/Zanella-dev/RegistrodeOnibus.git