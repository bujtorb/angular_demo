import { ThisReceiver } from "@angular/compiler";
import { TypeCheckScopeRegistry } from "@angular/compiler-cli/src/ngtsc/scope";

export class Button {
    id: number;
    letter: string;
    clicked: boolean;

    constructor(id: number, letter: string, clicked: boolean) {
        this.id = id;
        this.letter = letter;
        this.clicked = clicked;
    }
}