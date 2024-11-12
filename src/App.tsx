import "./App.css"
import { ControlViewModel as InitControlViewModel} from "./components/controlWithButtons/ControlViewModel"
import { ControlView } from "./components/controlWithButtons/ControlView"
import { Wrapper } from "./components/common/Wrapper"
import { ControlWithAutocompleteView } from "./components/controlWithAutocomplete/ControlWithAutocompleteView"
import { ControlWithAutocompleteViewModel as InitControlWithAutocompleteViewModel} from "./components/controlWithAutocomplete/ControlWithAutocompleteViewModel"


function App() {
    const ControlWithTextMutationButtonsViewModel = new InitControlViewModel() 
    const ControlWithAlertButtonsViewModel = new InitControlViewModel()
    
    const ControlWithAutocomplete3TipsViewModel = new InitControlWithAutocompleteViewModel()
    const ControlWithAutocomplete10TipsViewModel = new InitControlWithAutocompleteViewModel()

    return (
        <>
            <div>
                <label>Control with text mutation buttons</label>&nbsp;
                <Wrapper 
                    rightWrapper={[
                        <button children="clearInput" onClick={() => ControlWithTextMutationButtonsViewModel.updateText('')}/>,
                        <button children="Hello world!" onClick={() => ControlWithTextMutationButtonsViewModel.updateText('Hello world!')}/>,
                    ]}
                >
                    <ControlView 
                        viewModel={ControlWithTextMutationButtonsViewModel} 
                    />
                </Wrapper>
            </div>&nbsp;
            <div>
                <label>Control with alert buttons</label>&nbsp;
                <Wrapper 
                        leftWrapper={[
                            <button children="alert if number" onClick={() => ControlWithAlertButtonsViewModel.alertIfNumber()}/>,
                        ]}
                        rightWrapper={[
                            <button children="alert value" onClick={() => ControlWithAlertButtonsViewModel.alert()}/>,
                        ]}
                >
                    <ControlView 
                        viewModel={ControlWithAlertButtonsViewModel} 
                    />
                </Wrapper>
            </div>&nbsp;
            <div>
                <label>Control with autocomplation and 3 max tips</label>&nbsp;
                <div>
                    <ControlWithAutocompleteView viewModel={ControlWithAutocomplete3TipsViewModel}/>
                </div>
            </div>&nbsp;
            <div>
                <label>Control with autocomplation and 10 max tips</label>&nbsp;
                <div>
                    <ControlWithAutocompleteView viewModel={ControlWithAutocomplete10TipsViewModel} maxTips={10}/>
                </div>
            </div>
        </>
    )
}

export default App
