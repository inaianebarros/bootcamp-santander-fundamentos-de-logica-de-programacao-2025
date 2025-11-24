// Função responsável por classificar o jogador com base na quantidade de vitórias
function classificarJogador(vitorias) {
  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias <= 20) {
    return "Bronze";
  } else if (vitorias <= 50) {
    return "Prata";
  } else if (vitorias <= 80) {
    return "Ouro";
  } else if (vitorias <= 90) {
    return "Diamante";
  } else if (vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

// Função principal que calcula o saldo e exibe o nível
function calcularRank(vitorias, derrotas) {
  const saldo = vitorias - derrotas;
  const nivel = classificarJogador(vitorias);

  console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);
}

// Exemplo de uso:
calcularRank(75, 20); // Saída: O Herói tem de saldo de 55 está no nível de Ouro
