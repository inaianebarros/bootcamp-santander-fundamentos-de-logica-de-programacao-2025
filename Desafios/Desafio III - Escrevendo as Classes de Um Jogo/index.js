class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}!`);
  }
}

// Exemplos de uso:
const heroi1 = new Heroi("Stark", 29, "ninja");
heroi1.atacar(); // o ninja atacou usando shuriken

const heroi2 = new Heroi("Frieren", 120, "mago");
heroi2.atacar(); // o mago atacou usando magia

const heroi3 = new Heroi("Himmel", 35, "guerreiro");
heroi3.atacar(); // o guerreiro atacou usando espada
