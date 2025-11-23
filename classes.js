class Heroi {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "Mago":
                ataque = "Magia";
                break;
            case "Guerreiro":
                ataque = "Espada";
                break;
            case "Monge":
                ataque = "Artes Marciais";
                break;
            case "Ninja":
                ataque = "Shuriken";
                break;
            default:
                ataque = "Ataque Desconhecido";
        }

        console.log(`${this.nome} (${this.tipo}) atacou usando ${ataque}!`);
    }
}

const herois = [
    new Heroi("Ahri", "Mago"),
    new Heroi("Garen", "Guerreiro"),
    new Heroi("Lee Sin", "Monge"),
    new Heroi("Zed", "Ninja")
];

herois.forEach(heroi => heroi.atacar());