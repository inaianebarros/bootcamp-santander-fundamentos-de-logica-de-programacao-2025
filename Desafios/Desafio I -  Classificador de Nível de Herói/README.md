# Desafio I - Classificador de Nível de Herói ✨🛡️

## 🧙 Sobre o Projeto

Este repositório integra um dos desafios da **DIO (Digital Innovation One)**, desenvolvido para aplicar na prática os conceitos essenciais de lógica de programação.

Embora seja uma atividade introdutória, este projeto simboliza muito mais do que um simples exercício: ele marca o início da jornada na construção de raciocínio lógico, clareza na escrita de código e pensamento estruturado — habilidades fundamentais para qualquer pessoa que deseja evoluir como desenvolvedora.

Aqui você encontrará um **classificador automático de hérois** responsável por determinar o nível de um personagem com base em sua quantidade de experiência (XP).Uma solução simples, mas poderosa para treinar tomada de decisão, uso de condicionais e organização de código.

---

## 🎯 Objetivo

Criar um programa que armazene:

- o **nome** do herói
- sua **quantidade de experiência (XP)**

Em seguida, o programa deve utilizar uma **estrutura de decisão** para exibir corretamente o nível correspondente.

---

## 📊 Tabela de Classificação

O nível do herói é determinado com base nesta tabela oficial:

| Faixa de XP    | Nível             |
| -------------- | ----------------- |
| Menos de 1.000 | ⚙️ **Ferro**      |
| 1.001 – 2.000  | 🛡️ **Bronze**     |
| 2.001 – 5.000  | ⚔️ **Prata**      |
| 5.001 – 7.000  | 🏆 **Ouro**       |
| 7.001 – 8.000  | 💠 **Platina**    |
| 8.001 – 9.000  | 🐉 **Ascendente** |
| 9.001 – 10.000 | 🌋 **Imortal**    |
| 10.001+        | 👑 **Radiante**   |

---

## 🧩 Exemplo de Lógica (pseudocódigo)

```
Entrada
nomeHeroi ← "Hércules"
xp ← 3500
nível ← " "

Estrutura de decisão
SE xp < 1000:
nível ← "Ferro"
SENÃO SE xp ≤ 2000:
nível ← "Bronze"
SENÃO SE xp ≤ 5000:
nível ← "Prata"
SENÃO SE xp ≤ 7000:
nível ← "Ouro"
SENÃO SE xp ≤ 8000:
nível ← "Platina"
SENÃO SE xp ≤ 9000:
nível ← "Ascendente"
SENÃO SE xp ≤ 10000:
nível ← "Imortal"
SENÃO:
nível ← "Radiante"
Saída
Exibir: "O herói de nome Hércules está no nível de Prata"
```

## 🚀 Resultado Esperado

O programa deve apresentar uma mensagem no seguinte formato:

> **"O herói de nome`<nome>` está no nível de `<nível>`"**

---
