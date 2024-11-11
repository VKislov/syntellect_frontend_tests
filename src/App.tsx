import React from "react";
import "./App.css";
import { ControlWithButtonsViewModel as InitControlWithButtonsViewModel} from "./components/controlWithButtons/ControlWithButtonsViewModel";
import { ControlWithButtonsView } from "./components/controlWithButtons/ControlWithButtonsView";

function App() {
    const ControlWithButtonsViewModel = new InitControlWithButtonsViewModel() 

    return (
        <div>
            <ControlWithButtonsView 
                viewModel={ControlWithButtonsViewModel} 
                rightButtons={[
                    <button children="clearInput" onClick={() => ControlWithButtonsViewModel.updateText('')}/>,
                    <button children="Hello world!" onClick={() => ControlWithButtonsViewModel.updateText('Hello world!')}/>,
                ]}
            />
        </div>
    )
}

export default App;
