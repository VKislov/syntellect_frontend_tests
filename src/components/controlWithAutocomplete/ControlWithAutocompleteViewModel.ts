import { makeObservable, observable, computed, action, flow, extendObservable, flowResult, runInAction } from "mobx"
import { getCountryByName, CountryInfo } from "../../api/apiService"


export class ControlWithAutocompleteViewModel {
    reqState = 'done'
    autocomplationVariants: CountryInfo[] = [{ name: '1', fullName: '1', flag: '1'}]
    text = 'initial text'

    constructor () {
        makeObservable(this, {
            autocomplationVariants: observable,
            reqState: observable,
            text: observable,
            updateText: action,
        })
    }

    private findAutocomplationVariants (filterString: string): void {
        this.reqState = 'pending'
            getCountryByName(filterString).then(res => {
                action(() => {
                    this.autocomplationVariants.push(...res)
                    this.reqState = 'done'
                })
                
                console.log('inside VM', res);
            }).catch(() => {
                this.reqState = 'error'
            })
    }
    
    updateText(text: string) {
        console.log('inside updateText VM', text);
        
        this.findAutocomplationVariants(text)
        this.text = text
    }
}