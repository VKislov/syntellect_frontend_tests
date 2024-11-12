import { makeObservable, observable, computed, action, flow } from "mobx"

export class ControlViewModel {
    text = 'initial text'
    constructor () {
        makeObservable(this, {
            text: observable,
            updateText: action,
            alert: action,
            alertIfNumber: action,
        })
    }

    updateText (text: string):void {
        this.text = text
    }

    alert ():void {
        return alert(this.text)
    }

    alertIfNumber (): void {
        !isNaN(Number(this.text)) && this.alert()
    }
}