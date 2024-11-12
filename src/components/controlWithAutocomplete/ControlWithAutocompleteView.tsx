import { observer } from 'mobx-react'
import { FC } from 'react'
import { ControlWithAutocompleteViewModel } from './ControlWithAutocompleteViewModel'
import { action, toJS } from 'mobx'
import { CountryInfo } from '../../api/apiService'

interface IControlWithAutocompleteView {
    viewModel: ControlWithAutocompleteViewModel
    maxTips?: number
}
export const ControlWithAutocompleteView: FC<IControlWithAutocompleteView> = observer(({ viewModel, maxTips }) => {
    const contriesRaw = toJS(viewModel.autocomplationVariants)
    const contries: CountryInfo[] = contriesRaw.length > (maxTips || 3) ? contriesRaw.slice(0, (maxTips || 3)) : contriesRaw
    
    return <>
            <input
                list={'contries' + JSON.stringify(contries[0])}
                name='contry' id='contry'
                value={viewModel.text}
                onChange={(event) => viewModel.updateText(event.target.value)}
            />
            <datalist id={'contries' + JSON.stringify(contries[0])}>
                {contries?.map(({ name, fullName }) => <option id={fullName} value={name} />)}
            </datalist>
    </>
})

