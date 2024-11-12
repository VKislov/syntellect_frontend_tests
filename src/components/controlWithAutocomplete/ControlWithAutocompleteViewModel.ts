import { makeObservable, observable, action } from "mobx"
import { getCountryByName, CountryInfo } from "../../api/apiService"
import { ControlViewModel } from "../controlWithButtons/ControlViewModel"


export class ControlWithAutocompleteViewModel extends ControlViewModel {
    reqState = 'done'
    autocomplationVariants: CountryInfo[] = []

    constructor () {
        super()
        makeObservable(this, {
            autocomplationVariants: observable,
            reqState: observable,
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