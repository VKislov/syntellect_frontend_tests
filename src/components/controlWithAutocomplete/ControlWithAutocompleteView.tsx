import { observer } from 'mobx-react'
import { FC } from 'react'
import { ControlWithAutocompleteViewModel } from './ControlWithAutocompleteViewModel'
import { CountryInfo } from "../../api/apiService"
import { action, toJS } from 'mobx'

interface IControlWithAutocompleteView {
    viewModel: ControlWithAutocompleteViewModel
    contries?: CountryInfo[]
}
export const ControlWithAutocompleteView: FC<IControlWithAutocompleteView> = observer(({ viewModel, contries }) => {
    
    console.log('inside ControlWithAutocompleteView', contries);

    return <>
        <div>
            <input list='contries' name='contry' id='contries' value={viewModel.text} onChange={action((event) => viewModel.updateText(event.target.value))}/>
            <datalist id='contries'>
                {contries?.map(({ name, flag, fullName }) => {
                    console.log('inside view', contries);
                    
                    return <option id={fullName} value={name}/>})}
            </datalist>
        </div>
    </>
})

