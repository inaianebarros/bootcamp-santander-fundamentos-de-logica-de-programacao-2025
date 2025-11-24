# Desafio III – Escrevendo as Classes de Um Jogo ⚔️🧙‍♂️🥷

## 🧙 Sobre o Projeto

Este repositório integra mais um desafio da DIO (Digital Innovation One), desenvolvido para aprofundar os estudos em lógica de programação e introduzir conceitos essenciais de **Programação Orientada a Objetos (POO)**.

Neste exercício você irá praticar:

- Variáveis
- Operadores
- Estruturas de decisão
- Laços de repetição
- Funções
- **Classes e Objetos**

Apesar de simples, este projeto representa um grande passo rumo ao entendimento de abstração, encapsulamento e modelagem de objetos — pilares fundamentais para qualquer pessoa desenvolvedora.

Aqui você criará uma classe que representa um herói de aventura e implementará comportamentos específicos através de um método personalizado.

---

## 🎯 Objetivo

Criar um programa que:

1. Declare uma **classe genérica** representando um herói, contendo as propriedades:

   - **nome**
   - **idade**
   - **tipo** (ex: guerreiro, mago, monge, ninja)

2. Implemente um **método atacar()**, responsável por:
   - Exibir a mensagem:  
     **"O `tipo` atacou usando `ataque`!"**
   - Utilizar um ataque diferente conforme o tipo do herói.

---

## 📊 Tabela de Ataques por Tipo

| Tipo      | Ataque                     |
| --------- | -------------------------- |
| mago      | ✨ usou **magia**          |
| guerreiro | 🗡️ usou **espada**         |
| monge     | 🥋 usou **artes marciais** |
| ninja     | 🥷 usou **shuriken**       |

---

## 🧩 Exemplo de Lógica (pseudocódigo)

### Estrutura da Classe

```txt
classe Heroi:
    propriedade nome
    propriedade idade
    propriedade tipo

    método atacar():
        SE tipo == "mago":
            ataque ← "magia"
        SENÃO SE tipo == "guerreiro":
            ataque ← "espada"
        SENÃO SE tipo == "monge":
            ataque ← "artes marciais"
        SENÃO SE tipo == "ninja":
            ataque ← "shuriken"

        Exibir "O {tipo} atacou usando {ataque}!"
```

### Exemplo de Uso

```txt
heroi ← novo Heroi("Aruk", 29, "ninja")

heroi.atacar()
```

---

## 🚀 Resultado Esperado

**Ao executar o método, o programa deve exibir:**

"O `ninja` atacou usando `shuriken`!"

**Outros exemplos:**

"O **mago** atacou usando **magia**!"

"O **guerreiro** atacou usando **espada**!"

"O **monge** atacou usando artes **marciais**!"
