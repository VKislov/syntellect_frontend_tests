import "./App.css"
import { ControlViewModel as InitControlViewModel} from "./components/controlWithButtons/ControlViewModel"
import { ControlView } from "./components/controlWithButtons/ControlView"
import { Wrapper } from "./components/common/Wrapper"
import { ControlWithAutocompleteView } from "./components/controlWithAutocomplete/ControlWithAutocompleteView"
import { ControlWithAutocompleteViewModel as InitControlWithAutocompleteViewModel} from "./components/controlWithAutocomplete/ControlWithAutocompleteViewModel"
import { observer } from "mobx-react"
import { toJS } from "mobx"

function App() {
    const ControlWithButtonsViewModel = new InitControlViewModel() 
    const ControlWithAutocompleteViewModel = new InitControlWithAutocompleteViewModel()
    console.log(ControlWithAutocompleteViewModel.autocomplationVariants);
    
    return (
        <>
            <div>
                <label>Control with buttons</label>&nbsp;
                <Wrapper 
                    rightWrapper={[
                        <button children="clearInput" onClick={() => ControlWithButtonsViewModel.updateText('')}/>,
                        <button children="Hello world!" onClick={() => ControlWithButtonsViewModel.updateText('Hello world!')}/>,
                    ]}
                >
                    <ControlView 
                        viewModel={ControlWithButtonsViewModel} 
                    />
                </Wrapper>
            </div>&nbsp;
            <div>
                <label>Control with autocomplation</label>&nbsp;
                <Wrapper 
                        leftWrapper={[
                            <button children="alert if number" onClick={() => {                                
                                return !isNaN(Number(ControlWithAutocompleteViewModel.text)) && alert(ControlWithAutocompleteViewModel.text)}}/>,
                        ]}
                        rightWrapper={[
                            <button children="alert value" onClick={() => alert(ControlWithAutocompleteViewModel.text)}/>,
                        ]}
                >&nbsp;
                    <ControlWithAutocompleteView viewModel={ControlWithAutocompleteViewModel} contries={toJS(ControlWithAutocompleteViewModel.autocomplationVariants)}/>
                </Wrapper>
            </div>
        </>
    )
}

export default observer(App)
