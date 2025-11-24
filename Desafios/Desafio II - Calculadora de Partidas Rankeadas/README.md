# Desafio II – Calculadora de Partidas Rankeadas ⚔️🏆

## 🧙 Sobre o Projeto

Este repositório integra um dos desafios da DIO (Digital Innovation One), desenvolvido para treinar conceitos essenciais de lógica de programação:

- Variáveis
- Operadores
- Estruturas de decisão
- Laços de repetição
- Funções

Apesar de simples, este projeto é um passo importante na construção de raciocínio lógico e organização de código.  
Nele você criará uma função que calcula o **saldo de vitórias** de um jogador e determina seu **nível ranqueado** de acordo com a quantidade de vitórias.

---

## 🎯 Objetivo

Criar um programa que:

1. Receba a quantidade de **vitórias** e **derrotas**.
2. Calcule o **saldo de partidas ranqueadas** (vitórias − derrotas).
3. Classifique o jogador em um nível baseado na tabela oficial.
4. Exiba uma mensagem final com saldo e nível.

---

## 📊 Tabela de Classificação

| Vitórias    | Nível           |
| ----------- | --------------- |
| Menos de 10 | ⚙️ **Ferro**    |
| 11 – 20     | 🥉 **Bronze**   |
| 21 – 50     | ⚔️ **Prata**    |
| 51 – 80     | 🏆 **Ouro**     |
| 81 – 90     | 💎 **Diamante** |
| 91 – 100    | 🔥 **Lendário** |
| 101+        | 🐉 **Imortal**  |

---

## 🧩 Exemplo de Lógica (pseudocódigo)

### Entrada

```json
vitorias ← 75
derrotas ← 20
saldo ← vitorias - derrotas
nivel ← " "
```

### Função de Classificação (encapsulada)

```json
função classificarJogador(vitorias):

    SE vitorias < 10:
        retornar "Ferro"
    SENÃO SE vitorias ≤ 20:
        retornar "Bronze"
    SENÃO SE vitorias ≤ 50:
        retornar "Prata"
    SENÃO SE vitorias ≤ 80:
        retornar "Ouro"
    SENÃO SE vitorias ≤ 90:
        retornar "Diamante"
    SENÃO SE vitorias ≤ 100:
        retornar "Lendário"
    SENÃO:
        retornar "Imortal"
```

### Função Principal

```json
função calcularRank(vitorias, derrotas):

    saldo ← vitorias - derrotas
    nivel ← classificarJogador(vitorias)

    Exibir "O Herói tem de saldo de {saldo} está no nível de {nivel}"
```

## 🚀 Resultado Esperado

O programa deve exibir a mensagem:

> **"O Herói tem de saldo de`<saldoVitorias>` está no nível de `<nível>`"**

Exemplo:

> **"O Herói tem de saldo de 55 está no nível de Ouro"**
