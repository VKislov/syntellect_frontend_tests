import { makeObservable, observable, computed, action, flow, extendObservable, flowResult, runInAction, makeAutoObservable } from "mobx"
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
            updateText: action.bound,
            findAutocomplationVariants: action.bound,
            updateAutocomplationVariants: action.bound
        })
    }

    findAutocomplationVariants (filterString: string): void {
        this.reqState = 'pending'
            getCountryByName(filterString).then(res => {
                this.updateAutocomplationVariants(res)
                this.reqState = 'done'
            }).catch(() => {
                this.reqState = 'error'
            })

    }

    updateAutocomplationVariants(variants: any) {        
        this.autocomplationVariants = variants
    }
    
    updateText(text: string) {        
        this.findAutocomplationVariants(text)
        this.text = text
    }
}