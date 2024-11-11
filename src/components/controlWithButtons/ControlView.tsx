import { observer } from 'mobx-react'
import { FC, useEffect } from 'react'
import { ControlViewModel } from './ControlViewModel'

interface IControlView {
    viewModel: ControlViewModel
}
export const ControlView: FC<IControlView> = observer(({ viewModel }) => {
    return <input value={viewModel.text} onChange={(event) => viewModel.updateText(event.target.value)}/>
})