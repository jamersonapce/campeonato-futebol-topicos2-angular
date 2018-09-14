export class Jogador {
    id: number;
    nome:string;
    nascimento:Date;
    genero:string;
    altura:number
    time: Time[];
}

export class Time {
    id:number;
    nome:string;
}