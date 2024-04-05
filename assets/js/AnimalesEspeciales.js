import { Animal } from './Animals.js';

export class Lobo extends Animal {
    Aullar() {
        console.log("Auuuuuuuuu!");
    }
}

export class Serpiente extends Animal {
    Sisear() {
        console.log("Sssssssss");
    }
}

export class Oso extends Animal {
    Gruñir() {
        console.log("Grrrrrrrr");
    }
}

export class Aguila extends Animal {
    Chillar() {
        console.log("Aaaahhhhhh");
    }
}

export class Leon extends Animal {
    Rugir() {
        console.log("Roarrrrrr");
    }
}