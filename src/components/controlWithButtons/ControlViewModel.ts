import { makeObservable, observable, computed, action, flow } from "mobx"

export class ControlViewModel {
    text = 'initial text'
    constructor () {
        makeObservable(this, {
            text: observable,
            updateText: action,
        })
    }

    updateText (text: string):void {
        this.text = text
    }
}