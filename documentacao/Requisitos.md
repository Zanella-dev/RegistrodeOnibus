# Documento de Requisitos - Ponto de Ônibus

## 1. Objetivo do Sistema
Centralizar e organizar o controle de passageiros que utilizarão o ônibus da faculdade no trajeto de retorno. O sistema fornece uma interface visual rápida para os monitores ou motoristas saberem exatamente quem deve embarcar, eliminando desorganização e atrasos.

## 2. Requisitos Funcionais Implementados
* RF01: O sistema deve permitir o cadastro de novos estudantes na lista diária.
* RF02: O sistema deve bloquear cadastros com nomes em branco ou que ultrapassem o limite de 60 alunos.
* RF03: O sistema deve permitir alterar o status do estudante ao clicar em seu card (Cinza: Pendente, Verde: Volta de Ônibus, Vermelho: Não Volta).
* RF04: O sistema deve calcular e exibir automaticamente o total de alunos registrados e a quantidade em cada status.
* RF05: O sistema deve permitir a exclusão de um estudante da lista mediante a inserção da senha de administrador ("281022").
* RF06: O sistema deve possuir uma rotina interna que reseta o status de todos os alunos para "Pendente" à meia-noite.

## 3. Requisitos Não Funcionais Considerados
* RNF01: A interface deve ser responsiva, acessível e construída no formato de um Dashboard administrativo.
* RNF02: O sistema deve ser desenvolvido utilizando a biblioteca React com a tipagem estática do TypeScript.
* RNF03: As interações de mudança de status devem refletir imediatamente na tela (atualização em tempo real sem recarregar a página).

## 4. Participação dos Integrantes
| Integrante | Atividades desenvolvidas |
| :--- | :--- |
| Kauã Zanela | Configuração do ambiente (Vite/React), estruturação dos componentes (StudentCard) e CSS do Dashboard. |
| Rafael Pereira da Silva | Lógica de estados (useState), desenvolvimento do fluxo de cadastro, validações e rotina de exclusão com senha. |