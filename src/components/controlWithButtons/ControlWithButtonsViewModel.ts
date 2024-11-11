import { makeObservable, observable, computed, action, flow } from "mobx"

export class ControlWithButtonsViewModel {
    text = 'initial text'
    constructor () {
        makeObservable(this, {
            text: observable,
            updateText: action,
        })
    }

    updateText (text: string) {
        console.log(text);
        
        this.text = text
    }
}