import {Character} from "./character.class";

export class Battle {

    players: Character[];

    constructor(players: Character[]) {
        this.players = players;
    }

    fight(): Character {
        while (this.countAlivePlayers() > 1) {
            let firstPlayerIndex = this.getRandomAlivePlayerIndex();
            let secondPlayerIndex = this.getRandomAlivePlayerIndex();
            while(firstPlayerIndex === secondPlayerIndex) {
                secondPlayerIndex = this.getRandomAlivePlayerIndex();
            }
            this.players[firstPlayerIndex].attack(this.players[secondPlayerIndex]);
        }
        return this.players[this.getRandomAlivePlayerIndex()];
    }

    private getRandomAlivePlayerIndex(): number {
        const index = Math.floor(Math.random() * this.players.length);
        if(!this.players[index].isDead()) {
            return index;
        }
        return this.getRandomAlivePlayerIndex();
    }

    private countAlivePlayers(): number {
        let count = 0;
        for(let ch of this.players) {
            if(!ch.isDead()) {
                count += 1;
            }
        }
        return count;
    }

}
